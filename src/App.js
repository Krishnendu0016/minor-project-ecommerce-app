import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './com/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Login from './pages/Login';
import compareProduct from './pages/compareProduct';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Layout/>}>
          <Route index element={<Home/>}/> 
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="store" element={<OurStore/>} />
          <Route path="compare-product" element={<compareProduct/>} />
          <Route path="login" element={<Login/>} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
