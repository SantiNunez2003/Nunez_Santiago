
var persona_bd = {};

const mysql = require('mysql');
const config = require("./config.json");
const answers = require("./answers");

var connection = mysql.createConnection(config.Basedatos);  

const msj1 = 1;
const msj2 = 2;

// conectarse a mysql
connection.connect((err)=>{
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }else{
        console.log("Conetado a la Base de Datos");
    }
});
//-------------------------OPERACIONES-ESPECIALES-----------------------------

persona_bd.getByApellido= function(ape, respuesta){

    $query = 'SELECT dni , nombre , apellido FROM persona WHERE apellido = ?';
    datos_persona= [ape];

    var msj = msj1;
    //CONEXION
    connection.query($query, datos_persona, (err, rows)=>{
        
        answers.ReadDataBase(err , rows, respuesta, msj);
    });
};

persona_bd.getByMail= function(condicion, respuesta){

    $query = 'SELECT  mail , nickname, password FROM usuario WHERE mail = ?';
    datos_persona= [condicion];

    var msj = msj2;
    //CONEXION
    connection.query($query, datos_persona, (err, rows)=>{
        
        answers.ReadDataBase(err , rows, respuesta, msj);
    });
};

//-------------------------CRUD-PERSONA----------------------------------------

persona_bd.ReadPersona= function (respuesta){       

    $query = 'SELECT * FROM persona';

    var msj = msj1;
    //CONEXION
    connection.query($query, function (err, rows){
        answers.ReadDataBase(err ,rows, respuesta, msj);
    });
    console.log("   -Se estan leyendo las perosnas"); 
};

persona_bd.CreatePersona = function(parametros , respuesta){
    console.log("   -Se creo una perosnas"); 
    
    $query = 'INSERT INTO persona (nombre,apellido,dni) VALUES (?,?,?)';
    datos_persona= [parametros.nombre , parametros.apellido, parametros.dni];
    
    var msj = msj1;
    //CONEXION
    connection.query($query, datos_persona, function (err, rows){
        answers.CreateDataBase(err , rows, respuesta, parametros, msj);
    });
};

persona_bd.UploadPersona = function(parametros, condicion , respuesta){

    $query = 'UPDATE  persona set nombre = ? , apellido = ? , dni = ? WHERE dni = ?';
    datos_persona= [parametros.nombre, parametros.apellido, parametros.dni, condicion];

    var msj = msj1;
    //CONEXION
    connection.query($query, datos_persona, (err, rows)=>{
        
        answers.UpdateDataBase(err , rows, respuesta, parametros, condicion,msj);
        console.log("   -Se modifico una perosnas");
    });
};

persona_bd.DeletePersona= function(condicion , respuesta){
    
    $query = 'DELETE FROM persona WHERE dni = ?';
    datos_persona= [condicion];

    var msj = msj1;
    //CONEXION
    connection.query($query, datos_persona, function (err, rows){

        answers.DeleteDataBase(err , rows, respuesta, condicion, msj);
        console.log("   -Se elimino una perosnas con dni: " + condicion); 
    });  
};

//----------------------CRUD-USUARIO--------------------------------------

persona_bd.ReadUsuario= function (respuesta){       
    console.log("   -Se estan leyendo los usuarios"); 

    $query = 'SELECT * FROM usuario';

    var msj = msj2;
    //CONEXION
    connection.query($query, function (err, rows){
        answers.ReadDataBase(err ,rows, respuesta, msj);
    });
};

persona_bd.CreateUsuario = function(parametros ,condicion , respuesta){
   
    $query = 'INSERT INTO usuario (mail, nickname, password) VALUES (?,?,?)';
    datos_persona= [parametros.mail , parametros.nickname, parametros.password, condicion];
    
    var msj = msj2;
    //CONEXION
    connection.query($query, datos_persona, function (err, rows){
        answers.CreateDataBase(err , rows, respuesta, parametros, msj);
    });
    console.log("   -Se creo un Usuario"); 
};

persona_bd.UploadUsuario = function(parametros, condicion , respuesta){

    $query = 'UPDATE  usuario set nickname = ? , password = ? , mail = ? WHERE mail= ?';
    datos_persona= [parametros.nickname, parametros.password, parametros.mail, condicion];

    var msj = msj2;
    //CONEXION
    connection.query($query, datos_persona, (err, rows)=>{
        
        answers.UpdateDataBase(err , rows, respuesta, parametros, condicion, msj);
        console.log("   -Se modifico una usuario");
    });
};

persona_bd.DeleteUsuario= function(condicion , respuesta){
    
    $query = 'DELETE FROM usuario WHERE mail = ?';
    datos_persona= [condicion];

    var msj = msj2;
    //CONEXION
    connection.query($query, datos_persona, function (err, rows){

        answers.DeleteDataBase(err , rows, respuesta, condicion, msj);
        console.log("   -Se elimino una usuario con mail: " + condicion); 
    });  
};
//-----------------------------------------------------------------------

persona_bd.getUser= function(parametros , condicion, respuesta){
    
    $query = 'SELECT nickname FROM usuario WHERE persona = ?';
    datos_persona= [condicion];

    var msj = msj2;
    //CONEXION
    connection.query($query, datos_persona, function (err, rows){

        answers.DeleteDataBase(err , rows, respuesta, condicion, msj);
        console.log("   -Se elimino una usuario con mail: " + condicion); 
    });  
}



module.exports = persona_bd;