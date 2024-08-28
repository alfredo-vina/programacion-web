import React from 'react'

const LibroItem = (props) => {
    const {titulo, subtitulo, precio, imagen, body} = props;

    return <tr className="trLibros">
        <td className="tdLibros"><img src={imagen} /></td>
        <td className="tdLibros">{titulo}</td>
        <td className="tdLibros">{subtitulo}</td>
        <td className="tdLibros"><b>${precio.toFixed(2)}</b></td>
        
        </tr>
}

export default LibroItem;