import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ color: "black" }}>
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            The Halloween Site Store
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link>
              <Link
                to={"/Category"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Costumes
              </Link>
            </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              
                {categories.map((category, index) => {
                  return (
                <NavDropdown.Item  key={index}>
                  <Link
                    to={"/category"}
                    style={{textDecoration: "none", color: "black"}}>
                      {category}
                  </Link>
                </NavDropdown.Item>
            );
            })}
            </NavDropdown>
          </Nav>
          <CartWidgetComponent></CartWidgetComponent>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;