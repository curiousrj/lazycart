import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navBar.css'
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {

  const cart = useSelector(state=> state.cartHandler)
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 logo" to="/">
          Lazy Cart
        </NavLink>
        <button
          className="navbar-toggler"
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
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons navButtons d-flex">
          <NavLink to="/login" className="btn btn-outline-dark">
            <i className="fa-solid fa-right-to-bracket me-1"></i>Login
          </NavLink>
          <NavLink to="/register" className="btn btn-outline-dark register">
            <i className="fa-solid fa-user-plus me-1"></i>Register
          </NavLink>
          <NavLink to="/cart" className="btn btn-outline-dark">
            <i className="fa-solid fa-cart-shopping me-1"></i>Cart ({cart.length?cart.length:0})
          </NavLink>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
