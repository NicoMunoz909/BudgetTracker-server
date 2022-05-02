import { NavLink } from 'react-router-dom'
import { BsCalculator } from 'react-icons/bs'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BsCalculator className={styles.icon}/>
        <h1 className={styles.title}>Budget Tracker</h1>
      </div>
      <div>
        <NavLink className={({ isActive }) => isActive ? styles.link + ' ' + styles.selected : styles.link} to="/" >home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.link + ' ' + styles.selected : styles.link} to="/moves" >All moves</NavLink>
      </div>
    </div>
  )
}

export default Sidebar