import React, {useCallback, useEffect} from 'react';
import style from './Vacancies.module.scss';
import {Container} from '../features/container/Container';
import {Filters} from '../filters/Filters';
import {VacanciesContent} from './VacanciesContent';
import {Loader} from '../features/loader/Loader';
import {RootState, useAppDispatch} from '../../store/store';
import {useSelector} from 'react-redux';
import {
    clearParamsThunk,
    clearVacancies,
    getCataloguesThunk,
    getVacanciesThunk
} from '../../store/reducers/vacanciesReducer';
import {VacancyRequestType, VacancyResponseType} from '../../api/apiTypes';

export const VacanciesContainer = React.memo(() => {
    const dispatch = useAppDispatch();
    const isAuth = useSelector<RootState, boolean>(state => state.app.isAuth);
    const appLoad = useSelector<RootState, boolean>(state => state.app.load);
    const filtersParams = useSelector<RootState, VacancyRequestType>(state => state.vacancies.params);
    const vacancies = useSelector<RootState, VacancyResponseType[]>(state => state.vacancies.vacancies);
    const page = useSelector<RootState, number>(state => state.vacancies.params.page);
    const pagesCount = useSelector<RootState, number>(state => state.vacancies.pagesCount);
    const keyword = useSelector<RootState, string>(state => state.vacancies.params.keyword);

    const clearFilters = useCallback(() => {
        dispatch(clearParamsThunk());
    }, [dispatch]);
    const getCatalogues = useCallback(() => dispatch(getCataloguesThunk()), [dispatch]);
    const getVacancies = useCallback((param?: VacancyRequestType) => {
        !param
            ? dispatch(getVacanciesThunk(filtersParams))
            : dispatch(getVacanciesThunk(param));
    }, [dispatch, filtersParams]);
    const applyFilters = useCallback((data: { catalog: number, salaryFrom: number, salaryTo: number }) => {
        const param: VacancyRequestType = {
            ...filtersParams,
            catalogues: data.catalog,
            payment_from: data.salaryFrom,
            payment_to: data.salaryTo,
            page: 1,
        }
        getVacancies(param);
    }, [filtersParams, getVacancies]);
    const changeVacanciesPage = useCallback((page: number) => getVacancies({...filtersParams, page}), [page]);
    const searchVacancies = useCallback((keyword: string) => getVacancies({...filtersParams, keyword, page: 1}), []);

    useEffect(() => {
        getVacancies();
        getCatalogues();
        return () => {
            dispatch(clearParamsThunk());
            dispatch(clearVacancies());
        }
    }, []);

    if (appLoad) return <Loader/>

    return (
        <div className={style.vacanciesContainer}>
            <Container>
                <div className={style.vacanciesWrapper}>
                    <Filters
                        clearFiltersCallback={clearFilters}
                        applyFiltersCallBack={applyFilters}
                        filtersParams={filtersParams}
                    />
                    <VacanciesContent
                        vacancies={vacancies}
                        page={page}
                        pagesCount={pagesCount}
                        keyword={keyword}
                        changeVacanciesPage={changeVacanciesPage}
                        searchVacancies={searchVacancies}
                    />
                </div>
            </Container>
        </div>
    )
})