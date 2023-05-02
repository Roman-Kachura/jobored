import logo from './logo.svg';
import React from 'react';

export const Logo: React.FC<LogoProps> = ({width, height}) => {
    const finishWidth = width ? `${width}px` : '99px';
    const finishHeight = height ? `${height}px` : '36px';
    return <img src={logo} alt="" width={finishWidth} height={finishHeight}/>
}

interface LogoProps {
    width?: number
    height?: number
}