import React, { FC } from 'react';
import styles from './MyButton.module.css';

interface IButton {
    text: string;
    type: "button" | "submit" | "reset";
    disabled: boolean
};

const MyButton: FC<IButton> = ({
    text,
    type,
    disabled
}) => {

  return (
    <button
        className={disabled ? `${styles.buttonDisabled}` : `${styles.buttonActive}`} 
        type={type}
        disabled={disabled}
    >
        {text}
    </button>
  )
};

export default MyButton;