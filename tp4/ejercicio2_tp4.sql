create schema ejercicio2_tp4;
use ejercicio2_tp4;

CREATE TABLE PAIS
(
  pais_id INT AUTO_INCREMENT NOT NULL,
  nombre_pais VARCHAR(100) NOT NULL,
  PRIMARY KEY (pais_id)
);

CREATE TABLE PROVINCIA
(
  provincia_id INT AUTO_INCREMENT NOT NULL,
  nombre_provincia VARCHAR(100) NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD
(
  codigo_localidad INT AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  codigo_postal INT NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (codigo_localidad),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id)
);

CREATE TABLE EMPLEADO
(
  empleado_id INT AUTO_INCREMENT NOT NULL,
  dni INT NOT NULL,
  telefono INT NOT NULL,
  email VARCHAR(100) NOT NULL,
  fecha_alta INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  codigo_localidad INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_localidad) REFERENCES LOCALIDAD(codigo_localidad)
);

INSERT INTO PAIS (nombre_pais) VALUES ('Argentina'),('Chile'),('Uruguay'); 
INSERT INTO PROVINCIA (pais_id, nombre_provincia) VALUES ('1','Misiones'),('1','Corrientes'),('1','Entre Rios'),('1','Buenos Aires');
INSERT INTO LOCALIDAD (provincia_id ,nombre, codigo_postal) VALUES ('1','Posadas','3300'),('1','Apostoles', '3200'),('1','Obera', '3400');
INSERT INTO EMPLEADO (codigo_localidad, nombre, dni, telefono, email, fecha_alta) 
VALUES 
('1','Santiago','44952958','025781','email1.com','2023'),
('1','Joaquin', '44567898','37649','email2.com','2023'),
('1','Pablo', '44561598','37647','email3.com','2023'),
('3','Emilio', '45245098','37658','email4.com','2023');






