import style from './Button.module.scss';
import React from 'react';

export const PaginationButton: React.FC<PaginationButtonProps> = ({page, isActive, callBack}) => {
    const className = isActive ? `${style.paginationButton} ${style.active}` : style.paginationButton;
    const clickHandler = () => callBack(page);
    return (
        <button className={className} onClick={clickHandler}>{page}</button>
    )
}

interface PaginationButtonProps {
    page: number
    isActive?: boolean
    callBack: (n: number) => void
}