

-- create table items(
-- 	item_id serial not null primary key,
-- 	item varchar(50) not null,
-- 	prices money not null
	
-- );
-- insert into items(item, prices)
-- values
-- ('ball', 3.59),
-- ('soap', 2.99);


create table product_orders(
	po_id serial not null primary key,
	item_id smallint references items(item_id) on delete cascade on update cascade,
	shipped boolean default false,
	user_id smallint unique 
	);
insert into product_orders( item_id,shipped, user_id)
values
(1,default,1),
(2,true,2)
create table users(
	id serial not null primary key ,
	name varchar(50) not null,
	user_id smallint references product_orders(user_id) on delete cascade on update cascade
)
insert into users(name,user_id)
values
('dovd',1),
('sholom',2);

select items.item_id, users.user_id,
sum (prices) as total
from items
inner join product_orders on product_orders.item_id = items.item_id
inner join users on users.user_id = product_orders.user_id
group by
items.item_id, users.user_id
order by total



-- inner join items on items.item_id = product_orders.item_fk_id
-- inner join users on users.user_fk_id = product_orders.user_fk_id
-- where users.name = 'Sholom'