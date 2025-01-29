import React, { useEffect, useRef, useState } from 'react'
import { MdChevronLeft,MdChevronRight } from 'react-icons/md'
import { POSTER_IMG_URL } from '../utils/constants'

const MovieList = ({genrus,moviesList}) => {
    // const [toggleButton,setToggleButton] = useState(false)
    const scrollX = useRef(null)
    // const handleScroll2 = (scrollOffset) => {
    //     console.log(scrollX)
    //     scrollX.current.scrollLeft += scrollOffset;
    //     console.log(scrollX.current.scrollLeft)
    //   };
    // const handleScroll = () => {
    //     console.log(scrollX)
    //     scrollX.current.scrollLeft += scrollX.current.scrollWidth;
    //     console.log(scrollX)
    //   };
    //   useEffect(()=>{
    //     handleScroll()
    //   },[toggleButton])


    const slideLeft = ()=>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500 
    }
    const slideRight = ()=>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500 
    }



  return (
    <div className='px-6  absolute -mt-80 z-10 bg-black ' >
        {genrus&&
            genrus?.map((gen,index)=>{
                return(
                    <div key={index}>
                        <h1 className=' font-bold text-3xl py-2' >{gen}</h1>
                        <div  className='flex items-center'>
                        {/* <MdChevronLeft  onClick={()=>setToggleButton(!toggleButton)} size={100} /> */}
                        {/* <MdChevronLeft  onClick={()=>handleScroll2(-20)} size={100} /> */}
                        <MdChevronLeft  className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={100} />
                        <div  id='slider' ref={scrollX} className=' flex overflow-x-scroll scroll  scroll-smooth scrollbar-hide' >
                                {moviesList&& moviesList?.map(movie=>{
                                    return (
                                          <img  
                                            className='w-60 p-6 rounded-[2.5rem] inline-block cursor-pointer hover:scale-90 ease-in-out duration-300'
                                            src={POSTER_IMG_URL+movie.poster_path} 
                                            alt={movie.title}
                                          />
                                    )
                                })
                                }
                        </div>
                        {/* <MdChevronRight  onClick={()=>handleScroll2(20)} size={100} /> */}
                        {/* <MdChevronRight  onClick={()=>setToggleButton(!toggleButton)} size={100} /> */}
                        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={100} />
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default MovieList
