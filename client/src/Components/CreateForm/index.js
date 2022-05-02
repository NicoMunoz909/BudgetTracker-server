import styles from './createForm.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormModal = () => {

  const navigate = useNavigate();
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const createMove = (move) => {
    fetch(`http://localhost:5000`, 
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
            <label htmlFor="concept">Concept</label>
            <input type="text" name="concept" id="concept" onChange={(e) => setConcept(e.target.value)} />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="amount" onChange={(e) => setAmount(parseFloat(e.target.value))} />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="type">Type </label>
            <select name="type" id="type" defaultValue='Select One' onChange={(e) => setType(e.target.value)} >
              <option disabled>Select One</option>
              <option value="Income">Income</option>
              <option value="Expenditure">Expenditure</option>
            </select>
          </div>
        </form>
        <div className={styles.btnContainer}>
          <button className={styles.cancelBtn} onClick={() => navigate(-1)}>Cancel</button>
          <button className={styles.saveBtn} onClick={() => createMove({concept, amount, date, type})}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default FormModal