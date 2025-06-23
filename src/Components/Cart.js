import React, { useState } from "react";
import CartIcon from "../assets/images/cart.svg";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import "./Cart.css"
import QuantitySelector from "./QuantitySelector";


const Cart = () => {
    
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState("0");

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);
  const cart = useSelector((state) => state.cart);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };
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
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="product-card d-flex p-1 gap-2"
              >
                <div className="cart-left">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "90px",
                      objectFit: "cover",
                    }}
                  />
                  {/* <Form.Select
                    aria-label="quantity"
                    style={{ width: "50px", padding: "0 6px" }}
                    value={item.quantity}
                    onChange={handleQuantityChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select> */}
                </div>
                <div className="w-100">
                  <h5 className="m-0">{item.name}</h5>
                  <p className="mb-0 d-flex  justify-content-between"><span>₹{item.unitPrice}</span>
                  {/* <p className="mb-0 d-flex align-items-center justify-content-between"><span>Price:</span> <span>₹{item.unitPrice}</span></p> */}
                  {/* <p className="mb-0">Total: ₹{item.totalPrice}</p> */}
                  <QuantitySelector quantity={item.quantity} setQuantity={setQuantity}/>
                  
                  </p>
                  <p className="text-danger">remove</p>
                </div>
              </div>
            ))
          )}
          {/* <p>total Price: ₹ 0.00 </p> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Cart;
