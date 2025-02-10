import React from 'react'
import './CardGrid.css' // We'll reuse the existing CSS and add new styles

function Smartshop(props) {
    return (
        <div>
            <div id='Mainsewaar' className={`Mainsewaar bg-${props.mode === 'light' ? 'dark' : 'light'}}`}>
                <h1>Smart Electronics Shop</h1>
            </div>
            <div className={`_container bg-${props.mode}`}>
                {/* Section 1 */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Featured Electronics</h2>
                    <div className="_card-container list">
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/f/k/b/-original-imah4rktdpdfyhbm.jpeg?q=70" alt="Latest Tablet" />
                            <p className='Mainsewaarh1'>Premium Tablet</p>
                            <p className="_discount">₹45,999</p>
                            <p className="_price">₹39,999 (13% off)</p>
                            <button className="buy-button">Add to Cart</button>
                        </div>
                        {/* Add more cards with similar structure */}
                    </div>
                </div>

                {/* Section 2 */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Best Sellers</h2>
                    <div className="_card-container list">
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg" alt="Smartphone" />
                            <p className='Mainsewaarh1'>Latest Smartphone</p>
                            <p className="_discount">₹24,999</p>
                            <p className="_price">₹19,999 (20% off)</p>
                            <button className="buy-button">Add to Cart</button>
                        </div>
                        {/* Add more cards */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smartshop 