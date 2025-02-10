import React from 'react'
import './SlUserMd.css'
import { Link } from 'react-router-dom'
// Link
function SlHomeUSer() {
    return (
        <div>
            <div className="containerpl">
                <div className="cardol">

                    <img src="https://img.icons8.com/?size=80&id=67582&format=png" alt="Your Orders" />
                    <Link to="/Shopping-App/Your_List">
                        <h3>Your Orders List</h3>
                        <p>Track, return, or buy things again</p>
                    </Link>
                </div>
                <div className="cardol">
                    <img src="https://img.icons8.com/?size=80&id=115640&format=png" alt="Login & Security" />
                    <Link to="/Shopping-App/Login-Security">
                        <h3>Login & Security</h3>
                        <p>Edit login, name, and mobile number</p>
                    </Link>
                </div>
                <div className="cardol">
                    <img src="https://via.placeholder.com/50" alt="Prime" />
                    <h3>Prime</h3>
                    <p>View benefits and payment settings</p>
                </div>
                <div className="cardol">
                    <img src="https://img.icons8.com/?size=80&id=113806&format=png" alt="Your Addresses" />
                    <Link to="/Shopping-App/AddresVard"> <h3>Your Addresses</h3>
                        <p>Edit addresses for orders and gifts</p></Link>
                </div>
                <div className="cardol">
                    <img src="https://img.icons8.com/?size=80&id=QMuDJby5eC7X&format=png" />
                    <Link to="/Shopping-App/BusinessAc"> <h3>Your Business Account</h3>
                        <p>Sign up to save with GST invoices</p> </Link>

                </div>
                <div className="cardol">
                    <img src="https://img.icons8.com/?size=80&id=64847&format=png" alt="Payment Options" />
                    <Link to="/Shopping-App/Payment_Methods">
                        <h3>Payment Options</h3>
                        <p>Edit or add payment methods</p>
                    </Link>
                </div>
                <div className="cardol">
                    <img src="https://img.icons8.com/?size=80&id=63986&format=png" alt="Shop Pay Balance" />
                    <h3>Shop Pay Balance</h3>
                    <p>Add money to your balance</p>
                </div>
                <div className="cardol">
                    <img src="https://img.icons8.com/?size=80&id=63978&format=png" alt="Contact Us" />
                    <Link to="/Shopping-App/Help">
                        <h3>Contact Us</h3>
                        <p>Contact our customer service</p>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default SlHomeUSer
