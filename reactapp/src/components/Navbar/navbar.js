import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import './navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar border-bottom">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <span className='span1'>Mart</span>
          <span className='span2'>.ps</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="https://mart.ps/content/5-%D8%A7%D8%B3%D8%A6%D9%84%D8%A9-%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9" className="nav-item-custom">أسئلة شائعة</Nav.Link>
            <Nav.Link href="https://mart.ps/content/11-martps-policies" className="nav-item-custom">سياسات الشركة</Nav.Link>
            <Nav.Link href="https://mart.ps/new-products" className="nav-item-custom">وصلنا حديثا</Nav.Link>
            <Nav.Link href="https://mart.ps/281-super-deals" className="nav-item-custom">Super Deals</Nav.Link>
            <Nav.Link href="#home" className="nav-item-custom">الرئيسية</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
