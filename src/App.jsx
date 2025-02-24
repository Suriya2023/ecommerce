import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Na from './Components/Na'
import User_Login from './Components/Login';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import CardGrid from './Components/CardGrid';
import MBV from './Components/MobileView';
import UserLogin from './Components/UserLogin';
import User_Page from './Components/User_Page';
import Sing_Up from './Components/SingUp';
import Your_List from './Components/Your_List';
import Help from './Components/Help';
import Search from './Components/Search';
import SlHomeUSer from './Components/SlHomeUSer';
import AddresVard from './Components/adCard'
import BusinessAc from './Components/BusinessAc';
import { CartProvider, useCart } from './context/CartContext';
import Payment_Methods from './Components/Payment_Methods';
import LoginSecurity from './Components/LoginSecurity';
import Payment from './Components/Payment';

import Womens from './Components/womens'
import Childrens from './Components/Kids';
import HomeCare from './Components/homeLeaving';
import BeautyCare from './Components/BeautyCare';
import Studio from './Components/Studio';


function App() {
  // let A = document.getElementById('cales');
  // let b = document.getElementsByTagName(<Na/>)
  // let A = document.getElementsByTagName(<Na/>).style;

  // let A = document.body.style;
  const [mode, setMode] = useState('light')
  // const { addToCart } = useCart();

  let ToggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black"
      document.body.style.color = "white"
      document.body.style.transition = 'all .5s'
      // A.transform = "rotate(360deg)";
      // _display.transition = "all 3s";

      document.getElementById('mbbottom').style.background = "black"
      document.getElementById('mbbottom').style.color = "white"

      document.getElementById('call').style.background = "white"
      document.getElementById('call').style.color = "black"
      document.getElementById('call').style.border = "1px solid "

      document.getElementById('call1').style.background = "white"
      document.getElementById('call1').style.color = "black"
      document.getElementById('call1').style.border = "1px solid black"


      document.getElementById('payment-container').style.background = "black"
      document.getElementById('payment-container').style.color = "white"
      document.getElementById('payment-container').style.border = "1px solid black"


      document.getElementById('kklight').style.background = "black"
      document.getElementById('kklight').style.color = "white"
      document.getElementById('kklight').style.border = "1px solid black"


    } else {
      setMode('light');
      // _display.transition = "all 3s";
      // A.transform = "rotate(-360deg)";


      // document.getElementById('kklight').style.background = "white"
      // document.getElementById('kklight').style.color = "black"
      // document.getElementById('kklight').style.border = "1px solid black"

      document.body.style.background = "white"
      document.body.style.color = "black"
      document.body.style.transition = 'all .5s'

      document.getElementById('call').style.background = "black"
      document.getElementById('call').style.color = "white"
      document.getElementById('call').style.border = "1px solid black"

      document.getElementById('call1').style.background = "black"
      document.getElementById('call1').style.color = "white"
      document.getElementById('call1').style.border = "1px solid black"


      document.getElementById('mbbottom').style.background = "white"
      document.getElementById('mbbottom').style.color = "black"


      document.getElementById('payment-container').style.background = "white"
      document.getElementById('payment-container').style.color = "black"
      document.getElementById('payment-container').style.border = "1px solid  black"

    }
  }
  // icon-circle

  // mbbottom

  const OpenSidebar = () => {
    if (document.getElementById('sidebarr').style.display === 'none') {
      document.getElementById('sidebarr').style.display = 'block';
    } else {
      document.getElementById('sidebarr').style.display = 'none';
    }
  }
  const CloseSidebar = () => {
    if (document.getElementById('sidebarr').style.display === 'block') {
      document.getElementById('sidebarr').style.display = 'none';
    }
    else {
      document.getElementById('sidebarr').style.display = 'block';
    }
  }

  return (
    <CartProvider>
      <Router>
        <Na mode={mode} ToggleMode={ToggleMode} />
        {/* <User_Login /> */}

        {/* <HomePage  mode={mode} /> */}
        <Routes>
          {/* <Route path='/ecommerce/' element={<Sl mode={mode} />} /> */}
          <Route path='/ecommerce/' element={<HomePage mode={mode} />} />
          <Route path='/ecommerce/Men' element={<CardGrid mode={mode} />} />
          <Route path='/ecommerce/Womens' element={<Womens />} />
          <Route path='/ecommerce/Childrens' element={<Childrens />} />
          <Route path='/ecommerce/homeLeaving' element={<HomeCare />} />
          <Route path='/ecommerce/BeautyCare' element={<BeautyCare />} />
          <Route path='/ecommerce/Studio' element={<Studio />} />

          <Route path='/ecommerce/UserLogin' element={<UserLogin CloseSidebar={CloseSidebar} mode={mode} />} />

          <Route path='/ecommerce/Login' element={<User_Login mode={mode} />} />
          <Route path='/ecommerce/User_page' element={<User_Page mode={mode} />} />
          <Route path='/ecommerce/Sing_in' element={<Sing_Up mode={mode} />} />
          <Route path='/ecommerce/Your_List' element={<Your_List mode={mode} />} />
          <Route path='/ecommerce/Help' element={<Help mode={mode} />} />
          <Route path='/ecommerce/BusinessAc' element={<BusinessAc mode={mode} />} />
          <Route path='/ecommerce/Search' element={<Search mode={mode} />} />
          <Route path='/ecommerce/AddresVard' element={<AddresVard mode={mode} />} />
          <Route path='/ecommerce/Payment_Methods' element={<Payment_Methods mode={mode} />} />
          <Route path='/ecommerce/SlHome' element={<SlHomeUSer mode={mode} />} />
          <Route path="/ecommerce/Login-Security" element={<LoginSecurity />} />
          <Route path="/ecommerce/payment" element={<Payment mode={mode} />} />



        </Routes>
        <MBV mode={mode} OpenSidebar={OpenSidebar} />

        {/* <UserLogin sidebarr={sidebarr} CloseSidebar={CloseSidebar} mode={mode} /> */}
        <Footer mode={mode} />


      </Router>
    </CartProvider>
  )
}

export default App
