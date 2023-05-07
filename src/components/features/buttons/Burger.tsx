import React, {useState} from 'react';
import style from './Button.module.scss';

export const Burger: React.FC<BurgerProps> = ({callBack, open}) => {
    const finishClassName = open ? `${style.burgerWrapper} ${style.active}` : style.burgerWrapper;
    return (
        <button className={style.burger} onClick={callBack}>
            <div className={finishClassName}>
                <div className={style.elem1}/>
                <div className={style.elem2}/>
                <div className={style.elem3}/>
            </div>
        </button>
    )
}

interface BurgerProps {
    callBack: () => void
    open: boolean
}