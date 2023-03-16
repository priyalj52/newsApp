import React, { useEffect, useState } from 'react'

const CustomNews = () => {
    const [res, setRes] = useState([]);
    // const filter_data=(str)=>{
    //     let idx=str.indexOf("[");
    //     return str.slice(0,idx);
    // }    
    useEffect(() => {
        const handleError = (err) => {
            console.log(`Failed ${err}`);
        }
        const subject = localStorage.getItem("subject");
        const fetchapi = async () => {
            const response = await fetch(`https://newsapi.org/v2/everything?sortBy=popularity&q=${subject}&pageSize=10&language=en&apiKey=64fca12e4bed424e9c1b9118b8a2da9f`);
            console.log(response);
            const data = await (response.json());
            console.log(data);
            setRes(data.articles);
        }
        fetchapi().catch(handleError);
    }, []);

    return (
     
            <div className="main-container">
               <div className="heading">
                <h1 className='font-bold text-7xl  mt-12 text-center '>{localStorage.getItem("subject")} News</h1>
               </div>
                <div>
                   { 
                    res && res.length !== 0 && res.map((val, idx) => {
                        return (
                            <div key={idx} className="heading" >
                                <img src={val.urlToImage} className="max-w-prose m-24 " alt="img" />
                                <a href={val.url}className=" text-xl font-medium text-black">{val.title}</a>
                                
                                <p  className="text-slate-500">
                                 {val.description}
                                </p>
                            </div>
                        )
                        })
                    }
</div>
</div>


    )
                    }

            export default CustomNews
