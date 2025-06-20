import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductGallery = ({items}) => {
    return(
        <>
        <Row>
            {
                items.map((item) => {
                    <Col key={item.id} sm={12} md={4} lg={3}><ProductCard product={item}/></Col>
                })
            }
        </Row>
        </>
    )
};
export default ProductGallery