
import React from 'react'
import './asCardApp.css'
function adCard() {
    return (
        <div>
            <br /><br /><br />
            <div className="container">
                {/* <h2>Your Addresses</h2> */}
                <div className="a1">
                    <div className="a2">+ Add address</div>

                    <div className="a3">
                        <h3>Default: Shopp</h3>
                        <p><strong>User Name</strong></p>
                        <p>Plot no.37 335 Hariam Raw House,<br />B/H. Ugam Apt A.K. Road,<br />Fulpada<br />SURAT, GUJARAT 395008</p>
                        <p>India</p>
                        <p>Phone number: 9510190352</p>
                        <a href="#">Edit</a>
                        <a href="#">Remove</a>
                    </div>

                    <div className="a4">
                        <p><strong>User Name</strong></p>
                        <p>Address H NO -333. 3RD FLOOR.<br />NR JAIN DEHARASA,<br />Surat Kargam<br />SURAT, GUJARAT 395004</p>
                        <p>India</p>
                        <p>Phone number: 9510190352</p>
                        <a href="#">Edit</a>
                        <a href="#">Remove</a>
                        <a href="#">Set as Default</a>
                    </div>
                </div>

                {/* <div className="carousel">
                                        <h3>Related to items you viewed</h3>
                                        <div className="carousel-items">
                                            <img src="https://via.placeholder.com/150" alt="Item 1" />
                                            <img src="https://via.placeholder.com/150" alt="Item 2" />
                                            <img src="https://via.placeholder.com/150" alt="Item 3" />
                                            <img src="https://via.placeholder.com/150" alt="Item 4" />
                                            <img src="https://via.placeholder.com/150" alt="Item 5" />
                                        </div>
                                    </div> */}
            </div>
<br /><br />
            
        </div>
    )
}

export default adCard
