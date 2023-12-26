import React from 'react';
import './App.css';
import { BrowserRouter,Route , Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blogs from './Pages/Blogs';
import CompareProduct from './Pages/CompareProduct';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                 <Route index element={<Home />} />
                 <Route path='/about' element={<About />} />
                 <Route path='/contact' element={<Contact />} />
                 <Route path='/OurStore' element={<OurStore />} />
                 <Route path='/Blogs' element={<Blogs />} />
                 <Route path='/Compare-Product' element={<CompareProduct />} />
                 <Route path='/Login' element={<Login />} />
                 <Route path='Login/Signup' element={<Signup />} />

              </Route>
          </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
