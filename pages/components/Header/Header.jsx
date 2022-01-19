import React, { useState } from "react";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import About from "../About/About";
import styles from "../../../styles/components/Header/Header.module.css";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from 'next/link'

function Header() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            d<span>b</span>
          </div>
          <form className={styles.search}>
            <input type="text" placeholder="Search" />
            <button className={styles.button}>
              <FiSearch />
            </button>
          </form>
          <div className={styles.navLinks}>
            <div className={styles.menuButton} onClick={() => setOpen(!open)}>
              <HiMenuAlt3 />
            </div>
          <div className={styles.links}>
            {open == true && (
              <ul>
                <li onClick={() => setCount(1)}><Link href="/">
                  Home 
                  </Link></li>
                <li onClick={() => setCount(2)}><Link href="/cart">
                  Cart 
                  </Link></li>
                <li onClick={() => setCount(3)}>
                <Link href="/about">
                  About 
                  </Link>
                  </li>
              </ul>
            )}
          </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {count === 1 && <Home />}
        {count === 2 && <Cart />}
        {count === 3 && <About />}
      </div>
    </>
  );
}

export default Header;
