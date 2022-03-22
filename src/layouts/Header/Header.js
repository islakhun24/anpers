import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="w-full z-50 fixed flex items-center flex-row px-4 md:px-8 h-12 justify-between">
        <Link to="/">
          <img src={logo} className="h-6" alt="" />
        </Link>
        <div className='gap-6 text-base font-semibold text-white flex flex-row'>
          <Link to="/" className='cursor-pointer hover:text-anpers-blue'>Home</Link>
          <Link to="/product" className='cursor-pointer hover:text-anpers-blue'>Product</Link>
          <Link to="/about" className='cursor-pointer hover:text-anpers-blue'>About</Link>
          <Link to="/service" className='cursor-pointer hover:text-anpers-blue'>Service</Link>
          <Link to="/contact-us" className='cursor-pointer hover:text-anpers-blue'>Contact Us</Link>
        </div>
      </div>
    );
  }
}

export default Header;