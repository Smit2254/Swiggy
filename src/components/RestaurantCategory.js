import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className=' bg-gray-50 mx-auto my-4 shadow-lg p-4'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
          <span className='text-lg font-semibold'>
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? <span>{'🔺'}</span> : <span>{'🔻'}</span>}
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
