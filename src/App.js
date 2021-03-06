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
import AddItem from './Componenets/AddItem/AddItem';
import MyItems from './Componenets/MyItems/MyItems';
import NotFound from './Componenets/NotFound/NotFound';
import Blog from './Componenets/Blogs/Blog';



function App() {
  return (
    <div className="">
      <Navbar></Navbar>
     
      <Routes>
       <Route path='/' element={<Home></Home>} >  </Route>
       <Route path='/home' element={<Home></Home>} >  </Route>
       <Route path='/inventory/:id' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>  
       <Route path='/manageInventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>    
       <Route path='/addItem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>    
       <Route path='/myItems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>    
       <Route path='/login' element={<Login></Login>} >  </Route>  
       <Route path='/Blog' element={<Blog></Blog>} >  </Route>  
       <Route path='/signin' element={<SignIn></SignIn>} >  </Route>  
       <Route path="*" element={<NotFound></NotFound> } ></Route>
      </Routes>
      <Footer></Footer>
      
     
    </div>
  );
}

export default App;
