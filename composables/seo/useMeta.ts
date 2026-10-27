import type Frontmatter from "~/interfaces/frontmatter";

const absoluteUrl = (baseUrl: string, path: string) => `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`

export const useMeta = (frontmatter: Frontmatter) => {
    const image = absoluteUrl(frontmatter.baseUrl, frontmatter.cover)
    const url = absoluteUrl(frontmatter.baseUrl, frontmatter.url)

    // Open Graph attend l'attribut "property" (et non "name") pour être lu par LinkedIn, Facebook, etc.
    return [
        { name: 'keywords', content: frontmatter.keywords.join(',') },
        { name: 'author', content: frontmatter.author },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: frontmatter.title },
        { property: 'og:description', content: frontmatter.description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'article' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'Forelse' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: frontmatter.title },
        { name: 'twitter:description', content: frontmatter.description },
        { name: 'twitter:image', content: image },
    ]
}
