import type NavbarItem from "~/interfaces/navbar-item";

export const useNavbarItems = (): NavbarItem[] => {
    return [
        {
            name: 'Accueil',
            url: '/'
        },
        {
            name: 'Blog',
            url: '/blog'
        },
        {
            name: 'Me contacter',
            url: '/contact'
        }
    ]
}
