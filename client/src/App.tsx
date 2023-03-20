import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './component/pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Products from './component/pages/products/Products';
import HomeWeb from './component/pages/Home/HomeWeb';
import NextImgItem from './component/common/WEB/data/NextImgItem.json'
import NextCommon from './component/common/WEB/NextImgCommon/NextCommon';
import { Carousel } from 'react-bootstrap';
import NavbarLayout from './component/layout/NavbarLayout';

function App() {
  return (
 
    <>
    <div>
     {/* <Products/> */}
     {/* <HomeWeb/> */}
     
      <NavbarLayout/>
      <NextCommon {...NextImgItem[0]} />
       
     

     
     <Provider store={store}>
        {/* <Home/> */}
        
      </Provider>
       
   </div>
   </>
  );
}

export default App; 
