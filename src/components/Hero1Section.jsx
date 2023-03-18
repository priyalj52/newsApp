import React, { useEffect, useState } from "react";
import Politics from "../images/politics.jpg";
import Food from "../images/food.jpg";
import Business from "../images/business.jpg";
import Sports from "../images/sports.jpg";
import { useNavigate } from "react-router-dom";
const Hero1Section = () => {
 const navigate =useNavigate();
  const [herodata, setherodata] = useState([]);
  const [subject ,setSubject]=useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      if (
        localStorage.getItem("Heronews") === undefined ||
        localStorage.getItem("Heronews") === null
      ) {
        await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=64fca12e4bed424e9c1b9118b8a2da9f`
          `https://newsapi.org/v2/top-headlines/sources?category=business&pageSize=6&apiKey=e4f4d0a0b670491eb0e397ff14666409`
        )
          .then((res) => res.json())
          .catch((Err) => console.log(Err))
          .then((res) => {
            console.log(res);
            setherodata(res.articles);
            localStorage.setItem("Heronews", JSON.stringify(res.articles));
            setherodata(res.sources);
            localStorage.setItem("Heronews", JSON.stringify(res.sources));
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
          navigate("/CustomNews");}}>Entertaiment</div>
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
          <div class="carousel-inner bg-slate-300 w-full md:p-5 border-[1px] border-black">
            {herodata &&
              herodata.length !== 0 &&
              herodata.map((val, idx) => (
                <div
                  className={`${
                    idx === 0 ? "carousel-item active" : "carousel-item"
                  }`}
                >
                  <div className="w-full flex border-[1px] border-black">
                    <img
                      class="w-[500px] h-[300px] object-cover "
                      src={`${
                        val.urlToImage === null
                          ? "https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg"
                          : val.urlToImage
                      }`}
                      alt="First slide"
                    />
                    <div className=" w-full flex flex-col justify-center items-center bg-cyan-400 p-5">
                      <div className="text-center w-full font-bold">
                        {val.title}
                      </div>
                      <div className=" text-blue-900 text-center text-xs">
                        {val.author}
                      </div>
                      <div className="w-full text-justify">
                        {val.description}
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#000"
                          class="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                          />
                        </svg>
                      </div>
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
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero1Section;
