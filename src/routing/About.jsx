import img1 from "../assets/image3.jpg";

function About() {
  return (
    <>
      <h1 style={{ color: "purple", fontSize: "50px" }}>
        Welcome to the About Page
      </h1>
      <img src={img1} alt="Home" width="500px" />
    </>
  );
}

export default About;
