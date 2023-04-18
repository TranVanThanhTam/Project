import { type } from "os";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import AuthBaseLayout from "./AuthBaseLayout/AuthBaseLayout";
import NavBarlayout from "./NavBarLayout/NavBarLayout";

const PrivateRouter: React.FC = () => {
  const privateRoutes = [

    // HOMEPAGE
    {
      path: "/",
      element: lazy(() => import("../pages/Home/HomePage")),
    },
    {
      path: ROUTES.ADMIN_MEN,
      element: lazy(() => import("../pages/Home/HomePage")),
      props: {
        type: "men",
      } as IHomePage,
    },
    {
      path: ROUTES.ADMIN_WOMEN,
      element: lazy(() => import("../pages/Home/HomePage")),
      props: {
        type: "women",
      } as IHomePage,
    },

    //LOGINPAGE
    {
      path: ROUTES.LOGIN,
      element: lazy(() => import("../pages/Login/LoginPage")),
    },

    //REGISTERPAGE
    {
      path: ROUTES.REGISTER,
      element: lazy(() => import("../pages/Register/RegisterPage")),
    },

    //PRODUCTPAGE
    {
      path: ROUTES.ADMIN_PRODUCT,
      element: lazy(() => import("../pages/Product/ProductPage")),
    },
    {
      path: ROUTES.ADMIN_PRODUCT_SALE,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "sale",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_NEWIN,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "new in",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_CLOTHING,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "clothing",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_SHOES,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "shoes",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_ACCESSORIES,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "accessories",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_SPORTSWEAR,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "sportswear",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_JEANS,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "jeans",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_BRANDS,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "brands",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_TOPMAN,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "topman",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_OUTLET,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "outlet",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_MARKETPLACE,
      element: lazy(() => import("../pages/Product/ProductPage")),
      props: {
        type: "marketplace",
      } as IProduct,
    },

    //DETAILPRODUCT
    {
      path: ROUTES.ADMIN_DETAILPRODUCT,
      element: lazy(() => import("../pages/DetailProduct/DetailPage")),
    },

    //ABOUTPAGE
    {
      path: ROUTES.ADMIN_ABOUT,
      element: lazy(() => import("../pages/About/About")),
    },

    //NOTPOUNDPAAGE
    {
      path: "*",
      element: lazy(() => import("../pages/NotFound/NotFound")),
    },
    //BAG
    {
      path: ROUTES.ADMIN_BAG,
      element: lazy(() => import("../pages/Bag/Bag")),
    },
    //SAVED
    {
      path: ROUTES.ADMIN_SAVED,
      element: lazy(() => import("../pages/Saved/Saved")),
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthBaseLayout />}>
          {privateRoutes.map((route: any, index) => (
            <Route
              path={route.path}
              element={
                <React.Suspense fallback={<>Loading...</>}>
                  {route?.props ? (
                    <route.element {...route.props} />
                  ) : (
                    <route.element />
                  )}
                </React.Suspense>
              }
              key={index}
            ></Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default PrivateRouter;
