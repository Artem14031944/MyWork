import { render, screen } from '@testing-library/react';
import MyButton from './MyButton';

describe('MyButton component', () => {
    it('renders MyButton component', () => {
        render(<MyButton text={''} type={'button'}/>)
        expect(screen.getByTestId('logIn-button')).toBeInTheDocument();
    });
});
