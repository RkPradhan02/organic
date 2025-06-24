import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
import { IoBriefcaseOutline, IoHeartOutline } from "react-icons/io5";
import { VscLocation } from "react-icons/vsc";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  console.log("items in the cart are: ", cart.length, cart);
  return (
    <>
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
      <Navbar expand="lg" className="main-header py-3" >
        <Container className="d-flex">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
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
              {/* <Cart /> */}
            </Container>
          </Navbar.Collapse>
          <div className="d-flex gap-2 ms-auto">
          <Navbar.Toggle aria-controls="navbarScroll" />
           <Cart />
          </div>
          

          
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
