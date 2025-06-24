import React, { useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import QuantitySelector from "./QuantitySelector";
import "./ProductCard.css";
import { Rating } from 'react-simple-star-rating'

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const discountedPrice = product.price - (product.price * product.discount) / 100;
  const totalPrice = (discountedPrice * quantity).toFixed(2);

  const handleAdd = () => {
    const productWithQty = {
      ...product,
      quantity,
      totalPrice: parseFloat(totalPrice),
      unitPrice: parseFloat(discountedPrice.toFixed(2)),
    };

    dispatch(addToCart(productWithQty));
  };

  return (
    <div className="product-card overflow-hidden">
      <div className="card z-depth-4">
        <div className="card-image">
          <img src={product.image} alt={product.name} />

          <ul className="card-action-buttons">
            <li className="share-btn">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/lybete/full/jBMNzM/"
                target="_blank"
                rel="noopener noreferrer"
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
            <li className="cart-btn border-0" onClick={handleAdd}>
              <a
                id="buy"
                className="btn-floating waves-effect waves-light blue text-light"
                
              >
                <MdAddShoppingCart />
              </a>
            </li>
          </ul>
        </div>

        <div className="p-2 w-100">
          <span className="card-title-box">
            <p className="card-title">{product.name}</p>
          <Rating initialValue={4} size={16} readonly />
          </span>

          <div className="card-content p-0">
            <div className="mb-0 d-flex flex-wrap align-items-center justify-content-between">
              Quantity: <span className="text-muted ms-1 me-auto"> in Kg</span>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>

            <p className="mb-0">
              <sup>₹</sup>
              <span className="text-dark me-1 fs-4 fw-bold">{totalPrice}</span>
              <span className="fs-13 text-muted">
                M.R.P: <s>₹{(product.price * quantity).toFixed(2)}</s>
              </span>{" "}
              <span className="text-muted fs-10">({product.discount}% off)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
