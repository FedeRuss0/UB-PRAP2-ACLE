CREATE DATABASE IF NOT EXISTS aclecompany;

USE aclecompany;

CREATE TABLE productos (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  Precio decimal(10,2) DEFAULT NULL,
  Stock int(11) DEFAULT NULL,
  StockMinimo int(11) DEFAULT NULL,
  PRIMARY KEY (id)
); 

CREATE TABLE usuarios (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  Apellido varchar(255) DEFAULT NULL,
  Email varchar(255) DEFAULT NULL,
  ContraseñaHash char(64) DEFAULT NULL,
  Rol varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE pedido (
  id int(11) NOT NULL AUTO_INCREMENT,
  Fecha date DEFAULT NULL,
  Total decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (id)
);

DESCRIBE productos;

INSERT INTO productos VALUES
  (1, 'Fideos', 3, 33, 2),
  (2, 'Carne', 5, 34, 2),
  (3, 'Agua', 7, 26, 2);

  INSERT INTO usuarios VALUES
  (1, 'Tivi', 'Troli', 'tivigovir@gmail.com', 'megustalajapi', 'pasivo');