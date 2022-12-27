import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

interface ListItem {
  title: string;
  url: string;
}

export interface UiProps {
  listItems: Array<ListItem>;
}

export const Nav = (props: UiProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {props.listItems.map((item) => (
          <li key={item.url}>
            <NavLink className={({ isActive }) => `${styles.listItem} ${isActive ? styles.listItemActive : ''}`} to={item.url}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
