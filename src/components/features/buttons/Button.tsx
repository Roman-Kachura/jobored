import style from './Button.module.scss';
import React from 'react';

export const Button: React.FC<ButtonProps> = ({className, text, callBack}) => {
    const finishClassName = className ? `${style.button} ${className}` : style.button;
    return <button onClick={callBack} className={finishClassName}>{text}</button>
}

interface ButtonProps {
    className?: string
    text: string
    callBack: () => void
}