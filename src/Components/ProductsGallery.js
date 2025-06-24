import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const ProductGallery = ({ items, isDiscount }) => {
  const [discount, setDiscount] = useState(false);
  const product = items || [];
  // console.log(items, "itemd in gallery");
  if (discount) {
    setDiscount(true);
  }
  return (
    <>
      <Row>
        {product.map((items) => {
          return (
            <Col key={items.id} sm={6} md={3} lg={3} className="mb-4">
              <ProductCard product={items} />
            </Col>
          );
        })}

      </Row>
    </>
  );
};
export default ProductGallery;
