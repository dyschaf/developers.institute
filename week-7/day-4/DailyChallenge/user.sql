create table users (
    id serial primary key not null,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    email varchar(255) not null unique,
    UserName varchar(255) not null,
    password varchar(255) not null
)