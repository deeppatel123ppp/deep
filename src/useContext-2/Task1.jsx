import { createContext } from "react";
import Task2 from "./Task2";

var css = createContext();
var c = {
    fs:'50px',
    color: 'purple',
    td:'underline'
}

export default function Task1() {
    return (
        <>
            <css.Provider value={c}>
                <Task2 />
            </css.Provider>
        </>
    );
}

export { css }
