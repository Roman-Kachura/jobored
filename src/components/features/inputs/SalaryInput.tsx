import style from './Inputs.module.scss';
import React, {ChangeEvent} from 'react';
import arrowUpImage from '../../../images/arrow-up.svg';
import arrowDownImage from '../../../images/arrow-down.svg';

export const SalaryInput: React.FC<SalaryInputProps> = ({value, callBack, placeholder, step, dataElement}) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => callBack(+e.currentTarget.value);
    const increaseValue = () => callBack(value + step);
    const decreaseValue = () => callBack(value - step);
    return (
        <div className={style.inputBlock}>
            <input
                className={style.salaryInput}
                placeholder={placeholder}
                value={value !== 0 ? value : ''}
                onChange={changeHandler}
                type="number"
                data-elem={dataElement}
            />
            <div className={style.buttons}>
                <button className={style.salaryBtn} onClick={increaseValue}>
                    <img
                        className={`${style.salaryImage} ${style.up}`}
                        src={arrowUpImage}
                        alt=""
                        width="12px"
                        height="12px"
                    />
                </button>
                <button className={style.salaryBtn} onClick={decreaseValue}>
                    <img
                        className={`${style.salaryImage} ${style.down}`}
                        src={arrowDownImage}
                        alt=""
                        width="12px"
                        height="12px"
                    />
                </button>
            </div>
        </div>
    )
}

interface SalaryInputProps {
    value: number
    callBack: (value: number) => void
    placeholder: string
    step: number
    dataElement: string
}