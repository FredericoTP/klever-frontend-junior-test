import { screen, fireEvent } from "@testing-library/react";
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";
import mockLocalStorage from "./helpers/mockLocalStorage";

describe('Test page AddToken', () => {
  test('checks if items are rendered on the screen and button Save functionality', async () => {  
    const { history } = renderWithRouter(<App />);  
    const addBtn = screen.getByRole('link', {  name: /add token/i});

    fireEvent.click(addBtn);

    screen.getByRole('heading', {  name: /add token/i});
    const tokenInput = screen.getByRole('textbox', {  name: /token/i});
    const balanceInput = screen.getByRole('spinbutton', {  name: /balance/i});
    screen.getByRole('button', {  name: /voltar/i});
    const saveBtn = screen.getByRole('button', {  name: /save/i});
    const labelToken = screen.getByTestId('label-token');
    const labelBalance = screen.getByTestId('label-balance');
    const small = screen.getByText(/preencha todos os campos!/i);

    expect(labelBalance && labelToken).toBeInTheDocument();
    expect(labelToken).toHaveTextContent('Token');
    expect(labelBalance).toHaveTextContent('Balance');
    expect(tokenInput).toHaveValue('');
    expect(balanceInput).toHaveValue(null);
    expect(saveBtn).toBeDisabled();

    fireEvent.input(tokenInput, { target: { value: 'KLV' } });
    fireEvent.input(balanceInput, { target: { value: 10000 } });

    expect(tokenInput).toHaveValue('KLV');
    expect(balanceInput).toHaveValue(10000);
    expect(saveBtn).toBeEnabled();
    expect(small).not.toBeInTheDocument();

    fireEvent.click(saveBtn);

    const { pathname } = history.location;

    expect(pathname).toBe('/');

    screen.getByRole('img', {  name: /edit-icon/i});
    screen.getByText(/klv/i);
    screen.getByText(/10000/i);

    const addBtn2 = screen.getByRole('link', {  name: /add token/i});

    fireEvent.click(addBtn2);

    const tokenInput2 = screen.getByRole('textbox', {  name: /token/i});
    const balanceInput2 = screen.getByRole('spinbutton', {  name: /balance/i});

    fireEvent.input(tokenInput2, { target: { value: 'DVK' } });
    fireEvent.input(balanceInput2, { target: { value: 5000 } });

    const saveBtn2 = screen.getByRole('button', {  name: /save/i});
    fireEvent.click(saveBtn2);

    const editIcon = screen.getAllByRole('img', {  name: /edit-icon/i});
    expect(editIcon).toHaveLength(2);
  });

  test('button "Voltar" functionality', () => {
    const { history } = renderWithRouter(<App />);

    const addBtn = screen.getByRole('link', {  name: /add token/i});

    fireEvent.click(addBtn);

    const backBtn = screen.getByRole('button', {  name: /voltar/i});

    fireEvent.click(backBtn);

    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  test('checks error message', () => {
    localStorage.setItem('tokens', JSON.stringify(mockLocalStorage));

    renderWithRouter(<App />);

    const addBtn = screen.getByRole('link', {  name: /add token/i});

    fireEvent.click(addBtn);

    const saveBtn = screen.getByRole('button', {  name: /save/i});
    const tokenInput = screen.getByRole('textbox', {  name: /token/i});
    const balanceInput = screen.getByRole('spinbutton', {  name: /balance/i});

    fireEvent.input(tokenInput, { target: { value: 'KLV' } });
    fireEvent.input(balanceInput, { target: { value: 10000 } });

    fireEvent.click(saveBtn);

    screen.getByText(/token já existente!/i);
  });
});