import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import items from "../assets/data/items";
import ProductGallery from "./ProductsGallery";

const DealProduct = ({ productIds }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  if (productIds && productIds.length > 0) {
    const result = items
      .filter((item) => productIds.includes(item.id))
      .map((item) => ({ ...item, deal: true }));
      setProducts(result);
    }
  }, [productIds]);
  // console.log("products iin deal products", products)



  return (
    <>
        <ProductGallery items={products} isDiscount={true} />

    </>
  );
};
export default DealProduct;
