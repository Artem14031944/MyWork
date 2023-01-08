import { render, screen } from '@testing-library/react';
import App from './App';


describe('App component', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByRole('heading', {level:2})).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
});