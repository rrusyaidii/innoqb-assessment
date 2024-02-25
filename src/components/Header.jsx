import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";

const Header = ({ cartCount }) => (
  <nav>
    <div className="nav-center">
      <img src="" alt="" />
      <div className="nav-container">
        <input
          type="text"
          className="input-text"
          placeholder="Search the store"
        />
        <div className="amount-container">
          <div className="amount">
            <FaShoppingCart />
            <span className="cart-amount">{cartCount}</span>
          </div>
          <div className="amount">
            <CiHeart />
            <span className="cart-amount"></span>
          </div>
          <div className="amount">
            <CgProfile />
            <span className="cart-amount"></span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
