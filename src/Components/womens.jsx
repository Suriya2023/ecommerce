import React from 'react'
import './CardGrid.css'
function womens(props) {
    // Get the current path to determine which section we're in
    const path = window.location.pathname;

    // Define section titles based on path
    const getTitleText = () => {
        if (path.includes('/Women')) return "women's fashion....";
       
        return "men's wear clothes...."; // default
    }

    // Ensure addToCart is passed as a prop
    const { addToCart } = props; // Assuming addToCart is passed from a parent component

    return (
        <div className={`bg-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div id='Mainsewaar' className={`Mainsewaar bg-${props.mode === 'light' ? 'dark' : 'light'}}`}>
                {/* <h1 style="font-weight: 600; text-align: center; cursor: pointer; font-family: &quot;Times New Roman&quot;, Times, serif; font-size: 2rem;">Categories With Product..</h1> */}

                <h1>Women,s Wear Clothes</h1>
            </div>
            

                {/* <!-- Section 3 --> */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Deals handpicked for you!</h2>
                    
                    <div className="_card-container list">

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/61IhrjrcrLL._AC_UL480_FMwebp_QL65_.jpg" alt="Elegant Women's Dress" />
                            <p className='Mainsewaarh1'>Elegant Women's Evening Dress</p>
                            <p className="_price">Stylish Look</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Elegant Women\'s Dress', price: 'Stylish Look', image: 'https://example.com/womens-dress1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/51mO0cQ1CgL._AC_UL480_FMwebp_QL65_.jpg" alt="Casual Women's Top" />
                            <p className='Mainsewaarh1'>Casual Women's Summer Top</p>
                            <p className="_price">Everyday Comfort</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Casual Women\'s Top', price: 'Everyday Comfort', image: 'https://example.com/womens-top1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71pgxZ-EndL._AC_UL480_FMwebp_QL65_.jpg" alt="Trendy Women's Skirt" />
                            <p className='Mainsewaarh1'>Trendy Women's A-Line Skirt</p>
                            <p className="_price">Fashion Forward</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Trendy Women\'s Skirt', price: 'Fashion Forward', image: 'https://example.com/womens-skirt1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71So7v5b7lL._SX569_.jpg" alt="Party Wear Women's Dress" />
                            <p className='Mainsewaarh1'>Glamorous Party Wear Dress</p>
                            <p className="_price">Glamorous Look</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Party Wear Women\'s Dress', price: 'Glamorous Look', image: 'https://example.com/womens-dress2.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/41ByJ9m8MAL._AC_UL480_FMwebp_QL65_.jpg" alt="Formal Women's Suit" />
                            <p className='Mainsewaarh1'>Classic Women's Formal Suit</p>
                            <p className="_price">Classic Elegance</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Formal Women\'s Suit', price: 'Classic Elegance', image: 'https://example.com/womens-suit1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                    </div>
                </div>
                
                <div className={`_container bg-${props.mode} `} >
                    
                {/* <!-- Section 1 --> */}
                <div className="_section">

                    
                    <h2 className='Mainsewaarh1'> Women's Quality you trust, price you love</h2>
                    <div id='Mainsewaar' className="_card-container list">
                        <div id='Mainsewaar' className="_card">
                            <img src="https://m.media-amazon.com/images/I/61nIiTSG8VL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Sweatshirt" />
                            <p className='Mainsewaarh1'>Stylish Women's Casual Sweatshirt</p>
                            <p className="_price">Most-loved</p>

                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Women\'s Sweatshirt', price: 'Most-loved', image: 'https://example.com/womens-sweatshirt.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71RiOxIEyCL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Top" />
                            <p className='Mainsewaarh1'>Chic Women's Stylish Top</p>
                            <p className="_price">New Range</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Stylish Women\'s Top', price: 'New Range', image: 'https://example.com/womens-top.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71hJRhdr0dL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>Elegant Women's Day Dress</p>
                            <p className="_price">Grab Now</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Elegant Women\'s Dress', price: 'Grab Now', image: 'https://example.com/womens-dress.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71Pm5eoBvEL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Skirt" />
                            <p className='Mainsewaarh1'>Trendy Women's Midi Skirt</p>
                            <p className="_price">In Focus Now</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Trendy Women\'s Skirt', price: 'In Focus Now', image: 'https://example.com/womens-skirt.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71dzztxNOiL._AC_UL480_FMwebp_QL65_.jpg" alt="Party Wear Women's Dress" />
                            <p className='Mainsewaarh1'>Glamorous Evening Party Dress</p>
                            <p className="_price">Glamorous Look</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Party Wear Women\'s Dress', price: 'Glamorous Look', image: 'https://example.com/womens-dress2.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/41O9MolaTTL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Suit" />
                            <p className='Mainsewaarh1'>Classic Women's Business Suit</p>
                            <p className="_price">Classic Elegance</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Formal Women\'s Suit', price: 'Classic Elegance', image: 'https://example.com/womens-suit.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/711aIl89NML._AC_UL480_FMwebp_QL65_.jpg" alt="Casual Women's Suit" />
                            <p className='Mainsewaarh1'>Comfortable Women's Casual Suit</p>
                            <p className="_price">Comfort Meets Style</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Casual Women\'s Suit', price: 'Comfort Meets Style', image: 'https://example.com/womens-casual-suit.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/616hm8B6q-L._AC_UL480_FMwebp_QL65_.jpg" alt="Party Wear Women's Suit" />
                            <p className='Mainsewaarh1'>Stylish Women's Party Suit</p>
                            <p className="_price">Glamorous Look</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Party Wear Women\'s Suit', price: 'Glamorous Look', image: 'https://example.com/womens-party-suit.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/61JOlWYR-4L._AC_UL480_FMwebp_QL65_.jpg" alt="New Women's Item" />
                            <p className='Mainsewaarh1'>New Stylish Women's Item</p>
                            <p className="_price">Stylish and Comfortable</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'New Women\'s Item', price: 'Stylish and Comfortable', image: 'https://example.com/womens-new-item.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div> 

                {/* <!-- Section 2 --> */}
              {/* <div className="_section">
                    <h2 className='Mainsewaarh1'>Favorites at a steal!</h2>
                    <div className="_card-container list">
                        <div className="_card">
                            <img src="https://example.com/womens-dress4.jpg" alt="Summer Women's Dress" />
                            <p className='Mainsewaarh1'>Summer Women's Dress</p>
                            <p className="_price">Breezy Style</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Summer Women\'s Dress', price: 'Breezy Style', image: 'https://example.com/womens-dress4.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://example.com/womens-top3.jpg" alt="Stylish Women's Top" />
                            <p className='Mainsewaarh1'>Stylish Women's Top</p>
                            <p className="_price">Chic Look</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Top', price: 'Chic Look', image: 'https://example.com/womens-top3.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://example.com/womens-skirt3.jpg" alt="Trendy Women's Skirt" />
                            <p className='Mainsewaarh1'>Trendy Women's Skirt</p>
                            <p className="_price">Fashion Forward</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Trendy Women\'s Skirt', price: 'Fashion Forward', image: 'https://example.com/womens-skirt3.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://example.com/womens-jacket.jpg" alt="Stylish Women's Jacket" />
                            <p className='Mainsewaarh1'>Stylish Women's Jacket</p>
                            <p className="_price">Perfect for Fall</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Jacket', price: 'Perfect for Fall', image: 'https://example.com/womens-jacket.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://example.com/womens-sweater.jpg" alt="Cozy Women's Sweater" />
                            <p className='Mainsewaarh1'>Cozy Women's Sweater</p>
                            <p className="_price">Warm and Stylish</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Cozy Women\'s Sweater', price: 'Warm and Stylish', image: 'https://example.com/womens-sweater.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://example.com/womens-pants.jpg" alt="Comfortable Women's Pants" />
                            <p className='Mainsewaarh1'>Comfortable Women's Pants</p>
                            <p className="_price">Everyday Comfort</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Comfortable Women\'s Pants', price: 'Everyday Comfort', image: 'https://example.com/womens-pants.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://example.com/womens-blouse.jpg" alt="Elegant Women's Blouse" />
                            <p className='Mainsewaarh1'>Elegant Women's Blouse</p>
                            <p className="_price">Perfect for Work</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Elegant Women\'s Blouse', price: 'Perfect for Work', image: 'https://example.com/womens-blouse.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div> */}



                  {/* <!-- Section 3 --> */}
                

            </div>

            <div className="_section">
                    <h2 className='Mainsewaarh1'>Deals handpicked for you!</h2>
                    <div className="_card-container list">

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/61IhrjrcrLL._AC_UL480_FMwebp_QL65_.jpg" alt="Elegant Women's Dress" />
                            <p className='Mainsewaarh1'>Elegant Women's Evening Dress</p>
                            <p className="_price">Stylish Look</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Elegant Women\'s Dress', price: 'Stylish Look', image: 'https://example.com/womens-dress1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/51mO0cQ1CgL._AC_UL480_FMwebp_QL65_.jpg" alt="Casual Women's Top" />
                            <p className='Mainsewaarh1'>Casual Women's Summer Top</p>
                            <p className="_price">Everyday Comfort</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Casual Women\'s Top', price: 'Everyday Comfort', image: 'https://example.com/womens-top1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71pgxZ-EndL._AC_UL480_FMwebp_QL65_.jpg" alt="Trendy Women's Skirt" />
                            <p className='Mainsewaarh1'>Trendy Women's A-Line Skirt</p>
                            <p className="_price">Fashion Forward</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Trendy Women\'s Skirt', price: 'Fashion Forward', image: 'https://example.com/womens-skirt1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71So7v5b7lL._SX569_.jpg" alt="Party Wear Women's Dress" />
                            <p className='Mainsewaarh1'>Glamorous Party Wear Dress</p>
                            <p className="_price">Glamorous Look</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Party Wear Women\'s Dress', price: 'Glamorous Look', image: 'https://example.com/womens-dress2.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/41ByJ9m8MAL._AC_UL480_FMwebp_QL65_.jpg" alt="Formal Women's Suit" />
                            <p className='Mainsewaarh1'>Classic Women's Formal Suit</p>
                            <p className="_price">Classic Elegance</p>
                            <button className='btncart pt-1' onClick={() => addToCart({ name: 'Formal Women\'s Suit', price: 'Classic Elegance', image: 'https://example.com/womens-suit1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default womens
