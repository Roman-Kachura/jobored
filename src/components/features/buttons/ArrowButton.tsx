import style from './Button.module.scss';
import React from 'react';
import arrowLeftImage from '../../../images/arrow-left.svg';
import arrowRightImage from '../../../images/arrow-right.svg';

export const ArrowButton: React.FC<ArrowButtonProps> = ({next, isDisabled, callBack}) => {
    const src = next ? arrowRightImage : arrowLeftImage;
    return (
        <button className={style.paginationButton} disabled={isDisabled} onClick={callBack}>
            <img src={src} alt="" width="16px" height="16px" className={style.arrowImage}/>
        </button>
    )
}

interface ArrowButtonProps {
    next?: boolean
    isDisabled?: boolean
    callBack: () => void
}