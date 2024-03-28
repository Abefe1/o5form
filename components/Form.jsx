import { useState } from "react";
const Form=()=>{

    const[userInfo, setUserInfo]=useState({
        firstName: "",
        lastName: "",
        gender:"",
        email:"",
        password:""
    })
    
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userInfo);
        // console.log(userInfo.firstName, userInfo.lastName, userInfo.gender, userInfo.email, userInfo.password);
    }

    const handleInfo=(e)=>{
        const name= e.target.name
        const value= e.target.value
        setUserInfo(
            (prevState)=>({
                ...prevState,
                [name]:value
            })
        )
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>STUDENT REGISTRATION</h1>
            <div className="form-control">
                <label htmlFor="email">First Name</label>
                <br />
                <input name="firstName"
                type="text"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={handleInfo}
                />

                <br /><br />

                <label htmlFor="lastName">Last Name</label>
                <br />
                <input name="lastName"
                type="text"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={handleInfo}
                />

                <br /><br />

                <label htmlFor="gender">Gender</label>
                <br />
                <select name="gender" value={userInfo.gender} onChange={handleInfo}>
                            <option selected disabled hidden id="gender">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                </select>
                <br /><br />
                <label htmlFor="email">Email</label>
                <br />
                <input name="email"
                type="email"
                placeholder="eg:name@gmail.com"
                value={userInfo.email}
                onChange={handleInfo}
                />


                <br /><br />
                <label htmlFor="password">Password</label>
                <br />
                <input name="password"
                type="password"
                placeholder="*********"
                value={userInfo.password}
                onChange= {handleInfo}
                />
            </div>
            <br /><br />
            <button type="submit" >Submit</button>

        </form>
    )
}

export default Form;