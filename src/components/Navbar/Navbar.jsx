import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.zoodmall.com.lb/_nuxt/img/zoodmall.342f9ee.svg"
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
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

        <div
          className="collapse navbar-collapse justify-content-between align-items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
               Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <ShoppingCart size={32} />
              </Link>
            </li>
          </ul>
          <form className="flex-row align-items-center">
            <input
              className="form-control me-3 mt-4"
              type="search"
              placeholder="Search on Zood"
              aria-label="Search"
              style={{ minWidth: "400px" }} // Adjust the width here
            />
            <button
              className="btn btn-success"
              type="submit"
              style={{ minWidth: "100px" }}
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav ms-5 ml-10">
            {currentUser ? (
              <li className="nav-item">
                <button className="btn btn-outline-dark" onClick={logout}>
                  Log Out
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-primary" to="/signup">
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
