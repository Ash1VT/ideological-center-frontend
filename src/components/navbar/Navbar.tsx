import React from 'react'
import { NavbarProps } from './Navbar.types';
import PcNavbar from './navbar-pc/PcNavbar';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './navbar-mobile/MobileNavbar';

const Navbar = ({logo, menuItems}: NavbarProps) => {

    const isMobileView = useMediaQuery("(max-width: 720px)");

    if (!isMobileView) {
        return <PcNavbar logo={logo} menuItems={menuItems}/>
    }

    return <MobileNavbar logo={logo} menuItems={menuItems}/>
}

export default Navbar
