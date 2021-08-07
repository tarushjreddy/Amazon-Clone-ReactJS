import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function Header() {
  return (
    <div className="Header_navbar">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="logo"
        className="Amazon_logo"
      />
      <div className="search_bar">
        <input className="searchbar_input_text" type="text"></input>
        <SearchIcon className="search_bar_header" />
      </div>
      <div className="header_name_holder">
        <div className="inner_options">
          <div>Hello User</div>
          <div className="header_option_line_two">Sign In</div>
        </div>
        <div className="inner_options">
          <div>Returns</div>
          <div className="header_option_line_two">& Orders</div>
        </div>
        <div className="inner_options">
          <div>Your</div>
          <div className="header_option_line_two">Prime</div>
        </div>
      </div>
      <div className="shopping_cart_holder">
        <span className="item_holder">100</span>
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Header;
