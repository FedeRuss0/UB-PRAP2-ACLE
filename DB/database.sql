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

DESCRIBE productos;

INSERT INTO productos VALUES
  (1, 'Fideos', 3, 33, 2),
  (2, 'Carne', 5, 34, 2),
  (3, 'Agua', 7, 26, 2);