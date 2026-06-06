import img1 from '../assets/image4.jpg'
import './nav.css'

function Home() {
  return (
    <>
        <h1 style={{ color: "purple", fontSize: "50px" }}>Welcome to the Home Page</h1>
        <img src={img1} alt="Home" width="500px" />  
    </>
  )
}

export default Home