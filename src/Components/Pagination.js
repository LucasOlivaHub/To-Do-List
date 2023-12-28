import React, { useEffect } from 'react'

export const Pagination = ({tareasTotales, tareasPorPagina, paginaActual, setPaginaActual}) => {
    
    let paginasCantidad = [];

  //Calcular el numero de paginas segun las tareas totales y las tareas que vamos a mostrar por pagina
    for(let i = 1; i <= Math.ceil(tareasTotales / tareasPorPagina); i++) {
            paginasCantidad.push(i);
    }

    //Redireccionar a la ultima página cada vez que agrego tareas
    useEffect(() => {
        if(paginasCantidad.length > 0) {
            setPaginaActual(paginasCantidad.length)
        }
    }, [tareasTotales])

    function paginaAnterior() {
       if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
       }
    }

    function paginaSiguiente() {
        //Buscamos con find si la proxima pagina está en la lista de paginas
        if(paginasCantidad.find(p => p === paginaActual+1)) {
            setPaginaActual(paginaActual + 1);
        }
    }

  return (
    <div className='pages-container'>
        {<i className={`bi bi-arrow-return-left prev ${paginaActual === 1 && 'nopage'}`} onClick={() => paginaAnterior()}></i>} 
        <div className='numpages'>
            {paginasCantidad.length > 1 && paginasCantidad.map(p => {
                console.log(paginasCantidad)
                return <span className={`page ${p === paginaActual && 'pagina-actual'}`} key={p} onClick={() => setPaginaActual(p)}>{p}</span>
            })}
        </div>
        {<i className={`bi bi-arrow-return-right next ${(tareasTotales === 0) || (paginaActual === paginasCantidad[paginasCantidad.length - 1]) ? 'nopage' : ''}`} onClick={() => paginaSiguiente()}></i>}
    </div>
  )
}
