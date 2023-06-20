import React from 'react'

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
        textAlign: "left",
        fontSize: "large",
        backgroundColor:"#F8E7D1",
        // backgroundColor: "#F8E7D9",
        boxShadow: "inset 6px -10px #FFCDD2",
        transition: "all ease-out",
        cursor: "pointer",
        "&:hover": {
            transform: "scale(.9)",
            boxShadow: "inset 6px -10px rgba(255, 255, 255,.5)",
        }

    }
  return (
    <div>Users</div>
  )
}
