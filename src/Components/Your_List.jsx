import React, { useState } from 'react'
// Link
import './Your_List.css'
import { ToastContainer, toast } from 'react-toastify';

import { Link } from 'react-router-dom'

function Your_List(props) {
    const notify = () => toast.error("This item Delete!");
    const [listItems, setListItems] = useState([
        {
            id: 1,
            image: "https://via.placeholder.com/120",
            title: "(Refurbished) OnePlus Pad Go 28.85cm (11.35 inch) 2.4K 7:5 Ratio...",
            rating: "★★★★☆",
            ratingCount: "11",
            date: "18 December 2024"
        },

        {
            id: 2,
            image: "https://via.placeholder.com/120",
            title: "(Refurbished) OnePlus Pad Go 28.85cm (11.35 inch) 2.4K 7:5 Ratio...",
            rating: "★★★★☆",
            ratingCount: "11",
            date: "18 December 2024"
        },

        {
            id: 3,
            image: "https://via.placeholder.com/120",
            title: "(Refurbished) OnePlus Pad Go 28.85cm (11.35 inch) 2.4K 7:5 Ratio...",
            rating: "★★★★☆",
            ratingCount: "11",
            date: "18 December 2024"
        },
        // Add more initial items here
    ]);


    let handleDelete = (id) => {
        notify();
        setListItems(listItems.filter(item => item.id !== id));
    };

    const handleBuyingOptions = (item) => {
        console.log('Viewing buying options for:', item.title);
    };

    return (
        <div>
            <div className={`containepr bg-${props.mode}`}>
                <div className="headepr">
                    <h1>Your Lists</h1>
                    <button className="btn-primary"><Link to="/ecommerce/">Create a List</Link></button>
                </div>

                <div className="listt">
                    {listItems.map((item) => (
                        <div className="list-itemo" key={item.id}>
                            <img src={item.image} alt="Product" />
                            <div className="item-details">
                                <p className="item-title">{item.title}</p>
                                <p className="item-rating">{item.rating} {item.ratingCount} ratings</p>
                                <p>Item added {item.date}</p>
                            </div>
                            <div className="item-actions">
                                <button
                                    className="btn-secondary"
                                    onClick={() => handleBuyingOptions(item)}
                                >
                                    See all buying options
                                </button>
                                <button className="btn-secondary"> <img src="https://img.icons8.com/?size=80&id=110229&format=png" alt="" /> </button>
                                <button className="btn-delete"> 
                                    <img 
                                        src="https://img.icons8.com/?size=80&id=ZyDBCA_vNajS&format=png" 
                                        alt=""
                                        onClick={() => handleDelete(item.id)}
                                    /> 
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Your_List
