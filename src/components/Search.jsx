import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BG from '../images/no_image.jpg';
const Search = ({ Topic }) => {
const navigate=useNavigate();
  const [res, setRes] = useState([]);
  useEffect(() => {
    const handleError = (err) => {
      console.log(`Failed ${err}`);
    };
  
   if(Topic) 
   {
    // console.log(Topic);
    // const arr=[]
    const fetchapi = async () => {
    //   // const response = await fetch(
    //   //   `https://newsapi.org/v2/everything?sortBy=popularity&q=${Topic}&pageSize=10&language=en&apiKey=64fca12e4bed424e9c1b9118b8a2da9f`
    //   // );
    //   const response = await fetch(
    //     "http://localhost:3001/topic",{
    //       method:"POST",
    //       mode:'no-cors',
    //       headers: { 'Content-Type': 'application/json',
    //       "Accept":"application/json"
    //      },
    //       body: JSON.stringify(
    //        {Topic}),
    //     }
    //   );
    //   console.log(response);
    //   const data = await response.json();
    //   console.log(data);
    //   setRes(data.articles);
    let arr = [];
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: Topic })
  };
    await fetch(
      // "http://localhost:3001/topic",requestOptions
      "https://newsapp-d496.onrender.com/topic",requestOptions
    ).then((res) => res.json()).catch((err) => console.error(err))
    .then((response) => arr = response);
    // console.log(arr);
    if(arr.stat === 404)
    {
      alert("error try again");
      return;
    }
    setRes(arr.result.articles);
  
   };
  fetchapi().catch(handleError);
  }}, [Topic]);



  return (
    <div>
       <div>
            <button type="button" onClick={()=>{navigate('/')}} className="bg-[#EE964B] p-2 text-center rounded-md">Go Back</button>
        </div>
      <div className="w-full flex gap-5 flex-col items-center mx-auto my-0 p-5">
        {res &&
          res.length !== 0 &&
          res.map((val, idx) => {
            return (
              <div key={idx} className="w-5/6 bg-[#0D3B66] border-2 border-black rounded-lg flex p-2 gap-2">
                <img
                  src={`${
                    val.urlToImage === null
                      ? BG
                      : val.urlToImage
                  }`}
                  className="w-[400px] rounded-xl border-2 border-black"
                  alt="img"
                />
                <div>
                <a href={val.url} className=" text-xl font-medium text-white">
                  {val.title}
                </a>
                <p className="text-slate-200 text-justify p-2">{val.description}</p>
                </div>
               
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Search
