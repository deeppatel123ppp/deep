import { useContext } from "react";
import { data } from "./Task";
import { css } from './Task1'

export default function Task2() {
    const ob = useContext(data);
    const c = useContext(css)

    return (
        <>
            <h1 style={{fontSize:c.fs, color:c.color, textDecoration:c.td}}>Student Data</h1>
            <table border="1" cellPadding="10">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
                <tr>
                    <td>{ob[0].id}</td>
                    <td>{ob[0].name}</td>
                    <td>{ob[0].marks}</td>
                </tr>
                <tr>
                    <td>{ob[1].id}</td>
                    <td>{ob[1].name}</td>
                    <td>{ob[1].marks}</td>
                </tr>
            </table>
        </>
    );
}
