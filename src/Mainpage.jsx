import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import CustomNews from './pages/CustomNews'
import NotFound from './NotFound'
import Search from './components/Search'
import Navbar from './components/Navbar'
const Mainpage = () => {
  const [Topic , setTopic ] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Navbar setTopic = {setTopic}/>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path='/CustomNews' element={<CustomNews />}></Route>
          <Route path='/Search' element={<Search Topic={Topic} />}></Route>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Mainpage
