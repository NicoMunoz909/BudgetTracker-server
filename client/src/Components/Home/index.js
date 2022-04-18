import styles from './home.module.css'
import {useState, useEffect} from 'react'
const Home = () => {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setMoves(data);
    })
  }, []);

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <p>Balance: ${moves.reduce((total,move) => {
        switch (move.type) {
          case 'Expenditure':
            return total - move.amount;
          case 'Income':
              return total + move.amount;
          default:
            break;
        };
      }, 0)}</p>
      <p>Last 10 moves</p>
      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {moves.slice(-10).map(move => {
            return( 
            <tr key={move.id}>
              <td>{move.concept}</td>
              <td>{move.amount}</td>
              <td>{move.date.substring(0, move.date.indexOf('T'))}</td>
              <td>{move.type}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home