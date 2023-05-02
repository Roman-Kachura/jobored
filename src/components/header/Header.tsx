import style from './Header.module.scss';
import React from 'react';
import {Nav} from '../navigation/Nav';
import {Logo} from '../features/logo/Logo';
import {Container} from '../features/container/Container';

export const Header: React.FC = () => {
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