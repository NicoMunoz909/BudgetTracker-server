import styles from './categories.module.css';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import DeleteModal from '../DeleteModal';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Categories = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('/api/categories')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setCategories(data);
    })
  }, [location]);

  const handleDelete = (e, category) => {
    e.stopPropagation();
    setSelectedCategory(category);
    setShowDelete(true);
  }

  const deleteCategory = (category) => {
    fetch(`/api/categories/${category.id}`, {method: 'DELETE'})
    .then((response) => {
      if (response.status !== 200 && response.status !== 201) {
        return response.json()
      }
      setCategories(categories.filter((op) => {return op.id !== category.id}));
    })
    setCategories(categories.filter((op) => {return op.id !== category.id}));
    setShowDelete(false);
  }

  return (
    <div className={styles.container}>
      <Outlet />
      {showDelete && <DeleteModal onCancel={() => setShowDelete(false)} onConfirm={() => deleteCategory(selectedCategory)} />}
      <h2>Categories</h2>
      <div className={styles.controlsContainer}>
        <button className={styles.addBtn} onClick={() => navigate(`${location.pathname}/new`)}>
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
                  <button className={styles.tableBtn} onClick={(e) => {handleDelete(e, category)}}><FaTimes></FaTimes></button>
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