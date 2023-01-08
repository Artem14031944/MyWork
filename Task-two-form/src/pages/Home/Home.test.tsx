import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
    it('renders Home component', () => {
        render(
        <Home 
            isLogin={false} 
            setLogin={(isLogin: boolean): void => {
                throw new Error('Function not implemented.');
             }}
        />);
        expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Home snapshot', () => {
        const view = render(
        <Home 
            isLogin={false} 
            setLogin={(isLogin: boolean): void => {
                throw new Error('Function not implemented.');
            }}
        />);
        expect(view).toMatchSnapshot();    
    });
});