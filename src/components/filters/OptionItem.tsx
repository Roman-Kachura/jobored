import React, {ReactNode} from 'react';
import style from './Filters.module.scss';

export const OptionItem: React.FC<OptionItemProps> = ({title, children}) => {
    return (
        <div className={style.optionItem}>
            <h3 className={style.filtersSubtitle}>{title}</h3>
            <div className={style.itemChildren}>{children}</div>
        </div>
    )
}

interface OptionItemProps {
    title: string
    children: ReactNode
}