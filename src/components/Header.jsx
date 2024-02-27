import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import inno from "../assets/inno.png";

const Header = ({ cartCount }) => (
  <nav>
    <div className="nav-center">
      <img src={inno} alt="logo" className="logo" />
      <div className="nav-container">
        <div className="input-icon">
          <input
            type="text"
            className="input-text"
            placeholder="Search the store"
          />
          <CiSearch className="search-icon" />
        </div>
      </div>
      <div>
        <div className="nav-links">
          <div className="symbols">
            <CiHeart className="symbol" />
            <span className="cart-amount">Wish Lists</span>
          </div>
          <div className="symbols">
            <CgProfile className="symbol" />
            <span className="cart-amount">Sign In</span>
          </div>
          <div className="symbols">
            <CiShoppingCart className="symbol" />
            <span className="cart-icon">Cart</span>
            <div className="amount-container">
              <p className="total-amount">{cartCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
