import React, { useState } from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import Img1 from './Images/img1.png'
import "./Login.css"
import axios from "axios"

const Login = () => {
    

    // const [passShow, setPassShow] = useState(false);

    // const [inpval, setInpval] = useState({
    //     email: "",
    //     password: "",
    // });

    // const history = useNavigate();

    // const setVal = (e) => {
    //     // console.log(e.target.value);
    //     const { name, value } = e.target;

    //     setInpval(() => {
    //         return {
    //             ...inpval,
    //             [name]: value
    //         }
    //     })
    // };


    // const loginuser = (e) => {
    //     e.preventDefault();

        // const { email, password } = inpval;

        // if (email === "") {
        //     toast.error("email is required!", {
        //         position: "top-center"
        //     });
        // } else if (!email.includes("@")) {
        //     toast.warning("includes @ in your email!", {
        //         position: "top-center"
        //     });
        // } else if (password === "") {
        //     toast.error("password is required!", {
        //         position: "top-center"
        //     });
        // } else if (password.length < 6) {
        //     toast.error("password must be 6 char!", {
        //         position: "top-center"
        //     });
        // } else {
        //     console.log("user login succesfully done");
        // }
    
    const [formdata,setformdata]=useState({ email:"", password:""});
   function setVal(event){
  // console.log(event.target.value);
     setformdata(previousResponce=>{
      return{
      ...previousResponce,
      [event.target.name]:event.target.value
    }

  });
}
const loginuser = async(e) =>{
    console.log(formdata);
    axios.post("https://inventory-pyes.onrender.com/api/login",formdata)
    .then((response)=>{
     console.log(response);
    })
    const { email, password } = formdata;

    if (email === "") {
        toast.error("Email is required!", {
            position: "top-center"
        });
    } else if (!email.includes("@")) {
        toast.warning("Includes @ in your email!", {
            position: "top-center"
        });
    } else if (password === "") {
        toast.error("Password is required!", {
            position: "top-center"
        });
    } else if (password.length < 6) {
        toast.error("Password must be 6 char!", {
            position: "top-center"
        });
    } else {
        console.log("user login succesfully done");
    }
    e.preventDefault();
}


           

    return (
        <>
            <section>
            <div className="form">
                <div className="form_data">
                     <img className='img1' src={Img1} />
                    <div className="form_heading">
                        <h1>Welcome!</h1>
                        <p>Please,enter your details.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email"  onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type= "password"  onChange={setVal}  name="password" id="password" placeholder='Enter Your password' />
                                {/* <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div> */}
                            </div>
                        </div>

                        <button className='btn' onClick={loginuser}>Login</button>
                        <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
            </section>
        </>

    )
}

export default Login