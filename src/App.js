import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home/Home';
import Footer from './Componenets/Footer/Footer';



function App() {
  return (
    <div className="">
      <Navbar></Navbar>
     
      <Routes>
       <Route path='/' element={<Home></Home>} >  </Route>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
