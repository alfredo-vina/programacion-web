import React from 'react'

const LibroItem = (props) => {
    const {titulo, subtitulo, imagen, body} = props;

    return <div>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <img src={imagen} />
        <div dangerouslySetInnerHTML={{ __html:body}}/>
        <br/>
    </div>
}

export default LibroItem;