CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT Now()
);

INSERT INTO users(email) VALUES
("Katie@34@yahoo.com"),
("Tunde@gmail.com");

select
DATE_FORMAT(min(created_at), "%M %D %Y")as earliest_date
from users;

SELECT
MONTHNAME(created_at)as month,
COUNT(*) as total_emails
from users
group by month
ORDER BY  total_emails DESC;

SELECT
case
when email like "%yahoo.com" then "gmail"
when email like "%gmail.com" then "yahoo"
when email like "%hotmail.com" then "hotmail"
else "other"
end as provider,
count(*) as total_users
from users
group by provider;