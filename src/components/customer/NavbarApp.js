import React from "react";
import {Outlet,Link} from 'react-router-dom';
import { Container, Row, Form, Nav, Button } from "react-bootstrap";
import logo from "../../images/logo.gif";

function NavbarApp() {
  return (
    <React.Fragment>
      <Container fluid className="bg-white p-0 mt-0   shadow-lg">
        <Nav className="nav navbar navbar-expand-md">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{width:"100px"}} />
          </Link>
          <Button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#btn-coll"
          >
            <span className="bi bi-grid"></span>
          </Button>
          <div className="collapse navbar-collapse" id="btn-coll">
            <ul className="navbar-link ms-5">
              <li className="nav-link"><Link to="/furniture-products">Furnitures</Link></li>
              <li className="nav-link"><Link to="/kids-products">Kids Items</Link></li>
              <li className="nav-link"><Link to="/mens-products">Mens Items</Link></li>
              <li className="nav-link"><Link to="/electronics-products">Electronics</Link></li>
              <li className="nav-link"><Link to="/books-products">Books</Link></li>
              <li className="nav-link"><Link to="/mobile-products">Mobiles</Link></li>
              <li className="nav-link"><Link to="/offers-zone">Offers Zone</Link></li>
              <li className="nav-link"><Link to="/contact-us">Contact</Link></li>
              <li className="nav-link ms-5">
                <Button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#aduser"
                >
                  Account
                  <i className="bi bi-person">
                    <span className="badge badge-sm pill-rounded text-white bg-danger start-0">
                      0
                    </span>
                  </i>
                </Button>

                <Button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#adcrt"
                  className="btn bt-sm bg-white text-dark ms-5"
                >
                  Cart{" "}
                  <i className="bi bi-cart">
                    <span className="badge badge-sm pill-rounded text-white bg-danger start-0">
                      0
                    </span>
                  </i>
                </Button>
              </li>
            </ul>
          </div>
        </Nav>
        <Outlet />
      </Container>
    </React.Fragment>
  );
}
export default NavbarApp;
