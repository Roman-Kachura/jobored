import style from './Vacancies.module.scss';
import React from 'react';
import {SearchInput} from '../features/inputs/SearchInput';
import {Pagination} from '../features/pagination/Pagination';
import {Vacancies} from './Vacancies';

export const VacanciesContent: React.FC = () => {
    return (
        <div className={style.vacanciesContent}>
            <SearchInput/>
            <Vacancies/>
            <Pagination/>
        </div>
    )
}