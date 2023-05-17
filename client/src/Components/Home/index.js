import styles from './home.module.css'
import {useState, useEffect} from 'react'
const Home = () => {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    fetch('/api/operations')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setMoves(data);
    })
  }, []);

  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <p>your balance: ${moves.reduce((total,move) => {
        switch (move.type) {
          case 'Expenditure':
            return total - move.amount;
          case 'Income':
              return total + move.amount;
          default:
            return total;
        };
      }, 0)}</p>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <caption>Last 10 moves</caption>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {moves.slice(-10).map(move => {
              return(
              <tr key={move.id}>
                <td>{move.concept}</td>
                <td>${move.amount}</td>
                <td>{move.date.substring(0, move.date.indexOf('T'))}</td>
                <td>{move.category}</td>
                <td>{move.type}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home