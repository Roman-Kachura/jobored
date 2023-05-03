import style from './Favorites.module.scss';
import React from 'react';
import {Empty} from '../empty/Empty';
import {Pagination} from '../features/pagination/Pagination';
import {Container} from '../features/container/Container';
import {VacanciesItem} from '../vacancies/VacanciesItem';

export const Favorites: React.FC = () => {
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

    if (items.length === 0) return <Empty/>
    return (
        <div className={style.favoritesContainer}>
            <Container>
                <div className={style.favoritesWrapper}>
                    <div className={style.favorites}>
                        {
                            items.map(
                                (item, index) =>
                                    <VacanciesItem
                                        key={index}
                                        profession={item.profession}
                                        currency={item.currency}
                                        workType={item.workType}
                                        town={item.town}
                                        isFamous
                                    />
                            )
                        }
                    </div>
                    <Pagination/>
                </div>
            </Container>
        </div>
    )
}