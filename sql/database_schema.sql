create table employee(
    id UUID primary key,
    name varchar(50),
    position varchar(50),
    age numeric,
    nationality varchar(25),
    gender varchar(10)
);

create table address(
    id UUID primary key,
    street varchar(100),
    house_number varchar(10),
    postal_code varchar(5),
    city varchar(100),
    country varchar(50),
    employee_id UUID references employee(id)
);


insert into employee(id, name, position, age, nationality, gender) values('A9156A50-5136-4CB9-BF16-589BA6C8E81A', 'Juan', 'Backend Engineer', 37, 'Mexican', 'masculine');
insert into address(id, street, house_number, postal_code, city, country, employee_id) values('7ADAAA60-66ED-4177-906E-F15102D537C1', 'Stresemannstraße', 375, 22761, 'Hamburg', 'Germany', 'A9156A50-5136-4CB9-BF16-589BA6C8E81A');
insert into address(id, street, house_number, postal_code, city, country, employee_id) values('3D430ABA-F0FE-414F-BD79-854C5E5DCBD0', 'Holmer Straße', 338, 22880, 'Wedel', 'Germany', 'A9156A50-5136-4CB9-BF16-589BA6C8E81A');
