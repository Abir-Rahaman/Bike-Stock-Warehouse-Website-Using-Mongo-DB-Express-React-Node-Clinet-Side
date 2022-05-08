import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import login from '../../asset/login.png'
import loginBanner from '../../asset/login-banner.png'
import { sendPasswordResetEmail } from 'firebase/auth';



const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword,user,error,loading] = useSignInWithEmailAndPassword(auth);
    const location =useLocation();
    const emailRef = useRef('')



    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    let from = location.state?.from?.pathname || "/";
    const Google = () =>{
        signInWithGoogle();
        if(user){
            navigate(from, { replace: true });
        }
    }

    const handleEmail = event =>{
        setEmail(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    
    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        toast("sending..........")

    }
    const forgotPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email)
            toast("sending..........")
        }
        else{
            toast("enter your email")
        }

    }
    const navigate = useNavigate();
    
    if(user){
        navigate(from, { replace: true });
    }

   
    
    return (
       <div className="row">
           <div className="col-md-4">
               <img src={loginBanner} alt="" />

           </div>
           <div className="col-md-8">
           <div className="login-banner mt-5">
        <form onSubmit={handleSignIn} className='w-50 mx-auto mt-5' >
        <img className='w-75' src={login} alt="" />
            <div className="mb-3">
                
                <label for="exampleInputEmail1" className="form-label text-success fw-bolder">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fw-bolder">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control" required id="exampleInputPassword1"/>
            </div>
            <button onClick={() =>Google()}  className="btn d-block mx-auto border border-outline-success px-5 fw-bolder "> <FontAwesomeIcon icon={faArrowAltCircleLeft} />  Google Sign  </button>   


            <div className=" mb-3 ">
            <div className="ms-5 ps-5">
                <button onClick={resetPassword} className=' btn btn-link'><small>  Reset password ? </small> </button>
                <button onClick={forgotPassword} className=' btn btn-link' > <small> Forgot Password ? </small> </button>
                </div>
                <Link className='text-decoration-none d-block mt-3 text-center text-success fw-bolder' to='/signin'> New? Create An Account </Link> 
            </div>  
            <button type="submit" className="btn btn-outline-success d-block mx-auto px-5 fw-bolder fs-5"> Log In</button>
        </form>
        </div>
           </div>
       </div>

    );
};

export default Login;