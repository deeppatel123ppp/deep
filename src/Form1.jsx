import { useState } from "react"

function Form1() {

    const [formdata, setFormdata] = useState({})

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormdata({ ...formdata, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (formdata.pass.length < 8) {
            alert("password length must be greater then 8")
        }

        if (formdata.pass !== formdata.cpass) {
            alert("password and confirm password must be same")
        }

        alert(`Thank You ${formdata.fname}`)
        console.log(formdata)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>First Name : </label>
                <input type="text" name="fname" onChange={handleChange} /><br /><br />
                <label>Email : </label>
                <input type="email" name="eid" onChange={handleChange} /><br /><br />
                <label>Password : </label>
                <input type="password" name="pass" onChange={handleChange} /><br /><br />
                <label>Confirm Password : </label>
                <input type="password" name="cpass" onChange={handleChange} /><br /><br />
                <label>Message :  </label>
                <textarea name="msg" onChange={handleChange}></textarea> <br /> <br />
                <label>Gender : </label>
                <input type="radio" name="gender" value="male" onChange={handleChange} />Male
                <input type="radio" name="gender" value="female" onChange={handleChange} />Female <br /><br />
                <select name="city" onChange={handleChange}>
                    <option value='Ahm'>Ahmedabad</option>
                    <option value="Rajkot">Rajkot</option>
                </select><br /><br />
                <input type="submit" />
            </form>
        </>    
    )
}

export default Form1
