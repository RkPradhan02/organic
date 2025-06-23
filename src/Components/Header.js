import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import CartIcon from "../assets/images/cart.svg";
import { IoBriefcaseOutline, IoHeartOutline } from "react-icons/io5";
import { VscLocation } from "react-icons/vsc";
import { TfiShoppingCart } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "react-bootstrap/Dropdown";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Cart from "./Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);
  const cart = useSelector((state) => state.cart);
  console.log("items in the cart are: ", cart.length, cart);
  return (
    <Container fluid className="p-0">
      <Container fluid className="header-banner py-1 d-none d-lg-block">
        <Container>
          <Row>
            <Col sm={12} md={6} className="text-dark">
              Language selectors
            </Col>
            <Col
              sm={12}
              md={6}
              className="d-flex gap-3 justify-content-end align-items-center"
            >
              <Button
                variant="link"
                className="p-0 d-flex align-items-center gap-1 text-decoration-none text-dark fs-13"
              >
                <IoBriefcaseOutline /> My Account
              </Button>
              <Button
                variant="link"
                className="p-0 d-flex align-items-center gap-1 text-decoration-none text-dark fs-13"
              >
                <VscLocation /> Track Order
              </Button>
              <Button
                variant="link"
                className="p-0 d-flex align-items-center gap-1 text-decoration-none text-dark fs-13"
              >
                <IoHeartOutline /> Favourites
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Navbar expand="lg" className="main-header py-3">
        <Container className="d-flex">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex gap-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown
                title="Shop by Category"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Container className="d-flex justify-content-end pe-0">
              <Cart />
              {/* <div className="position-relative">
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
              <Offcanvas
                placement="end"
                show={showCart}
                onHide={handleCartClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                 {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="product-card p-3 border rounded" style={{ width: "250px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h5 className="mt-2">{item.name}</h5>
            <p>Quantity: {item.quantity}
              <Form.Select aria-label="quantity" style={{width: "60px"}} value={quantity} onChange={handleQuantityChange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Form.Select>
            </p>
            <p>Unit Price: ₹{item.unitPrice}</p>
            <p>Total: ₹{item.totalPrice}</p>
          </div>
        ))
      )}
                </Offcanvas.Body>
              </Offcanvas> */}
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
export default Header;
