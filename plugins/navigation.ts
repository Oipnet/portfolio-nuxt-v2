const isExternal = (url: string) => {
    const domain = (url: string) => {
        const a = document.createElement('a');
        a.href = url;
        return a.hostname;
    };

    return domain(location.href) !== domain(url);
};

export default defineNuxtPlugin(() => {
    if (import.meta.client) {
        document.addEventListener('click', (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement

            if (target && isExternal(target.href)) {
                e.preventDefault();
                window.open(target.href, '_blank');
            }
        })
    }
})
