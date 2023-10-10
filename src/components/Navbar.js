import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  //
  // Array of color options
  // const colorOptions = [
  //   { name: "Blue", backgroundColor: "blue" },
  //   { name: "Green", backgroundColor: "green" },
  //   { name: "Yellow", backgroundColor: "yellow" },
  //   { name: "Purple", backgroundColor: "purple" },
  // ];
  // const handleColorChange = (color) => {
  //   document.body.style.backgroundColor = color;
  // };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{
              color:
                props.mode === "dark" ? "white" : "black",
            }}
          >
            {props.title}
          </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link " href="/about">
              {props.aboutText}
            </a>
            </li> */}
          </ul>
          {/*  */}
          {/* Search Box */}
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
          {/*  */}
          {/* Color Mode  */}
          {/*  */}
          {/* <div>
            {colorOptions.map((colorOption, index) => (
              <button
                key={index}
                onClick={() => handleColorChange(colorOption.backgroundColor)}
                className="btn mx-1"
                style={{
                  backgroundColor: colorOption.backgroundColor,
                  color: "black",
                }}
              >
                {colorOption.name}
              </button>
            ))}
          </div> */}
          {/*  */}
          {/*  */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input mx-1"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //required is used for when title is needed compulsory, when default is not given it will give u an error if not initialized
  aboutText: PropTypes.string.isRequired,
};
//  FOR SETTING THE DEFAULT PROPS VALUES WHEN NOT CALLED OR INITIALIZED
Navbar.defaultProps = {
  text: "Set Your Title Here",
  aboutText: "About",
};
