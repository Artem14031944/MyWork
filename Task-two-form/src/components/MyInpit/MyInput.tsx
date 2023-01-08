import { FC, FormEvent, FocusEvent } from 'react';
import styles from './MyInput.module.css';

interface IInput {
    id: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    type: string;
    placeholder: string;
    textError: string;
    error: boolean;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
};


const MyInput: FC<IInput> = ({
    name, value, onChange,
    label, type, error,
    placeholder, textError, onBlur
}) => {

    return (
        <div className={styles.container}>
            <label htmlFor='label'>
                {label}<span className={styles.star}>*</span>
            </label>
            <input 
                name={name}
                className={error ? `${styles.inputError}` : `${styles.input}`}
                value={value} 
                onChange={(e: FormEvent<HTMLInputElement>) => {
                    onChange(e.currentTarget?.value)}}
                type={type}  
                placeholder={placeholder}
                onBlur={onBlur}
                data-testid="add-data-input"
            />
          {error && <p className={styles.error}>{textError}</p>}  
        </div>   
    )
};

export default MyInput;