-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
-- CREATE TABLE items (
-- item_id SERIAL PRIMARY KEY,
-- item_name VARCHAR (50) NOT NULL,
-- item_price money NOT NULL);

-- CREATE TABLE customers(
-- first_name VARCHAR (50) NOT NULL,
-- last_name VARCHAR (50) NOT NULL);
-- INSERT INTO items (item_name, item_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');
-- SELECT * FROM items;
-- SELECT * FROM items WHERE item_price > '$80.00';
-- SELECT * FROM items WHERE item_price <= '$300.00';
-- SELECT * from customers WHERE last_name LIKE 'Smith'; --No records becasue noone has that name
-- SELECT * from customers WHERE last_name LIKE 'Jones';
-- SELECT * from customers WHERE first_name NOT LIKE 'Scott';