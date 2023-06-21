import React, { useEffect, useState } from 'react'
import "./components.css";

export default function Users() {
  const usersStyle = {
    color: "black",
    width: "32rem",
    height: "auto",
    margin: ".5rem",
    padding: "20px",
    border: ".3px solid black",
    borderRadius: ".4rem",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8E7D9",
    boxShadow: "inset 6px -10px #FFCDD2",
    transition: "all ease-out",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(.9)",
      boxShadow: "inset 6px -10px rgba(255, 255, 255,.5)",
    }

  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Use Effect is Running");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  // users.map(()=> console.log(users));
  return (
    <>
      <div className='usersStyle'>
        <div >Users : {users.length}</div>
        <div>
          {
            users.map((users) => <div >{users.name}</div>)
          }
        </div>
      </div>
    </>
  )
}
