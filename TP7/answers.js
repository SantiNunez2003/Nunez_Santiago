
var answers= {};
var detail;

//---------------RESPUESTAS PARA E INDEX------------------

answers.Index= function(err, rows, res){
    if(err){
        res.json(err);
    }else{
        res.json(rows);
    }
};

//-----------RESPUESTAS PARA BASE DE DATOS--------------

answers.ReadDataBase= function(err ,rows, respuesta, msj){
    if(err){
        respuesta(err);
        return;
    }else{
        if(msj == 1){
            detail = {
                Personas: rows
            };
        }else if(msj == 2){
            detail = {
                Usuarios: rows
            };
        };
        respuesta(undefined,{
            detail
        });
    }
};

answers.CreateDataBase= function(err , rows, respuesta, parametros, msj){
    if(err){
        if(err.code == 'ER_DUP_ENTRY'){
            respuesta({
                mensaje: "Dato Duplicado, pruebe con otros datos",
                error: err
            })
        }else{
            respuesta({
            mensaje: "Ocurrio un ERROR en la Base de Datos",
            error: err
        })}
        return;
    }else{
        if(msj == 1){
            detail = {
                mensaje: `Se creo a la persona: ${parametros.nombre} ${parametros.apellido} `,
                detalle: rows
            };
        }else if(msj == 2){
            detail = {
                mensaje: `Se creo a usuario con: ${parametros.mail} ${parametros.nickname} `,
                detalle: rows
            };
        };
        respuesta(undefined , {
            detail
        })
    }
};

answers.UpdateDataBase= function(err , rows, respuesta, parametros, condicion, msj){
    if(err){
        respuesta({
            mensaje: "Ocurrio un ERROR en la Base de Datos",
            error: err
        });
        return;
    }else{
        if(rows.affectedRows == 0){
            respuesta({
                mensaje: "No se realizo ningun cambio",
                error: err
            });
            return;
        }else{
            if(msj == 1){
                detail = {
                    mensaje: `Se actualizo persona con: ${condicion} a ${parametros.nombre} ${parametros.apellido} dni: ${parametros.dni}`,
                    detalle: rows
                };
            }else if(msj == 2){
                detail = {
                    mensaje: `Se creo a usuario con: ${condicion} a ${parametros.nickname} mail: ${parametros.mail}`,
                    detalle: rows
                };
            };
            respuesta(undefined , {
                detail
            });
        }   
    }
};

answers.DeleteDataBase= function(err , rows, respuesta, condicion, msj){
    if(err){
        respuesta({
            mensaje: "Ocurrio un ERROR en la Base de Datos",
            error: err
        });
        return;
    }else{
        if(rows.affectedRows == 0){
            respuesta({
                mensaje: "No se encontro el dato: " + condicion,
                detalle: err
            });
            return;
        }else{
            if(msj == 1){
                detail = {
                    mensaje: `Se elimino a: ${condicion}`,
                    detalle: rows
                };
            }else if(msj == 2){
                detail = {
                    mensaje: `Se elimino a: ${condicion}`,
                    detalle: rows
                };
            };
            respuesta(undefined , {
                detail
            });
        } 
    }
};
//-------------------------------------------------------
module.exports = answers;