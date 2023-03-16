import React, { useEffect } from "react";
// import { IoFastFoodSharp } from "react-icons/io5"
import Politics from "../images/politics.jpg"
import Food from "../images/food.jpg"
import Business from "../images/business.jpg"
import Sports from "../images/sports.jpg"
import Entertainment from "../images/entertainment.jpg"
import Culture from "../images/culture.jpg"
import Science from "../images/science.jpg"
import { useNavigate } from "react-router-dom";
const Prediction = () => {
    const navigate=useNavigate();
    return (
        <div className="predict">
            <div className="p-header">
                <h1 className="font-bold text-2xl mb-9" >   Popular Recommendations</h1>
                <div className="icons flex w-full flex-wrap justify-between cursor-pointer">
                 
                    
                <img onClick={()=>{
                    localStorage.setItem("subject" , "politics");
                    navigate('/CustomNews');
                }} src={Politics} alt="politics" className="w-40 pr-2  rounded-full ml-4"   />
              
                <img 
                onClick={()=>{
                    localStorage.setItem("subject","Food")
              navigate('/CustomNews')    
              
                }}
                
                src={Food} alt="health" className="w-40   rounded-full " />

                <img    onClick={()=>{
                    localStorage.setItem("subject","Sports")
              navigate('/CustomNews')  }}
                src={Sports} alt="sports" className="w-40   rounded-full " />
                
                <img  onClick={()=>{
                    localStorage.setItem("subject","Entertainment")
              navigate('/CustomNews')  }} src={Entertainment} alt="entertainment" className="w-40   rounded-full " />
                <img  onClick={()=>{
                    localStorage.setItem("subject","Culture")
              navigate('/CustomNews')  }} src={Culture} alt="general" className="w-40  rounded-full " />
                <img   onClick={()=>{
                    localStorage.setItem("subject","Business")
              navigate('/CustomNews')  }}src={Business} alt="business" className="w-40  rounded-full " />
                <img  onClick={()=>{
                    localStorage.setItem("subject","Science")
              navigate('/CustomNews')  }} src={Science} alt="science" className="w-40  rounded-full " />
                </div>
            </div>
        </div>
    )
}
export default Prediction;