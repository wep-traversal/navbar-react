import React from 'react'
import "./style.css"
export default function Cart(props) {
    return (
        <div >
            <img src={ props.src } className="card-image" />
            <div className="card-info">
                <p className="card-text">{ props.text }</p>
                <button className="btn btn-block btn-primary">More</button>
            </div>

        </div >
    )
}
