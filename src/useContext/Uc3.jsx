import { useContext } from "react";
import { fname, lname } from './Uc1'

export default function Uc3() {
    const fn = useContext(fname)
    const ln = useContext(lname)

    return (
        <>
            <h2>Welcome {fn} {ln}</h2>
        </>
    )
}