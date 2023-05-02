import React, {ReactNode} from 'react';
import style from './Container.module.scss';

export const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className={style.container}>{children}</div>
    )
}

interface ContainerProps {
    children: ReactNode
}