import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constant';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div key={item.card.info.id} className='p-2 m-2 flex justify-between items-start border-b-2 border-gray-200'>
            <div className='py-2 w-9/12'>
              <p className='font-bold'>{item.card.info.name}</p>
              <p className='font-medium'>₹{item.card.info.price / 100}</p>
              <p className='text-sm font-light'>{item.card.info.description}</p>
            </div>
            <div className='w-3/12'>
              <div className='absolute'>
                <button className='p-2 my-21 bg-black text-white shadow-lg rounded' onClick={() => handleAddItem(item)}>
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
