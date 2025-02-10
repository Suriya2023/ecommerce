import React from 'react'
import './SingUp.css'
function SingUp(props) {
    return (
        <div id='Sing_Up'>

            <div style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} className={`signin-containerr bg-${props.mode}`}>
                <div className="signin-header">
                    <h1>Welcome Back!</h1>
                    <p>Sign in to continue shopping</p>
                </div>
                <form className="signin-form">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />

                    <button type="submit">Sign In</button>

                    <div className="social-login">
                        <button type="button" className="google">
                            <img src="https://th.bing.com/th?id=ODLS.a7f53262-3b4e-44ae-897d-1eb09569e531&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="Google" /> <a href="https://www.google.com › accounts › signin">Sign in with Google</a>
                        </button>
                        <button type="button" className="facebook">

                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" /> <a href="https://www.facebook.com/login.php/"> Sign in with Facebook
                            </a>
                        </button>
                    </div>
                </form>
                <div className="signin-footer">
                    <p>Don't have an account? <a href='Login'>Log In Here</a></p>
                </div>
            </div>
        </div>
    )
}

export default SingUp
