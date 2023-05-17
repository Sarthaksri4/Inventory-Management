import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Img1 from './Images/img1.png'
import "./Register.css"
import axios from "axios"

const Register = () => {

    // const [passShow, setPassShow] = useState(false);
    // const [cpassShow, setCPassShow] = useState(false);

    // const [inpval, setInpval] = useState({
    //     fname: "",
    //     email: "",
    //     password: "",
    //     cpassword: ""
    // });


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

    // const addUserdata = async (e) => {
    //     e.preventDefault();

    //     const { fname, email, password, cpassword } = inpval;

    //     if (fname === "") {
    //         toast.warning("fname is required!", {
    //             position: "top-center"
    //         });
    //     } else if (email === "") {
    //         toast.error("email is required!", {
    //             position: "top-center"
    //         });
    //     } else if (!email.includes("@")) {
    //         toast.warning("includes @ in your email!", {
    //             position: "top-center"
    //         });
    //     } else if (password === "") {
    //         toast.error("password is required!", {
    //             position: "top-center"
    //         });
    //     } else if (password.length < 6) {
    //         toast.error("password must be 6 char!", {
    //             position: "top-center"
    //         });
    //     } else if (cpassword === "") {
    //         toast.error("cpassword is required!", {
    //             position: "top-center"
    //         });
    //     }
    //     else if (cpassword.length < 6) {
    //         toast.error("confirm password must be 6 char!", {
    //             position: "top-center"
    //         });
    //     } else if (password !== cpassword) {
    //         toast.error("pass and Cpass are not matching!", {
    //             position: "top-center"
    //         });
    //     } else {
            // console.log("user registration succesfully done");


            // const data = await fetch("/register", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         fname, email, password, cpassword
            //     })
            // });

            // const res = await data.json();
            // // console.log(res.status);

            // if (res.status === 201) {
            //     toast.success("Registration Successfully done 😃!", {
            //         position: "top-center"
            //     });
            //     setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
            // }
        // }
    // }

    const [formdata,setformdata]=useState({ username:"", email:"", password:"", confirmpassword:""});
    function setVal(event){
    // console.log(event.target.value);
      setformdata(previousResponce=>{
       return{
       ...previousResponce,
       [event.target.name]:event.target.value
     }
 
   });
 }
 const addUserdata = async(e) =>{
     console.log(formdata);
     axios.post("https://inventory-pyes.onrender.com/api/register",formdata)
     .then((response)=>{
      console.log(response);
     })
    
 const { username, email, password, confirmpassword } = formdata;

        if (username === "") {
            toast.warning("Username is required!", {
                position: "top-center"
            });
        } else if (email === "") {
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
        } else if (confirmpassword === "") {
            toast.error("Confirmpassword is required!", {
                position: "top-center"
            });
        }
        else if (confirmpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== confirmpassword) {
            toast.error("pass and Cpass are not matching!", {
                position: "top-center"
            });
        } else {
         console.log("user registration succesfully done");
       }
       e.preventDefault();
    }
 
 return (
        <>
            <section>
            <div className="form">
                <div className="forms_data">
                     <img className='img1' src={Img1} />
                    <div className="forms_heading">
                        <h1>Welcome!</h1>
                        <p style={{ textAlign: "center" }}>Please,enter your details.</p>
                    </div>

                    <form>
                        <div className="forms_input">
                            <label htmlFor="username">Name</label>
                            <input type="text" onChange={setVal}  name="username" id="username" placeholder='Enter Your Name' />
                        </div>
                        <div className="forms_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal}  name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="forms_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type="password" onChange={setVal} name="password" id="password" placeholder='Enter Your password' />
                            </div>
                        </div>

                        <div className="forms_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type="confirmpasswordpassword"  onChange={setVal} name="confirmpassword" id="confirmpassword" placeholder='Confirm password' />
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata}>Sign Up</button>
                        <p>Already have an account? <NavLink to="/">Log In</NavLink></p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
            </section>
        </>
    )
}

export default Register