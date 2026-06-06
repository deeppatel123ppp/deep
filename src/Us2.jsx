import { useState } from "react";
import img1 from "./assets/image3.jpg";
import img2 from "./assets/image4.jpg";

function Us2() {
  const [img, setImg] = useState(img1);
  const [text, setText] = useState("LJ University");
  const [c, setC] = useState("red");
  const [hide, setHide] = useState("flex");
  const [htext, setHtext] = useState("hide");

  return (
    <>
      <img src={img} width="400" height="500" />
      <button
        onClick={() => {
          if (img == img1) {
            setImg(img2);
          } else {
            setImg(img1)
          }
        }}
      >
        Change Image
      </button>
      <br />
      <br />

      <h1 style={{ color: c }}>{text}</h1>
      <button
        onClick={() => {
          if (text == "LJ University") {
            setText("Welcome Student");
          } else {
            setText("LJ University")
          }
        }}
      >
        Change Text
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          if (c == "red") {
            setC("blue");
          } else {
            setC("red")
          }
        }}
      >
        Change Color
      </button>

      <h2 style={{ display: hide }}>React JS</h2>
      <button
        onClick={() => {
          if (hide == "flex") {
            setHide("none");
            setHtext("Show");
          } else {
            setHide("flex");
            setHtext("Hide");
          }
        }}
      >
        {htext}
      </button>
    </>
  );
}

export default Us2;
