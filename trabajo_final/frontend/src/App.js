import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer.js'

import ContactoPage from './pages/ContactoPage'
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import LibrosPage from './pages/LibrosPage'


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="nosotros" element={<NosotrosPage/>}/>
        <Route path="libros" element={<LibrosPage/>}/>
        <Route path="contacto" element={<ContactoPage/>}/>
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
