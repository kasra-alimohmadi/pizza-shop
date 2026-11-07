import styles from "./Navar.module.css";
import icon from "../../assets/images/logo/tarkhineh.svg";
import { Link } from "react-router";
function Navar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.icon}>
          <svg className={styles.svg}>
            <use href="/images/icons/sprite.svg#menu" />
          </svg>
        </div>
      <img className={styles.tarkhineh_ico} src={icon} alt="" />
      <ul className={`${styles.navbar__list} body-xl`}>
        <li className={styles.navbar__item}><Link to="/">صفحه اصلی</Link></li>
        <li className={styles.navbar__item}>شعبه</li>
        <li className={styles.navbar__item}><Link to="/Branch">منو</Link></li>
        <li className={styles.navbar__item}>اعطای نمایندگی</li>
        <li className={styles.navbar__item}>درباره ما</li>
        <li className={styles.navbar__item}>تماس با ما</li>
      </ul>
      <div className={styles.iconcontainer}>
        <div className={`${styles.icon} ${styles.search_normal_mobail}`}>
          <svg className={styles.svg}>
            <use href="/images/icons/sprite.svg#search_normal" />
          </svg>
        </div>
        <div className={styles.icon}>
          <svg className={styles.svg}>
            <use href="/images/icons/sprite.svg#shopping_cart" />
          </svg>
        </div>
        <div className={styles.icon}>
          <svg className={styles.svg}>
            <use href="/images/icons/sprite.svg#user" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navar;
