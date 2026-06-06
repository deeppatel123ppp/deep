import { useContext } from "react";
import { num } from "./Comp";

export default function Comp2() {
    const ob = useContext(num);
    console.log(ob)

  return (
    <>
      <h1 style={{color:'red'}}>
        {(ob.n1*ob.n2)/ob.n3}
      </h1>
    </>
  );
}
