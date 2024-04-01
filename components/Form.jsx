import { useState } from "react";
const Form=()=>{

    const[userInfo, setUserInfo]=useState({
        firstName: "",
        lastName: "",
        gender:"",
        email:"",
        password:""
    })

    let firstname=document.getElementById('Firstname') 
    let firstnamep=document.getElementById ('firstnamep')
    let lastname=document.getElementById('Lastname') 
    let lastnamep=document.getElementById ('lastnamep')
    let gender=document.getElementById('Gender') 
    let genderp=document.getElementById ('genderp')
    let password=document.getElementById('Password') 
    let passwordp=document.getElementById ('passwordp')
    let email=document.getElementById('Email') 
    let emailp=document.getElementById ('emailp')

const info=[{
    name: userInfo.firstName,
    element: firstname,
    paragraph: firstnamep
},
{
    name: userInfo.lastName,
    element: lastname,
    paragraph: lastnamep
},{
    name: userInfo.gender,
    element:gender,
    paragraph: genderp
}
, {
    name: userInfo.email,
    element: email,
    paragraph: emailp
}, {
    name: userInfo.password,
    element:password,
    paragraph: passwordp
}]


    const handleSubmit=(e)=>{
        
                
        
        for(let i=0; i<info.length; i++){
            if (info[i].name==="" || info[i].name===null ){
            // info[i].element.style.borderStyle="2px red solid"
            // firstname.style.borderColor="red"
            info[i].paragraph.innerText="Field can't be empty"
            info[i].element.style.borderColor="red"
        } else{info[i].paragraph.innerText=""
        info[i].element.style.borderColor="blue"}

        if (info[i].name.length>0 &&  info[i].name.length<3){
            // info[i].element.style.borderStyle="2px red solid"
            // firstname.style.borderColor="red"
            info[i].paragraph.innerText="Field can't be less than 3 characters"
            info[i].element.style.borderColor="red"

            if(info[i].name==="gender"){
                continue
            }
        }  

        }
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
        // if ((firstname.value).length<3){
        //     firstname.style.borderStyle="2px solid green"
        //     // firstname.style.borderColor="red"
        //     firstnamep.innerText="make valid input"
        //     firstnamep.style.color="red"
        // }

        for(let i=0; i<info.length; i++){
            if (info[i].name.length>0 && info[i].name.length<3 ){
            // info[i].element.style.borderStyle="2px red solid"
            // firstname.style.borderColor="red"
            info[i].paragraph.innerText="input can't be less than 3 characters"
            info[i].element.style.borderColor="red"
        } else if(info[i].name.length<=0 || info[i].name.length>=3 ){
            info[i].paragraph.innerText=""
            info[i].element.style.borderColor="blue"}

        // if (info[i].name.length>0 &&  info[i].name.length<3){
        //     // info[i].element.style.borderStyle="2px red solid"
        //     // firstname.style.borderColor="red"
        //     info[i].paragraph.innerText="Field can't be less than 3 characters"
        //     info[i].element.style.borderColor="red"

        //     if(info[i].name==="gender"){
        //         continue
        //     }
        // }  

        }
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>STUDENT REGISTRATION</h2>
            <div className="form-control">
                <label >First Name<input id="Firstname" name="firstName"
                type="text"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={handleInfo}
                /></label>
                <br />
                
                <p id="firstnamep"></p>

                <label >Last Name<input id="Lastname" name="lastName"
                type="text"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={handleInfo}
                /></label>
                <br />
                
                <p id="lastnamep"></p>


                <label >Gender<select id="Gender" name="gender" value={userInfo.gender} defaultValue={"Gender"} onChange={handleInfo}>
                            <option value=" ">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                </select></label>
                <br />
                <p id="genderp"></p>
                
                <label>Email<input id="Email" name="email"
                type="email"
                placeholder="eg:name@gmail.com"
                autoComplete="off"
                value={userInfo.email}
                onChange={handleInfo}
                /></label>
                <br />
                
                <p id="emailp"></p>

                <label>Password<input id="Password" name="password"
                type="password"
                placeholder="*********"
                value={userInfo.password}
                onChange= {handleInfo}
                /></label>
                <br />
                
                <p id="passwordp"></p>
            </div>
            
            <button type="submit" >Submit</button>

        </form>
    )
}

export default Form;