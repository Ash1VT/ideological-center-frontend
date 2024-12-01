import { MenuItem } from "../Navbar.types";

export type DropDownProps = {
    title: string;
    items: MenuItem[];
    triggerClassName?: string;
    titleClassName?: string;
    iconClassName?: string;
    itemContainerClassName?: string;
    itemClassName?: string;

}