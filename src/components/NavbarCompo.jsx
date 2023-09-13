import { useState, useEffect } from "react";
import { Navbar, Container, Row, Col, Nav, NavbarBrand } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";



const NavbarCompo = () => {
const[changeColor, setChangeColor] = useState(false);

const changeBackgroundColor = () =>{
  if (window.scrollY > 10){
    setChangeColor(true);
  }else {
    setChangeColor(false);
  }
};

useEffect(() => {
  changeBackgroundColor();
  window.addEventListener("scroll", changeBackgroundColor);
})
  return (
    <div>
      <Navbar  className={changeColor ? "color-active" : ""}>
                <Container>
                  <Row>
                    <Col>
                    <Navbar.Brand>
                     M Series
                      <input type="text" 
                      placeholder=""
                      
                      />
                      <button className="btn btn-outline-success rounded-1 test">VIP <i class="fa-solid fa-crown fa-fade"></i></button>
                    </Navbar.Brand> 
                    </Col>
                    <Col>
                    <div className="text">
                    <Nav className="mx-auto text-center">
                      {navLinks.map((link) => {
                       return(
                         <div className="nav-link" key={link.id}>
                          <NavLink to={link.path}>
                            <button className="btnrounded-1 me-xs-0 mb-xs-0 mb-0">
                            {link.text}
                            </button>
                          </NavLink>
                        </div>
                       ) 
                      })}
                    </Nav>
                    </div>
                    </Col>
                  </Row>
                </Container>
              </Navbar>
    </div>
  )
}

export default NavbarCompo