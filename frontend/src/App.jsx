import React from 'react'
import './App.css'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import Testing from './pages/testing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Booking' element={<BookingPage />} />
          <Route path='/testing' element={<Testing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
