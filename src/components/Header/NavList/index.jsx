import { AiOutlineHome, AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import styles from './navList.module.css';

export function NavList() {
  return (
    <ul className={styles.list_container}>
      <li>
        <AiOutlineHome></AiOutlineHome>
        <span>Home</span>
      </li>
      <li>
        <AiOutlineUnorderedList></AiOutlineUnorderedList>
        <span>Categorias</span>
      </li>
      <li>
        <AiOutlineUser></AiOutlineUser>
        <span>Perfil</span>
      </li>
    </ul>
  );
}
