import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
import { WishListContext } from '../../Context/WishListContext'

export default function Navbar() {
  let { wishList ,  } = useContext(WishListContext);
  let { cart } = useContext(CartContext);
  let { userData, setUserData } = useContext(UserContext);
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }

  return <>
    <section className={`${style.navbar} bg-gray-200 py-4 fixed top-0 left-0 right-0 shadow-sm`}>
      <div className={`${style.main} px-[8%] mx-auto flex justify-between items-center `}>
        <div className="navbarLeft flex items-center">
          <NavLink ><img src={logo} className='w-[200px]' alt="Photo Not Found" /></NavLink>
        </div>
        <div className={`${style.navbarMiddle}`}>
          {userData && <ul className='flex space-x-4 text-[19px] font-bold ms-5 '>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
            <li><NavLink to="categories">Categories</NavLink></li>
            <li><NavLink to="brands">Brands</NavLink></li>
            <li><NavLink to="allorders">Orders</NavLink></li>
          </ul>}
        </div>
        <div className={`${style.navbarRight} navbarRight flex items-center cursor-pointer `}>
          <div className="icons flex space-x-4 text-[19px]">
            <NavLink target='_blank' to="https://www.facebook.com/"><i className="fa-brands fa-facebook text-blue-900"></i></NavLink>
            <NavLink target='_blank' to="https://www.linkedin.com/"><i className="fa-brands fa-linkedin text-blue-900"></i></NavLink>
            <NavLink target='_blank' to="https://x.com/"><i className="fa-brands fa-x-twitter"></i></NavLink>
            <NavLink target='_blank' to="https://www.instagram.com/"><i className="fa-brands fa-instagram text-red-500"></i></NavLink>
            <NavLink target='_blank' to="https://www.youtube.com/#!;"><i className="fa-brands fa-youtube text-[red]"></i></NavLink>
          </div>
          <ul className="links ms-5 space-x-4 flex items-center ">
            {userData ? <>
              <li onClick={() => logOut()} className='btn'>LogOut</li>
              <li className='relative'><NavLink to="cart"><i className="fa-solid fa-cart-shopping text-[26px] text-[#0284c7]"></i></NavLink> <span className='bg-white w-[0.6cm] h-[0.6cm] flex items-center justify-center text-[#0284c7] rounded-full absolute top-[-15px] right-[-10px]'>{cart ? cart.numOfCartItems : 0}</span></li>
              <li className='relative'><NavLink to="wishlist"><i className="fa-solid fa-heart text-[26px] text-red-500 "></i></NavLink> <span className='bg-white w-[0.6cm] h-[0.6cm] flex items-center justify-center text-red-500 rounded-full absolute top-[-15px] right-[-10px]'>{ wishList ? wishList.data.length : 0}</span> </li>
            </> :
              <>
                <li><NavLink to="register" className='btn'>Register</NavLink></li>
                <li><NavLink to="login" className='btn'>Login</NavLink></li>
              </>}
            


          </ul>
        </div>
      </div>
    </section>

  </>
}
