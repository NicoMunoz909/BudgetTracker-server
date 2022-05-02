import styles from './updateForm.module.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formatISO } from 'date-fns'

const FormModal = () => {

  const navigate = useNavigate();
  const params = useParams();
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/${params.id}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setConcept(data[0].concept);
      setAmount(data[0].amount);
      setDate(formatISO(new Date(data[0].date), { representation: 'date' }));
      setType(data[0].type);
    })
  }, [params.id]);

  const editMove = (move) => {
    fetch(`http://localhost:5000/${params.id}`, 
    {
      method: 'PATCH',
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
          <h3>Edit Move</h3>
        </div>
        <form>
          <div>
            <label htmlFor="concept">Concept</label>
            <input type="text" name="concept" id="concept" value={concept} onChange={(e) => setConcept(e.target.value)} />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="amount" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" value={date}  onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="type">Type </label>
            <select name="type" id="type" value={type} disabled={true} onChange={(e) => setType(e.target.value)} >
              <option value="Income">Income</option>
              <option value="Expenditure">Expenditure</option>
            </select>
          </div>
        </form>
        <div className={styles.btnContainer}>
          <button className={styles.cancelBtn} onClick={() => navigate(-1)}>Cancel</button>
          <button className={styles.saveBtn} onClick={() => editMove({concept, amount, date, type})}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default FormModal