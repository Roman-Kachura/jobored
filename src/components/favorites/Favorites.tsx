import style from './Favorites.module.scss';
import React, {useCallback, useEffect} from 'react';
import {Empty} from '../empty/Empty';
import {Pagination} from '../features/pagination/Pagination';
import {Container} from '../features/container/Container';
import {VacanciesItem} from '../vacancies/VacanciesItem';
import {Loader} from '../features/loader/Loader';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../store/store';
import {getFavoritesVacanciesThunk} from '../../store/reducers/favoritesReducer';
import {VacancyResponseType} from '../../api/apiTypes';

export const Favorites = React.memo(() => {
    const dispatch = useAppDispatch();
    const appLoad = useSelector<RootState, boolean>(state => state.app.load);
    const showFavoriteVacancies = useSelector<RootState, VacancyResponseType[]>(state => state.favorites.showVacancies);
    const favoriteVacancies = useSelector<RootState, VacancyResponseType[]>(state => state.favorites.vacancies);
    const page = useSelector<RootState, number>(state => state.favorites.page);
    const pagesCount = useSelector<RootState, number>(state => state.favorites.pagesCount);

    const getFavoritesVacancies = useCallback((page: number) => dispatch(getFavoritesVacanciesThunk({page})), [page]);

    useEffect(() => {
        getFavoritesVacancies(page);
    }, [favoriteVacancies.length]);

    if (appLoad) return <Loader/>
    if (showFavoriteVacancies.length === 0) return <Empty/>
    return (
        <div className={style.favoritesContainer}>
            <Container>
                <div className={style.favoritesWrapper}>
                    <div className={style.favorites}>
                        {
                            showFavoriteVacancies.map(
                                (item) =>
                                    <VacanciesItem
                                        item={item}
                                        key={item.id}
                                    />
                            )
                        }
                    </div>
                    <Pagination page={page} pagesCount={pagesCount} callBack={getFavoritesVacancies}/>
                </div>
            </Container>
        </div>
    )
})