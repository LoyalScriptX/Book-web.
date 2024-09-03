import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Explore for the book that enchants</h2><br />
                <p className='header-text fs-18 fw-3'>Reading is a journey where every page opens a window to new worlds and endless possibilities.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header