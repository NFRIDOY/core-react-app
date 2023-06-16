import React from 'react'

export default function Products(props) {
    const productStyle = {
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
    const {name, price} = props.product;
    return (
        <>
            <div className='card' style={productStyle}>
                <h2>Product: {props.product.name}</h2>
                <h5>Price: {price}</h5>
                <button className='btn btn-primary'>Buy 1 Unit</button>
            </div>
        </>
    )
}
