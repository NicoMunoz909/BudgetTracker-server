import styles from './deleteModal.module.css';

const DeleteModal = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Are you sure?</h3>
        </div>
        <p className={styles.message}>
          Do you really want to delete this move? This process cannot be undone
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.cancelBtn} onClick={props.onCancel}>Cancel</button>
          <button className={styles.deleteBtn} onClick={props.onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal