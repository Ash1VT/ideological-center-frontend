export type MenuItem = {
    name: string;
    link: string;
    subitems?: MenuItem[]
}

export type NavbarProps = {
    menuItems: MenuItem[]
}