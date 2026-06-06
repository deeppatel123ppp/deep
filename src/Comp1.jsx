import img1 from "./assets/hero.png";
import "./Myapp.css"
function Comp1(){
    var n = "ABC";
    return(
        <>
            <h1>Hello Students</h1>
            <h3>Welcome</h3>
            <img src="/favicon.svg" alt="img" width="300" />
            <img src={img1} alt="image" className="i1" width={300}/>
            <h3 style={{color:"blue",fontSize:"35px",fontStyle:"italic",textDecoration:"underline"}} >Hello {n} </h3>
            {/* Hello */}
        </>
    )
}
export default Comp1;