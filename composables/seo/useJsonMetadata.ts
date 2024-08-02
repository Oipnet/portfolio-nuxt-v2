export const useJsonMetadata = (frontmatter: any) => {
    return {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: frontmatter.title,
            description: frontmatter.description,
            image: frontmatter.cover,
            author: {
                '@type': 'Person',
                name: frontmatter.author
            },
            publisher: {
                '@type': 'Organization',
                name: 'Forelse',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://forelse.fr/images/logo.png'
                }
            },
            datePublished: frontmatter.published,
            dateModified: frontmatter.published
        })
    }
}
