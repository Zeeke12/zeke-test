import React from 'react';
import './Topbar.css'
import { useContext } from 'react';
import { ProductContext } from '../feed/shop/db/ProductContext';
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button } from 'react-bootstrap';

const Topbar = () => {
  const { filterBySearch } = useContext(ProductContext)
  const navigate = useNavigate()

  return (
    <>
<Navbar collapseOnSelect expand="lg" sticky='top' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Zeke</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
          <Nav>
          <Form.Control
            type="text"
            placeholder=" Search" onChange={filterBySearch}
             />
             <Button variant="outline-primary" onClick={() => {navigate('/result')}}>Search</Button>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Topbar