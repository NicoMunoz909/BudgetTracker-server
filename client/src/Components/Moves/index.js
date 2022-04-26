import styles from './moves.module.css'
import {FaTimes, FaEdit, FaPlus} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import DeleteModal from '../DeleteModal';

const Moves = () => {

  const [moves, setMoves] = useState([]);
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMove, setSelectedMove] = useState(null);

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

  const handleDelete = (e, move) => {
    e.stopPropagation();
    setSelectedMove(move.id);
    setShowDelete(true);
  }

  const deleteMove = (id) => {
    fetch(`http://localhost:5000/${id}`, {method: 'DELETE'})
    .then((response) => {
      if (response.status !== 200 && response.status !== 201) {
        return response.json()
      }
      setMoves(moves.filter((move) => {return move.id !== id}));
      setSelectedMoves(selectedMoves.filter((move) => {return move.id !== id}));
    })
    setMoves(moves.filter((move) => {return move.id !== id}));
    setSelectedMoves(selectedMoves.filter((move) => {return move.id !== id}));
    setShowDelete(false);
  }

  return (
    <div className={styles.container}>
    {showDelete && <DeleteModal onCancel={() => setShowDelete(false)} onConfirm={() => deleteMove(selectedMove)} />}
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
            <th>
              <button>
                <FaPlus />
              </button>
            </th>
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
                <button onClick={(e) => {handleDelete(e, move)}}><FaTimes></FaTimes></button>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Moves