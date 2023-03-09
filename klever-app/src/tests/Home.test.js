import { screen, fireEvent } from "@testing-library/react";
import Home from "../pages/Home";
import renderWithRouter from "./helpers/renderWithRouter";

const TITLE_BTN = 'home-title-btn';

describe('Test page Home', () => {
  test('checks if items are rendered on the screen and url path', () => {
    const { history } = renderWithRouter(<Home />);
    const { pathname } = history.location;

    expect(pathname).toBe('/');

    const addBtn = screen.getByTestId(TITLE_BTN);
    const imageEmpty = screen.getByTestId('home-empty-image');
    const textEmpty = screen.getByTestId('home-empty-text');

    expect(addBtn).toBeInTheDocument();
    expect(addBtn).toHaveTextContent('Add Token');
    expect(imageEmpty).toBeInTheDocument();
    expect(imageEmpty.src).toContain('empty-wallet.svg');
    expect(textEmpty).toBeInTheDocument();
    expect(textEmpty).toHaveTextContent('Adicione algum Token!');
  });

  test('button "Add Token" functionality', () => {
    const { history } = renderWithRouter(<Home />);
    
    const addBtn = screen.getByTestId(TITLE_BTN);
    
    fireEvent.click(addBtn);

    const { pathname } = history.location;

    expect(pathname).toBe('/add-token');
  });
});