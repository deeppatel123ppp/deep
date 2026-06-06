function Map(){
    var students = [
        {id:1,name:"ABC",std:4},
        {id:1,name:"XYZ",std:5},
        {id:1,name:"PQR",std:3},
        {id:1,name:"DEF",std:7},
        {id:1,name:"GHI",std:8},
        {id:1,name:"JKL",std:6}
    ]
    return(
        <>
            {students.filter((s)=>s.std===5).map((s,i)=>
                {return(<div key={i}>
                <h2>Student Name:{s.name.toLowerCase()}</h2>
                <h3>Standard:{s.std+1}</h3>
                </div>)})}
        </>
    )
}

export default Map;
