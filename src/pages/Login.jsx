import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const bodies = 
    try {
      const user = await axios.post("https://portfolio-2slt.onrender.com/api/login",{
        email,
        password,
      });
      
      console.log(user);
    //   if(respond.message === 'Registration Successful'){
    //     navigate('/Login')
    //   }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          style={{ background: "#404040", color: "white" }}
          className="w-100 my-4 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ background: "#404040", color: "white" }}
          className="w-100 my-4 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-center">
          <button className="btn btn-light px-5">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Login