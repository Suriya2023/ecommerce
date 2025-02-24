import React from 'react'

function BeautyCare() {
    return (
        <div>
            <div className="_section">
                <h2 className='Mainsewaarh1'>Favorites at a steal!</h2>
                <div className="_card-container list">
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/mens._SS300_QL85_FMpng_.png" alt="Bedding & decor" />
                        <p className='Mainsewaarh1'>Men's Clothing	</p>
                        <p className="_price">Breezy Style</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Summer Women\'s Dress', price: 'Breezy Style', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/HnD._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/womens._SS300_QL85_FMpng_.png" alt="Appliances" />
                        <p className='Mainsewaarh1'>Appliances</p>
                        <p className="_price">Women's Clothing	</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Top', price: 'Chic Look', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/SA._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/kids._SS300_QL85_FMpng_.png" alt="Fitness" />
                        <p className='Mainsewaarh1'>Fitness</p>
                        <p className="_price">Kids' Fashion</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Trendy Women\'s Skirt', price: 'Fashion Forward', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Sports._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/footwear._SS300_QL85_FMpng_.png" alt="Kitchenware" />
                        <p className='Mainsewaarh1'>Footwear	</p>
                        <p className="_price">Perfect for Fall</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Jacket', price: 'Perfect for Fall', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Cookware._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/luggage__bags._SS300_QL85_FMpng_.png" alt="Home essentials" />
                        <p className='Mainsewaarh1'>Home essentials</p>
                        <p className="_price">Warm and Stylish</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Cozy Women\'s Sweater', price: 'Warm and Stylish', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Rec/Home_essential._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/jewellery._SS300_QL85_FMpng_.png" alt="Outdoors" />
                        <p className='Mainsewaarh1'>Outdoors</p>
                        <p className="_price">Everyday Comfort</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Comfortable Women\'s Pants', price: 'Everyday Comfort', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/LnG._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/beauty._SS300_QL85_FMpng_.png" alt="Elegant Women's Blouse" />
                        <p className='Mainsewaarh1'>beauty</p>
                        <p className="_price">Perfect for Work</p>
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
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Post/Jupiter/BAU/Unrec/BudgetAddOns/Women_Watches._CB543855118_.png" alt="Fleece Men's Sweatshirt" />
                        <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                        <p className="_price">₹1,999</p>

                        <button className='btncart pt-1'>Add To Cart</button>
                    </div>
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Post/Jupiter/BAU/Unrec/BudgetAddOns/Men_Watches._CB543855118_.png" alt="Tablets With Call" />
                        <p className='Mainsewaarh1'>Tablets With Call</p>
                        <p className="_price">₹15,999</p>
                        <button className='btncart pt-1'>Add To Cart</button>

                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Post/Jupiter/BAU/Unrec/BudgetAddOns/Women_Jewelry._CB543855118_.png" alt="Women's Dress" />
                        <p className='Mainsewaarh1'>Women's Dress</p>
                        <p className="_price">₹2,499</p>
                        <button className='btncart pt-1'>Add To Cart</button>

                    </div>
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Post/Jupiter/BAU/Unrec/BudgetAddOns/Handbags._CB543855118_.png" alt="Galaxy Tab S9 FE+" />
                        <p className='Mainsewaarh1'>Galaxy Tab S9 FE+</p>
                        <p className="_price">₹54,999</p>
                        <button className='btncart pt-1'>Add To Cart</button>

                    </div>
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Post/Jupiter/BAU/Unrec/BudgetAddOns/Eyewear._CB543855118_.png" alt="Women's Dress" />
                        <p className='Mainsewaarh1'>Women's Dress</p>
                        <p className="_price">₹2,499</p>
                        <button className='btncart pt-1'>Add To Cart</button>

                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Post/Jupiter/BAU/Unrec/BudgetAddOns/Men_Jewelry._CB543855118_.png" alt="Fleece Men's Sweatshirt" />
                        <p className='Mainsewaarh1'>Fleece Men's Sweatshirt</p>
                        <p className="_price">₹1,999</p>
                        <button onClick={() => handleAddToCart('4', 'Apple Watch Series 7 - New Edition', '100,999', 'https://m.media-amazon.com/images/I/61mJkw14hLL._AC_UY327_FMwebp_QL65_.jpg')} className='btncart pt-1'>Add To Cart</button>

                    </div>
                </div>
            </div>


            <div className="_section">
                <h2 className='Mainsewaarh1'>Favorites at a Cream !</h2>
                <div className="_card-container list">
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Unrec/Beauty/Pc/beauty-unrec-pc_01._CB542332901_.jpg" alt="Bedding & decor" />
                        {/* <p className='Mainsewaarh1'>Bedding & decor</p> */}
                        <p className="_price">Breezy Style</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Summer Women\'s Dress', price: 'Breezy Style', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/HnD._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Unrec/Beauty/Pc/beauty-unrec-pc_02._CB542332901_.jpg" alt="Appliances" />
                        {/* <p className='Mainsewaarh1'>Appliances</p> */}
                        <p className="_price">Chic Look</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Top', price: 'Chic Look', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/SA._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Unrec/Beauty/Pc/beauty-unrec-pc_03._CB542332901_.jpg" alt="Fitness" />
                        {/* <p className='Mainsewaarh1'>Fitness</p> */}
                        <p className="_price">Fashion Forward</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Trendy Women\'s Skirt', price: 'Fashion Forward', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Sports._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>
                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Unrec/Beauty/Pc/beauty-unrec-pc_04._CB542332901_.jpg" alt="Kitchenware" />
                        {/* <p className='Mainsewaarh1'>Kitchenware</p>/ */}
                        <p className="_price">Perfect for Fall</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Stylish Women\'s Jacket', price: 'Perfect for Fall', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/Cookware._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Unrec/Beauty/Pc/beauty-unrec-pc_05._CB542332901_.jpg" alt="Home essentials" />
                        {/* <p className='Mainsewaarh1'>Home essentials</p> */}
                        <p className="_price">Warm and Stylish</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Cozy Women\'s Sweater', price: 'Warm and Stylish', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Rec/Home_essential._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Unrec/Beauty/Pc/beauty-unrec-pc_06._CB542332901_.jpg" alt="Outdoors" />
                        {/* <p className='Mainsewaarh1'>Outdoors</p> */}
                        <p className="_price">Everyday Comfort</p>
                        <button className='btncart pt-1' onClick={() => props.addToCart({ name: 'Comfortable Women\'s Pants', price: 'Everyday Comfort', image: 'https://m.media-amazon.com/images/G/31/img21/OHL/Halo/NOcallouts/Unrec/LnG._SS300_QL85_.jpg' })}>
                            Add To Cart
                        </button>
                    </div>

                    <div className="_card">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/UnRec/TopBrands/Dove_564x1012._SX564_QL85_FMpng_.pngg" alt="Elegant Women's Blouse" />
                        {/* <p className='Mainsewaarh1'>Elegant Women's Blouse</p> */}
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
    )
}

export default BeautyCare
