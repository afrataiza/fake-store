import { NavList } from "./NavList";
import { NavButtons } from "./NavButtons";
import logo from '../../assets/logo.png';
import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles.header_container}>
      <img className={styles.logo} src={logo} alt="" />
      <NavList></NavList>
      <NavButtons></NavButtons>
    </div>
  );
}
