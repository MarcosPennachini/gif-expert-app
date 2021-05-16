import React from 'react'

export const GifGridItem = ({id, title, img}) => {

    console.log(id, title, img);
    return (
        <div className="card animate__animated animate__jackInTheBox animate__fast">
            <img src={img} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
