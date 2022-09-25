function Todo({ text, openModal, isCompleted, setItDone, id }) {
  const classForState = isCompleted ? "isCompleted" : "";

  const changeState = () => {
    setItDone(id);
  };

  return (
    <div className={`card ${classForState}`}>
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={() => openModal(true)}>
          Delete
        </button>
        <button className="btn" onClick={changeState}>
          {isCompleted ? "Undo" : "Done"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
