import style from './Header.module.scss';
import React, {useEffect, useState} from 'react';
import {MobileNav, Nav} from '../navigation/Nav';
import {Logo} from '../features/logo/Logo';
import {Container} from '../features/container/Container';
import {Burger} from '../features/buttons/Burger';
import {useLocation} from 'react-router-dom';

export const Header: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const changeVersion = () => {
        if (window.innerWidth < 981) setIsMobile(true);
        if (window.innerWidth > 980) setIsMobile(false);
    }
    useEffect(() => {
        changeVersion();
        window.addEventListener('resize', changeVersion);
        return () => {
            window.removeEventListener('resize', changeVersion);
        }
    }, [window.innerWidth]);
    if (isMobile) return <MobileHeader/>
    return <DesktopHeader/>
}

const DesktopHeader: React.FC = () => {
    return (
        <header className={style.header}>
            <Container>
                <div className={style.headerWrapper}>
                    <Logo/>
                    <Nav/>
                </div>
            </Container>
        </header>
    )
}

const MobileHeader: React.FC = () => {
    const [open, setOpen] = useState(false);
    const openMenu = () => {
        setOpen(!open);
    }
    const mobileNavClassName = open ? `${style.mobileNav} ${style.open}` : style.mobileNav;
    return (
        <header className={style.header}>
            <Container>
                <div className={style.headerWrapper}>
                    <Logo/>
                    <Burger open={open} callBack={openMenu}/>
                </div>
            </Container>
            <div className={mobileNavClassName}>
                <MobileNav/>
            </div>
        </header>
    )
}