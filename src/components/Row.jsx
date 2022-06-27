import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import Movies from './Movies';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

function Row(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(props.fetchURL).then((responce) => {
            setMovies(responce.data.results)
        })
    }, [props.fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider'+props.rowID);
        slider.scrollLeft -= 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider'+props.rowID);
        slider.scrollLeft += 500;
    }
    
  return (
    <React.Fragment>
        <h2>{props.title}</h2>
        <div className='text-white p-4 relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='absolute bg-white text-black rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block' size={40}/>
            <div id={`slider${props.rowID}`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => {
                    return <Movies item={item} key={id}/>
                })}
            </div>
            <MdChevronRight onClick={slideRight} className='absolute text-black bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block' size={40}/>
        </div>
    </React.Fragment>
  )
}

export default Row;