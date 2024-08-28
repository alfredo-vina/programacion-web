import React from "react";
import {useState, useEffect} from 'react'
import axios from 'axios'
import LibroItem from "../components/libros/Libros";


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
            <h2>Libro</h2>
            {
                loading ? (<p>Cargando...</p>) : 
                (
                    libros.map(item => <LibroItem key={item.libro.id} titulo={item.libro.titulo} subtitulo={item.libro.subtitulo} imagen={item.imagen} />)
                )
            }
        </section>
    ); 
}

export default LibrosPage;