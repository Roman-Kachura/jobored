import style from './Vacancies.module.scss';
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {RootState, useAppDispatch} from '../../store/store';
import {clearVacancyCard, getVacancyByIdThunk} from '../../store/reducers/vacanciesReducer';
import {useSelector} from 'react-redux';
import {VacancyResponseType} from '../../api/apiTypes';
import {VacanciesItem} from './VacanciesItem';
import {Container} from '../features/container/Container';
import {Loader} from '../features/loader/Loader';


const VacancyCardComponent: React.FC<VacancyCardComponentProps> = ({card}) => {
    return (
        <div className={style.vacancyCard} data-elem={`vacancy-${card.id}`}>
            <Container>
                <div className={style.cardWrapper}>
                    <VacanciesItem item={card} isVacancyCard/>
                    <div
                        className={style.cardDescription}
                        dangerouslySetInnerHTML={{__html: card.vacancyRichText}}
                    />
                </div>
            </Container>
        </div>
    )
}
export const VacancyCard = React.memo(() => {
    const dispatch = useAppDispatch();
    const id = useParams().id;
    const getVacancy = () => id && dispatch(getVacancyByIdThunk({id}));
    const card = useSelector<RootState, VacancyResponseType>(state => state.vacancies.card);
    useEffect(() => {
        getVacancy();
        return () => {
            dispatch(clearVacancyCard());
        }
    }, [id]);
    if (!card.town) return <Loader/>
    return (
        <VacancyCardComponent card={card}/>
    )
});

interface VacancyCardComponentProps {
    card: VacancyResponseType
}