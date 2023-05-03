import React, {useEffect} from 'react';
import style from './Vacancies.module.scss';
import {Container} from '../features/container/Container';
import {Filters} from '../filters/Filters';
import {VacanciesContent} from './VacanciesContent';
import {Loader} from '../features/loader/Loader';
import {RootState} from '../../store/store';
import {AppStatusType} from '../../store/reducers/appReducer';
import {useSelector} from 'react-redux';
import {NotAuthorized} from '../empty/NotAuthorized';

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