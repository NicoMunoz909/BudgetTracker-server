import styles from './categories.module.css';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://vast-fjord-34429.herokuapp.com/api/categories')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setCategories(data);
    })
  }, []);

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