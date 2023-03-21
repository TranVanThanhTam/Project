import React from "react";
import NavbarLayout from "../../layout/NavBar/NavbarLayout";
import Products from "../products/Products";

const HomeWeb: React.FC = () =>{

    return (
        <>
        <div>
            <NavbarLayout/>
            <Products/>
        </div>
        </>
    )
};
export default HomeWeb;