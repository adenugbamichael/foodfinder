import styles from "./index.module.scss"
import Logo from "components/header/logo"

const Header = (): JSX.Element => {
  return (
    <header className={styles.root}>
      <div className='layout-grid'>
        <Logo />
      </div>
    </header>
  )
}
export default Header
