(function (global) {
    function normalizePokemonSearchText(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim()
            .toLowerCase();
    }

    function getLimitedPokemonSearchEntries(entries, normalizedValue, getSearchKey, limit = 8) {
        const source = Array.isArray(entries) ? entries : [];
        const normalized = normalizePokemonSearchText(normalizedValue || '');
        const max = Math.max(1, Number(limit) || 8);
        if (!normalized) return source.slice(0, max);

        const exact = [];
        const prefix = [];
        const partial = [];
        for (const entry of source) {
            const key = normalizePokemonSearchText(getSearchKey(entry) || '');
            if (!key) continue;
            if (key === normalized) {
                exact.push(entry);
            } else if (key.startsWith(normalized)) {
                prefix.push(entry);
            } else if (key.includes(normalized) && partial.length < max) {
                partial.push(entry);
            }
        }

        return exact.concat(prefix, partial).slice(0, max);
    }

    global.PokemonSearch = Object.freeze({
        normalizePokemonSearchText,
        getLimitedPokemonSearchEntries
    });
})(window);
