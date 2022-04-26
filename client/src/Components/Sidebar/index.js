import { Link } from 'react-router-dom'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.link} to="/" >home</Link>
        <Link className={styles.link} to="/moves" >all moves</Link>
      </div>
      <div>
        <Link className={styles.link} to="/moves" >log out</Link>
      </div>
    </div>
  )
}

export default Sidebar