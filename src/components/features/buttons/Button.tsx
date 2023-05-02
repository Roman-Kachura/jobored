import style from './Button.module.scss';
import React from 'react';

export const Button: React.FC<ButtonProps> = ({className, text}) => {
    const finishClassName = className ? `${style.button} ${className}` : style.button;
    return <button className={finishClassName}>{text}</button>
}

interface ButtonProps {
    className?: string
    text: string
    callBack: () => void
}