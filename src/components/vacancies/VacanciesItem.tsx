import style from './Vacancies.module.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';
import markerImage from '../../images/marker.svg';
import starImage from '../../images/star.svg';
import blueStarImage from '../../images/star-blue.svg';

export const VacanciesItem: React.FC<VacanciesItemProps> = (
    {profession, firm, town, industry, workType, paymentFrom, paymentTo, currency, isVacancyCard, isFamous}
) => {
    const finishClassName = isVacancyCard ? `${style.vacanciesItem} ${style.card}` : style.vacanciesItem;
    return (
        <article className={finishClassName}>
            {
                !isVacancyCard
                    ? <NavLink to="/vacancies" className={style.profession}>{profession}</NavLink>
                    : <h4 className={style.profession}>{profession}</h4>
            }

            <div className={style.conditions}>
                <div className={style.payment}>{currency}</div>
                <div className={style.circle}/>
                <div className={style.workType}>{workType}</div>
            </div>
            <div className={style.town}>
                <img className={style.townImage} src={markerImage} alt="" width="20px" height="20px"/>
                <span>{town}</span>
            </div>
            <button className={style.starBtn}>
                <img src={isFamous ? blueStarImage : starImage} alt="" width="24px" height="24px"/>
            </button>
        </article>
    )
}

interface VacanciesItemProps {
    profession?: string
    firm?: string
    town?: string
    industry?: string
    workType?: string
    paymentTo?: number
    paymentFrom?: number
    currency?: string
    isVacancyCard?: boolean
    isFamous?: boolean
}