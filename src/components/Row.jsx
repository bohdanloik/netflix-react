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
        <h2 className='text-white/100 font-bold md:text-xl p-4'>{props.title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft
            onClick={slideLeft}
            className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
            />
            <div
            id={'slider' + props.rowID}
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
            >
            {movies.map((item, id) => (
                <Movies key={id} item={item} />
            ))}
            </div>
            <MdChevronRight
            onClick={slideRight}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
            />
        </div>
    </React.Fragment>
  )
}

export default Row;