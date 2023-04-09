import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BG from '../images/no_image.jpg';
import "../../src/App.css"
const Hero1Section = () => {
 const navigate =useNavigate();
  const [herodata, setherodata] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      if (
        localStorage.getItem("Heronews") === undefined ||
        localStorage.getItem("Heronews") === null
      ) {
        // await fetch(
        //   `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=64fca12e4bed424e9c1b9118b8a2da9f`
        // )
        await fetch(
          // "http://localhost:3001/general"
          ("https://newsapp-d496.onrender.com/general")
        )
        // console.log(data)
          .then((res) => res.json())
          .catch((Err) => console.log(Err))
          .then((res) => {
           if(res.stat===404)
           {
            return alert("Kindly refresh the page")
            
           }
            console.log(res);
            setherodata(res.result.articles);
            localStorage.setItem("Heronews", JSON.stringify(res.result.articles));
          });
          
      } else {
        setherodata(JSON.parse(localStorage.getItem("Heronews")));
      }
    };
    fetchapi();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap w-full gap-3 p-4 justify-between font-bold text-sm">
        <div className="cursor-pointer hover:text-red-600" onClick={()=>{
          localStorage.setItem("subject", "Latest");
          navigate("/CustomNews");
        }}>
          All News
        </div>
        <div className="cursor-pointer hover:text-red-600"  onClick={()=>{
          localStorage.setItem("subject", "India");
          navigate("/CustomNews");}}>India</div>
        <div className="cursor-pointer hover:text-red-600"onClick={()=>{
          localStorage.setItem("subject", "Politics");
          navigate("/CustomNews");}} >Politics</div>
        <div className="cursor-pointer hover:text-red-600" onClick={()=>{
          localStorage.setItem("subject", "Sports");
          navigate("/CustomNews");}}>Sports</div>
        <div className="cursor-pointer hover:text-red-600" onClick={()=>{
          localStorage.setItem("subject", "Entertainment");
          navigate("/CustomNews");}}>Entertainment</div>
        <div className="cursor-pointer hover:text-red-600 " onClick={()=>{
          localStorage.setItem("subject", "Health");
          navigate("/CustomNews");}}>Health</div>
        <div className="cursor-pointer hover:text-red-600" onClick={()=>{
          localStorage.setItem("subject", "Technology");
          navigate("/CustomNews");}} >Technology</div>
        <div className="cursor-pointer hover:text-red-600" onClick={()=>{
          localStorage.setItem("subject", "Science");
          navigate("/CustomNews");}}>Science</div>  
              </div>
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner bg-[#a6adb299] w-full md:p-5 border-[1px] border-black">
            {herodata &&
              herodata.length !== 0 &&
              herodata.map((val, idx) => (
                <div
                key={idx}
                  className={`${
                    idx === 0 ? "carousel-item active" : "carousel-item"
                  }`}
                >
                  <div className="w-5/6 justify-center mx-auto my-0 flex border-[1px] border-black">
                    <img
                      class="w-[500px] h-[300px] object-cover "
                      src={`${
                        val.urlToImage === null
                          ? BG
                          : val.urlToImage
                      }`}
                      alt="First slide"
                    />
                    <div className=" w-full flex flex-col items-center bg-[#c4933d86] p-5">
                      <div className="text-center w-full text-2xl font-bold text-white">
                        {val.title}
                      </div>
                      <div className=" text-blue-900 font-semibold text-center text-md">
                        {val.author}
                      </div>
                      <div className="w-full text-justify  font-semibold">
                        {val.description}
                      </div>
                      <a href={val.url} className="bg-[#B5EF8A] hover:text-black cursor-pointer hover:no-underline	 p-1 text-center rounded-md shadow-lg font-semibold">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero1Section;
