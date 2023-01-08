import { FC, useState } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import  './App.css';


export interface ILogin {
  isLogin: boolean;
  setLogin: (isLogin: boolean) => void;
};

const App: FC = () => {

  const[isLogin, setLogin] = useState(false);
  
  return (
    <div className='wrapper'>
      {isLogin ? 
        <Home isLogin={isLogin} setLogin={setLogin}/> 
        : 
        <Login isLogin={isLogin} setLogin={setLogin}/>
      }
    </div>
  );
};

export default App;
