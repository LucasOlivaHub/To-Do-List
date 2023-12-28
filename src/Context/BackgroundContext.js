import { createContext, useState } from "react";

import background1 from '../resources/background.jpg'
import background2 from '../resources/background2.png'
import background3 from '../resources/background3.jpg'
import background4 from '../resources/background4.jpg'
import background5 from '../resources/background5.jpg'
import background6 from '../resources/background6.jpg'
import background7 from '../resources/background7.jpg'
import background8 from '../resources/background8.jpg'
import background9 from '../resources/background9.jpg'
import background10 from '../resources/background10.jpg'



export const BackgroundContext = createContext();


export function BackgroundProvider({children}) {

    const backgrounds = [
        background1,
        background2,
        background3,
        background4,
        background5,
        background6,
        background7,
        background8,
        background9,
        background10
    ]
    const [currentbg, setCurrentBg] = useState(backgrounds[0]);
    const [currentIndex, setCurrentIndex] = useState(0)


    return (
    <BackgroundContext.Provider value={{
        currentbg,
        setCurrentBg,
        currentIndex,
        setCurrentIndex,
        backgrounds
    }}>
        {children}
    </BackgroundContext.Provider>     
    )
}