import React from 'react'
import './BusinessAc.css'
function BusinessAc() {
    return (
        <div id='shopp21221'> 
            <div className="container123">
                <div className="left-section">
                    <h1>Let us create your free Shop Business account</h1>
                    <input type="email" placeholder="Enter email address" />
                    <button>Get started</button>
                    <a href="#">Already an Shio Business customer? Sign in</a>
                </div>
                <div className="right-section">
                    <h2>Reshape buying for your organisation</h2>
                    <ul>
                        <li>
                            <img src="https://img.icons8.com/?size=16&id=gPV4dhUhyDRv&format=png" alt="Free Delivery" />
                            <span>Free Delivery on first order</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=16&id=38BL4VGCxkzD&format=png" alt="GST Invoice" />
                            <span>GST Invoice & Bulk Discounts</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=16&id=U9QzRziel7CC&format=png" alt="Business Analytics" />
                            <span>Business Analytics</span>
                        </li>
                    </ul>
                    <a href="#">Learn more about Shop Business</a>
                </div>
            </div>
        </div>
    )
}

export default BusinessAc
