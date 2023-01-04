import { FC, FormEvent, FocusEvent } from 'react';
import styles from './MyInput.module.css';

interface IInput {
    name: string;
    value: string;
    setValue: (value: string) => void;
    label: string;
    type: string;
    placeholder: string;
    textError: string;
    error: boolean;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
};


const MyInput: FC<IInput> = ({
    name, value, setValue,
    label, type, error,
    placeholder, textError, onBlur
}) => {

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget?.value);
    };

    return (
        <div className={styles.container}>
            <label>{label} <span className={styles.star}>*</span></label>
            <input 
                name={name}
                className={error ? `${styles.inputError}` : `${styles.input}`}
                value={value} 
                onChange={onChange}
                type={type}  
                placeholder={placeholder}
                onBlur={onBlur}
            />
          {error && <p className={styles.error}>{textError}</p>}  
        </div>   
    )
};

export default MyInput;