import React, { useEffect, useState } from "react";
import BG from '../images/no_image.jpg';
const Recommendation = () => {
  const [data, setData] = useState([]);
  const filter_data = (str) => {
    return str.split("T")[0];
  };

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
    };
    fetchapi().catch(handleError);
  }, []);

  return (
    <div>
      <h1 className="font-bold text-base mb-6 ml-12">Recommendation Topic </h1>
      <div className="mx-auto my-0 flex flex-col gap-3 p-3">
        {data &&
          data.length !== 0 &&
          data.map((val, idx) => {
            return (
              <div key={idx} className="flex gap-3 bg-[#E1DEE3] w-5/6 rounded-md justify-between p-3 mx-auto my-0 border-black border-2">
                <div className="w-full">
                  <a href={val.url} className="font-semibold text-lg">
                    {val.title}
                  </a>
                  <div className="flex justify-between w">
                    <div className="author text-orange mr-4">
                      {val.source.name}
                    </div>
                    <div className="publish mb-10 text-orange">
                        {filter_data(val.publishedAt)}
                      </div>
                  </div>
                  
                </div>
                <div>
                <img src={`${
                        val.urlToImage === null
                          ? BG
                          : val.urlToImage
                      }`} alt="img" className="w-[200px] object-cover" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Recommendation;
