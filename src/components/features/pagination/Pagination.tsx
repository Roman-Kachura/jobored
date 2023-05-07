import style from './Pagination.module.scss';
import React, {useState} from 'react';
import {PaginationButton} from '../buttons/PaginationButton';
import {ArrowButton} from '../buttons/ArrowButton';
import {getPages} from '../../../utils/utils';



export const Pagination: React.FC<PaginationProps> = ({page, pagesCount, callBack}) => {
    const [currentPage, setCurrentPage] = useState(page);
    const pages = getPages(pagesCount, currentPage);

    const changePage = (n: number) => {
        callBack(n);
        setCurrentPage(n);
    };
    const prevPage = () => {
        const value = currentPage - 1;
        if (value >= pages[0]) {
            changePage(value);
        }
    };
    const nextPage = () => {
        const value = currentPage + 1;
        if (value <= pages[pages.length - 1]) {
            changePage(value);
        }
    };
    if (pagesCount === 1) {
        return (
            <div className={style.pagination}>
                <PaginationButton page={page} key={page} isActive={currentPage === page} callBack={changePage}/>
            </div>
        )
    }
    return (
        <div className={style.pagination}>
            <ArrowButton isDisabled={currentPage === pages[0]} callBack={prevPage}/>
            {pages.map(p => <PaginationButton page={p} key={p} isActive={currentPage === p}
                                              callBack={changePage}/>)}
            <ArrowButton callBack={nextPage} isDisabled={currentPage === pages[pages.length - 1]} next/>
        </div>
    )
}

interface PaginationProps {
    page: number
    pagesCount: number
    callBack: (page: number) => void
}