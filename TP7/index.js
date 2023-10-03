
const express = require('express');
const app = express();
const morgan = require("morgan");
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(morgan('tiny'));
morgan(':method :url :status :res[content-length] - :response-time ms');

const config = require("./config.json");
const persona_bd = require("./BD_Backend");
const answers = require("./answers");

//CONEXION SERV
app.listen(config.servidor.puerto, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Estatus de Servidor: ON")
    }
});

//-------------------------PERSONA--------------------------------------

app.get('/api/persona',(req,res)=>{

   persona_bd.ReadPersona((err,rows)=>{
        answers.Index(err,rows,res);
   })
});//READ

app.post('/api/persona',(req,res)=>{

    let parametros = req.body;

    persona_bd.CreatePersona(parametros , (err,rows) =>{
        answers.Index(err,rows,res);
    })
});//CREATE

app.put('/api/persona/:dni',(req,res)=>{
    
    let parametros= req.body;
    let condicion = req.params.dni;

    persona_bd.UploadPersona(parametros, condicion, (err , rows)=>{
        answers.Index(err,rows,res);
    });
});//UPLOAD

app.delete('/api/persona/:dni', (req,res)=>{
    
    let condicion = req.params.dni;

    persona_bd.DeletePersona(condicion, (err , rows)=>{
        answers.Index(err,rows,res);
    });
});//DELETE

//-------------------------USUARIO--------------------------------------

app.get('/api/usuario',(req,res)=>{

    persona_bd.ReadUsuario((err,rows)=>{
         answers.Index(err,rows,res);
    })
 });//READ
 
 app.post('/api/usuario/',(req,res)=>{
    
    let condicion = req.params.persona;
    let parametros = req.body;
 
     persona_bd.CreateUsuario(parametros, condicion , (err,rows) =>{
         answers.Index(err,rows,res);
     })
 });//CREATE
 
 app.put('/api/usuario/:mail',(req,res)=>{
     
     let parametros= req.body;
     let condicion = req.params.mail;
 
     persona_bd.UploadUsuario(parametros, condicion, (err , rows)=>{
         answers.Index(err,rows,res);
     });
 });//UPLOAD
 
 app.delete('/api/usuario/:mail', (req,res)=>{
     
     let condicion = req.params.mail;
 
     persona_bd.DeleteUsuario(condicion, (err , rows)=>{
         answers.Index(err,rows,res);
     });
 });//DELETE

 //-----------------------OPERACIONES----------------------------

 app.get('/api/persona/:apellido', (req,res)=>{
     
    let ape = req.params.apellido;

    persona_bd.getByApellido( ape, (err , rows)=>{
        answers.Index(err,rows,res);
    });
});

app.get('/api/usuario/:mail', (req,res)=>{
     
    let condicion = req.params.mail;

    persona_bd.getByMail(condicion, (err , rows)=>{
        answers.Index(err,rows,res);
    });
});
//---------------------------------------------

app.get('/api/usuario/', (req,res)=>{
     
    let parametros = req.body;
    let condicion = req.params.dni;

    persona_bd.getUser(parametros, condicion, (err , rows)=>{
        answers.Index(err,rows,res);
    });
});
