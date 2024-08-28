import React from "react";
import {useState, useEffect} from 'react'
import axios from 'axios'
import LibroItem from "../components/libros/Libros";
import '../styles/components/pages/LibrosPage.css';


const LibrosPage = (props) => {
    //return <div>LibrosPage</div>

    const [loading, setLoading] = useState(false);
    const [libros, setLibros] = useState([]);

    useEffect(()=> {
        const cargarLibros = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/libros');
            setLibros(response.data);
            setLoading(false);
        }

        cargarLibros();

    }, []);
    
    return (
        <section>
            <table className="tableLibros">
                <thead>
                <tr>
                <th className="thLibros">Tapa</th>
                <th className="thLibros">T&iacute;tulo</th>
                <th className="thLibros">Subt&iacute;tulo</th>
                <th className="thLibros">Precio</th>
                </tr>
                </thead>
            {
                loading ? (<img src="imagenes/loading.svg" width="35" height="35"/>) : 
                (
                    libros.map(item => <LibroItem key={item.libro.id} titulo={item.libro.titulo} subtitulo={item.libro.subtitulo} imagen={item.imagen} precio={item.libro.precio} />)
                )
            }
            </table>
        </section>
    ); 
}

export default LibrosPage;