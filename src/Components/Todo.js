function Todo({ text, openModal }) {
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={()=>openModal(true)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;