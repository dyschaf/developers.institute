-- select first_name as FIRSTNAME , last_name as LASTNAME from employees;--1
-- select department_id From employees group by department_id;--2
-- select * from employees order by first_name desc;--3
-- select first_name, last_name, salary, round(salary*.15, 2)as PF from employees;--4
-- select employee_id , first_name, last_name, salary from employees order by salary asc;--5
-- select SUM(salary) from employees;--6
-- select max(salary), min(salary) from employees;--7
-- select avg(salary) from employees;--8
-- select count(employee_id) from employees;--9
-- select upper(first_name) from employees;--10
-- select left(first_name,3) from employees;--11
-- select (first_name, last_name) as fullName from employees--12
-- select first_name, last_name, (length(first_name)+ length(last_name)) as lengthOfFullName from employees--13
-- select  ISNUMERIC(first_name) from employees
-- select * from employees limit(10)--15
-- 🌟 Restricting And Sorting
-- select * from employees;
-- select first_name, last_name,salary from employees where salary between 10000 and 15000;-1
-- select first_name, last_name, salary,hire_date from employees where EXTRACT(year from hire_date)=1987;--2
-- select first_name from employees where first_name ilike '%e%' and first_name ilike '%o%';--3
-- select last_name, job_title, salary
-- from employees
-- inner join jobs
-- on jobs.job_id = employees.job_id
-- where job_title != 'Programmer' and job_title != 'Shipping Clerk' and salary != 4500 and salary != 10,000 and salary != 15,000;--4
-- select last_name
-- from employees
-- where LENGTH(last_name) =6;--5
-- select last_name
-- from employees
-- where POSITION('e' in last_name) = 3;--6

-- select job_title
-- from employees
-- inner join jobs
-- on jobs.job_id = employees.job_id;--7
select *
from employees
where last_name ilike 'jones' or last_name ilike 'blake' or last_name ilike 'king' or last_name ilike 'ford'or last_name ilike 'scott';