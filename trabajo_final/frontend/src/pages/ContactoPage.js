import React, {useState} from "react";
import axios from "axios";

const ContactoPage = (props) => {

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");


    const handleChangeNombre = e => {
        const {name, value} = e.target;
        setNombre(value);
    }

    const handleChangeEmail = e => {
        const {name, value} = e.target;
        setEmail(value);
    }

    const handleChangeTelefono = e => {
        const {name, value} = e.target;
        setTelefono(value);
    }

    const handleChangeMensaje = e => {
        const {name, value} = e.target;
        setMensaje(value);
    }

    const handleSubmit = async e => {
        let formData = ({'nombre':nombre, 'email': email, 'telefono': telefono, 'mensaje': mensaje});

        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.mensaje);

        if (response.data.error === false)
        {
            //setFormData(initialForm);
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
                <input type="text" name="nombre" value={nombre} onChange={handleChangeNombre} />
            </td>
        </tr>
        <tr>
            <td>
                <label>Email:</label>
            </td>
            <td>
                <input type="text" name="email" value={email} onChange={handleChangeEmail} />
            </td>
        </tr>
        <tr>
            <td>
                <label>Tel&eacute;fono:</label>
            </td>
            <td>
                <input type="text" name="telefono" value={telefono} onChange={handleChangeTelefono} />
            </td>
        </tr>
        <tr>
            <td>
                <label>Comentario:</label>
            </td>
            <td>
                <textarea name="mensaje" value={mensaje} onChange={handleChangeMensaje} />
            </td>
        </tr>
        {sending ? <img src="imagenes/loading.svg" width="35" height="35"/>:null}
        {msg ? <p>{msg}</p>:null}
        <tr>
            <td colSpan={2} align="right">
                <input type="submit" value="Enviar" />
            </td>
        </tr>
        </table>
        </center>
    </form>
    </div>
}

export default ContactoPage;