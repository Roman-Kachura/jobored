import React from 'react';
import {Header} from '../components/header/Header';
import {Favorites} from '../components/favorites/Favorites';

export const FavoritesPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <Favorites/>
        </div>
    )
}