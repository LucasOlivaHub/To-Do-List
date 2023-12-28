import React, { useEffect, useRef, useState } from 'react'
import './ToDoList.css'
import { Pagination } from './Pagination';
import DeleteModal from './DeleteModal';


export const ToDoList = () => {
    const [tareaNueva, setTareaNueva]= useState("");
    const [tareasMostrar, setTareasMostrar] = useState([]);
    const [tareasOriginales, setTareasOriginales] = useState([]);
    const [tareasTotales, setTareasTotales] = useState(0);

    const tareasContador = useRef(0);
    const [paginaActual, setPaginaActual] = useState(1);
    const tareasPorPagina = 5;
    const [titulo, setTitulo] = useState("Mis tareas");

    let lastIndex = paginaActual * tareasPorPagina;
    let firstIndex = lastIndex - tareasPorPagina;

    useEffect(() => {
        setTareasTotales(tareasMostrar.length);
    }, [tareasMostrar])


    function agregarTarea(e) {
        e.preventDefault();
        if(tareaNueva.trim !== "" && tareaNueva.length > 0 && tareasTotales < 25
        && tareaNueva.length <= 25) {
            let task = {
                id: tareasContador.current++,
                text: tareaNueva,
                completa: false
            };
            setTareasMostrar([...tareasMostrar, task]);
            setTareasOriginales([...tareasOriginales, task]);
            setTareaNueva("");
            setTitulo("Mis tareas");
        }

        if(tareasTotales === 25) {
            alert("Has anotado demasiadas tareas D: ¡Bajá un cambio amigo/a!")
            
        }
    }

    function borrarTarea(tarea) {
        if(tareasOriginales.includes(tarea)) {
            let tareasActualizadas = [...tareasOriginales]
            const index = tareasActualizadas.indexOf(tarea);
            tareasActualizadas.splice(index, 1);
            setTareasMostrar(tareasActualizadas);
            setTareasOriginales(tareasActualizadas);
        }
    }

    function checkTarea(index, id) {
        let tareasChecks = [...tareasOriginales];

        tareasChecks.find(t => {
            if(t.id === id) {
                t.completa = !t.completa
            }
        })
        setTareasOriginales(tareasChecks);
    }

    /*Filtros*/
    function mostrarCompletas() {
        let tareasCheckeadas = [];
        tareasOriginales.map(t => {
            if(t.completa) {
                 tareasCheckeadas.push(t)
            }
        })
        setTitulo("Tareas completas")
        setTareasMostrar(tareasCheckeadas)
        setPaginaActual(1);
    }
    
    function mostrarIncompletas() {
        let tareasNoCheckeadas = [];
        tareasOriginales.map(t => {
            if(!t.completa) {
                tareasNoCheckeadas.push(t)
            }
        })

        setTitulo("Tareas pendientes")
        setTareasMostrar(tareasNoCheckeadas);
        setPaginaActual(1);
    }

    function mostrarTodas() {
        setTitulo("Mis tareas")
        setTareasMostrar(tareasOriginales)
        setPaginaActual(1);
    }
    
    function vaciarTareas() {
        setTareasMostrar([]);
        setTareasOriginales([]);
        setPaginaActual(1);
    }

  return (
    <main>
        <form className='input-container'>
            <label className='agregar-label'>Ingresa una nueva tarea:
            <input maxLength={26} className='agregar-input' type="text" value={tareaNueva} onChange={(e) => setTareaNueva(e.target.value)}></input>
            <button className='agregar-btn' onClick={(e) => agregarTarea(e)}>Agregar</button>
            <span className={`aviso-text ${tareaNueva.length === 26 ? 'alert-show' : 'hidden'}`}>Las tareas tienen un máximo de 25 caracteres. Escribe algo más corto</span>
            </label>
        </form>

        <div className='lista-container'>
            <ul className='lista'>
                <b className='animate__fadeIn'>{titulo}: {tareasMostrar.length}</b>
                {tareasMostrar && tareasMostrar.map((t,i) => {
                    const tareaCompletaClass = t.completa ? 'tarea-completa' : '';
                return <article key={i}>
                    <li className={tareaCompletaClass}>{t.text}</li> 
                    <div className='options'>
                        <input checked={t.completa} onChange={() => checkTarea(i, t.id)} type="checkbox"></input>
                        <i className="bi bi-x-circle-fill trash" onClick={() => borrarTarea(t)}></i>
                    </div>  
                    </article>
                }).slice(firstIndex, lastIndex)}
            </ul>
            <Pagination tareasTotales={tareasTotales}
                tareasPorPagina={tareasPorPagina}
                paginaActual={paginaActual}
                setPaginaActual={setPaginaActual}/>
        </div>

        <div className='botones-container'>
            <div className='filtros-container'>
                <button onClick={() => mostrarCompletas()}>Completas</button>
                <button onClick={() => mostrarIncompletas()}>Incompletas</button>
                <button className='vertodo-btn' onClick={() => mostrarTodas()}>Todas</button>
            </div>

            <DeleteModal vaciarTareas={vaciarTareas}/>
        </div>
  
      
    </main>
  )
}
