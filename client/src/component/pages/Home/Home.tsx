import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { clearProducts } from "../../../redux/products/products.reducer";
import { fetchProducts } from "../../../redux/products/products.service";
import { RootState, useAppDispatch ,} from "../../../redux/Store";
import { fetchUser } from "../../../redux/user/User.service";



const Home: React.FC = () => {
  const {loading, error} = useSelector((state: RootState) => state.common);

  const { user } = useSelector((state: RootState) => state.user);

  const { products } = useSelector((state: RootState) => state.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser("10"));
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(products, loading, error);
  }, [error, loading, products]);

  return (
   
    <div className="App">
      
     name : {user?.name}

    </div>
  );
};


export default Home;



