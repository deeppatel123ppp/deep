import Child from "./Child.jsx"
function Parent(){
    var obj = {name:"Test",clg:"L J University"};
    return(
        <>
            <Child data={obj}/>
        </>
    )
}

export default Parent;