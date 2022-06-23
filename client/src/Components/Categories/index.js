import styles from './categories.module.css';
import { useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';

const Categories = () => {

  const [categories, setCategories] = useState([{id: '1', name: 'food'}, {id: '1', name: 'food'},{id: '1', name: 'food'},{id: '1', name: 'food'}]);

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.controlsContainer}>
        <button className={styles.addBtn} /*onClick={() => navigate(`${location.pathname}/new`)}*/>
          Add Category
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <tbody>
            {categories.map(category => {
              return(
              <tr key={category.id} style={{width: '50%'}}>
                <td>{category.name}</td>
                <td style={{textAlign: 'right'}}>
                  <button className={styles.tableBtn}><FaTimes></FaTimes></button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Categories