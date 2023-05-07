import style from './Vacancies.module.scss';
import React, {useCallback} from 'react';
import {NavLink} from 'react-router-dom';
import markerImage from '../../images/marker.svg';
import starImage from '../../images/star.svg';
import blueStarImage from '../../images/star-blue.svg';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../store/store';
import {VacancyResponseType} from '../../api/apiTypes';
import {addToFavoriteAction, removeFavoriteAction} from '../../store/reducers/favoritesReducer';

export const VacanciesItem: React.FC<VacanciesItemProps> = (
    {item, isVacancyCard}
) => {
    const {id, profession, town, type_of_work, payment_from} = item;
    const dispatch = useAppDispatch();
    const favoritesVacancies = useSelector<RootState, VacancyResponseType[]>(state => state.favorites.vacancies);
    const isFavorite = favoritesVacancies.find(v => v.id === id);
    const finishClassName = isVacancyCard ? `${style.vacanciesItem} ${style.card}` : style.vacanciesItem;
    const addToFavorites = useCallback(() => dispatch(addToFavoriteAction({item})), [isFavorite, item]);
    const removeFromFavorites = useCallback(() => dispatch(removeFavoriteAction({item})), [isFavorite, item]);
    return (
        <article className={finishClassName}>
            <button data-elem={`vacancy-${id}-shortlist-button`} className={style.starBtn} onClick={isFavorite ? removeFromFavorites : addToFavorites}>
                <img src={isFavorite ? blueStarImage : starImage} alt="" width="24px" height="24px"/>
            </button>
            {
                !isVacancyCard
                    ? <NavLink to={`/vacancies/${id}`} className={style.profession}>{profession}</NavLink>
                    : <h4 className={style.profession}>{profession}</h4>
            }

            <div className={style.conditions}>
                {payment_from !== 0 &&
                    <>
                        <div className={style.payment}>з/п от {payment_from}</div>
                        <div className={style.circle}/>
                    </>
                }
                <div className={style.workType}>{type_of_work.title}</div>
            </div>
            <div className={style.town}>
                <img className={style.townImage} src={markerImage} alt="" width="20px" height="20px"/>
                <span>{town.title}</span>
            </div>
        </article>
    )
}

interface VacanciesItemProps {
    item: VacancyResponseType
    isVacancyCard?: boolean
}