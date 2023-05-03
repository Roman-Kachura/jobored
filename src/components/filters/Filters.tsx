import style from './Filters.module.scss';
import React, {useCallback, useEffect, useState} from 'react';
import {OptionItem} from './OptionItem';
import {CatalogSelect} from './CatalogSelect';
import {SalaryInput} from '../features/inputs/SalaryInput';
import {Button} from '../features/buttons/Button';
import {RootState, useAppDispatch} from '../../store/store';
import {
    clearParamsThunk,
    getCataloguesThunk,
    getVacanciesThunk,
    showVacanciesCountOnPage
} from '../../store/reducers/vacanciesReducer';
import {useSelector} from 'react-redux';
import {VacancyRequestType} from '../../api/apiTypes';
import {FiltersComponent} from './FiltersComponent';

export const Filters = React.memo(() => {
    const dispatch = useAppDispatch();
    const isAuth = useSelector<RootState, boolean>(state => state.app.isAuth);
    const filtersParams = useSelector<RootState, VacancyRequestType>(state => state.vacancies.params);
    const [catalog, setCatalog] = useState(filtersParams.catalogues);
    const [salaryFrom, setSalaryFrom] = useState(filtersParams.payment_from);
    const [salaryTo, setSalaryTo] = useState(filtersParams.payment_to);
    const currentPage = useSelector<RootState, number>(state => state.vacancies.params.page);

    const changeCatalog = (value: number) => {
        setCatalog(value)
    };
    const changeSalaryFrom = useCallback((value: number) => value >= 0 && setSalaryFrom(value), [salaryFrom]);
    const changeSalaryTo = useCallback((value: number) => value >= 0 && setSalaryTo(value), [salaryTo]);
    const applyFilters = useCallback(() => {
        const param: VacancyRequestType = {
            ...filtersParams,
            catalogues: catalog,
            payment_from: salaryFrom,
            payment_to: salaryTo,
            page: 1,
        }
        getVacancies(param);
    }, [dispatch, catalog, salaryFrom, salaryTo]);
    const getVacancies = useCallback((param: VacancyRequestType) => dispatch(getVacanciesThunk(param)), [dispatch, catalog, salaryFrom, salaryTo]);
    const getCatalogues = useCallback(() => isAuth && dispatch(getCataloguesThunk()), [dispatch, isAuth]);
    const clearFilters = useCallback(() => {
        setCatalog(0);
        setSalaryFrom(0);
        setSalaryTo(0);
        dispatch(clearParamsThunk());
    }, [dispatch]);

    useEffect(() => {
        getCatalogues();
        return () => {
            clearFilters();
        }
    }, [dispatch]);
    return (
        <FiltersComponent
            catalog={catalog}
            salaryFrom={salaryFrom}
            salaryTo={salaryTo}
            changeCatalog={changeCatalog}
            changeSalaryFrom={changeSalaryFrom}
            changeSalaryTo={changeSalaryTo}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
        />
    )
})