import styles from './moves.module.css'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useState, useEffect} from 'react'

const Moves = () => {

  const [moves, setMoves] = useState([]);
  const [selectedMoves, setSelectedMoves] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setMoves(data);
      setSelectedMoves(data);
    })
  }, []);

  const filterMoves = (type) => {
    if (type === 'All') {
      setSelectedMoves(moves);
    } else {
      setSelectedMoves(moves.filter(move => move.type === type));
    }
  }

  const editMove = (move) => {
    console.log(move);
  }

  const deleteMove = (move) => {
    console.log(move)
  }

  return (
    <div className={styles.container}>
      <h1>Moves</h1>
      <p>List:</p>
      <select onChange={(e) => filterMoves(e.target.value)}>
        <option>All</option>
        <option>Expenditure</option>
        <option>Income</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedMoves.map(move => {
            return( 
            <tr key={move.id}>
              <td>{move.concept}</td>
              <td>{move.amount}</td>
              <td>{move.date.substring(0, move.date.indexOf('T'))}</td>
              <td>{move.type}</td>
              <td>
                <button onClick={() => {editMove(move)}}><FaEdit></FaEdit></button>
                <button onClick={() => {deleteMove(move)}}><FaTimes></FaTimes></button>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Moves