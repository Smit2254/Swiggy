import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className='max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-xl'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Your Cart</h1>
        <button
          className='bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg'
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className='text-center text-gray-500'>Your cart is empty.</p>
      ) : (
        <div className='space-y-4'>
          {cartItems.map((item) => (
            <div key={item.card.info.id} className='flex justify-between items-center border-b pb-4'>
              <div className='w-9/12'>
                <h2 className='font-semibold text-lg'>{item.card.info.name}</h2>
                <p className='text-gray-500 text-sm'>{item.card.info.description}</p>
              </div>

              <div className='flex items-center gap-4'>
                <span className='font-semibold'>₹{item.card.info.price / 100}</span>
                <button
                  className='text-red-500 hover:text-red-700 text-sm'
                  onClick={() => handleRemoveItem(item.card.info.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
