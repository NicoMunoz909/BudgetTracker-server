import styles from './layout.module.css'
import Sidebar from '../Sidebar/index.js'
import Footer from '../Footer/index.js'
import Home from '../Home'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Home />
      <Footer />
    </div>
  )
}

export default Layout