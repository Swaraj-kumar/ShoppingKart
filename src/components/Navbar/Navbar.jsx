import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg ">
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
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
          <ul className="navbar-nav mb-2 mb-lg-0">
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
          <form className="flex-row align-items-center"> {/* Added align-items-center to center vertically */}
            <input
              className="form-control me-3 mt-4"
              type="search"
              placeholder="Search on Zood"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
          {currentUser ? (
            <button className="btn btn-outline-dark ms-3" onClick={logout}>
              Log Out
            </button>
          ) : (
            <Link className="btn btn-primary ms-3" to="/signup">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
