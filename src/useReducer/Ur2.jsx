import { useReducer } from 'react'
import img1 from '../assets/image3.jpg'
import img2 from '../assets/image4.jpg'

function reducer(state, action) {
    if (action.type === 'inc' && state < 80){
        return state + 1;    
    } else if(action.type === 'dec' && state > 0) {
        return state - 1;
    } else { return state }
}

function reducer1(state1) {
    if (state1 === img1) {
        return img2;
    } else {
        return img1;
    } 
}

function Ur2() {

    const [state, dispatch] = useReducer(reducer, 30)
    const [state1, dispatch1] = useReducer(reducer1,img2)

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: 'inc' })}>Inc</button>
            <span>   </span>
            <button onClick={() => dispatch({ type: 'dec' })}>Dec</button>
            <br /><br />
            <img src={state1} alt="img1" width='400' height='400' />
            <button onClick={() => dispatch1()}>Change Image</button>
        </>
    )
}

export default Ur2
