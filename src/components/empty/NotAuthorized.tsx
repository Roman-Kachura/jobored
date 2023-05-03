import style from './Empty.module.scss';
import React from 'react';

export const NotAuthorized:React.FC = () => {
    return(
        <div className={style.notAuthorized}>
            <div>Not authorized!</div>
            <div>Please, reload page...</div>
        </div>
    )
}