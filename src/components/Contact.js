const Contact = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <div className='bg-white shadow-2xl rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-blue-600 rounded-l-2xl hidden md:flex flex-col justify-center items-center text-white p-8'>
          <h2 className='text-4xl font-bold mb-4'>Get in Touch</h2>
          <p className='text-lg'>We'd love to hear from you. Let's talk.</p>
        </div>

        <div className='p-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contact Us</h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-gray-700 font-medium mb-2'>Name</label>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Email</label>
              <input
                type='email'
                placeholder='you@example.com'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Message</label>
              <textarea
                rows='4'
                placeholder='Your Message'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
