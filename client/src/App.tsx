import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Home from './component/pages/Home/Home';
import { Provider } from 'react-redux';
// import Products from './component/pages/products/ProductPage';
// import HomeWeb from './component/pages/Home/HomeWeb';
// import NextImgItem from './component/common/WEB/data/NextImgItem.json'
// import NextCommon from './component/common/WEB/NextImgCommon/NextCommon';
// import { Carousel } from 'react-bootstrap';
// import NavbarLayout from './component/layout/NavBar/NavbarLayout';
// import SelectFormCommon from './component/common/WEB/SelectCommon/SelectFormCommon';
// import SelectItem from './component/common/WEB/data/SelectItem.json'
// import Bag from './component/pages/Bag/Bag';
// import Saved from './component/pages/Saved/Saved';
import PrivateRouter from './component/layout/PrivateRouter';
import AuthBaseLayout from './component/layout/AuthBaseLayout/AuthBaseLayout';
import { store } from './redux/Store';



function App() {
  return (

    <>
      <div>
        {/* <Products/> */}
        <div>
          <Provider store={store}>
            <AuthBaseLayout />
            <PrivateRouter />
          </Provider>
        </div>

        {/* <NavbarLayout/>
        <NextCommon {...NextImgItem[0]}/> */}
        {/* <SelectFormCommon {...SelectItem[0]} /> */}

        {/* <Select/> */}

        {/* <Saved/> */}
        {/* <Bag/> */}

        {/* <Provider store={store}>
          <Home/>

        </Provider> */}

      </div>
    </>
  );
}

export default App; 
