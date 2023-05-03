import style from './Pagination.module.scss';
import React, {useState} from 'react';
import {PaginationButton} from '../buttons/PaginationButton';
import {ArrowButton} from '../buttons/ArrowButton';

export const Pagination: React.FC = () => {
    const pages = [1, 2, 3, 4, 5];
    const [currentPage, setCurrentPage] = useState(pages[0]);
    const changePage = (n: number) => setCurrentPage(n);
    const prevPage = () => {
        const value = currentPage - 1;
        if (value >= pages[0]) {
            changePage(currentPage - 1)
        }
    };
    const nextPage = () => {
        const value = currentPage + 1;
        if (value <= pages[pages.length - 1]) {
            changePage(currentPage + 1)
        }
    };
    return (
        <div className={style.pagination}>
            <ArrowButton isDisabled={currentPage === pages[0]} callBack={prevPage}/>
            {pages.map(p => <PaginationButton page={p} key={p} isActive={currentPage === p} callBack={changePage}/>)}
            <ArrowButton callBack={nextPage} isDisabled={currentPage === pages[pages.length - 1]} next/>
        </div>
    )
}