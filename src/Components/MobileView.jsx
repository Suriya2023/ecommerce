import React from 'react'
import { Link } from 'react-router-dom'
import './MobileView.css'

function MobileView(props) {
  return (
    <div >

      <div id='mbbottom' className="nav-bar">
        <Link to="/Shopping-App/" className={`nav-item text-${props.mode}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          Home
        </Link>
        <Link to="/Shopping-App/Search" id='this' className="nav-item">
          <i className="fa-regular fa-heart"></i>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> */}
          Search
        </Link>

        <div id='call' className="center-button" ><Link to="/Shopping-App/">+</Link></div>

        <a href="#BestBrand" className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          Saved
        </a>
        <Link to="/Shopping-App/UserLogin" className="nav-item active">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path><path d="M22 22l-4-4M6 22l-4-4"></path></svg>
          Profile
        </Link>
      </div>

    </div>
  )
}

export default MobileView
