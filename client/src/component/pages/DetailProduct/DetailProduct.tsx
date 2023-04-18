import React from "react";
import DropdownItem from "./DropDownDetail";

const DetailProduct: React.FC = () => {
  return (
    <div className="product-details-page">
      <DropdownItem title="Product Details">
        <p>Product details content goes here.</p>
      </DropdownItem>
      <DropdownItem title="Brand">
        <p>Brand content goes here.</p>
      </DropdownItem>
      <DropdownItem title="Size &amp; Fit">
        <p>Size &amp; fit content goes here.</p>
      </DropdownItem>
      <DropdownItem title="Look After Me">
        <p>Look after me content goes here.</p>
      </DropdownItem>
      <DropdownItem title="About Me">
        <p>About me content goes here.</p>
      </DropdownItem>
    </div>
  );
};

export default DetailProduct;

