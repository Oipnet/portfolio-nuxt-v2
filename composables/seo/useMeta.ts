import type Frontmatter from "~/interfaces/frontmatter";

export const useMeta = (frontmatter: Frontmatter) => {
    return [
        { name: 'keywords', content: frontmatter.keywords.join(',') },
        { name: 'author', content: frontmatter.author },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: frontmatter.title },
        { name: 'og:description', content: frontmatter.description },
        { name: 'og:image', content: `${frontmatter.baseUrl}/${frontmatter.cover}` },
        { name: 'og:url', content: `${frontmatter.baseUrl}${frontmatter.url}` },
        { name: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: frontmatter.title },
        { name: 'twitter:description', content: frontmatter.description },
        { name: 'twitter:image', content: `${frontmatter.baseUrl}/${frontmatter.cover}` },
    ]
}
