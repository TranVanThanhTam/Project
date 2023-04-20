import React from "react";
import OpenTask from "./OpenTask";

interface DropdownItemProps {
  title: string;
  children: React.ReactNode;

}

const DropDownDetail: React.FC<DropdownItemProps> = ({ title, children }) => {
  return (
    <OpenTask title={title}>
      {children}
    </OpenTask>
  );
};

export default DropDownDetail;