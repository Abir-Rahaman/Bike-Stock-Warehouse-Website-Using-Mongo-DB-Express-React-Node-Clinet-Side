import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png'
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className="navbar full-nav navbar-expand-lg navbar-light">
            <div className="container">
                <Link to='/' className="w-25 navbar-brand" href="#"><img className='w-75' src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-bolder fs-5 nav-section" aria-current="page" to='/' >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-bolder fs-5 nav-section" aria-current="page" to='/manageInventory' >ManageInventory</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-bolder fs-5 nav-section" aria-current="page" to='/Blog'>Blogs</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-bolder fs-5 nav-section" aria-current="page" to='/addItem'>Add Item</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-bolder fs-5 nav-section" aria-current="page" to='/myItems' >My Items</Link>
                    </li>
               </ul>
              
               <span className='text-white pe-2 outline-danger '> {user?.displayName && user.displayName} </span>
               {
                   user?.uid ?
                    <Link to='/login'> <button onClick={() => signOut(auth)} className="btn btn-outline-dark px-5 py-2 rounded-pill fw-bolder" type="submit"> Sign Out </button> </Link>
                    
                    : 
                    <Link to='/login'> <button className="btn btn-outline-dark px-5 py-2 rounded-pill fw-bolder" type="submit">Log In</button> </Link>
               }
            
            
      </div>
  </div>
</nav>
    );
};

export default Navbar;