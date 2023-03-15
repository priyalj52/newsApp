import React, { useEffect, useState } from 'react'
import Politics from "../images/politics.jpg"
import Food from "../images/food.jpg"
import Business from "../images/business.jpg"
import Sports from "../images/sports.jpg"
const Hero1Section = () => {
  const [herodata, setherodata] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      if (localStorage.getItem("Heronews") === undefined || localStorage.getItem("Heronews") === null) {
        await fetch(`https://newsapi.org/v2/top-headlines/sources?category=business&pageSize=6&apiKey=e4f4d0a0b670491eb0e397ff14666409`)
          .then((res) => res.json())
          .catch((Err) => console.log(Err))
          .then(res => { setherodata(res.sources); localStorage.setItem("Heronews", JSON.stringify(res.sources)) });
      } else {
        setherodata(JSON.parse(localStorage.getItem("Heronews")));
      }
    }
    fetchapi();
  }, []);
  return (
    <div>
      <div className='flex flex-wrap w-full gap-3 p-4 justify-between font-bold text-sm'>
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
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner bg-slate-400 w-full md:p-5 border-[1px] border-black">
            {
              herodata && herodata.length !== 0 && herodata.map((val , idx) =>(
                <div className={`${idx === 0 ? 'carousel-item active' : 'carousel-item'}`}>
                  <div className='w-full border-[1px] border-black'>
                    <img class="w-1/2" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg" alt="First slide" />
                  </div>
                </div>
              ))
            }
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>



      </div>
    </div>
  )
}

export default Hero1Section