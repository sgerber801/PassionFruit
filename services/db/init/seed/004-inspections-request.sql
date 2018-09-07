insert into inspection_requests (request_id, first_name, middle_name, last_name, suffix, email, phone) values
    ('cd44f599-b2d2-4fce-84c6-69ea40f0859a', 'Ana', 'D', 'Held', '', 'ana@123.com', '5551234')
on conflict do nothing;
