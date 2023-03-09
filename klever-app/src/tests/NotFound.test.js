import { screen, fireEvent } from "@testing-library/react";
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";
import { act } from 'react-dom/test-utils';

describe('Test page NotFound', () => {
  test('checks if items are rendered on the screen', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/bla');
    })
    
    const image = await screen.findByRole('img', {  name: /404 notfound/i});
    const btn = screen.getByRole('link', {  name: /página inicial/i});
    screen.getByRole('heading', {  name: /página não encontrada!/i});
    screen.getByText(  /a página que você procura não existe ou um outro erro ocorreu\./i);

    expect(image.src).toContain('error.svg');

    fireEvent.click(btn);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});