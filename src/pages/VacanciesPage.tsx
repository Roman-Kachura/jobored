import React from 'react';
import {Header} from '../components/header/Header';
import {VacanciesContainer} from '../components/vacancies/VacanciesContainer';

export const VacanciesPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <VacanciesContainer/>
        </div>
    )
}