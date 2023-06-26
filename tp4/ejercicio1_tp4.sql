create schema ejercicio1_tp4;
use ejercicio1_tp4;

CREATE TABLE PROFESOR
(
  profesor_id INT AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  especialidad VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE ALUMNO
(
  cod_matricula INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  dni INT NOT NULL,
  fecha_nac DATE NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (dni)
);

CREATE TABLE CURSO
(
  nombre VARCHAR(100) NOT NULL,
  cod_curso INT NOT NULL,
  dni INT NOT NULL,
  PRIMARY KEY (cod_curso),
  FOREIGN KEY (dni) REFERENCES ALUMNO(dni)
);

CREATE TABLE imparte
(
  cod_curso INT NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (cod_curso, profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id)
);

INSERT INTO PROFESOR (nombre, especialidad, email)
VALUES 
('Ana López', 'Física', 'ana@example.com'),
('Carlos González', 'Química', 'carlos@example.com'),
('Sofía Rodríguez', 'Literatura', 'sofia@example.com');

INSERT INTO ALUMNO (cod_matricula, nombre, dni, fecha_nac, email)
VALUES 
(3, 'Luis Martínez', 54321987, '2001', 'luis@example.com'),
(4, 'Elena Ramírez', 87654321, '2002', 'elena@example.com'),
(5, 'Diego Morales', 19283746, '2000', 'diego@example.com');

INSERT INTO CURSO (nombre, cod_curso, dni)
VALUES 
('Base de Datos', 1003, 54321987),
('Ux Ui', 1004, 87654321),
('Full Stack', 1005, 19283746);

INSERT INTO imparte (cod_curso, profesor_id)
VALUES 
(1003, 1),
(1004, 2),
(1005, 3);


