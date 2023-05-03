import React, {useState} from 'react';
import style from './Filters.module.scss';
import bigArrowDownImg from '../../images/big-arrow-down.svg';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {CatalogResponseType} from '../../api/apiTypes';

export const CatalogSelect: React.FC<IndustryInputProps> = ({value, callBack}) => {
    const [open, setOpen] = useState(false);
    const catalogues = useSelector<RootState, CatalogResponseType[]>(state => state.vacancies.catalogues);
    const currentCatalog = catalogues.find(c => c.key === value);
    const openSelect = () => setOpen(!open);
    const className = !open ? style.catalog : `${style.catalog} ${style.open}`;
    const changeValue = (value: number) => {
        callBack(value);
        openSelect();
    }
    return (
        <div className={className}>
            <div className={style.catalogSelect} onClick={openSelect}>
                <div>{currentCatalog ? currentCatalog.title : 'Выберете отрасль'}</div>
                <img
                    className={style.catalogImage}
                    src={bigArrowDownImg}
                    alt=""
                    width="14px"
                    height="6px"
                />
            </div>
            <div className={style.cataloguesChildren}>
                {
                    catalogues.map(
                        c =>
                            <button
                                className={style.cataloguesBtn}
                                key={c.key}
                                onClick={() => changeValue(c.key)}>
                                {c.title}
                            </button>
                    )
                }
            </div>
        </div>

    )
}

interface IndustryInputProps {
    value: number
    callBack: (value: number) => void
}