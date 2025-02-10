import React from 'react'
import './User_Page.css'
function User_Page(props) {
    // Add state for edit mode
    const [isEditing, setIsEditing] = React.useState(false);
    
    return (
        <div>
            <div className={`profile-container bg-${props.mode}`}>
                <div className="profile-header">
                    <img src="https://avatars.githubusercontent.com/u/148303377?v=4" alt="User Profile Picture"/>
                        <div>
                            <h1>Shopp User</h1>
                            <p>shopp@example.com</p>
                        </div>
                </div>
                <div className="profile-details">
                    {!isEditing ? (
                        // Read-only view
                        <>
                            <div className="detail">
                                <label>Phone:</label>
                                <span>+1 987 654 3210</span>
                            </div>
                            <div className="detail">
                                <label>Address:</label>
                                <span>456 Sauth Lane, Seattle, WA, USA</span>
                            </div>
                            <div className="detail">
                                <label>Prime Membership:</label>
                                <span>Active - Renew on 2025-01-15</span>
                            </div>
                            <div className="detail">
                                <label>Orders:</label>
                                <span>15 Orders Completed</span>
                            </div>
                        </>
                    ) : (
                        // Edit mode
                        <>
                            <div className="detail">
                                <label>Phone:</label>
                                <input type="text" defaultValue="+1 987 654 3210" />
                            </div>
                            <div className="detail">
                                <label>Address:</label>
                                <input type="text" defaultValue="456 Sauth Lane, Seattle, WA, USA" />
                            </div>
                            <div className="detail">
                                <label>Prime Membership:</label>
                                <span>Active - Renew on 2025-01-15</span>
                            </div>
                            <div className="detail">
                                <label>Orders:</label>
                                <span>15 Orders Completed</span>
                            </div>
                        </>
                    )}
                </div>
                {!isEditing ? (
                    <button onClick={() => setIsEditing(true)} className="edit-btn">
                        Edit Profile
                    </button>
                ) : (
                    <div className="button-group">
                        <button onClick={() => setIsEditing(false)} className="save-btn">
                            Save Changes
                        </button>
                        <button onClick={() => setIsEditing(false)} className="cancel-btn">
                            Cancel
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default User_Page
