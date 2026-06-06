import { createContext } from "react"
import Uc2 from './Uc2'

var fname = createContext()
var lname = createContext()

export default function Uc1() {
    
    return (
        <>
            <fname.Provider value="Deep">
                <lname.Provider value="Patel">
                    <Uc2 />
                </lname.Provider>
            </fname.Provider>        
        </>
    )
}

export { fname, lname };

