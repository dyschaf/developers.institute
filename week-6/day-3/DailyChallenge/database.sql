-- create table customer (
-- 	customer_id serial not null primary key,
-- 	first_name varchar(50) not null,
-- 	last_name varchar(50) not null
-- 	);
-- create table customer_profile(
-- 	customer_profile_id serial not null primary key,
-- 	isLoggedIn boolean default false,
-- 	customer_id smallint unique references customer (customer_id)

-- );
-- select * from customer_profile;
-- -- 2
-- insert into customer(first_name, last_name)
-- values('John', 'Doe'),
-- ('Jerome','Lalu'),
-- ('Lea', 'Rive');
-- -- 3
-- select * from customer;
-- insert into customer_profile(isLoggedIn, customer_id)
-- values(true, (select customer_id from customer where first_name = 'Jerome' ));
-- --4
-- select first_name, isLoggedIn
-- from customer
-- right Join customer_profile
-- on customer.customer_id = customer_profile.customer_id,

-- count(isLoggedIn = 'true');

-- -- 2
-- -- 1
-- create table book (
-- book_id serial primary key,
-- title text not null,
-- author text not null
-- );
-- -- 2
-- insert into book(title, author)
-- values
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird','Harper Lee');
-- -- 3
-- create table student (
-- student_id serial primary key,
-- name varchar(50)not null unique,
-- age smallint check(age <= 15) 
-- );
-- --4
-- insert into student (name, age)
-- values
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);
-- --5
-- create table library(
-- book_fk_id smallint  references book(book_id) on delete cascade on update cascade,
-- student_fk_id smallint references student(student_id) on delete cascade on update cascade,
-- borrowed_date date,
-- 	primary key (book_fk_id, student_fk_id)
-- );
-- insert into library (book_fk_id, student_fk_id, borrowed_date)
-- values
-- ((select book_id from book where title = 'Alice In Wonderland' ),
-- (select student_id from student where name = 'John'),'2022/02/15'),
-- ((select book_id from book where title = 'To kill a mockingbird' ),
--  (select student_id from student where name = 'Bob'),'2021/03/03'),
-- ((select book_id from book where title = 'Alice In Wonderland' ),
--  (select student_id from student where name = 'Lera'),'2021/05/23'),
-- ((select book_id from book where title = 'Harry Potter'),
--  (select student_id from student where name = 'Bob'),'2021/08/12');
 select * from library;
 select student.name, book.title
 from student
 inner join library
 on book_fk_id = student_fk_id

