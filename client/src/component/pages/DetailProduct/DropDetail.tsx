import React, { useState } from "react";
import Style from "./DetailPage.module.css";
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa';


interface DropDownProps {
  title: string;
  children: React.ReactNode;

}

const DropDetail: React.FC<DropDownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={Style.dropdown}>
      <div className={Style.dropdownheader} onClick={toggleOpen}>
       <div>{title}</div>
       {isOpen ? <FaChevronLeft/> : <FaChevronDown/>}
      </div>
      {isOpen && <div className={Style.dropdowncontent}>{children}</div>}
    </div>
  );
};

export default DropDetail;