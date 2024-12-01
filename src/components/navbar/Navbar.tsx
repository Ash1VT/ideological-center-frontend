import React from 'react'
import { NavbarProps } from './Navbar.types';
import PcNavbar from './navbar-pc/PcNavbar';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './navbar-mobile/MobileNavbar';

const Navbar = ({menuItems}: NavbarProps) => {

    const isMobileView = useMediaQuery("(max-width: 720px)");

    if (!isMobileView) {
        return <PcNavbar menuItems={menuItems}/>
    }

    return <MobileNavbar menuItems={menuItems}/>
}

export default Navbar
