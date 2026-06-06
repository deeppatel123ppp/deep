import { createContext } from "react";
import Task1 from "./Task1";

var data = createContext();
var obj = [
  {
    name: "ABC",
    marks: 90,
    id: 1,
  },
  {
    name: "PQR",
    marks: 80,
    id: 2,
  },
];

export default function Task() {
  return (
    <>
      <data.Provider value={obj}>
        <Task1 />
      </data.Provider>
    </>
  );
}

export { data };
