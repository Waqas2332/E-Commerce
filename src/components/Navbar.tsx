import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const guestLinks = () => {
    return (
      <>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact Us</li>
      </>
    );
  };
  const authLinks = () => {
    return (
      <>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Checkout</li>
        <li>
          <FaShoppingCart />
        </li>
      </>
    );
  };
  return (
    <React.Fragment>
      <div className={styles.navbar}>
        <nav>
          <div className={styles["nav-logo"]}>
            <p>ShopNow</p>
          </div>
          <div className={styles["nav-links"]}>
            <ul>{authLinks()}</ul>
          </div>
          <div className={styles["nav-button"]}>
            <button>Sign Up</button>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
