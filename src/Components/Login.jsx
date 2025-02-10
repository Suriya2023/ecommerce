import React from 'react'
// Link
import './User_Login.css'
import { Link } from 'react-router-dom'
function Login(props) {
    return (
        <div id='Login' className={`bg-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div className="login-container">
                {/* <div className={`logo ${props.mode === 'light' ? 'dark' : 'light'} `}>
                    <span className="logo-box"><i className="fa-solid fa-bag-shopping"></i> <i style={{ fontStyle: 'oblique' }} className={`underline  ${props.mode === 'light' ? 'dark' : 'light'}`}><Link to="/Shopping-App/">Shop</Link></i></span>
                </div> */}
                <h1> <i className="fa-solid fa-user"></i> Login</h1>
                <form action="/login" method="POST">
                    <label for="email"> <i className="fa-regular fa-envelope"></i> Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label for="password"> <i className="fa-solid fa-lock"></i> Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />

                    <button id='call1' className={`bg-${props.mode === 'light' ? 'dark' : 'light'}`} type="submit"><a href="/Shopping-App/"> <i className="fa-solid fa-right-to-bracket"></i> Log In</a></button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <i className="fa-solid fa-user-plus"></i>  <Link to='/Shopping-App/Sing_in'> Sign up here</Link></p>
                </div>
            </div>
        </div>

    )
}

export default Login
