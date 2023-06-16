import React from 'react';



export default function Card1(props) {
    var style = {
        width: '18rem',
        margin: '10px',
        color: 'Black',
        width: '500px'
    }
    const titleStyle = {
        color: '#1a8cff'
        //  #ff661a
    }
    const textStyle = {
        color: '#ff661a'
    }
    return (
        <>
            <div className="card text-center" style={style}>
                {/* <img className="card-img-top" src="{props.imgSrc}" alt="Card image cap"/> */}
                <div className="card-body">
                    <h5 className="card-title" style={titleStyle}>{props.title}</h5>
                    <p className="card-text" style={textStyle}>{props.text}</p>

                </div>
            </div>
        </>
    )
}

export function Card2() {
    return (
        <>
            <div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Primary card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}


