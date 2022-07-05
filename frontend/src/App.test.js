import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <.App.js />', () => {
  it('Teste se página contém um heading "h2" com o texto "Task create".', () => {
    renderWithRouter(<App />);

    const task = screen.getByRole('heading', { name: /task create/i });
    expect(task).toBeInTheDocument();
  });
});