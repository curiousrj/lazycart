import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-outline-light m-1"
                href="https://facebook.com"
                role="button"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-outline-light m-1"
                href="https://twitter.com/"
                role="button"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-outline-light m-1"
                href="https://instagram.com/"
                role="button"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-outline-light m-1"
                href="https://linkedin.com/"
                role="button"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            © 2022 Copyright:&nbsp;
            <NavLink className="text-white text-decoration-none" to="/">
              Lazy Cart
            </NavLink>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Footer;
