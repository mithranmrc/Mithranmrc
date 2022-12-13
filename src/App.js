import './App.css';
import SimpleBottomNavigation from './components/Project/MainContainer';
import Signup from './components/Project/Signup';
import Main from './components/Project/Main';
import Groupcup from './components/Project/Groupcup';
import Navbar from './components/Project/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Address from './components/Project/Address';



function App() {
 
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='login' element={<Main/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='product' element={<Groupcup></Groupcup>}/>
        <Route path='address' element={<Address/>}/>
        
       
      </Routes>
    </BrowserRouter>
    
    
    
   </div>
  );
  
}

export default App;