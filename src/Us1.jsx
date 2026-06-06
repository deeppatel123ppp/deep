import { useState } from "react";

function Us1() {
  const [count, setcount] = useState(0);
  function inc() {
    if (count < 20) {
      setcount(count + 1);
    }
  }
  function dec() {
    if (count > 0) {
      setcount(count - 1);
    }
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>Increament</button>
      <button onClick={dec}>Decreament</button>
    </>
  );
}

export default Us1;
