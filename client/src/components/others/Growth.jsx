import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock, faClone, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './Growth.css';

function Growth() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12 project-section text-center">
          <h6 className="text-danger">EXPERTS GROWTH</h6>
          <h3>OUR COMPANY GROWTH</h3>
        </div>
      </div>
      <div className="container-fluid py-5 d-flex align-items-center justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div className="card text-center" style={{ width: "15rem" }}>
              <div className="card-body">
                <FontAwesomeIcon icon={faHeart} className="mb-3" style={{ fontSize: "2rem", color: "purple" }} />
                <h5 className="card-title">199 +</h5>
                <p className="card-text">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div className="card text-center" style={{ width: "15rem" }}>
              <div className="card-body">
                <FontAwesomeIcon icon={faClock} className="mb-3" style={{ fontSize: "2rem", color: "purple" }} />
                <h5 className="card-title">1591 +</h5>
                <p className="card-text">Days Of Operation</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div className="card text-center" style={{ width: "15rem" }}>
              <div className="card-body">
                <FontAwesomeIcon icon={faClone} className="mb-3" style={{ fontSize: "2rem", color: "purple" }} />
                <h5 className="card-title">283 +</h5>
                <p className="card-text"> Sales per Hour </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div className="card text-center" style={{ width: "15rem" }}>
              <div className="card-body">
                <FontAwesomeIcon icon={faTrophy} className="mb-3" style={{ fontSize: "2rem" , color: "purple"}} />
                <h5 className="card-title">75 +</h5>
                <p className="card-text">Win Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 project-section text-center">
            <h6 className="text-danger">CLIENT'S FEEDBACK</h6>
            <h3>ZoodMall - Shop for Happiness</h3>
            <p>
              Welcome to a whole new world of shopping with our ZoodMall
              Website! Join our long list of happy customers and start shopping
              for your happiness, today! Download and start exploring through
              millions of products from Local and Cross Border sellers. With
              ZoodMall you will get: WIDE RANGE OF PRODUCTS Discover millions of
              products from around the world, including International, Chinese,
              and local sellers. Browse with ease and shop from various
              categories like Clothing (Men and Women), Phones & Accessories,
              Computers & Electronics, General Accessories, and many more.
              DISCOUNTS AND COUPONS Benefit from tons of discounts on your
              purchase with our Promo Codes and Discount Coupons available upon
              registration, and new offers daily for existing users. DAILY FLASH
              DEALS Catch the BEST PRICE GUARANTEED by browsing through our
              24-Hour Flash Deals, with brand new offers and products to choose
              from every day. OFFERS Explore our Offers section to catch our
              latest discounts on selected items or categories, and benefit from
              frequent promotions on a regular basis throughout the year. EASE
              OF SHOPPING Select from various available payment methods for
              every Country from Pay Online and Pay After Delivery, to Cash on
              Delivery and Installments (available in Uzbekistan). Track your
              orders in real-time, so you know exactly when you will receive it.
            </p>
            <p className="text-danger">
              JANNAT TUMPA - C00, AMERIMAR ENTERPRISES, INC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Growth;
