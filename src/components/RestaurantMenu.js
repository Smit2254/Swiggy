import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-2'>{name}</h1>
      <p className='text-gray-600 mb-6'>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2 className='text-2xl font-semibold mb-4'>Menu</h2>
      <ul className='space-y-4'>
        {itemCards.map((item) => (
          <li key={item.card.info.id} className='flex justify-between items-center border-b pb-2'>
            <span>{item.card.info.name}</span>
            <span>₹ {item.card.info.price / 100}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
