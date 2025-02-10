import React from 'react'
import './Payment_Methods.css'

function Payment_Methods() {
    return (
        <div className="payment-methods-container">
            <div className="payment-header">
                <h1>Payment Methods</h1>
                <p>Manage your payment options</p>
            </div>

            <div className="payment-options">
                <div className="payment-card">
                    <div className="card-icon">
                        <img src="https://img.icons8.com/?size=80&id=63986&format=png" alt="Credit Card" />
                    </div>
                    <div className="card-details">
                        <h3>Credit & Debit Cards</h3>
                        <p>Add or manage your cards</p>
                        <button className="add-card-btn">Add a card</button>
                    </div>
                </div>

                <div className="payment-card">
                    <div className="card-icon">
                        <img src="https://img.icons8.com/?size=80&id=63978&format=png" alt="UPI" />
                    </div>
                    <div className="card-details">
                        <h3>UPI</h3>
                        <p>Add or manage UPI IDs</p>
                        <button className="add-upi-btn">Add UPI ID</button>
                    </div>
                </div>

                <div className="payment-card">
                    <div className="card-icon">
                        <img src="https://img.icons8.com/?size=80&id=64847&format=png" alt="Net Banking" />
                    </div>
                    <div className="card-details">
                        <h3>Net Banking</h3>
                        <p>Pay using internet banking</p>
                        <button className="net-banking-btn">Choose Bank</button>
                    </div>
                </div>
            </div>

            {/* Saved Cards Section */}
            <div className="saved-cards-section">
                <h2>Saved Payment Methods</h2>
                <div className="saved-cards">
                    <div className="saved-card">
                        <div className="card-type-icon">
                            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                        </div>
                        <div className="card-info">
                            <p className="card-number">**** **** **** 1234</p>
                            <p className="card-expiry">Expires 12/25</p>
                        </div>
                        <div className="card-actions">
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Remove</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment History */}
            <div className="payment-history">
                <h2>Recent Transactions</h2>
                <div className="transaction-list">
                    <div className="transaction-item">
                        <div className="transaction-info">
                            <p className="transaction-date">March 15, 2024</p>
                            <p className="transaction-desc">Order #12345</p>
                        </div>
                        <div className="transaction-amount">
                            <p>$249.99</p>
                            <span className="status success">Successful</span>
                        </div>
                    </div>
                    <div className="transaction-item">
                        <div className="transaction-info">
                            <p className="transaction-date">March 10, 2024</p>
                            <p className="transaction-desc">Order #12344</p>
                        </div>
                        <div className="transaction-amount">
                            <p>$149.99</p>
                            <span className="status success">Successful</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Settings */}
            <div className="payment-settings">
                <h2>Payment Settings</h2>
                <div className="settings-options">
                    <div className="setting-item">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <p>Save payment methods automatically</p>
                    </div>
                    <div className="setting-item">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider123"></span>
                        </label>
                        <p>Enable payment notifications</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment_Methods 