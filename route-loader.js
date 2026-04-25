(function(){
    var routeTab = String(document.documentElement.dataset.routeTab || '').trim();

    fetch('../app.html', { cache: 'no-store' })
        .then(function(response){
            if(!response.ok){
                throw new Error('Falha ao carregar app.html');
            }
            return response.text();
        })
        .then(function(html){
            document.open();
            document.write(html);
            document.close();
        })
        .catch(function(error){
            console.error('route-loader fallback error', error);
            var target = new URL('../app.html', window.location.href);
            var params = new URLSearchParams(window.location.search);
            params.delete('bossmode');
            params.delete('boss');
            params.delete('mode');
            if(routeTab){
                params.set('tab', routeTab);
            }
            target.search = params.toString();
            target.hash = window.location.hash || '';
            window.location.replace(target.toString());
        });
})();
