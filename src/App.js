import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home/Home';
import Footer from './Componenets/Footer/Footer';
import Login from './Componenets/Login/Login';
import SignIn from './Componenets/SignIn/SignIn';



function App() {
  return (
    <div className="">
      <Navbar></Navbar>
     
      <Routes>
       <Route path='/' element={<Home></Home>} >  </Route>
       <Route path='/login' element={<Login></Login>} >  </Route>  
       <Route path='/signin' element={<SignIn></SignIn>} >  </Route>  
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
