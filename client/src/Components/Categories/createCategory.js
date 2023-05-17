import styles from './createCategory.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const createCategory = (move) => {
    fetch(`/api/categories`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(move)
    })
    .then((response) => {
      if (response.status !== 200 && response.status !== 201) {
        return response.json()
      }
      navigate(-1);
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Create Move</h3>
        </div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
          </div>
        </form>
        <div className={styles.btnContainer}>
          <button className={styles.cancelBtn} onClick={() => navigate(-1)}>Cancel</button>
          <button className={styles.saveBtn} onClick={() => createCategory({name})}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateCategory