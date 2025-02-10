import React from 'react'
import { useCart } from '../context/CartContext';

import './CardGrid.css'
// import React from 'react';
function CardGrid(props) {
    // Get the current path to determine which section we're in
    const path = window.location.pathname;

    // Define section titles based on path
    const getTitleText = () => {
        if (path.includes('/Women')) return "women's fashion....";
        if (path.includes('/Kids')) return "kid's collection....";
        if (path.includes('/Home')) return "home & living....";
        if (path.includes('/Beauty')) return "beauty essentials....";
        if (path.includes('/Studio')) return "studio collection....";
        return "men's wear clothes...."; // default
    }
    const { addToCart } = useCart();

    let handleAddToCart = (productId, name, price, image) => {
        document.getElementById(`addtocart${productId}`).innerHTML = ('Added + 🛒');
        document.getElementById(`addtocart${productId}`).style.border = 'none';

        addToCart({
            id: productId,
            name: name,
            price: price,
            image: image
        });
    }

    return (
        <div className={`bg-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div id='Mainsewaar' className={`Mainsewaar bg-${props.mode === 'light' ? 'dark' : 'light'}}`}>
                {/* <h1 style="font-weight: 600; text-align: center; cursor: pointer; font-family: &quot;Times New Roman&quot;, Times, serif; font-size: 2rem;">Categories With Product..</h1> */}

                <h1>{getTitleText()}</h1>
            </div>
            <div className={`_container bg-${props.mode} `} >

                {/* <!-- Section 1 --> */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Quality you trust, price you love</h2>
                    <div id='Mainsewaar' className="_card-container list">
                        <div id='Mainsewaar' className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/y/l/w/l-hud-01-imsa-moda-original-imah5tgpzhcsps5h.jpeg?q=60" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1'>Add To Cart</button>
                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/f/k/b/-original-imah4rktdpdfyhbm.jpeg?q=70&crop=false" alt="Tablets With Call" />
                            <p className='Mainsewaarh1'>Tablets With Call</p>
                            <p className="_price">₹15,999</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/dress/3/q/t/l-htdrss7133-honky-tonky-original-imagszfhfghhs2rp.jpeg?q=70" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>Women's Dress</p>
                            <p className="_price">₹2,499</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/s/u/u/l-w17-navy-veirdo-original-imafhj8ghtzhnpy9-bb.jpeg?q=60" alt="Galaxy Tab S9 FE+" />
                            <p className='Mainsewaarh1'>Galaxy Tab S9 FE+</p>
                            <p className="_price">₹54,999</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/dress/3/q/t/l-htdrss7133-honky-tonky-original-imagszfhfghhs2rp.jpeg?q=70" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>Women's Dress</p>
                            <p className="_price">₹2,499</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/y/l/w/l-hud-01-imsa-moda-original-imah5tgpzhcsps5h.jpeg?q=60" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                            <p className="_price">₹1,999</p>
                            <button onClick={() => handleAddToCart('4', 'Apple Watch Series 7 - New Edition', '100,999', 'https://m.media-amazon.com/images/I/61mJkw14hLL._AC_UY327_FMwebp_QL65_.jpg')} className='btncart pt-1'>Add To Cart</button>

                        </div>
                    </div>
                </div>

                {/* <!-- Section 2 --> */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Favorites at a steal!</h2>
                    <div className="_card-container list">
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/dress/3/q/t/l-htdrss7133-honky-tonky-original-imagszfhfghhs2rp.jpeg?q=70" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>Women's Dress</p>
                            <p className="_price">Grab Now</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/n/y/b/xl-oraorasatoruhoodie-thecrazymonk-original-imags8kqfarcgcam.jpeg?q=60" alt="Red Plaid Shirt" />
                            <p className='Mainsewaarh1'>Red Plaid Shirt</p>
                            <p className="_discount">₹2,499</p>
                            <p className="_price">₹279 (89% off)</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/r/7/6/xxl-ff-mhd-pln-red-m-onex-original-imagvd5fcz2upfgb.jpeg?q=60" alt="White Shirt" />
                            <p className='Mainsewaarh1'>White Shirt</p>
                            <p className="_discount">₹2,599</p>
                            <p className="_price">₹497 (81% off)</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/t/i/z/s-gf-mswt-black2-hood-1pcs-gyrfalcon-original-imah7kyfr3ckcgaa.jpeg?q=70&crop=false" alt="Black Shirt" />
                            <p className='Mainsewaarh1'>Black Shirt</p>
                            <p className="_discount">₹1,999</p>
                            <p className="_price">₹479 (76% off)</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/p/b/e/xxl-men-hud-001-imsa-moda-original-imah4uf3zpsnbaqq.jpeg?q=60" alt="Gray Hoodie" />
                            <p className='Mainsewaarh1'>Gray Hoodie</p>
                            <p className="_discount">₹2,999</p>
                            <p className="_price">₹424 (86% off)</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/y/l/w/l-hud-01-imsa-moda-original-imah5tgpzhcsps5h.jpeg?q=60" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                            <p className="_price">Most-loved</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                    </div>
                </div>

                {/* <!-- Section 3 --> */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Deals handpicked for you!</h2>
                    <div className="_card-container list">

                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/y/l/w/l-hud-01-imsa-moda-original-imah5tgpzhcsps5h.jpeg?q=60" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                            <p className="_price">Most-loved</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">

                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/y/l/w/l-hud-01-imsa-moda-original-imah5tgpzhcsps5h.jpeg?q=60" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                            <p className="_price">Most-loved</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/p/b/e/xxl-men-hud-001-imsa-moda-original-imah4uf3zpsnbaqq.jpeg?q=60" alt="Gray Hoodie" />
                            <p className='Mainsewaarh1'>Gray Hoodie</p>
                            <p className="_discount">₹2,999</p>
                            <p className="_price">₹424 (86% off)</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/s/u/u/l-w17-navy-veirdo-original-imafhj8ghtzhnpy9-bb.jpeg?q=60" alt="Colorblock Hoodie" />
                            <p className='Mainsewaarh1'>Colorblock Hoodie</p>
                            <p className="_discount">₹1,999</p>
                            <p className="_price">₹539 (73% off)</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/k070zgw0/sweatshirt/z/u/q/s-lba174-grey-navy-blue-lambency-original-imafj3avbsqbkgrm.jpeg?q=60" alt="Blue Jacket" />
                            <p className='Mainsewaarh1'>Blue Jacket</p>
                            <p className="_discount">₹1,199</p>
                            <p className="_price">₹599 (50% off)</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/n/y/b/xl-oraorasatoruhoodie-thecrazymonk-original-imags8kqfarcgcam.jpeg?q=60" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>Women's Dress</p>
                            <p className="_price">Grab Now</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                    </div>
                </div>

                {/* <!-- Section for Men's Products --> */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Men's Collection</h2>
                    <div id='Mainsewaar' className="_card-container list">
                        <div id='Mainsewaar' className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/y/l/w/l-hud-01-imsa-moda-original-imah5tgpzhcsps5h.jpeg?q=60" alt="Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>Men's Sweatshirt</p>
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1'>Add To Cart</button>
                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/3/4/5/m-tshirt-original-imagz5h8gqgqgqgq.jpeg?q=70" alt="Men's T-Shirt" />
                            <p className='Mainsewaarh1'>Men's T-Shirt</p>
                            <p className="_price">₹799</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/pants/3/q/t/l-pants-original-imagz5h8gqgqgqgq.jpeg?q=70" alt="Men's Pants" />
                            <p className='Mainsewaarh1'>Men's Pants</p>
                            <p className="_price">₹1,499</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/680/680/xif0q/jacket/3/q/t/l-jacket-original-imagz5h8gqgqgqgq.jpeg?q=60" alt="Men's Jacket" />
                            <p className='Mainsewaarh1'>Men's Jacket</p>
                            <p className="_price">₹3,999</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoes/3/q/t/l-shoes-original-imagz5h8gqgqgqgq.jpeg?q=70" alt="Men's Shoes" />
                            <p className='Mainsewaarh1'>Men's Shoes</p>
                            <p className="_price">₹2,999</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim1.flixcart.com/image/680/680/xif0q/sweatshirt/y/l/w/l-hud-01-imsa-moda-original-imah5tgpzhcsps5h.jpeg?q=60" alt="Men's Hoodie" />
                            <p className='Mainsewaarh1'>Men's Hoodie</p>
                            <p className="_price">₹2,199</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardGrid
