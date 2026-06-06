import img1 from "./assets/image.avif";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";
import img5 from "./assets/image1.avif";
import { useState } from "react";

function Us3() {
    const arr = [img1, img2, img3, img4, img5]
    const [image, setImage] = useState(arr[0])

    function handleImage() {
        const i = Math.floor(Math.random() * arr.length)
        setImage(arr[i])
    }

    return (
        <>
            <img src={image} width='300' height='300' />
            <button onClick={handleImage}>Change Image</button>
        </>
    );
}
export default Us3;
