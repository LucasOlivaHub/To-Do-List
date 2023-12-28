import React, { useContext, useEffect } from 'react'

import { BackgroundContext } from '../Context/BackgroundContext';
import { Header } from './Header';
import { ToDoList } from './ToDoList';

export const Background = () => {
    const {currentbg} = useContext(BackgroundContext)


    const backgroundStyle = {
        backgroundImage: `url(${currentbg})`
    }

  return (
    <div className='bg' style={backgroundStyle}>
            <Header/>
            <ToDoList/>
            <footer>
              <span>Copyright Lucas Hernán Oliva</span>
              <span>ReactJS developer: EducacionIT</span>
            </footer>
    </div>
  )
}
