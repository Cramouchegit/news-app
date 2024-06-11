import { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import styles from "./Navbar.module.css";
import { CATEGORIES } from "../../constants/categories";
import newsIcon from "../../assets/news-icon.svg";

const Navbar = () => {
  const [selected, setSelected] = useState("");

  return (
    // Membuat navbar
    <nav className={styles.nav}>
      <div className={styles.navIconWrapper}>
        {/* Membuat icon */}
        <img className={styles.navIcon} src={newsIcon} alt="navbar icon" />
        {/* Membuat judul */}
        <h1 className={styles.navTitle}>NEWS</h1>
      </div>

      {/* Membuat navigasi kategori dengan menampilkan daftar kategori dari constants/categories.js dan menambahkan fitur interaktif ketika category di klik, sehingga ketika kita mengklik category, halaman akan diarahkan ke halaman yang sesuai dengan category yang dipilih dan juga highlight category yang sedang dipilih */}
      <div className={styles.categories}>
        {CATEGORIES.map((category, index) => {
          return (
            <Link
              key={index}
              onClick={() => setSelected(category.name)}
              to={`/${category.slug}`}
              className={classnames(styles.category, {
                [styles.selected]: selected === category.name,
              })}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
