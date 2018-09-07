create extension if not exists pgcrypto;
create extension if not exists pg_stat_statements;

create table if not exists inspection_requests
(
    request_id uuid primary key default gen_random_uuid(),
    first_name text,
  	middle_name text,
  	last_name text,
  	suffix text,
    email text,
    phone text
);
grant select, insert, update, delete on table inspection_requests to helio_app;
grant select on table inspection_requests to helio_readers
