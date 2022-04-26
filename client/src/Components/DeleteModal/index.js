import styles from './deleteModal.module.css';

const DeleteModal = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Delete Move?</h3>
        </div>
        <div className={styles.btnContainer}>
          <button onClick={props.onCancel}>NO</button>
          <button onClick={props.onConfirm}>YES</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal