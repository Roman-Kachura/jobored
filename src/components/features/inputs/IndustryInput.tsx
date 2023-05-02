import React, {ChangeEvent} from 'react';
import style from './Inputs.module.scss';
import bigArrowDownImg from '../../../images/big-arrow-down.svg';

export const IndustryInput: React.FC<IndustryInputProps> = ({value, callBack}) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => callBack(e.currentTarget.value);
    return (
        <div className={style.inputBlock}>
            <input
                className={style.industryInput}
                placeholder="Выберете отрасль"
                value={value}
                onChange={changeHandler}
                type='text'
            />
            <img
                className={style.industryImage}
                src={bigArrowDownImg}
                alt=""
                width="14px"
                height="6px"
            />
        </div>
    )
}

interface IndustryInputProps {
    value: string
    callBack: (value: string) => void
}