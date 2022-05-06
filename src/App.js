import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home/Home';
import Footer from './Componenets/Footer/Footer';
import Login from './Componenets/Login/Login';
import SignIn from './Componenets/SignIn/SignIn';
import Inventory from './Componenets/Inventory/Inventory';
import RequireAuth from './Componenets/RequireAuth/RequireAuth';
import ManageInventory from './Componenets/ManageInventory/ManageInventory';
import DeliveredItem from './Componenets/DeliveredItem/DeliveredItem';
import AddItem from './Componenets/AddItem/AddItem';



function App() {
  return (
    <div className="">
      <Navbar></Navbar>
     
      <Routes>
       <Route path='/' element={<Home></Home>} >  </Route>
       <Route path='/inventory/:id' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>  
       <Route path='/delivered/:id' element={<RequireAuth><DeliveredItem></DeliveredItem></RequireAuth>}></Route>  
       <Route path='/manageInventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>    
       <Route path='/addItem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>    
       <Route path='/login' element={<Login></Login>} >  </Route>  
       <Route path='/signin' element={<SignIn></SignIn>} >  </Route>  
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
