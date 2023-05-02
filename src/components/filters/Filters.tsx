import style from './Filters.module.scss';
import React, {useState} from 'react';
import {OptionItem} from './OptionItem';
import {IndustryInput} from '../features/inputs/IndustryInput';
import {SalaryInput} from '../features/inputs/SalaryInput';
import {Button} from '../features/buttons/Button';

export const Filters: React.FC = () => {
    const [industry, setIndustry] = useState('');
    const changeIndustry = (value: string) => setIndustry(value);
    const [salaryFrom, setSalaryFrom] = useState(0);
    const changeSalaryFrom = (value: number) => value >= 0 && setSalaryFrom(value);
    const [salaryTo, setSalaryTo] = useState(0);
    const changeSalaryTo = (value: number) => value >= 0 && setSalaryTo(value);
    const clickHandler = () => {
        alert('click')
    }
    return (
        <aside className={style.filters}>
            <div className={style.filtersTop}>
                <h3 className={style.filtersTitle}>Фильтры</h3>
                <button className={style.clearFilters}>
                    <span>Сбросить все</span>
                    <span>&#10005;</span>
                </button>
            </div>
            <div className={style.filtersOptions}>
                <OptionItem title={'Отрасль'}>
                    <IndustryInput value={industry} callBack={changeIndustry}/>
                </OptionItem>
                <OptionItem title={'Оклад'}>
                    <SalaryInput
                        step={1000}
                        callBack={changeSalaryFrom}
                        value={salaryFrom}
                        placeholder="От"
                    />
                    <SalaryInput
                        step={1000}
                        callBack={changeSalaryTo}
                        value={salaryTo}
                        placeholder="До"
                    />
                </OptionItem>
                <Button callBack={clickHandler} text="Применить" className={style.applyBtn}/>
            </div>
        </aside>
    )
}