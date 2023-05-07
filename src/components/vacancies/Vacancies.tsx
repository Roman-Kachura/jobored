import style from './Vacancies.module.scss';
import React from 'react';
import {VacanciesItem} from './VacanciesItem';
import {VacancyResponseType} from '../../api/apiTypes';

export const Vacancies: React.FC<VacanciesProps> = ({vacancies}) => {
    return (
        <div className={style.vacancies}>
            {
                vacancies.map(
                    item =>
                        <VacanciesItem
                            key={item.id}
                            item={item}
                        />
                )
            }
        </div>
    )
}

interface VacanciesProps {
    vacancies: VacancyResponseType[]
}