import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test('should search resList for pizza input in the Body Component', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId('resCard');

  expect(cardsBeforeSearch.length).toBe(8);

  const searchButton = screen.getByRole('button', { name: 'Search' });

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, { target: { value: 'Pizza' } });

  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId('resCard');

  expect(cardsAfterSearch.length).toBe(1);
});

test('should filter Top Rated Restaurant in the Body Component', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId('resCard');

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedButton = screen.getByRole('button', { name: 'Top Rated Restaurants' });

  fireEvent.click(topRatedButton);

  const cardsAfterFilter = screen.getAllByTestId('resCard');

  expect(cardsAfterFilter.length).toBe(5);
});
