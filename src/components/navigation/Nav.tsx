import style from './Navigation.module.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {navigationLinks} from './navDB';

export const Nav: React.FC = () => {
    return (
        <nav className={style.nav}>
            {navigationLinks.map((l, i) => <LinkItem key={i} text={l.text} href={l.href}/>)}
        </nav>
    )
}

export const LinkItem: React.FC<LinkItemProps> = ({text, href}) => {
    return (
        <NavLink
            className={({isActive, isPending}) =>
                isActive ? `${style.linkItem} ${style.active}` : `${style.linkItem}`
            }
            to={href}>{text}</NavLink>
    )
}

interface LinkItemProps {
    text: string
    href: string
}
