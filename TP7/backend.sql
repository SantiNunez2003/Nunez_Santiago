
CREATE database backend;
USE backend;

CREATE TABLE usuario(
	mail VARCHAR(40) Primary key,
	nickname VARCHAR(20) NOT NULL,
	password VARCHAR(20) NOT NULL,
);

CREATE TABLE persona(
	dni INT Primary Key,
	nombre VARCHAR(30) NOT NULL,
	apellido VARCHAR(30) NOT NULL
);
