export type MenuItem = {
    name: string;
    link: string;
    subitems?: MenuItem[]
}

export type NavbarProps = {
    logo: string
    menuItems: MenuItem[]
}