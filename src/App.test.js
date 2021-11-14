import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('entry added to table on form submit', () => {
  render(<App />);

  const nameInput = screen.getByLabelText('name-input');
  const salaryInput = screen.getByLabelText('salary-input');
  const submitButton = screen.getByLabelText('form-submit');

  fireEvent.change(nameInput, { target: { value: 'Elliot Spaull' } });
  fireEvent.change(salaryInput, { target: { value: 60000 } });

  expect(nameInput.value).toBe('Elliot Spaull');
  expect(salaryInput.value).toBe('60000');

  let tableRow = screen.queryByLabelText('Elliot Spaull-4500');

  expect(tableRow).toBeNull();

  fireEvent.click(submitButton);

  tableRow = screen.queryByLabelText('Elliot Spaull-4500');

  expect(tableRow).toBeInTheDocument();
});
