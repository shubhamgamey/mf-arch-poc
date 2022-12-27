import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Welcome to SWAPI MFE!</h1>
      <h2>This app is created with module federation</h2>
    </header>
  );
}

export default Header;
