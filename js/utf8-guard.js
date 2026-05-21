(function(){
  const CACHE_PREFIX = 'poke-effectiveness-';
  const SESSION_FLAG = 'pokeUtf8GuardReloaded';
  const BAD_TEXT_PATTERN = /(?:PokÃ|fÃ|vÃ|mÃ|Ã[\u0080-\u00BF]|â[\u0080-\u00BF]|ð[\u0080-\u00BF])/;

  function collectVisibleText(){
    const parts = [];
    if (document.title) parts.push(document.title);
    if (document.body?.innerText) parts.push(document.body.innerText);
    const sidebarText = document.getElementById('app-sidebar')?.textContent;
    if (sidebarText) parts.push(sidebarText);
    const legendText = document.querySelector('.tier-legend')?.textContent;
    if (legendText) parts.push(legendText);
    return parts.join('\n').slice(0, 20000);
  }

  async function clearOldRuntimeState(){
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((registration) => registration.unregister()));
      } catch {}
    }

    if ('caches' in window) {
      try {
        const cacheKeys = await caches.keys();
        await Promise.all(
          cacheKeys
            .filter((key) => key.startsWith(CACHE_PREFIX))
            .map((key) => caches.delete(key))
        );
      } catch {}
    }
  }

  async function maybeRecoverFromMojibake(){
    try {
      if (!window.sessionStorage) return;
      if (sessionStorage.getItem(SESSION_FLAG) === '1') return;

      const text = collectVisibleText();
      if (!BAD_TEXT_PATTERN.test(text)) {
        sessionStorage.removeItem(SESSION_FLAG);
        return;
      }

      sessionStorage.setItem(SESSION_FLAG, '1');
      await clearOldRuntimeState();
      window.location.reload();
    } catch {}
  }

  window.addEventListener('load', () => {
    window.setTimeout(() => {
      maybeRecoverFromMojibake();
    }, 0);
  });
})();
