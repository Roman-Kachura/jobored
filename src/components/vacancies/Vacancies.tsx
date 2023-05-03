import style from './Vacancies.module.scss';
import React from 'react';
import {VacanciesItem} from './VacanciesItem';

export const Vacancies: React.FC = () => {
    const items = [
        {
            profession: 'Менеджер-дизайнер',
            currency: 'з/п от 70000 rub',
            workType: 'Полный рабочий день',
            town: 'Новый Уренгой',
        },
        {
            profession: 'Ведущий графический дизайнер НЕ УДАЛЕННО',
            currency: 'з/п от 80000 rub',
            workType: 'Полный рабочий день',
            town: 'Москва',
        },
        {
            profession: 'Работник декорации, дизайнер (ТЦ Амбар)',
            currency: 'з/п 29000 rub',
            workType: 'Сменный график работы',
            town: 'Самара',
        },
        {
            profession: 'Менеджер-дизайнер',
            currency: 'з/п 55000 - 95000 rub',
            workType: 'Полный рабочий день',
            town: 'Тюмень',
        },
    ];
    return (
        <div className={style.vacancies}>
            {
                items.map(
                    (item, index) =>
                        <VacanciesItem
                            key={index}
                            profession={item.profession}
                            currency={item.currency}
                            workType={item.workType}
                            town={item.town}
                        />
                )
            }
        </div>
    )
}