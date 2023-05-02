import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {VacanciesPage} from '../../pages/VacanciesPage';
import {FavoritePage} from '../../pages/FavoritePage';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<VacanciesPage/>} path={'/vacancies'}/>
            <Route element={<FavoritePage/>} path={'/favorite'}/>
            <Route element={<Navigate to={'/vacancies'}/>} path={'*'}/>
        </Routes>
    )
}