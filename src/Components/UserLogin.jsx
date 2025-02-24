import React from 'react'
import './UserLogin.css'
import { Link } from 'react-router-dom'
function UserLogin(props) {


    return (
        <div id={props.sidebarr}>
            <div style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} className={`sidebar`} id="sidebar">

                <h2>  User </h2>
                <hr />
                <hr />
                <ul className='myimgMdS'>
                    <li className=''><Link to="/ecommerce/Your_List"><img id='myimgoo' src="https://img.icons8.com/?size=64&id=ZKEpzRpZSZm2&format=png" alt="" />&nbsp; Your List</Link></li>
                    <hr />
                    <li><a href="/ecommerce/{<Categorie />}"><img id='myimgoo' src="https://img.icons8.com/?size=64&id=kKFFU5D5VMbV&format=png" alt="" />&nbsp; Products</a></li>
                    <hr />
                    <li><Link to="/ecommerce/User_page"><img id='myimgoo' src="https://img.icons8.com/?size=64&id=QVWfeW9ZclFk&format=png" alt="" /> &nbsp;  Profile</Link></li>
                    <hr />
                    <li><Link to="/ecommerce/Sing_in"><img id='myimgoo' src="https://img.icons8.com/?size=30&id=60989&format=png" alt="" />&nbsp; Sign in</Link></li>
                    <hr />
                    <li><Link to="/ecommerce/Login"><img id='myimgoo' src="https://img.icons8.com/?size=50&id=26211&format=png" alt="" /> &nbsp; Log In</Link></li>
                    <hr />
                    {/* <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><rect x="3" y="2" width="10" height="12" rx="1.5" /></svg> Docs</a></li> */}
                    <hr />
                    <li><Link to="/ecommerce/"> <img id='myimgoo' src="https://img.icons8.com/?size=50&id=26217&format=png" alt="" /> &nbsp;Log Out</Link></li>
                    <hr />
                    <li><Link to="/ecommerce/Help"><img id='myimgoo' src="https://img.icons8.com/?size=50&id=E4FAF4hA9ugF&format=gif" alt="" />&nbsp; Help</Link></li>
                    <hr />
                </ul>
            </div>
        </div>
    )
}

export default UserLogin
