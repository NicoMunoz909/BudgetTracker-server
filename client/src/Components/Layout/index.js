import styles from './layout.module.css'
import Sidebar from '../Sidebar/index.js'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout