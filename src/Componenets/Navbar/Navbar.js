import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to='/' className=" navbar-brand" href="#"><img className='w-50' src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-bolder fs-4 nav-section" aria-current="page" to='/' >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-bolder fs-4 nav-section" aria-current="page" to='/blogs'>Blogs</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-bolder fs-4 nav-section" aria-current="page" to='/about' >About</Link>
                    </li>
               </ul>
              
                    <Link to='/login'> <button className="btn btn-outline-dark px-5 py-2 rounded-pill fw-bolder" type="submit">Log In</button> </Link>
            
            
      </div>
  </div>
</nav>
    );
};

export default Navbar;