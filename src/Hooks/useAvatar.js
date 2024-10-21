import { useState } from 'react';

const useAvatar = () => {
    const [avatars, setAvatars] = useState({
        female: [],
        male: [],
      });

  const getAvatars = async (genre) => {
    let profileImages = JSON.parse(localStorage.getItem(genre));

    if (!profileImages) {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?gender=${genre}&results=100`
        );
        const data = await response.json();
        profileImages = data.results.map((item) => item.picture.medium);
        localStorage.setItem(genre, JSON.stringify(profileImages));
      } catch (error) {
        console.log(error);
        return [];
      }
    }
    setAvatars((prevAvatars) => ({
        ...prevAvatars,
        [genre]: profileImages,
      }));

    return profileImages;
  };

  return {
    femaleAvatars: avatars.female,
    maleAvatars: avatars.male,
    getAvatars,
  };
};

export default useAvatar;