import React, {useState} from 'react';
import {imgBaseLinkW500} from '../requests';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

function Movies({item}) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShows = async () => {
    if(user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    } else {
      alert('Please, Log In')
    }
  }

  return (
    <div className='w-[200px] inline-block relative p-2 cursor-pointer'>
      <img className='w-full h-auto block' src={`${imgBaseLinkW500}${item.backdrop_path}`} alt={item.title} />
      <div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100'>
          <p className='flex justify-center items-center h-full text-center text-sm whitespace-normal'>{item?.title}</p>
          <p onClick={saveShows}>
          {like ? <FaHeart  className='absolute top-4 text-gray-300 left-4'/> : <FaRegHeart className='absolute top-4 text-gray-300 left-4'/>}
          </p>
      </div>
    </div>
  )
}

export default Movies