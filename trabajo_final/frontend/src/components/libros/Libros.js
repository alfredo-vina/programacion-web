import React from 'react'

const LibroItem = (props) => {
    const {titulo, subtitulo, imagen} = props;

    return <div>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <img src={imagen} />
        <br/>
    </div>
}

export default LibroItem;