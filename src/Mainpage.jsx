import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import CustomNews from './pages/CustomNews'
import NotFound from './NotFound'

const Mainpage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path='/CustomNews' element={<CustomNews />}></Route>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Mainpage
