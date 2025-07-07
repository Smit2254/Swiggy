import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('should render header component with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole('button'); 1st way
  const loginButton = screen.getByText('Login');

  expect(loginButton).toBeInTheDocument();
});

test('should render header component with Cart Item 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText('Cart (0)');

  expect(cartItems).toBeInTheDocument();
});

test('should render header component with Cart Item', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

test('should change Login Button to Logout on Click in header component', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', { name: 'Logout' });

  expect(logoutButton).toBeInTheDocument();
});
