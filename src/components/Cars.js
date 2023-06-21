import React from 'react'

export default function Cars(props) {
    const carStyle = {
        width: "18rem"
    }
    const [name, price] = props.carObj;
    return (
        <>
            <div>
                <h1 className="text-center">Cars</h1>
                <div className="card bg-light text-primary" style={{width: "18rem"}}>
                    <div className="card-header">
                        {name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price- {price}</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
