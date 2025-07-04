import { useEffect, useState } from 'react';

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://api.github.com/users/Smit2254');

    const json = await data.json();
    setUserData(json);
  };

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>About Us</h1>

      {userData ? (
        <div className='bg-white border-gray-100 border-2 shadow-xl rounded-2xl p-6 flex flex-col items-center space-y-4'>
          <img src={userData.avatar_url} alt='Profile' className='w-40 h-40 rounded-full border-2 border-gray-300' />
          <h2 className='text-xl font-semibold'>{userData.name}</h2>
          <p className='text-gray-600 text-center'>{userData.bio}</p>
          <a
            href={userData.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
          >
            View GitHub Profile
          </a>
        </div>
      ) : (
        <p className='text-center text-gray-500'>Loading profile...</p>
      )}
    </div>
  );
};

export default About;
