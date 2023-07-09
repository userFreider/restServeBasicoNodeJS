//destructuramos para utilizar rest

const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    //extraer params
    const query = req.query;

    //destructurado
    const {q, nombre, apikey} = req.query;

    res.json({
        messages: 'get Api - controllador',
        //query
        nombre,
        q,
        apikey
    });
}



const usuariosPut = (req = request, res = response) => {

    //id para todos mis parametros
    const idUser = req.params.id;
    //otra forma de hacer destructurado
    const { id } = req.params;

    res.json({
        messages: 'put Api - controllador',
        id

    });
}



const usuariosPost = (req, res = response) => {

    //informacion que biene en formato json
    //const body = req.body;

    //cuando queremos validar o mostrar algunos datos 
    const { nombre, edad, ciudad, id } = req.body;


    res.json({
        messages: 'post Api - controllers',
        nombre,
        edad,
        ciudad,
        id
    });
}



const usuariosDelete = (req, res = response) => {
    res.json({
        messages: 'delete Api - controllers'
    });
}



//exportar

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}