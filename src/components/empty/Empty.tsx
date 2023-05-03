import style from './Empty.module.scss';
import React from 'react';
import {Container} from '../features/container/Container';
import emptyImage from '../../images/empty.svg';
import {NavLink} from 'react-router-dom';

export const Empty: React.FC = () => {
    return (
        <div className={style.empty}>
            <Container>
                <div className={style.emptyWrapper}>
                    <img src={emptyImage} alt="" width="240px" height="230px" className={style.emptyImage}/>
                    <h4 className={style.emptyTitle}>Упс, здесь еще ничего нет!</h4>
                    <NavLink to={'/vacancies'} className={style.emptyButton}>Поиск Вакансий</NavLink>
                </div>
            </Container>
        </div>
    )
}