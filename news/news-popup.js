(() => {
    const NEWS_ITEMS = Object.freeze([
        {
            id: '2026-10-30-ace-pokemon-halloween-streams-v2',
            layout: 'text',
            title: 'Atualizações do dia 30/10.',
            category: 'Atualizações',
            subtitle: 'Novos Pokémon Ace: Gogoat, Braviary e Mienshao',
            text: 'Mais Pokémon serão adicionados após a atualização.',
            event: {
                title: 'Halloween com a comunidade',
                text: 'No dia 31/10, vários criadores da comunidade entram no clima de Halloween em transmissões simultâneas. Escolha um canal e venha curtir essa programação especial!',
                streamers: [
                    { name: 'adivorcio', url: 'https://www.twitch.tv/adivorcio' },
                    { name: 'karlin_nara', url: 'https://www.twitch.tv/karlin_nara' },
                    { name: 'zsales33', url: 'https://www.twitch.tv/zsales33' },
                    { name: 'nazgulplayer', url: 'https://www.twitch.tv/nazgulplayer' },
                    { name: 'indypereira', url: 'https://www.twitch.tv/indypereira' },
                    { name: 'cafeina54', url: 'https://www.twitch.tv/cafeina54' },
                    { name: 'uguettolitz', url: 'https://www.twitch.tv/uguettolitz' },
                    { name: 'okamiulv', url: 'https://www.twitch.tv/okamiulv' }
                ]
            },
            link: 'https://discord.com/channels/1200210281410854982/1556721004670091335/1565796162487714003',
            linkLabel: 'Confira as novidades no Discord'
        }
    ]);
    const PERMANENT_DISMISSAL_KEY = 'pstory-news-dismissed-id';
    const SESSION_DISMISSAL_KEY = 'pstory-news-seen-id';

    function getNewsElements(){
        const dialog = document.getElementById('site-news-dialog');
        if(!dialog) return null;
        return {
            dialog,
            category: dialog.querySelector('[data-news-category]'),
            title: dialog.querySelector('[data-news-title]'),
            subtitle: dialog.querySelector('[data-news-subtitle]'),
            text: dialog.querySelector('[data-news-text]'),
            event: dialog.querySelector('[data-news-event]'),
            eventTitle: dialog.querySelector('[data-news-event-title]'),
            eventText: dialog.querySelector('[data-news-event-text]'),
            streamers: dialog.querySelector('[data-news-streamers]'),
            imageTrigger: dialog.querySelector('[data-news-image-trigger]'),
            image: dialog.querySelector('[data-news-image]'),
            imageCaption: dialog.querySelector('[data-news-image-caption]'),
            link: dialog.querySelector('[data-news-link]'),
            dismissChoice: dialog.querySelector('[data-news-dismiss-choice]'),
            zoomDialog: document.querySelector('[data-news-zoom]'),
            zoomImage: document.querySelector('[data-news-zoom-image]')
        };
    }

    function validateNewsItem(item){
        if(!item || typeof item.id !== 'string' || !item.id.trim()){
            throw new Error('A notícia precisa ter um ID não vazio.');
        }
        if(!['text', 'image', 'text-image'].includes(item.layout)){
            throw new Error(`Layout inválido para a notícia "${item.id}".`);
        }
        if(typeof item.title !== 'string' || !item.title.trim()){
            throw new Error(`A notícia "${item.id}" precisa de um título.`);
        }
        if(item.subtitle !== undefined && typeof item.subtitle !== 'string'){
            throw new Error(`O subtítulo da notícia "${item.id}" precisa ser um texto.`);
        }
        if(item.event !== undefined){
            if(!item.event || typeof item.event.title !== 'string' || !item.event.title.trim()){
                throw new Error(`O evento da notícia "${item.id}" precisa de um título.`);
            }
            if(typeof item.event.text !== 'string' || !item.event.text.trim()){
                throw new Error(`O evento da notícia "${item.id}" precisa de um texto.`);
            }
            if(!Array.isArray(item.event.streamers) || item.event.streamers.length === 0){
                throw new Error(`O evento da notícia "${item.id}" precisa ter canais de streamers.`);
            }
            item.event.streamers.forEach(streamer => {
                if(!streamer || typeof streamer.name !== 'string' || !streamer.name.trim()){
                    throw new Error(`O evento da notícia "${item.id}" tem um canal sem nome.`);
                }
                const streamerUrl = new URL(streamer.url, document.baseURI);
                if(streamerUrl.protocol !== 'https:' || !['twitch.tv', 'www.twitch.tv'].includes(streamerUrl.hostname)){
                    throw new Error(`O canal "${streamer.name}" precisa usar um endereço HTTPS da Twitch.`);
                }
            });
        }
        if(item.layout !== 'image' && (typeof item.text !== 'string' || !item.text.trim())){
            throw new Error(`A notícia "${item.id}" precisa de um texto.`);
        }
        if(item.layout !== 'text'){
            if(typeof item.image !== 'string' || !item.image.startsWith('news/')){
                throw new Error(`A notícia "${item.id}" precisa de uma imagem dentro de /news.`);
            }
            const imageUrl = new URL(item.image, document.baseURI);
            if(imageUrl.origin !== window.location.origin || !imageUrl.pathname.startsWith('/news/')){
                throw new Error(`A imagem da notícia "${item.id}" precisa estar dentro de /news.`);
            }
            if(typeof item.imageAlt !== 'string' || !item.imageAlt.trim()){
                throw new Error(`A imagem da notícia "${item.id}" precisa de uma descrição.`);
            }
        }
        if(item.link){
            const linkUrl = new URL(item.link, document.baseURI);
            if(linkUrl.protocol !== 'https:'){
                throw new Error(`O link da notícia "${item.id}" precisa usar HTTPS.`);
            }
        }
    }

    function wasDismissed(itemId){
        try {
            return localStorage.getItem(PERMANENT_DISMISSAL_KEY) === itemId
                || sessionStorage.getItem(SESSION_DISMISSAL_KEY) === itemId;
        } catch(error) {
            console.error('Não foi possível ler a preferência de exibição das notícias.', error);
            return false;
        }
    }

    function rememberDismissal(itemId, permanent){
        const storage = permanent ? localStorage : sessionStorage;
        const key = permanent ? PERMANENT_DISMISSAL_KEY : SESSION_DISMISSAL_KEY;
        try {
            storage.setItem(key, itemId);
        } catch(error) {
            console.error('Não foi possível salvar a preferência de exibição das notícias.', error);
        }
    }

    function renderNews(item, elements){
        const { dialog, category, title, subtitle, text, event, eventTitle, eventText, streamers, imageTrigger, image, imageCaption, link } = elements;
        validateNewsItem(item);
        dialog.dataset.newsId = item.id;
        dialog.querySelector('.site-news-popup__content').dataset.layout = item.layout;
        category.textContent = item.category || 'Notícias';
        title.textContent = item.title;
        subtitle.textContent = item.subtitle || '';
        subtitle.hidden = !item.subtitle || item.layout === 'image';
        text.textContent = item.text || '';
        text.hidden = item.layout === 'image';
        event.hidden = !item.event || item.layout === 'image';
        streamers.replaceChildren();
        if(item.event && item.layout !== 'image'){
            eventTitle.textContent = item.event.title;
            eventText.textContent = item.event.text;
            item.event.streamers.forEach(streamer => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = streamer.url;
                anchor.textContent = streamer.name;
                anchor.target = '_blank';
                anchor.rel = 'noopener noreferrer';
                listItem.appendChild(anchor);
                streamers.appendChild(listItem);
            });
        }
        imageTrigger.hidden = item.layout === 'text';
        if(item.layout !== 'text'){
            image.src = item.image;
            image.alt = item.imageAlt;
            imageTrigger.setAttribute('aria-label', `Ampliar imagem: ${item.imageAlt}`);
            imageCaption.textContent = item.imageCaption || '';
            imageCaption.hidden = !item.imageCaption;
        } else {
            image.removeAttribute('src');
            image.alt = '';
            imageCaption.textContent = '';
            imageCaption.hidden = true;
        }
        if(item.link){
            link.href = item.link;
            link.textContent = item.linkLabel || 'Saiba mais';
            link.hidden = false;
            link.parentElement.hidden = false;
        } else {
            link.removeAttribute('href');
            link.hidden = true;
            link.parentElement.hidden = true;
        }
        if(item.layout === 'image') dialog.removeAttribute('aria-describedby');
        else dialog.setAttribute('aria-describedby', [
            item.subtitle ? 'site-news-subtitle' : '',
            'site-news-text',
            item.event ? 'site-news-event' : ''
        ].filter(Boolean).join(' '));
        elements.dismissChoice.checked = false;
    }

    function initializeNewsPopup(){
        const elements = getNewsElements();
        if(!elements || NEWS_ITEMS.length === 0) return;
        const latestNews = NEWS_ITEMS[NEWS_ITEMS.length - 1];
        try {
            validateNewsItem(latestNews);
        } catch(error) {
            console.error('A notícia não pode ser exibida por conter dados inválidos.', error);
            return;
        }
        if(wasDismissed(latestNews.id)) return;

        renderNews(latestNews, elements);
        const { dialog } = elements;
        const closeButtons = dialog.querySelectorAll('[data-news-close]');
        closeButtons.forEach(button => {
            button.addEventListener('click', () => dialog.close());
        });
        const { zoomDialog, zoomImage } = elements;
        const zoomCloseButton = zoomDialog.querySelector('[data-news-zoom-close]');
        elements.imageTrigger.addEventListener('click', () => {
            zoomImage.src = elements.image.currentSrc || elements.image.src;
            zoomImage.alt = elements.image.alt;
            zoomDialog.showModal();
            zoomCloseButton.focus();
        });
        zoomCloseButton.addEventListener('click', () => zoomDialog.close());
        zoomDialog.addEventListener('click', event => {
            if(event.target === zoomDialog) zoomDialog.close();
        });
        zoomDialog.addEventListener('keydown', event => {
            if(event.key === 'Escape'){
                event.preventDefault();
                event.stopPropagation();
                zoomDialog.close();
            }
        });
        zoomDialog.addEventListener('close', () => elements.imageTrigger.focus());
        dialog.addEventListener('click', event => {
            if(event.target === dialog) dialog.close();
        });
        dialog.addEventListener('close', () => {
            rememberDismissal(latestNews.id, elements.dismissChoice.checked);
        });
        elements.link.addEventListener('click', () => dialog.close());
        dialog.showModal();
        dialog.querySelector('[data-news-close]')?.focus();
    }

    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', initializeNewsPopup, { once: true });
    } else {
        initializeNewsPopup();
    }
})();
