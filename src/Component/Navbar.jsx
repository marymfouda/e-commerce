import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            La Collection
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  ContactUs
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart({cart.length}) </NavLink>
            </div>
   
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
