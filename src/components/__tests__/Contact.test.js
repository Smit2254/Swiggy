import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us Page Test Cases', () => {
  beforeAll(() => {
    console.log('Before All');
  });

  beforeEach(() => {
    console.log('Before Each');
  });

  afterAll(() => {
    console.log('After All');
  });

  afterEach(() => {
    console.log('After Each');
  });

  test('should load contact us component', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading', { level: 2, name: 'Contact Us' });

    expect(heading).toBeInTheDocument();
  });

  test('should load button in contact us component', () => {
    render(<Contact />);

    const button = screen.getByText('Send Message');

    expect(button).toBeInTheDocument();
  });

  test('should load input name in contact us component', () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText('Your Name');

    expect(input).toBeInTheDocument();
  });
});
