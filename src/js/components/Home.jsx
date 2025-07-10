import React, { useState } from "react";
import Task from "./task";

function Home() {
  const [inputTextoTarea, setInputTextoTarea] = useState(""); //recibe la tarea en el imput
  const [tareas, setTareas] = useState([]); // almacena las tareas

  //manejamos lo que se escribe en el input y lo actualizamos mediante el setInputTextoArea
  const handleChange = (e) => {
    setInputTextoTarea(e.target.value);
  };

  //--alerta para que no existan tareas en blanco
  const addTask = (e) => {
    e.preventDefault();
    if (inputTextoTarea.trim() === "") {
      alert("debes agregar algo");
      return;
    }  
    
  
  //creamos una nueva tarea
    const nuevaTarea = {
      id: Date.now(), //crea un id unico usando la fecha actual (investigar mejor)
      tarea: inputTextoTarea,
      completada: false,
    };

    //agregamos la nueva tarea a la lista de tareas 
    const totalTareas = [nuevaTarea, ...tareas];
    setTareas(totalTareas);
    setInputTextoTarea(""); //y vaciamos el input
  };

  //logica dle boton de eliminar tarea (aun no lo entiendo bien)
  const borrarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => {
      return tarea.id !== id;
    });
    setTareas(tareasActualizadas); 
  };


  // Función para cambiar el estado de 'completada' de una tarea PEDIR
  //QUE ME LO EXPLIQUEN MEJOR SOLO QUIERO QUE NO SE ME BORREN LAS TAREAS CUANDO CARGO UNA

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      return tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <div className=" mt-5 row">
      <div className="col-6 container font-roboto">
        <div>
          <h1>
            <i> To</i> do <strong>list</strong>
          </h1>
        </div>
        <div>
          <form onSubmit={addTask} className="input-group">
            <input
              type="text"
              className="form-control max-width"
              placeholder="Ingresa una tarea"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={inputTextoTarea} // enlazado a handleChange para manejar lo que se escriba
              // en el input disparado por el evento OnChange y almacenandose en el Set
              onChange={handleChange} // OnChange 
            />

            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-paper-plane fa-lg p-4"></i>
            </button>
          </form>
          
          <div  className="mt-2 text-muted fs-7 d-flex justify-content-end"> 
           {tareas.length > 0 && <small>  <p>Tienes {tareas.length} sin completar</p></small>}
          </div> 
        </div>

        {tareas.map((tarea) => ( //itera sobre para renderizar cada tarea en el Task
          <Task
            key={tarea.id} 
            tarea={tarea} 
            borrarTarea={borrarTarea}  //pasa la funcion para eliminar
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
