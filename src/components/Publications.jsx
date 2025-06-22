import React, { useEffect, useState } from 'react'
import leftarrow from '../assets/left_arrow.svg'
import rightarrow from '../assets/right_arrow.svg'
import { projectsData } from '../assets/assests';

const Publications = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardstoshow, setCardsToShow] = useState(1);

    useEffect(()=>{
      const updateCardsToShow =()=>{
        if(window.innerWidth >=1024){
            setCardsToShow(projectsData.length);
        }
        else{
            setCardsToShow(1)
        };
    }
        updateCardsToShow();

        window.addEventListener('resize',updateCardsToShow);
        return ()=>{
            window.removeEventListener('resize',updateCardsToShow);
        }
      
    },[])

    const nextProject=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex +1) % projectsData.length) 
    }

    const previousProject=()=>{
        setCurrentIndex((prevIndex)=> prevIndex===0 ? projectsData.length -1 : prevIndex - 1) 
    }
  return (
    <>
      <div
        className="container mx-auto  px-6 pt-20 md:px-20 lg:px-32  w-full overflow-hidden"
        id="Publications"
      >
        <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-900 inline-block border-b-4 border-blue-900 pb-2">
          Publications
        </h1>
      </div>

        {/* Slider Buttons */}
        <div className="flex justify-end items-center">
            <button onClick={previousProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
                <img src={leftarrow} alt="Previous" />
            </button>
            <button onClick={nextProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
                <img src={rightarrow} alt="Next" />
            </button>
        </div>

        {/* Projects slider container */}
        <div className="overflow-hidden mt-2">
            <div className="flex gap-8 transition-transform duration-500 ease-in-out"
             style={{transform:`translateX(-${(currentIndex*100)/cardstoshow}%)`}}>
              {
                projectsData.map((project,index)=>(
                   <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                      <img src={project.image} alt={project.title} className="w-full h-auto mb-14"/>
                   </div>
                ))
              }
            </div>
        </div>
      </div>
    </>
  )
}

export default Publications