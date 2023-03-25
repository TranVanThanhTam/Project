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
import NavbarLayout from './component/layout/NavBar/NavbarLayout';
import SelectFormCommon from './component/common/WEB/SelectCommon/SelectFormCommon';
import SelectItem from './component/common/WEB/data/SelectItem.json'
import Bag from './component/pages/Bag/Bag';
import Saved from './component/pages/Saved/Saved';


function App() {
  return (

    <>
      <div>
        {/* <Products/> */}
        {/* <HomeWeb/> */}

        {/* <NavbarLayout/>
        <NextCommon {...NextImgItem[0]}/> */}
        {/* <SelectFormCommon {...SelectItem[0]} /> */}

        {/* <Select/> */}

        <Saved/>
        {/* <Bag/> */}

        <Provider store={store}>
          {/* <Home/> */}

        </Provider>

      </div>
    </>
  );
}

export default App; 
