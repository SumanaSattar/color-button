import { render, screen ,fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button',{name:'Change to blue'})
  expect(colorButton).toHaveStyle({backgroundColor:'red'})
   fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe('Change to red')
  expect(colorButton).toHaveStyle({backgroundColor:'blue'})
});

test('button is enabled and checkbox is unchecked', () => {
  render(<App />);
  const button = screen.getByRole('button',{name:'Change to blue'})
  const checkbox =screen.getByRole('checkbox')
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();

});