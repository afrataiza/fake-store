import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import styles from './navButtons.module.css';

export function NavButtons() {
  return (
    <div className={styles.buttons_container}>
      <button type="button">
      <AiOutlineShoppingCart></AiOutlineShoppingCart>
      </button>
      <button>
      <MdDarkMode></MdDarkMode>
      </button>
    </div>
  );
}
