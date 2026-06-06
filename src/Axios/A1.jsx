import { useEffect, useState } from 'react'
import axios from 'axios'

function A1() {

    const [image, setImage] = useState("")
    useEffect(() => {
        setInterval(() => {
            axios.get("https://dog.ceo/api/breeds/image/random") 
                .then((res) => { console.log(res.data) })
                .catch((e) => { console.log(e) })
        }, 2000);
    }, [])
    
    return (
        <>
            <img src={image.message} alt="image" width="400" height="400" />
        </>
    )

}

export default A1
