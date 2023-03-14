import React, { useEffect, useState } from 'react'
import Politics from "../images/politics.jpg"
import Food from "../images/food.jpg"
import Business from "../images/business.jpg"
import Sports from "../images/sports.jpg"
const Hero1Section = () => {
      const [subject, setsubject] = useState("");
      // useEffect(() => {
      //       const fetchapi = async () => {
      //             const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e4f4d0a0b670491eb0e397ff14666409`);
      //             console.log(response);
      //       }
      //       fetchapi();
      // }, []);
      return (
            <div>
                  <div className='flex flex-wrap w-full p-5 justify-between font-bold text-sm'>
                        <div className='cursor-pointer hover:text-red-600'>All News</div>
                        <div className='cursor-pointer hover:text-red-600'>Politics</div>
                        <div className='cursor-pointer hover:text-red-600'>Sports</div>
                        <div className='cursor-pointer hover:text-red-600'>Entertaiment</div>
                        <div className='cursor-pointer hover:text-red-600'>General</div>
                        <div className='cursor-pointer hover:text-red-600'>International</div>
                        <div className='cursor-pointer hover:text-red-600'>World</div>
                        <div className='cursor-pointer hover:text-red-600'>India</div>
                  </div>
                  <div>
                  <div class="max-w-2xl m-auto">
  <div id="default-carousel" class="relative mb-4 mt-4 ml-4" data-carousel="static">

    <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src={Politics} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={Food} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={Business} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
    </div>
    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
  <p class="ml-4">This carousel component is part of the <a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/components/carousel/" target="_blank">Flowbite component library.</a></p>
</div>
                  </div>
            </div>
      )
}

export default Hero1Section