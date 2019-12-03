create table users (
    id serial primary key,
    name varchar(100),
    email varchar(200),
    password varchar(100),
    description varchar(500)
);

create table posts (
    id serial primary key,
    title varchar(200),
    content text,
    user_id integer references users(id)
);