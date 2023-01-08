import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
    it('renders Login component', () => {
        render(
            <Login 
                isLogin={false} 
                setLogin={(isLogin: boolean): void  => {
                    throw new Error('Function not implemented.');
                }}
            />);
            expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
            expect(screen.getByRole('button', {name: 'Войти в систему'})).toBeInTheDocument();
    });

});