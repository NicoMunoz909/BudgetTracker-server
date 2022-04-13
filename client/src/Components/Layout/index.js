import styles from './layout.module.css'
import Sidebar from '../Sidebar/index.js'
import Footer from '../Footer/index.js'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Footer />
    </div>
  )
}

export default Layout