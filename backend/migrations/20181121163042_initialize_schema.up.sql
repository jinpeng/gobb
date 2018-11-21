
-- +migrate Up
create table comments (
  id SERIAL primary key,
  username varchar(100) not null,
  body text not null,
  mod_time timestamp without time zone not null default now()
);

