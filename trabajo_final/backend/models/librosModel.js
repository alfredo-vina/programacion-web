var pool = require('./bd');

async function getLibros() {
    var query = "select * from libros order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function deleteLibroById(id) {
    var query = "delete from libros where id = " + id;
    var rows = await pool.query(query);
    return rows;
}

async function insertLibro(libro) {
    try {
        var query = "insert into libros set ? ";
        var rows = await pool.query(query, [libro]);
        return rows;
    }
    catch (error){
        console.log(error);
    }
}

async function updateLibro(libro) {
    try {
        var query = "update libros set titulo = ?, subtitulo = ? where id = ? ";
        var rows = await pool.query(query, [libro.titulo, libro.subtitulo, libro.id]);
        return rows;
    }
    catch (error){
        console.log(error);
    }
}


module.exports = { getLibros, insertLibro, updateLibro, deleteLibroById }