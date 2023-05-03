import React from 'react';
import style from './Vacancies.module.scss';
import {Container} from '../features/container/Container';
import {Filters} from '../filters/Filters';
import {VacanciesContent} from './VacanciesContent';
import {VacanciesItem} from './VacanciesItem';

export const VacanciesContainer: React.FC = () => {
    return (
        <div className={style.vacanciesContainer}>
            <Container>
                <div className={style.vacanciesWrapper}>
                    <Filters/>
                    <VacanciesContent/>
                </div>
            </Container>
        </div>
    )
}