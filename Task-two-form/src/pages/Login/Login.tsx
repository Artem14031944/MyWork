import { FC, useState, useEffect, FormEvent, FocusEvent } from 'react';
import { ILogin } from '../../App';
import MyInput from '../../components/MyInpit/MyInput';
import MyButton from '../../components/MyButton/MyButton';
import styles from './Login.module.css';

const Login: FC<ILogin> = ({ isLogin, setLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeBtn, setActiveBtn] = useState(true);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        if(
            email !== '' && 
            password !== '' &&
            !errorEmail &&
            !errorPassword 
        ) {
           setEmail('');
           setPassword('');
           setErrorEmail(false);
           setErrorPassword(false);
           setEmailDirty(false);
           setPasswordDirty(false);

           setLogin(true);
        }
    };

    const emailHandler = (value: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(value).toLowerCase())) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    }; 

    const passwordHandler = (value: string) => {
        if(value.length <= 7) {
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        }
    };

    const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
          case "email":
            setEmailDirty(true);
            break;
          case "password":
            setPasswordDirty(true);
            break;
          default:
        }
      };

    useEffect(() => {
        emailHandler(email);
        passwordHandler(password);
       if(
            email !== '' && 
            password !== '' &&
            !errorEmail &&
            !errorPassword 
        ) {
            setActiveBtn(false);
        } else {
            setActiveBtn(true);
        }
    }, [activeBtn, email, password, errorEmail, errorPassword, emailDirty, passwordDirty]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Вход</h2>
            <p className={styles.podTitle}>Для существующих пользователей</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <MyInput
                    id={"email"}
                    name={"email"}
                    value={email || ""}
                    onChange={setEmail}
                    onBlur={blurHandler}
                    label={'E-Mail:'}
                    type={"mail"}
                    placeholder={"E-Mail"}
                    error={emailDirty && errorEmail}
                    textError={'Укажите корректный email адрес'}
                />
                <MyInput
                    id={"password"}
                    name={"password"}
                    value={password || ""}
                    onChange={setPassword}
                    onBlur={blurHandler}
                    label={'Пароль:'}
                    type={"password"}
                    placeholder={"Пароль"}
                    error={passwordDirty && errorPassword}
                    textError={'Пароль должен быть из 8 символов и более'}
                />
                <MyButton 
                    text={'Войти в систему'}
                    type={'submit'}   
                    disabled={activeBtn}
                />
            </form>
        </div>
    )
};

export default Login;