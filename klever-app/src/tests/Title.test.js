import { render, screen } from "@testing-library/react";
import Title from "../components/Title";

describe('Test Title', () => {
  test('checks if items are rendered on the screen', () => {
    render(<Title />);

    const image = screen.getByTestId('title-image');
    const title = screen.getByTestId('title-h1');

    expect(image).toBeInTheDocument();
    expect(image.src).toContain('shooting-star.svg');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Wish Wallet');
  });
});