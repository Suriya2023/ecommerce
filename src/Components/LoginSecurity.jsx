import React, { useState } from 'react';
import './SlUserMd.css';

function LoginSecurity() {
    const [user, setUser] = useState({
        name: 'Suraj Rajput',
        email: 'srrajput221221@gmail.com',
        phone: '+1 234-567-8900'
    });

    const [editing, setEditing] = useState({
        name: false,
        email: false,
        phone: false,
        password: false
    });

    const handleEdit = (field) => {
        setEditing({ ...editing, [field]: true });
    };

    const handleSave = (field, value) => {
        setUser({ ...user, [field]: value });
        setEditing({ ...editing, [field]: false });
    };

    const handleCancel = (field) => {
        setEditing({ ...editing, [field]: false });
    };

    return (
        <div className="login-security-container">
            <h2>Login & Security</h2>
            
            <div className="security-section">
                <div className="security-item">
                    <div className="security-info">
                        <h3>Name:</h3>
                        {editing.name ? (
                            <div className="edit-field">
                                <input 
                                    type="text" 
                                    defaultValue={user.name}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSave('name', e.target.value);
                                        }
                                    }}
                                />
                                <div className="edit-buttons">
                                    <button onClick={() => handleSave('name', document.querySelector('input').value)}>Save</button>
                                    <button onClick={() => handleCancel('name')}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <p>{user.name}</p>
                        )}
                    </div>
                    {!editing.name && <button className="edit-btn" onClick={() => handleEdit('name')}>Edit</button>}
                </div>

                <div className="security-item">
                    <div className="security-info">
                        <h3>Email:</h3>
                        {editing.email ? (
                            <div className="edit-field">
                                <input 
                                    type="email" 
                                    defaultValue={user.email}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSave('email', e.target.value);
                                        }
                                    }}
                                />
                                <div className="edit-buttons">
                                    <button onClick={() => handleSave('email', document.querySelector('input[type="email"]').value)}>Save</button>
                                    <button onClick={() => handleCancel('email')}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <p>{user.email}</p>
                        )}
                    </div>
                    {!editing.email && <button className="edit-btn" onClick={() => handleEdit('email')}>Edit</button>}
                </div>

                <div className="security-item">
                    <div className="security-info">
                        <h3>Mobile Phone Number:</h3>
                        {editing.phone ? (
                            <div className="edit-field">
                                <input 
                                    type="tel" 
                                    defaultValue={user.phone}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSave('phone', e.target.value);
                                        }
                                    }}
                                />
                                <div className="edit-buttons">
                                    <button onClick={() => handleSave('phone', document.querySelector('input[type="tel"]').value)}>Save</button>
                                    <button onClick={() => handleCancel('phone')}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <p>{user.phone}</p>
                        )}
                    </div>
                    {!editing.phone && <button className="edit-btn" onClick={() => handleEdit('phone')}>Edit</button>}
                </div>

                <div className="security-item">
                    <div className="security-info">
                        <h3>Password:</h3>
                        <p>********</p>
                    </div>
                    <button className="edit-btn">Edit</button>
                </div>

                <div className="security-item">
                    <div className="security-info">
                        <h3>Two-Step Verification (2SV) Settings:</h3>
                        <p>Not Enabled</p>
                    </div>
                    <button className="edit-btn">Manage</button>
                </div>
            </div>
        </div>
    );
}

export default LoginSecurity;