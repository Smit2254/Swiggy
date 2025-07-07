import { CDN_URL } from '../utils/constant';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } = resData?.info;
  return (
    <div
      data-testid='resCard'
      className='w-60 h-85 bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-transform cursor-pointer border-2 border-gray-100'
    >
      <img className='w-full h-40 object-cover rounded-lg' src={CDN_URL + cloudinaryImageId} />
      <h3 className='text-lg font-semibold mt-3'>{name}</h3>
      <h4 className='text-sm text-gray-600 mt-1'>{costForTwo}</h4>
      <h4 className='text-sm text-gray-600 mt-1'>{cuisines.join(',')}</h4>
      <h4 className='text-sm text-gray-600 mt-1'>{avgRating + ' ' + 'stars'}</h4>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-sky-950 text-green-500 m-2 p-2 rounded'>Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
