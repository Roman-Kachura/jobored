import style from './Inputs.module.scss';
import React, {ChangeEvent, useState} from 'react';
import {Button} from '../buttons/Button';
import searchImage from '../../../images/search.svg';

export const SearchInput: React.FC = () => {
    const [value, setValue] = useState('');
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    const clickHandler = () => {

    }
    return (
        <div className={style.inputBlock}>
            <img
                className={style.searchImage}
                src={searchImage}
                alt=""
                width='16px'
                height='16px'
            />
            <input
                type="text"
                className={style.searchInput}
                placeholder="Введите название вакансии"
                value={value}
                onChange={changeHandler}
            />
            <Button text="Поиск" callBack={clickHandler} className={style.searchButton}/>
        </div>
    )
}