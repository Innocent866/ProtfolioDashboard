import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast';


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const bodies =;
    try {
      const respond = await axios.post("https://portfolio-2slt.onrender.com/api/new-user",  {
        name,
        email,
        password,
      });
      console.log(respond);
      if(respond.data.success === true){
          toast.success(respond.data.message)
        navigate('/MessageView')
      }

      
    } catch (error) {
      console.log(error);
      if(error.response.data.success === false){
        toast.error(error.response.data.message)
    }
    }
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", background: "#2D2D2D" }}
    >
      <form className="bg-white rounded-5 p-5" action="" onSubmit={handleSubmit}>
        <h1>Register to See More Job Opportunities</h1>
        <input
          type="text"
          placeholder="Name"
          style={{ background: "#404040", color: "white" }}
          className="w-100 my-4 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
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
  );
};

export default Register;
