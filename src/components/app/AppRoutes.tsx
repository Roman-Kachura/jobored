import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {VacanciesPage} from '../../pages/VacanciesPage';
import {FavoritesPage} from '../../pages/FavoritesPage';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<VacanciesPage/>} path={'/vacancies'}/>
            <Route element={<FavoritesPage/>} path={'/favorites'}/>
            <Route element={<Navigate to={'/vacancies'}/>} path={'*'}/>
        </Routes>
    )
}