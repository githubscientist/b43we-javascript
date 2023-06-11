
-- create table Test(id integer, title varchar(100));
-- insert into Test(id, title) values(1, "Hello");
-- select * from Test;
-- Your code here!

-- create a new database
create database employeesdb;

-- listing all the databases that are available within the system
-- show databases;

-- select a database
use employeesdb;

-- show all the tables available within the database
-- show tables;

create table employee_table(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(45) NOT NULL,
    occupation varchar(35) NOT NULL,
    age int NOT NULL,
    PRIMARY KEY(id)
);

alter table employee_table add salary int NOT NULL;

-- desc employee_table;

-- drop / delete a table
-- drop table employee_table;

-- show tables;
insert into employee_table(name, occupation, age, salary) values('peter', 'engineer', 25, 25000);
insert into employee_table(name, occupation, age, salary) values('joseph', 'developer', 30, 20000);
insert into employee_table(name, occupation, age, salary) values('mike', 'developer', 28, 23000);
insert into employee_table(name, occupation, age, salary) values('stephen', 'scientist', 45, 30000);
insert into employee_table(name, occupation, age, salary) values('mark', 'engineer', 25, 33000);
insert into employee_table(name, occupation, age, salary) values('suzi', 'scientist', 30, 39000);
insert into employee_table(name, occupation, age, salary) values('michael', 'engineer', 25, 45000);
insert into employee_table(name, occupation, age, salary) values('alexander', 'developer', 29, 15000);


-- update a value in the table
update employee_table set occupation='developer' where id=3;

-- select all the columns of the table
-- select * from employee_table;

-- select the columns id and name
-- select id, name from employee_table;

-- select * from employee_table;

-- select the employees whose age is greater than 35 years
-- select * from employee_table where age>=30;

-- select the names of the employees whose salary is greater than 30000
-- select name, salary from employee_table where salary > 30000;

-- select all the engineers whose age is greater than or equal to 30 years
-- select * from employee_table where occupation='engineer' and age >= 30;

-- select only the distinct occupations from the table employee_table
-- select distinct(occupation) from employee_table;

-- select * from employee_table;

-- arrange the records in ascending order or descening order
-- select * from employee_table order by age asc, salary asc;

-- select occupation, avg(salary) from employee_table where occupation='developer' group by occupation;

select occupation, avg(salary) as average_salary from employee_table
group by occupation
order by average_salary desc limit 2;

