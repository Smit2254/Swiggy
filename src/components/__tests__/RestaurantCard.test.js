import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

test('should render RestaurantCard Component with props data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const RestaurantName = screen.getByText('Pizza Hut');

  expect(RestaurantName).toBeInTheDocument();
});

test('should render RestaurantCard Component with Veg Lable', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const RestaurantName = screen.getByText('Pizza Hut');

  expect(RestaurantName).toBeInTheDocument();
});
