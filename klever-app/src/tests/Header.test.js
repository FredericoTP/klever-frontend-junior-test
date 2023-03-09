import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe('Test Header', () => {
  test('checks if items are rendered on the screen', () => {
    render(<Header />);

    const logo = screen.getByTestId('header-logo');
    
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('logo.svg');
  });
});