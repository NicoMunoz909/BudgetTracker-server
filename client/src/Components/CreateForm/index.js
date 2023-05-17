import styles from './createForm.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FormModal = () => {

  const navigate = useNavigate();
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`/api/categories`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setCategories(data);
    })
  }, []);

  const validateForm = () => {
    const errorMessages = {}
    const concept = document.getElementById('concept').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const type = document.getElementById('type').value;
    if (concept === "") errorMessages.concept = true
    if (isNaN(amount)) errorMessages.amount = true
    if (date === "") errorMessages.date = true
    if (category === "Select One") errorMessages.category = true
    if (type === "Select One") errorMessages.type = true
    setErrorMessages(errorMessages);
    if (Object.keys(errorMessages).length === 0) {
      return true
    } else {
      return false
    }
  }

  const createMove = (move) => {
    if (!validateForm()) return;
    fetch(`/api/operations`,
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
            {errorMessages.concept && <span>Concept can't be empty</span>}
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="amount" onChange={(e) => setAmount(parseFloat(e.target.value))} />
            {errorMessages.amount && <span>Amount can't be empty</span>}
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)} />
            {errorMessages.date && <span>You must pick a date</span>}
          </div>
          <div>
            <label htmlFor="category">Category </label>
            <select name="category" id="category" defaultValue='Select One' onChange={(e) => setCategory(e.target.value)} >
              <option disabled>Select One</option>
              {categories.map(cat => {
                return(
                  <option value={cat.name}>{cat.name}</option>
                )
              })}
            </select>
            {errorMessages.category && <span>You must select a category</span>}
          </div>
          <div>
            <label htmlFor="type">Type </label>
            <select name="type" id="type" defaultValue='Select One' onChange={(e) => setType(e.target.value)} >
              <option disabled>Select One</option>
              <option value="Income">Income</option>
              <option value="Expenditure">Expenditure</option>
            </select>
            {errorMessages.type && <span>You must select a type</span>}
          </div>
        </form>
        <div className={styles.btnContainer}>
          <button className={styles.cancelBtn} onClick={() => navigate(-1)}>Cancel</button>
          <button className={styles.saveBtn} onClick={() => createMove({concept, amount, date, category, type})}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default FormModal