import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../mocks/mockResMenu.json';
import { act } from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test('should Load Restaurant Menu Component', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText('Starters (5)');

  fireEvent.click(accordionHeader);

  const list = screen.getAllByTestId('foodItems');

  expect(list.length).toBe(5);

  const addButtons = screen.getAllByRole('button', { name: 'Add +' });

  fireEvent.click(addButtons[0]);

  const cartButton = screen.getByText('Cart (1)');

  expect(cartButton).toBeInTheDocument();
});
