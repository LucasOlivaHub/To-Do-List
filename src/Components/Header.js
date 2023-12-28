import React, { useContext, useEffect, useState } from 'react'
import { BackgroundContext } from '../Context/BackgroundContext';

export const Header = () => {

    const {currentbg, currentIndex, setCurrentIndex, setCurrentBg, backgrounds}= useContext(BackgroundContext);


    const [imgIndex, setImgIndex] = useState(0);


    function handleAnterior() {
        setImgIndex(prevIndex => 
            prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1
        );
    }
    
    function handleSiguiente() {
        setImgIndex(prevIndex => 
            prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        );
    }
    
    useEffect(() => {
        setCurrentBg(backgrounds[imgIndex]);
        setCurrentIndex(imgIndex);
    }, [imgIndex]);


  return (
    <header>
        <h1>Lista de tareas</h1>
        <nav className='background-nav'>
            <span className='nav-title'>Cambiar fondo:</span>
            <div className='background-arrows'>
                <i className="bi bi-arrow-left arrows" onClick={handleAnterior}></i>
                  {(currentIndex+1) + "/" + backgrounds.length}
                <i className="bi bi-arrow-right arrows" onClick={handleSiguiente}></i>
            </div>
        </nav>
    </header>
  )
}
