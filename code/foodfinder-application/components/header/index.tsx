import AuthElement from "./auth-element"
import styles from "./index.module.scss"
import Logo from "components/header/logo"

const Header = (): JSX.Element => {
  return (
    <header className={styles.root}>
      <div className='layout-grid'>
        <Logo />
        <AuthElement />
      </div>
    </header>
  )
}
export default Header
