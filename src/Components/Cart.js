import React, { useState } from "react";
import CartIcon from "../assets/images/cart.svg";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import "./Cart.css";
import QuantitySelector from "./QuantitySelector";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0.05);

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);
  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce((total, item) => total + item.totalPrice, 0);
  // const totalAmount = cart.reduce((total, item) => total + parseFloat(item.totalPrice.replace('$', '')), 0);

  // const handleQuantityChange = (e) => {
  //   setQuantity(parseInt(e.target.value));
  // };

  return (
    <>
      <div className="position-relative">
        <Button
          variant="outline"
          onClick={handleCartShow}
          className="me-0 ms-auto cart-btn"
        >
          <img src={CartIcon} alt={CartIcon} />
          Cart
        </Button>
        <span className="position-absolute product-count">
          {cart.length > 9 ? "9+" : cart.length}
        </span>
      </div>

      {/*  */}
      <Offcanvas placement="end" show={showCart} onHide={handleCartClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={`position-relative py-0 ${cart.length > 6 ? "pe-0" : "pe-3"}`}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="products-stack pb-3">
              {cart.map((item, index) => (
                <div key={index} className="product-item d-flex p-1 gap-2">
                  <div className="cart-left">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="w-100">
                    <h5 className="m-0">{item.name}</h5>
                    <div className="mb-0 d-flex justify-content-between">
                      <span>
                        ₹{item.unitPrice} * <b>{item.quantity} Kg</b>
                      </span>
                      <p className="mb-0">
                        <span className="fs-10 d-none">Total:</span> ₹<b>{item.totalPrice.toFixed(2)}</b>
                      </p>
                    </div>
                    <p className="text-danger mb-0 text-end">remove</p>
                  </div>
                </div>
              ))}

              {/* Total Amount (Placed after the map) */}
              <div className="position-absolute bottom-0 cart-footer price">
                <Button variant="outline-secondary">Proceed to Checkout</Button>
                <div>

                <span className="text-muted">Total Price:</span>{" "}
                <span>
                  ₹ <b>{totalAmount.toFixed(2)}</b>
                </span>
                </div>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Cart;
