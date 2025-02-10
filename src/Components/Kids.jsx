import React from 'react'
import './CardGrid.css'

function Kids(props) {

    return (
        <div>
            <div className={`bg-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div id='Mainsewaar' className={`Mainsewaar bg-${props.mode === 'light' ? 'dark' : 'light'}}`}>
                    {/* <h1 style="font-weight: 600; text-align: center; cursor: pointer; font-family: &quot;Times New Roman&quot;, Times, serif; font-size: 2rem;">Categories With Product..</h1> */}

                    <h1>Kids,s Wear Clothes</h1>
                </div>


                {/* <!-- Section 3 --> */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Exciting Kids' Fashion Just for You!</h2>
                    <div className="_card-container list">
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/51OHDDLCTEL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Dress" />
                            <p className='Mainsewaarh1'>Charming Kids' Summer Dress</p>
                            <p className="_price">Perfect for Summer Adventures</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Charming Kids\' Summer Dress', price: 'Perfect for Summer Adventures', image: 'https://example.com/kids-dress2.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71tAuqqIkEL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Shoes" />
                            <p className='Mainsewaarh1'>Trendy Kids' Sneakers</p>
                            <p className="_price">Comfortable for Every Step</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Trendy Kids\' Sneakers', price: 'Comfortable for Every Step', image: 'https://example.com/kids-shoes.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/71aDkSYK+JL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Hat" />
                            <p className='Mainsewaarh1'>Playful Kids' Sun Hat</p>
                            <p className="_price">Ideal for Sunny Days Out</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Playful Kids\' Sun Hat', price: 'Ideal for Sunny Days Out', image: 'https://example.com/kids-hat.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/81srig8NIfL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Backpack" />
                            <p className='Mainsewaarh1'>Stylish Kids' Backpack</p>
                            <p className="_price">Perfect for School and Play</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Kids\' Backpack', price: 'Perfect for School and Play', image: 'https://example.com/kids-backpack.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/61d1o8hRmmL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Toy" />
                            <p className='Mainsewaarh1'>Fun Kids' Interactive Toy</p>
                            <p className="_price">Engaging and Educational</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Fun Kids\' Interactive Toy', price: 'Engaging and Educational', image: 'https://example.com/kids-toy.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`_container bg-${props.mode} `} >

                    {/* <!-- Section 1 --> */}
                    {/* <div className="_section">


                        <h2 className='Mainsewaarh1'> Women's Quality you trust, price you love</h2>
                        <div id='Mainsewaar' className="_card-container list">
                            <div id='Mainsewaar' className="_card">
                                <img src="https://m.media-amazon.com/images/I/61nIiTSG8VL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Sweatshirt" />
                                <p className='Mainsewaarh1'>Stylish Women's Casual Sweatshirt</p>
                                <p className="_price">Most-loved</p>

                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Women\'s Sweatshirt', price: 'Most-loved', image: 'https://example.com/womens-sweatshirt.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>
                            <div className="_card">
                                <img src="https://m.media-amazon.com/images/I/71RiOxIEyCL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Top" />
                                <p className='Mainsewaarh1'>Chic Women's Stylish Top</p>
                                <p className="_price">New Range</p>
                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Top', price: 'New Range', image: 'https://example.com/womens-top.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>

                            <div className="_card">
                                <img src="https://m.media-amazon.com/images/I/71hJRhdr0dL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Dress" />
                                <p className='Mainsewaarh1'>Elegant Women's Day Dress</p>
                                <p className="_price">Grab Now</p>
                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Elegant Women\'s Dress', price: 'Grab Now', image: 'https://example.com/womens-dress.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>
                            <div className="_card">
                                <img src="https://m.media-amazon.com/images/I/71Pm5eoBvEL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Skirt" />
                                <p className='Mainsewaarh1'>Trendy Women's Midi Skirt</p>
                                <p className="_price">In Focus Now</p>
                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Trendy Women\'s Skirt', price: 'In Focus Now', image: 'https://example.com/womens-skirt.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>
                            <div className="_card">
                                <img src="https://m.media-amazon.com/images/I/71dzztxNOiL._AC_UL480_FMwebp_QL65_.jpg" alt="Party Wear Women's Dress" />
                                <p className='Mainsewaarh1'>Glamorous Evening Party Dress</p>
                                <p className="_price">Glamorous Look</p>
                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Party Wear Women\'s Dress', price: 'Glamorous Look', image: 'https://example.com/womens-dress2.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>

                            <div className="_card">
                                <img src="https://m.media-amazon.com/images/I/41O9MolaTTL._AC_UL480_FMwebp_QL65_.jpg" alt="Women's Suit" />
                                <p className='Mainsewaarh1'>Classic Women's Business Suit</p>
                                <p className="_price">Classic Elegance</p>
                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Formal Women\'s Suit', price: 'Classic Elegance', image: 'https://example.com/womens-suit.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>
                            <div className="_card">
                                <img src="https://m.media-amazon.com/images/I/711aIl89NML._AC_UL480_FMwebp_QL65_.jpg" alt="Casual Women's Suit" />
                                <p className='Mainsewaarh1'>Comfortable Women's Casual Suit</p>
                                <p className="_price">Comfort Meets Style</p>
                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Casual Women\'s Suit', price: 'Comfort Meets Style', image: 'https://example.com/womens-casual-suit.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>
                            <div className="_card">
                                <img src="https://m.media-amazon.com/images/I/616hm8B6q-L._AC_UL480_FMwebp_QL65_.jpg" alt="Party Wear Women's Suit" />
                                <p className='Mainsewaarh1'>Stylish Women's Party Suit</p>
                                <p className="_price">Glamorous Look</p>
                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Party Wear Women\'s Suit', price: 'Glamorous Look', image: 'https://example.com/womens-party-suit.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>
                            <div className="_card">
                                <img src="https://m.media-amazon.com/images/I/61JOlWYR-4L._AC_UL480_FMwebp_QL65_.jpg" alt="New Women's Item" />
                                <p className='Mainsewaarh1'>New Stylish Women's Item</p>
                                <p className="_price">Stylish and Comfortable</p>
                                <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'New Women\'s Item', price: 'Stylish and Comfortable', image: 'https://example.com/womens-new-item.jpg' })}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div> */}

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
                    <h2 className='Mainsewaarh1'>Deals handpicked for Kids!</h2>
                    <div className="_card-container list">

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/81FUFjO4k+L._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Dress" />
                            <p className='Mainsewaarh1'>Stylish Kids' Dress</p>
                            <p className="_price">Perfect for Parties</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Kids\' Dress', price: 'Perfect for Parties', image: 'https://example.com/kids-dress1.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/61ED5uZKouL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Top" />
                            <p className='Mainsewaarh1'>Casual Kids' Summer Top</p>
                            <p className="_price">Everyday Comfort</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Casual Kids\' Summer Top', price: 'Everyday Comfort', image: 'https://example.com/kids-top.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/51QszDW+g9L._SY879_.jpg" alt="Kids' Skirt" />
                            <p className='Mainsewaarh1'>Trendy Kids' Skirt</p>
                            <p className="_price">Fashion Forward</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Trendy Kids\' Skirt', price: 'Fashion Forward', image: 'https://example.com/kids-skirt.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/41DrZb96ykL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Party Dress" />
                            <p className='Mainsewaarh1'>Glamorous Kids' Party Dress</p>
                            <p className="_price">Glamorous Look</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Glamorous Kids\' Party Dress', price: 'Glamorous Look', image: 'https://example.com/kids-party-dress.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/61SUHAerRpL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Suit" />
                            <p className='Mainsewaarh1'>Classic Kids' Suit</p>
                            <p className="_price">Classic Elegance</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Classic Kids\' Suit', price: 'Classic Elegance', image: 'https://example.com/kids-suit.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                    </div>
                </div>

                {/* <!-- New Section for Kids' Clothing --> */}
                <div className="_section">
                    <h2 className='Mainsewaarh1'>Kids' Fashion You Can't Miss!</h2>
                    <div className="_card-container list">
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/61sin+AoOUL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Jacket" />
                            <p className='Mainsewaarh1'>Stylish Kids' Jacket</p>
                            <p className="_price">Perfect for Chilly Days</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Kids\' Jacket', price: 'Perfect for Chilly Days', image: 'https://example.com/kids-jacket.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/41zfGe-yCXL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Sandals" />
                            <p className='Mainsewaarh1'>Comfortable Kids' Sandals</p>
                            <p className="_price">Ideal for Summer</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Comfortable Kids\' Sandals', price: 'Ideal for Summer', image: 'https://example.com/kids-sandals.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/I/51nSGUDoboL._AC_UL480_FMwebp_QL65_.jpg" alt="Kids' Sweater" />
                            <p className='Mainsewaarh1'>Cozy Kids' Sweater</p>
                            <p className="_price">Warm and Stylish</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Cozy Kids\' Sweater', price: 'Warm and Stylish', image: 'https://example.com/kids-sweater.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- End of New Section for Kids' Clothing --> */}
            </div>
        </div>
    )
}

export default Kids
