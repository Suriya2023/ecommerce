import React from 'react'
import './Help.css'
function Help() {
    return (
        <div>

            <div className="containerpp">
                <div className="headerl">
                    <h1>Want to chat now or get a call from us?</h1>
                </div>

                <div className="options">
                    <div className="option-card">
                        <h2>Chat right now</h2>
                        <p>Our messaging assistant can quickly solve many issues or direct you to the right person or place. Instant chat and always available.</p>
                        <button>Start chatting</button>
                    </div>
                    <div className="option-card">
                        <h2>Have us call you</h2>
                        <p>We’ll first get a few details about your issue and then someone will call you right away.</p>
                        <button>Call me</button>
                    </div>
                </div>

                <div className="extras">
                    <h2>Here are a few things you can take care of on your own</h2>
                    <div className="extras-grid">
                        <div className="extra-item">
                            <img src="https://img.icons8.com/?size=80&id=112157&format=png" alt="Order" />
                            <p>Check on an order</p>
                        </div>
                        <div className="extra-item">
                            <img src="https://img.icons8.com/?size=48&id=p8WbeGWl1Aya&format=png" alt="Manage Content" />
                            <p>Manage content & devices</p>
                        </div>
                        <div className="extra-item">
                            <img src="https://img.icons8.com/?size=80&id=5t8WDFRXcccT&format=png" alt="Prime" />
                            <p>Get help with Prime</p>
                        </div>
                        <div className="extra-item">
                            <img src="https://img.icons8.com/?size=80&id=91130&format=png" alt="Payment Info" />
                            <p>Update payment info</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
