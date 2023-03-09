import { screen, fireEvent } from "@testing-library/react";
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";
import mockLocalStorage from "./helpers/mockLocalStorage";

describe('Test page EditToken', () => {
  beforeEach(() => {
    localStorage.setItem('tokens', JSON.stringify(mockLocalStorage));
  })

  afterEach(() => {
    localStorage.clear();
  })

  test('checks if items are rendered on the screen', () => {
    const { history } = renderWithRouter(<App />);

    const editIcon = screen.getAllByRole('img', {  name: /edit-icon/i});
    
    expect(editIcon).toHaveLength(3);

    fireEvent.click(editIcon[0]);

    const { pathname } = history.location;

    expect(pathname).toBe('/edit-token');

    screen.getByRole('heading', {  name: /edit token/i});
    screen.getByRole('button', {  name: /voltar/i});
    screen.getByRole('button', {  name: /save/i});
    screen.getByRole('button', {  name: /remove/i});
  });

  test('button "Save" functionality', () => {
    const { history } = renderWithRouter(<App />);

    const editIcon = screen.getAllByRole('img', {  name: /edit-icon/i});

    fireEvent.click(editIcon[0]);

    const saveBtn = screen.getByRole('button', {  name: /save/i});
    const tokenInput = screen.getByRole('textbox', {  name: /token/i});
    const balanceInput = screen.getByRole('spinbutton', {  name: /balance/i});

    expect(tokenInput).toHaveValue('KLV');
    expect(balanceInput).toHaveValue(10000);

    fireEvent.input(tokenInput, { target: { value: 'DVK' } });
    fireEvent.click(saveBtn);

    screen.getByText(/token já existente!/i);

    fireEvent.input(tokenInput, { target: { value: 'FSR' } });
    fireEvent.click(saveBtn);

    const { pathname } = history.location;

    expect(pathname).toBe('/');
    screen.getByText(/fsr/i);
  });

  test('button "Remove" functionality', () => {
    const { history } = renderWithRouter(<App />);

    const editIcon = screen.getAllByRole('img', {  name: /edit-icon/i});

    fireEvent.click(editIcon[0]);

    const removeBtn = screen.getByRole('button', {  name: /remove/i});
    
    global.confirm = jest.fn(() => true);

    fireEvent.click(removeBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/');

    const editIcon2 = screen.getAllByRole('img', {  name: /edit-icon/i});
    expect(editIcon2).toHaveLength(2);

    fireEvent.click(editIcon2[0]);

    const removeBtn2 = screen.getByRole('button', {  name: /remove/i});

    global.confirm = jest.fn(() => false);

    fireEvent.click(removeBtn2);

    const editIcon3 = screen.getAllByRole('img', {  name: /edit-icon/i});
    expect(editIcon3).toHaveLength(2);
  });
});