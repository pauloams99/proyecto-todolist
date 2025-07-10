const Task = ({ tarea, borrarTarea}) => {

  return (
    <div className="d-flex justify-content-between m-2 p-1 border-bottom border-light-subtle">
      <p>{tarea.tarea}</p>
      <button className="btn" onClick={() => borrarTarea(tarea.id)} id="eliminar">
       <i className="fa-solid fa-trash text-info-emphasis"/>
      </button>
    </div>
  );
};

export default Task;
