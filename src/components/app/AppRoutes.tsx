import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {VacanciesPage} from '../../pages/VacanciesPage';
import {FavoritesPage} from '../../pages/FavoritesPage';
import {VacancyCardPage} from '../../pages/VacancyCardPage';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<VacancyCardPage/>} path={'/vacancies/:id'}/>
            <Route element={<VacanciesPage/>} path={'/vacancies'} />
            <Route element={<FavoritesPage/>} path={'/favorites'}/>
            <Route element={<Navigate to={'/vacancies'}/>} path={'*'}/>
        </Routes>
    )
}