import Productlist from "./Productlist.jsx";
import image from "./assets/image.avif";
import image1 from "./assets/image1.avif";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";

const products = [
    {name:"Product1",price:65000,rating:4.5,image:image},
    {name:"Product2",price:64000,rating:4.6,image:image1},
    {name:"Product3",price:68000,rating:4.3,image:image2},
    {name:"Product4",price:69000,rating:4.8,image:image3},
    {name:"Product5",price:61000,rating:3.2,image:image4}
]
function Productcard(){
return(
    <>
        <Productlist data={products}/>
    </>
)
}
export default Productcard;