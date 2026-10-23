(() => {
    const NEWS_ITEMS = Object.freeze([
        {
            id: '2026-10-23-dev-notes-image-test',
            layout: 'text-image',
            title: 'Atualizações do dia 23/10.',
            category: 'Dev-Notes',
            subtitle: 'Mudanças sobre morte e redução de dano no jogador através do Silver Starboost System',
            text: 'Confira as novidades mais recentes no Discord.',
            image: 'news/image-news.png',
            imageAlt: 'Sheriff no nível 274 com barras de progresso de 100% e 13%.',
            imageCaption: '',
            link: 'https://discord.com/channels/1200210281410854982/1556721004670091335/1563267373958565939',
            linkLabel: 'Ler Dev-Notes no Discord'
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
            image: dialog.querySelector('[data-news-image]'),
            imageCaption: dialog.querySelector('[data-news-image-caption]'),
            link: dialog.querySelector('[data-news-link]'),
            dismissChoice: dialog.querySelector('[data-news-dismiss-choice]')
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
        const { dialog, category, title, subtitle, text, image, imageCaption, link } = elements;
        validateNewsItem(item);
        dialog.dataset.newsId = item.id;
        dialog.querySelector('.site-news-popup__content').dataset.layout = item.layout;
        category.textContent = item.category || 'Notícias';
        title.textContent = item.title;
        subtitle.textContent = item.subtitle || '';
        subtitle.hidden = !item.subtitle || item.layout === 'image';
        text.textContent = item.text || '';
        text.hidden = item.layout === 'image';
        image.hidden = item.layout === 'text';
        if(item.layout !== 'text'){
            image.src = item.image;
            image.alt = item.imageAlt;
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
            'site-news-text'
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
