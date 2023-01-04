import { FC } from 'react';
import { ILogin } from '../../App';
import MyButton from '../../components/MyButton/MyButton';
import styles from './Home.module.css';



const Home: FC<ILogin> = ({ isLogin, setLogin }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Поздравлю вы в системе!</h2>
            <MyButton 
                text="Выйти"
                type="button"
                onClick={() => setLogin(!isLogin)}
            />
        </div>
    )
};

export default Home;