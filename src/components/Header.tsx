import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import Footer from "./Footer";
const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles["header-content"]}>
        <h2>
          <span>Shop till you drop</span>
          <span>without ever leaving your seat!</span>
        </h2>
        <button>Shop Now</button>
      </div>
    </header>
  );
};

export default Header;
