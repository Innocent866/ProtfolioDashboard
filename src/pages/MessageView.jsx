import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MessageView = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setLoad(true);
      const message = await fetch("http://localhost:3000/api/getmessage", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const res = await message.json();
      console.log(res);
      setData(res.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (_id) => {
    // e.preventDefault();
   
       await axios.delete(`http://localhost:3000/api/delete/${_id}`)
      .then(res => {
        window.location.reload()
        console.log('succes')
    })
      
    .catch (error => console.log(error))
}

  return (
    <div className="text-white" style={{ background: "#2D2D2D" }}>
      <div className="container p-5">
        <main className=" ">
          {data.map((datum) => {
            const { writeMessage, from, subject, _id } = datum;
            return (
              <div
                key={_id}
                className="rounded-5 p-3 border border-1 border-white my-5"
              >
                <h1>
                  From: <span>{from}</span>
                </h1>
                <h1>Subject: {subject} </h1>
                <hr />
                <h4>{writeMessage}</h4>
                <hr />

                <div
                  className="d-flex justify-content-center "
                  onClick={()=>handleDelete(_id)}
                >
                  <button className="btn btn-danger">Delete Message</button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default MessageView;
