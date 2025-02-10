import React from 'react'
import './Search.css'
function Search() {
    return (
        <div>
            <div className="containerkl">
                <div className="mainSearch">
                    <input type="search" name="" id="" placeholder='Enetr a Your Item' />
                </div>
                <br />
                <div className="headerlala">KEEP SHOPPING FOR</div>
                <div className="carousel">
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/41yP83G1xQL._SY280_SX256_AC_Q70_.jpg" alt="Mobile phone stylus" />
                        <p>Mobile phone stylus</p>
                        <p>1 viewed</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/41uOMqAM8YL._SY280_SX256_AC_Q70_.jpg" alt="Tablets" />
                        <p>Tablets</p>
                        <p>14 viewed</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/311BUgHxeJL._SY280_SX256_AC_Q70_.jpg" alt="Graphic tablets" />
                        <p>Graphic tablets</p>
                        <p>1 viewed</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/510WTgZDOZL._SY280_SX256_AC_Q70_.jpg" alt="Notebook computers" />
                        <p>Notebook computers</p>
                        <p>1 viewed</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/21laeQrFUTL._SY280_SX256_AC_Q70_.jpg" alt="Desktops" />
                        <p>Desktops</p>
                        <p>1 viewed</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/51MZJKxMfkL._SY695_.jpg" alt="Women's sneakers" />
                        <p>Women's sneakers</p>
                        <p>1 viewed</p>
                    </div>
                </div>

                <div className="search-history">
                    <ul>
                        <li>refurbished poco tablet <button>&times;</button></li>
                        <li>apple mac mini m4 <button>&times;</button></li>
                        <li>footwear for women <button>&times;</button></li>
                        <li>tablet <button>&times;</button></li>
                        <li>monitor <button>&times;</button></li>
                        <li>cabinet for pc <button>&times;</button></li>
                        <li>poco tablet <button>&times;</button></li>
                        <li>refurbished mobiles <button>&times;</button></li>
                        <li>refurbished tablet <button>&times;</button></li>
                        <li>renewed mobile <button>&times;</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search
