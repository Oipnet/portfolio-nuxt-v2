export default interface Frontmatter {
    published: Date;
    url: string;
    cover: string;
    title: string;
    author: string;
    description: string;
    keywords: Array<string>;
    baseUrl: string;
}
