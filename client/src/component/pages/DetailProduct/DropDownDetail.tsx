import React from "react";
import DropDown from "./DropDetail";

interface DropdownItemProps {
  title: string;
  children: React.ReactNode;

}

const DropDownDetail: React.FC<DropdownItemProps> = ({ title, children }) => {
  return (
    <DropDown title={title}>
      {children}
    </DropDown>
  );
};

export default DropDownDetail;