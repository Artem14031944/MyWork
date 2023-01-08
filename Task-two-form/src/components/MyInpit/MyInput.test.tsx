import { render, screen } from '@testing-library/react';
import { FocusEvent } from 'react';
import MyInput from './MyInput';


describe('MyInput component', () => {
    it('renders MyComponent component', () => {
        render(
            <MyInput 
                id={''}
                name={''} 
                value={''} 
                onChange={(value: string): void => {
                    throw new Error('Function not implemented.');
                }} 
                label={''} 
                type={''} 
                placeholder={''} 
                textError={''} 
                error={false} 
                onBlur={(e: FocusEvent<HTMLInputElement, Element>): void => {
                    throw new Error('Function not implemented.');
                }}
            />);
        expect(screen.getByTestId('add-data-input')).toBeInTheDocument();
    });
});