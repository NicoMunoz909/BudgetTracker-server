import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <a className={styles.link} href="/" >home</a>
        <a className={styles.link} href="/moves" >all moves</a>
      </div>
      <div>
        <a className={styles.link} href="/moves" >log out</a>
      </div>
    </div>
  )
}

export default Sidebar