import React from "react";
import styles from "./Header.module.css";
import { FaPhone } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

//IMPORT STATEMENTS ABOVE

const links_data = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Product",
    path: "/product",
  },
  {
    id: 3,
    title: "Menu",
    path: "/",
  },
  {
    id: 4,
    title: "Pizza",
    path: "/",
  },
  {
    id: 5,
    title: "Events",
    path: "/",
  },
  {
    id: 6,
    title: "Blog",
    path: "/",
  },
  {
    id: 7,
    title: "Contact",
    path: "/",
  },
];

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        {/* LEFT  */}
        <div className={styles.left}>
          <div className={styles.icon}>
            <FaPhone size={30} />
          </div>
          <div className={styles.content}>
            <h4 className={styles.order}>ORDER NOW!</h4>
            <p className={styles.number}>012 456 789</p>
          </div>
        </div>
        {/* MIDDLE  */}

        <div className={styles.middle}>
          <div className={styles.links}>
          {links_data.map((link) => (
              <Link
                href={link.path}
                key={link.id}
                className={`${styles.link} ${link.id === 4 ? styles.specialLink : ''}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT  */}

        <div className={styles.right}>
          <div className={styles.icon}>
            <AiOutlineShoppingCart size={30} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
