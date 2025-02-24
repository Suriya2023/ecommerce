import React from 'react'

function Studio() {
    return (
        <div>
            <div>

                <div className="_section">
                    <h2 className='Mainsewaarh1'>Favorites at a steal!</h2>
                    <div className="_card-container list">
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/o/x/i/-original-imah3jfxtgpsz9vv.jpeg?q=70" alt="Bedding & decor" />
                            <p className='Mainsewaarh1'>Coocaa 80 cm (32 inch) HD Ready LED Smart Coolita TV 2024 Edition...</p>
                            {/* <p className="_price">B</p> */}
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Summer Women\'s Dress', price: 'Breezy Style', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/HnD._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/p/u/c/-original-imah9m5xyteur77h.jpeg?q=70" alt="Appliances" />
                            <p className='Mainsewaarh1'>TCL L4B 79.97 cm (32 inch) HD Ready LED Smart Android TV 2024 Edi...</p>
                            {/* <p className="_price">Chic Look</p> */}
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Top', price: 'Chic Look', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/SA._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/k/z/2/-original-imah9m9usnamk7fu.jpeg?q=70" alt="Fitness" />
                            <p className='Mainsewaarh1'>Infinix 80 cm (32 inch) HD Ready LED Smart Linux TV 2024 Edition</p>
                            {/* <p className="_price">Fashion Forward</p> */}
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Trendy Women\'s Skirt', price: 'Fashion Forward', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Sports._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/n/f/z/-original-imahfu6pry3gys9g.jpeg?q=70" alt="Kitchenware" />
                            <p className='Mainsewaarh1'>Daiwa 109 cm (43 inch) Full HD LED Smart Linux TV 2024 Edition wi...</p>
                            {/* <p className="_price">Perfect for Fall</p> */}
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Jacket', price: 'Perfect for Fall', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Cookware._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/e/t/w/-original-imah8uzcar7m3wdm.jpeg?q=70" alt="Home essentials" />
                            <p className='Mainsewaarh1'>Mi by Xiaomi A Series 80 cm (32 inch) HD Ready LED Smart Google T...</p>
                            {/* <p className="_price">Warm and Stylish</p> */}
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Cozy Women\'s Sweater', price: 'Warm and Stylish', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Rec/Home_essential._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/e/t/w/-original-imah8uzcar7m3wdm.jpeg?q=70" alt="Outdoors" />
                            <p className='Mainsewaarh1'>TCL C69B 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV with...</p>
                            {/* <p className="_price">Everyday Comfort</p> */}
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Comfortable Women\'s Pants', price: 'Everyday Comfort', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/LnG._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/0/9/c/-original-imah2myzmrrc9kx5.jpeg?q=70" alt="Elegant Women's Blouse" />
                            <p className='Mainsewaarh1'>MOTOROLA EnvisionX 165 cm (65 inch) QLED Ultra HD (4K) Smart Goog...</p>
                            {/* <p className="_price">Perfect for Work</p> */}
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Elegant Women\'s Blouse', price: 'Perfect for Work', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Furni._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>


                {/* <div className={`_container bg-${props.mode} `} > */}

                <div className="_section">
                    <h2 className='Mainsewaarh1'>Quality you trust, price you love</h2>
                    <div id='Mainsewaar' className="_card-container list">
                        <div id='Mainsewaar' className="_card">
                            <img src="https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/2/6/m/-original-imagx7qhyteggfcb.jpeg?q=90" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>MOTOROLA 7.5 kg 5 star rating Midnight Series Semi Automatic Top Load Washing Machine Black</p>
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1'>Add To Cart</button>
                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/o/v/a/-original-imah2d6gavfzkzmv.jpeg?q=90" alt="Tablets With Call" />
                            <p className='Mainsewaarh1'>MOTOROLA 7 kg Digital Inverter, Super Steam Technology with In-built Heater Grey (MTFL705NHNJG) Fully ...</p>
                            <p className="_price">₹15,999</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/m/7/c/-original-imahf5wfbdc7kzh7.jpeg?q=90" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>MOTOROLA 8 kg Digital Inverter, Super Steam Technology with In-built Heater Grey (MTFL805NHNJG) Fully ...</p>
                            <p className="_price">₹2,499</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/d/x/o/-original-imah2gfn2tk2uyzw.jpeg?q=90" alt="Galaxy Tab S9 FE+" />
                            <p className='Mainsewaarh1'>IFB 7 kg 5 Star with Steam Refresh program, 9 Swirl Wash, Eco Inverter, Powered by AI with Wifi Fully ...</p>
                            <p className="_price">₹54,999</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/e/a/p/-original-imah45kwm3qzhmfd.jpeg?q=90" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>realme TechLife 10 kg Fully Automatic Front Load Washing Machine with In-built Heater Grey</p>
                            <p className="_price">₹2,499</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/g/7/c/-original-imah2d6g35mkz5wg.jpeg?q=70" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>realme TechLife 10 kg Fully Automatic Front Load Washing Machine with In-built Heater Grey</p>
                            <p className="_price">₹1,999</p>
                            <button onClick={() => handleAddToCart('4', 'Apple Watch Series 7 - New Edition', '100,999', 'https://m.media-amazon.com/images/I/61mJkw14hLL._AC_UY327_FMwebp_QL65_.jpg')} className='btncart pt-1'>Add To Cart</button>

                        </div>
                    </div>
                </div>


                <div className="_section">
                    <h2 className='Mainsewaarh1'>Favorites at a steal!</h2>
                    <div className="_card-container list">
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/HnD._SS300_QL85_.jpg" alt="Bedding & decor" />
                            <p className='Mainsewaarh1'>Bedding & decor</p>
                            <p className="_price">Breezy Style</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Summer Women\'s Dress', price: 'Breezy Style', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/HnD._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/SA._SS300_QL85_.jpg" alt="Appliances" />
                            <p className='Mainsewaarh1'>Appliances</p>
                            <p className="_price">Chic Look</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Top', price: 'Chic Look', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/SA._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Sports._SS300_QL85_.jpg" alt="Fitness" />
                            <p className='Mainsewaarh1'>Fitness</p>
                            <p className="_price">Fashion Forward</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Trendy Women\'s Skirt', price: 'Fashion Forward', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Sports._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Cookware._SS300_QL85_.jpg" alt="Kitchenware" />
                            <p className='Mainsewaarh1'>Kitchenware</p>
                            <p className="_price">Perfect for Fall</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Jacket', price: 'Perfect for Fall', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Cookware._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Rec/Home_essential._SS300_QL85_.jpg" alt="Home essentials" />
                            <p className='Mainsewaarh1'>Home essentials</p>
                            <p className="_price">Warm and Stylish</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Cozy Women\'s Sweater', price: 'Warm and Stylish', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Rec/Home_essential._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/LnG._SS300_QL85_.jpg" alt="Outdoors" />
                            <p className='Mainsewaarh1'>Outdoors</p>
                            <p className="_price">Everyday Comfort</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Comfortable Women\'s Pants', price: 'Everyday Comfort', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/LnG._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Furni._SS300_QL85_.jpg" alt="Elegant Women's Blouse" />
                            <p className='Mainsewaarh1'>Elegant Women's Blouse</p>
                            <p className="_price">Perfect for Work</p>
                            <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Elegant Women\'s Blouse', price: 'Perfect for Work', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Furni._SS300_QL85_.jpg' })}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>


                <div className="_section">
                    <h2 className='Mainsewaarh1'>Quality you trust, price you love</h2>
                    <div id='Mainsewaar' className="_card-container list">
                        <div id='Mainsewaar' className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/OHL/Bedroom/unrec15/ShopforBedroom_Fans._CB551332714_.png" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                            <p className="_price">₹1,999</p>

                            <button className='btncart pt-1'>Add To Cart</button>
                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/OHL/Bedroom/unrec15/ShopforBedroom_Bedsheets._CB551332714_.png" alt="Tablets With Call" />
                            <p className='Mainsewaarh1'>Tablets With Call</p>
                            <p className="_price">₹15,999</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/OHL/Bedroom/unrec15/ShopforBedroom_Mirrors._CB551332714_.png" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>Women's Dress</p>
                            <p className="_price">₹2,499</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/OHL/Bedroom/unrec15/ShopforBedroom_Photoframes._CB551332714_.png" alt="Galaxy Tab S9 FE+" />
                            <p className='Mainsewaarh1'>Galaxy Tab S9 FE+</p>
                            <p className="_price">₹54,999</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>
                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/OHL/Bedroom/unrec15/ShopforBedroom_Clocks._CB551332714_.png" alt="Women's Dress" />
                            <p className='Mainsewaarh1'>Women's Dress</p>
                            <p className="_price">₹2,499</p>
                            <button className='btncart pt-1'>Add To Cart</button>

                        </div>

                        <div className="_card">
                            <img src="https://m.media-amazon.com/images/G/31/OHL/unrec/room/testing/KITCHEN_05._CB551433435_.jpg" alt="Fleece Men's Sweatshirt" />
                            <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                            <p className="_price">₹1,999</p>
                            <button onClick={() => handleAddToCart('4', 'Apple Watch Series 7 - New Edition', '100,999', 'https://m.media-amazon.com/images/I/61mJkw14hLL._AC_UY327_FMwebp_QL65_.jpg')} className='btncart pt-1'>Add To Cart</button>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Studio
