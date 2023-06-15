import React from 'react'

export default function CardDark(props) {
    return (
        <>
            {/* cardDark */}
            <div className="card text-white bg-dark mb-3" style="max-width: 18rem;">
                <div className="card-header">H{props.head}</div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.details}</p>
                </div>
                <div className="">
                <h5 className="card-title">P{props.price}</h5>
                    <button type="button" className="btn btn-primary">Buy</button>
                </div>
            </div>
        </>
    )
}
cardDark.defaultProps = {
    title : "set Title",
    head : "Set Header",
    details:"Set Details Here",
    price: "5000 BDT"
}
