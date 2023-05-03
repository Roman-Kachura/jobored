import style from './Vacancies.module.scss';
import React, {useCallback, useEffect} from 'react';
import {VacanciesItem} from './VacanciesItem';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../store/store';
import {VacanciesDataResponseType, VacancyRequestType, VacancyResponseType} from '../../api/apiTypes';
import {getVacanciesThunk} from '../../store/reducers/vacanciesReducer';

export const Vacancies: React.FC = () => {
    const dispatch = useAppDispatch();
    const vacancies = useSelector<RootState, VacancyResponseType[]>(state => state.vacancies.vacancies);
    const filtersParams = useSelector<RootState, VacancyRequestType>(state => state.vacancies.params);
    const isAuth = useSelector<RootState, boolean>(state => state.app.isAuth);
    const getVacancies = useCallback(() => isAuth && dispatch(getVacanciesThunk(filtersParams)), [dispatch, isAuth, vacancies])
    useEffect(() => {
        getVacancies();
    }, [])

    return (
        <div className={style.vacancies}>
            {
                vacancies.map(
                    (item, index) =>
                        <VacanciesItem
                            key={index}
                            profession={item.profession}
                            currency={item.currency}
                            workType={item.type_of_work.title}
                            town={item.town.title}
                        />
                )
            }
        </div>
    )
}