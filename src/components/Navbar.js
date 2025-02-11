import React from "react";
import PropTypes from "prop-types";
/*import { a } from "react-router-dom";*/

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-light`}>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              
              
              <a className="nav-link"  href="#">
                Bout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TextForm
              </a>
            </li>
          </ul>
        </div>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = {
  title: "set title here",
};
