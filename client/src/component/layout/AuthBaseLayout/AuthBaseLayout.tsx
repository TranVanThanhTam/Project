import React from "react";
import { Outlet } from "react-router-dom";

const AuthBaseLayout: React.FC = () => {
  return (
    <div className="row">
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthBaseLayout;
