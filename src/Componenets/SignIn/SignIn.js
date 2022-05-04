import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import auth from '../../firebase.init';
import login from '../../asset/login.png'
import signBanner from '../../asset/signup-banner.png'

const SignIn = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification :true});
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPass , setConfirmPass] = useState("");
    const [error , setError] = useState("");
    const navigate = useNavigate();
    const [sendEmailVerification] = useSendEmailVerification(auth);


    const handleName = event => {
        setName (event.target.value);
    }
    const handleEmail = event => {
        setEmail (event.target.value);
    }
    const handlePass = event => {
        setPassword (event.target.value);
    }
    const handleConfirmPass = event => {
        setConfirmPass (event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPass){
            setError("Didn't Match The Password")
            return;

        }
        if(password.length <= 6 ){
            setError (" Password should be six characters ")
        }
        createUserWithEmailAndPassword(email,password);
    }

    if (user){
        navigate("/") 
    }
    return (
        <div className='row'>
            <div className="col-md-4">
                <img className='mt-5 pt-5' src={signBanner} alt="" />
            </div>
            <div className="col-md-8">


                 <div className="signup-banner mt-5">
                     
        <form onSubmit={handleCreateUser} className='w-25 mx-auto pt-5' >
        <img className='w-75' src={login} alt="" />
            <div className="mb-3">
                <label for="exampleInput" className="form-label text-success fw-bolder"> Your Name</label>
                <input onBlur={handleName} type="text" className="form-control" required id="exampleInput" aria-describedby="Help"/>
            </div>
            
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-success fw-bolder">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fw-bolder">Password</label>
                <input onBlur={handlePass} type="password" className="form-control" required id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fw-bolder">Confirm Password</label>
                <input onBlur={handleConfirmPass} type="password" className="form-control" required id="exampleInputPassword2"/>
            </div>
            <button onClick={() =>signInWithGoogle()}  className="btn d-block mx-auto border border-outline-success px-5 fw-bolder "> <FontAwesomeIcon icon={faArrowAltCircleLeft} />  Google Sign  </button>   
            <p className='text-center text-danger fw-bolder' > {error} </p>

            <div className=" mb-3 ">
                <Link className='text-decoration-none d-block mt-3 text-center text-success fw-bolder' to='/login'> Already Account ?  Log In </Link>
            </div>
            <button  onClick= {async () => {
                await sendEmailVerification();
               alert('Sent email');} }  type="submit" className="btn btn-outline-success d-block mx-auto px-5 fw-bolder fs-5"> Register </button>
        </form>
        </div>
            </div>
        </div>
    );
};

export default SignIn;