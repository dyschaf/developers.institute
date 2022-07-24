CREATE TABLE public (
	unknown_id SERIAL PRIMARY KEY,
	items VARCHAR (50) NOT NULL, 
	customers VARCHAR (50) NOT NULL)
INSERT INTO items (item, price)
VALUES
('Small Desk ',100),
('Large desk',300),
('fan',80),;
INSERT INTO customers (first_name, last_name)
VALUES 
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson"),:
 
 SELECT * FROM public
 SELECT * FROM items WHERE price >30;
 SELECT * FROM items WHERE price =>300;
 SELECT * FROM customers WHERE last_name = 'Smith';
 SELECT * FROM customers WHERE last_name = 'Jones';
 SELECT * FROM customers WHERE first_name <> 'Scott';
 