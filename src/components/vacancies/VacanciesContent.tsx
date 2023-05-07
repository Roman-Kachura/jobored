import style from './Vacancies.module.scss';
import React from 'react';
import {SearchInput} from '../features/inputs/SearchInput';
import {Pagination} from '../features/pagination/Pagination';
import {Vacancies} from './Vacancies';
import {VacancyResponseType} from '../../api/apiTypes';

export const VacanciesContent: React.FC<VacanciesContentProps> = (
    {
        vacancies,
        page,
        pagesCount,
        keyword,
        changeVacanciesPage,
        searchVacancies
    }
) => {
    const lastPage = pagesCount > 50 ? 50 : pagesCount;
    return (
        <div className={style.vacanciesContent}>
            <SearchInput value={keyword} callBack={searchVacancies}/>
            <Vacancies vacancies={vacancies}/>
            <Pagination page={page} pagesCount={lastPage} callBack={changeVacanciesPage}/>
        </div>
    )
}

interface VacanciesContentProps {
    vacancies: VacancyResponseType[]
    changeVacanciesPage: (page: number) => void
    page: number
    pagesCount: number
    keyword: string
    searchVacancies: (keyword: string) => void
}