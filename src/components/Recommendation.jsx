import React, { useEffect, useState } from "react";

const Recommendation = () => {
  const [data, setData] = useState([]);
  const filter_data = (str) => {
    return str.split("T")[0];
  }

  useEffect(() => {
    const handleError = (err) => {
      console.log(`Failed ${err}`);
    };
    const fetchapi = async () => {
      if (
          localStorage.getItem("TopHeadnews") === undefined ||
          localStorage.getItem("TopHeadnews") === null
        ) {
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=in&pageSize=3&apiKey=64fca12e4bed424e9c1b9118b8a2da9f`
          );
          console.log(response);
          const data = await response.json();
          console.log(data.articles);
          setData(data.articles);
          localStorage.setItem("TopHeadnews", JSON.stringify(data.articles));
        } else {
          setData(JSON.parse(localStorage.getItem("TopHeadnews")));
        }
      }
      fetchapi().catch(handleError);
    
  },[]);
  
  return (
    <div >
      <h1 className='font-bold text-base mb-6 ml-12'>Recommendation Topic </h1>
      <div>
        {
          data && data.length !== 0 && data.map((val, idx) => {
            return (
              <div key={idx} className="heading" >
                <div className="top flex justify-around w-100">
                  <a href={val.url} className="font-medium text-sm">{val.title}</a>
                  <img src={val.urlToImage} alt="img" className='w-40 ml-4' />
                </div>
                <div className="bottom flex ml-24 ">
                  <div className="author text-orange mr-4">{val.source.name}
                  </div>

                  <div className="publish mb-10 text-blue">{filter_data(val.publishedAt)}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Recommendation;
