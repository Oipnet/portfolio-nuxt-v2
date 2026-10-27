import type Frontmatter from "~/interfaces/frontmatter";

export const useJsonMetadata = (frontmatter: Frontmatter) => {
    return {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: frontmatter.title,
            description: frontmatter.description,
            image: `${frontmatter.baseUrl.replace(/\/$/, '')}/${frontmatter.cover.replace(/^\//, '')}`,
            author: {
                '@type': 'Person',
                name: frontmatter.author
            },
            publisher: {
                '@type': 'Organization',
                name: 'Forelse',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://forelse.fr/img/logo-400.png'
                }
            },
            datePublished: frontmatter.published,
            dateModified: frontmatter.published
        })
    }
}
