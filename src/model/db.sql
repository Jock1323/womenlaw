CREATE DATABASE womenlaw;
CREATE TYPE current_address AS ENUM('toshkent','surxondaryo','qashqadaryo','samarqand','jizzax','navoiy','buxoro','sirdaryo','andijon','farg''ona','xorazm','namangan','qoraqalpog''iston');
CREATE TYPE check_user AS ENUM('checked','not checked');
CREATE TABLE users(
  user_id serial primary key,
  firstname varchar(32) not null,
  lastname varchar(32) not null,
  fathername varchar(32) not null,
  phone varchar(20) not null,
  address  current_address not null,
  problem text not null,
  checked check_user default 'not checked' not null,
  created_at timestamp default current_timestamp not null
  );
  CREATE TABLE checked_users(
    user_id serial primary key,
    firstname varchar(32) not null,
    lastname varchar(32) not null,
    fathername varchar(32) not null,
    phone varchar(20) not null,
    address  current_address not null,
    problem text not null,
    created_at timestamp default current_timestamp not null
  );

  CREATE OR REPLACE FUNCTION save_check_users()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
	insert into checked_users(user_id,firstname,lastname,fathername,phone,address,problem) values(old.user_id,old.firstname,old.lastname,old.fathername,old.phone,old.address,old.problem);
  RETURN new;
END;
$$
CREATE TRIGGER check_user_trigger
  BEFORE UPDATE
  ON users
  FOR EACH ROW
  EXECUTE PROCEDURE save_check_users();
  

update users
set checked='checked'
where user_id=2;

insert into users(firstname,lastname,fathername,phone,address,problem)values('komila','alijonova','isomiddin qizi','+998901234567','toshkent','need help');


vds
vps-->virtual private server

bulutli texnologiyalar turlari
ochiq
yopiq
gibrit

bulutli texnologiyalar modellari
Iaas ==>companies
Paas ==>developer
Saas ==>users
