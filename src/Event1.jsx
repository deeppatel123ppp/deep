function Event1() {
    const handleclick = (n) => {
        alert("Welcome " + n)
    }
    return (
        <>
            <button onClick={()=>handleclick("deep")}>Click Here</button>
        </>
    )
}

export default Event1 