import type Frontmatter from "~/interfaces/frontmatter";

export const useLinks = (frontmatter: Frontmatter) => {
    return [
        { rel: 'canonical', href: `${frontmatter.baseUrl}${frontmatter.url}` }
    ]
}
