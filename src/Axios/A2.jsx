import axios from 'axios';
import { useState, useEffect } from 'react'

function A2() {

    const [joke, setJoke] = useState("");

    function fetchJoke() {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then((r) => { setJoke(r.data) })
            .catch((e) => { console.log(e) })
    }

    useEffect(fetchJoke, [])
    
    return (
        <>
            <h2>{joke.setup}</h2>
            <h3>{joke.punchline}</h3> 
            <button onClick={fetchJoke}>Generate Joke</button>
        </>
    )
 
}

export default A2
