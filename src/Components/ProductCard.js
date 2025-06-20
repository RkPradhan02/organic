import React, { useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import './ProductCard.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = ({product}) => {
    // const [discount, setDiscount] = useState(false);
    // if(isDiscount) {
    //     setDiscount(true);
    // }
    console.log("item in card", product)
    const dispatch = useDispatch();
    const handleAdd = () => dispatch(addToCart(product));

  return (
    <>
          <div className="product-card overflow-hidden">
            <div className="card  z-depth-4">
              <div className="card-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
                
              <ul className="card-action-buttons">
                <li className="share-btn">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/lybete/full/jBMNzM/"
                    target="_blank"
                    className="btn-floating waves-effect waves-light white"
                  >
                    <IoShareSocial />
                  </a>
                </li>
                <li className="fav-btn">
                  <a className="btn-floating waves-effect waves-light red accent-2 text-light">
                    <FaRegHeart />
                  </a>
                </li>
                <li className="cart-btn border-0">
                  <a
                    id="buy"
                    className="btn-floating waves-effect waves-light blue text-light" onClick={handleAdd}
                  >
                    <MdAddShoppingCart />
                  </a>
                </li>
              </ul>
              </div>
              <div className="p-3 w-100">
                <span className="card-title-box">
                  <span className="card-title">{product.name}</span>
                </span>
              <div className="card-content p-0">
                <div className="">
                  <div className="">
                    <p className="mb-0">Quantity: {product.quantity}</p>
                    <p><sup>₹</sup><span className="text-dark me-1 fs-4 fw-bold">{product.price - (product.price * product.discount / 100)}</span><span className="fs-13 text-muted">M.R.P: <s>₹{product.price}</s></span>  <span className="text-muted">({product.discount} off)</span> 
                    </p>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
          </div>
    </>
  );
};
export default ProductCard;
