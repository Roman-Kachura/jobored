import React from 'react';
import style from './Filters.module.scss';
import {OptionItem} from './OptionItem';
import {CatalogSelect} from './CatalogSelect';
import {SalaryInput} from '../features/inputs/SalaryInput';
import {Button} from '../features/buttons/Button';

export const FiltersComponent: React.FC<FiltersComponentProps> = (
    {catalog, salaryFrom, salaryTo, changeCatalog, changeSalaryFrom, changeSalaryTo, applyFilters, clearFilters}
) => {
    return (
        <aside className={style.filters}>
            <div className={style.filtersTop}>
                <h3 className={style.filtersTitle}>Фильтры</h3>
                <button className={style.clearFilters} onClick={clearFilters}>
                    <span>Сбросить все</span>
                    <span>&#10005;</span>
                </button>
            </div>
            <div className={style.filtersOptions}>
                <OptionItem title={'Отрасль'}>
                    <CatalogSelect value={catalog} callBack={changeCatalog}/>
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
                <Button callBack={applyFilters} text="Применить" className={style.applyBtn}/>
            </div>
        </aside>
    )
}

interface FiltersComponentProps {
    catalog: number
    salaryFrom: number
    salaryTo: number
    changeCatalog: (value: number) => void
    changeSalaryFrom: (value: number) => void
    changeSalaryTo: (value: number) => void
    applyFilters: () => void
    clearFilters: () => void
}