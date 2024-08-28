import React, {useState} from "react";
import axios from "axios";

const ContactoPage = (props) => {
   
    const initialForm = {
        nombre: "",
        email:"",
        telefono:"",
        mensaje:""
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.mensaje);
        if (response.data.console.error === false)
        {
            setFormData(initialForm);
        }
    }
    return <div class="content"><br/><form onSubmit={handleSubmit}>
        <center>
        <table>
        <tr>
            <td>
                <label>Nombre:</label>
            </td>
            <td>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </td>
        </tr>
        <tr>
            <td>
                <label>Email:</label>
            </td>
            <td>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </td>
        </tr>
        <tr>
            <td>
                <label>Tel&eacute;fono:</label>
            </td>
            <td>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
            </td>
        </tr>
        <tr>
            <td>
                <label>Comentario:</label>
            </td>
            <td>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
            </td>
        </tr>
        {sending ? <img src="imagenes/loading.svg" width="35" height="35"/>:null}
        {msg ? <p>{msg}</p>:null}
        <tr>
            <td colSpan={2} align="right">
                <input type="submit" value="Enviar" onChange={handleChange} />
            </td>
        </tr>
        </table>
        </center>
    </form>
    </div>
}

export default ContactoPage;