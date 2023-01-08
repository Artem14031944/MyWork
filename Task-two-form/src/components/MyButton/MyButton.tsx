import { FC } from 'react';
import styles from './MyButton.module.css';

interface IButton {
  text: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const MyButton: FC<IButton> = ({
  text, type,
  disabled, onClick
}) => {

  return (
    <button
      className={disabled ? `${styles.buttonDisabled}` : `${styles.buttonActive}`} 
      type={type}
      disabled={disabled}
      onClick={onClick}
      data-testid="logIn-button"
    >
      {text}
    </button>
  )
};

export default MyButton;