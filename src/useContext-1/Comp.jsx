import { createContext } from "react"
import Comp1 from './Comp1'

var num = createContext()
var obj ={n1:3, n2:8, n3:2}

export default function Comp() {
    
    return (
        <>
            <num.Provider value={obj}>
                <Comp1/>
            </num.Provider>        
        </>
    )
}

export { num }


