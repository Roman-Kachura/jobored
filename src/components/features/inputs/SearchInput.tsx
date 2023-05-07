import style from './Inputs.module.scss';
import React, {ChangeEvent, useState} from 'react';
import {Button} from '../buttons/Button';
import searchImage from '../../../images/search.svg';

export const SearchInput: React.FC<SearchInputProps> = ({value, callBack}) => {
    const [searchValue, setSearchValue] = useState(value);
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value);
    const clickHandler = () => callBack(searchValue);

    return (
        <div className={style.inputBlock}>
            <img
                className={style.searchImage}
                src={searchImage}
                alt=""
                width="16px"
                height="16px"
            />
            <input
                type="text"
                className={style.searchInput}
                placeholder="Введите название вакансии"
                value={searchValue}
                onChange={changeHandler}
                data-elem='search-input'
            />
            <Button text="Поиск" callBack={clickHandler} className={style.searchButton} data-elem='search-button'/>
        </div>
    )
}

interface SearchInputProps {
    value: string,
    callBack: (value: string) => void
}