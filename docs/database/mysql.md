---
tags:
  - user
  - database
  - show
  - permission
---

# MySQL

## Create

```sql
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `branch_id` int(10) NOT NULL,
  `ip` varchar(25) DEFAULT NULL,
  `table_name` varchar(50) NOT NULL,
  `data` varchar(255) DEFAULT NULL,
  `modify_at` datetime DEFAULT NULL,
  `modify_by_user_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;
```

How To give the comment on column

```sql
ALTER TABLE `log`
MODIFY COLUMN  `modify_by_user_id` int(10) DEFAULT NULL COMMENT 'Store the how will be modify store user id';
```

OR

```sql
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `branch_id` int(10) NOT NULL,
  `ip` varchar(25) DEFAULT NULL,
  `table_name` varchar(50) NOT NULL,
  `data` varchar(255) DEFAULT NULL,
  `modify_at` datetime DEFAULT NULL,
  `modify_by_user_id` int(10) DEFAULT NULL COMMENT 'Store the how will be modify store user id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;
```

## How to see the comment give to the column

```sql
SHOW CREATE TABLE TABLE_NAME;
```

## Select

### UPDATE COLUMN VALUE USING SELECT STATEMENT AND DUPLICATE KEY UPDATE

```sql
INSERT IGNORE INTO recovery
(city_id, member_id, loan_id, transaction_type_id,
deposit_debit, deposit_credit,
recovery_status_id,
installment_amount, installment_date)
SELECT a.city_id, a.id, b.id, btransaction_status_id_share,
b.deposite_amount, b.deposite_amount,
a.status_id,
b.deposite, b.installment_date
FROM member a
JOIN share b
ON(a.id = b.member_id)
WHERE a.member_status_id = I_member_status_id and a.city_id = I_city_id
ON DUPLICATE KEY UPDATE deposit_debit = d.deposite_amount,
installment_amount = d.deposite_amount;
```

### STRING TO DATE

```sql
SELECT STR_TO_DATE ('12/06/1990', '%m/%d/%Y');
```

Output : 1990-06-21

### HOW TO USE 'IF' IN SELECT STATEMENT

```sql
SELECT IF(a=b,1,0) FROM table_name;
```

a=b then Output will be 1,otherwise 0.

### HOW TO USE 'IFNULL' IN SELECT STATEMENT

```sql
SELECT IFNULL(1,0) FROM table_name;
```

Output: 1

```sql
SELECT IFNULL(NULL,0) FROM table_name;
```

Output: 0

MySQL IFNULL() takes two expressions and if the first expression is not NULL,
it returns the first expression. Otherwise, it returns the second expression.
Syntax :
IFNULL(expression1, expression2);

### HOW TO USE 'NULLIF' IN SELECT STATEMENT

```sql
SELECT NULLIF(1,1) FROM table_name;
```

Output: NULL

```sql
SELECT NULLIF(1,0) FROM table_name;
```

Output: 0

MySQL NULLIF() returns NULL when the first is equal to the second expression, otherwise, it returns the first expression.
Syntax :

```sql
NULLIF(expression1, expression2);
```

### FIND THE SPACE AND SPLITE WORD IN 2 DIFFERENT COLUMN USING SINGLE COLUMN

```sql
SELECT LEFT(album_name, locate(' ', album_name)),
Mid(album_name, locate(' ' , album_name) + 1), album_name
FROM album ;
```

Eg:
sr. column_name
1 ab cd

Output
Sr. column_name column_name1
1 ab cd

### How to search null records

```sql
SELECT * FROM table_name WHERE column_name IS NULL;
```

### Find the record BEFORE 3 MONTH RECORD FROM CURRENT DATE

```sql
SELECT *
FROM student
WHERE mydate BETWEEN CURRENT_DATE - INTERVAL 3 MONTH AND CURRENT_DATE;
```

### Find The COUNT of record each month and LAST DATE of month

```sql
SELECT MAX(mydate),COUNT(mydate) AS count,LAST_DAY(mydate) AS last_date
FROM student
GROUP BY YEAR(mydate),MONTH(mydate);
```

### Find The COUNT of record each month and LAST DATE of month

```sql
SELECT CONCAT(LEFT(mydate,7),'-','01') AS first_date,MIN(mydate),
COUNT(mydate) AS count
FROM student
GROUP BY YEAR(mydate),MONTH(mydate);
```

### FIND THE FIRST DATE OF MONTH AND IF MIN DATE IS GREATER THAN (01) FIRST DATE THAN SUBTRACT FROM THAT DATE

```sql
SELECT DATE_SUB(mydate, INTERVAL(DAY(mydate) -1) DAY) AS firstdate,
COUNT(mydate) AS COUNT,MIN(mydate) AS mindate
FROM student
GROUP BY YEAR(mydate),MONTH(mydate);
```

Eg :
pass date : mydate = 2015-02-18
THAN 18-17
Output: 01

### FIND THE DIFFERENCE OF MAX DATE AND MIN DATE

```sql
SELECT DATE_FORMAT(mydate, '%M %Y') AS monthyear,MAX(mydate),MIN(mydate),
DATEDIFF(MAX(mydate),MIN(mydate)) AS days
FROM student
GROUP BY YEAR(mydate),MONTH(mydate)
```

### Output

Eg: mydate : 2016-10-15
2016-10-30 - 2016-10-01 = 29
Output: 29

### SWIPE THE COLUMN TO ROW

```sql
SELECT YEAR(mydate) AS year, COUNT(mydate) AS COUNT,
 IF(DATE_FORMAT(mydate, '%M')='january',3,0) AS january,
 IF(DATE_FORMAT(mydate, '%M')='february',3,0) AS february,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS march,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS april,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS may,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS june,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS july,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS agust,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS september,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS octomber,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS november,
 IF(DATE_FORMAT(mydate, '%Y')=2015,3,0) AS december
FROM student
GROUP BY YEAR(mydate);
```

Output:will be in tabular form
|year | count| jan | feb|....|Dec |
|---| --- | --- | --- | --- | --- |
|2015| 33| 3| 3| 3|
|2016| 3| 0| 0| 0|

### INSERT RECORD FORM OTHER TABLE USING SELECT STATEMENT

```sql
INSERT INTO test_db.members
      (id, company_id, branch_id, sap_id, reference_no, member_name,
       salutation,  member_status, employment, basic_salary,
       dividend_status)
SELECT id, 1 AS company_id, 1 AS branch_id, aai_id, reference_number, member_name,
       salutation,  member_status, employment, basic_pay,
       div_status,
FROM airport1.members ;
```

## Join

### MULTIPLE JOIN TABLE

```sql

SELECT a.id, b.customer_name1, d.patch_no,
      CASE a.status WHEN 'O' THEN 'Open' WHEN 'C' THEN 'Closed' WHEN 'A' THEN 'Asign to'
      WHEN 'R' THEN 'Reopen' ELSE NULL END AS status, a.title,
      date_format(a.doc_date, '%d-%m-%Y') AS doc_date
FROM tss_bugs a
JOIN (tss_bpp_customers b, tss_employes c,tss_patches  d)
ON (a.customer_id = b.id  AND a.employee_id = c.id AND a.patch_id = d.id );
```

## Alter

### ADD FORSIGN KEY

```sql
ALTER TABLE `share_transaction`
ADD CONSTRAINT `fk_share_transaction#share_id`
FOREIGN KEY (`share_id`)
REFERENCES share(id);
```

### DROP FROEIGN KEY

```sql
ALTER TABLE loan
DROP FOREIGN KEY `fk_loan#member_id`;
```

```sql
RENAME OLD.table_name to new.table_name;
```

### CHANGE COLUMN NAME

```sql
-- change column name id to member_id
ALTER TABLE loan
CHANGE `id` `member_id` int(10) NOT NULL;
```

### MODIFY COLUMN

```sql
ALTER TABLE loan
MODIFY COLUMN `member_id` int(10) NOT NULL;
```

### ADD COLUMN IN FIRST

```sql
ALTER TABLE abc
ADD COLUMN id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST;
```

### ADD COLUMN AFTER ANY OTHER COLUMN

```sql
ALTER TABLE abc
ADD COLUMN company_id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY AFTER BRANCH_ID;
```

### ADD MULTIPLE COLUMN

```sql
ALTER TABLE ac_head
ADD column (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
created_at datetime NULL,
updated_at datetime NULL,
deleted_at datetime NULL)
```

## UPDATE COLUMN

```sql
UPDATE members
SET name = 'abc'
WHERE id = 10;
```

### UPDATE COLUMN USING MULTIPLE JOIN

```sql
UPDATE members a
JOIN members_det b
ON a.sap_id = b.personnel_number
JOIN member_details c
ON a.id = c.member_id
JOIN bank_details d
ON a.id = d.party_id
SET a.member_status = (case b.employment_status WHEN 'Active' THEN 'A' end),
    a.sap_id = b.personnel_number,
    a.member_name = b.name,
    c.birth_date = (STR_TO_DATE (b.date_of_birth, '%m/%d/%Y') ),
    c.retirement_date = (STR_TO_DATE (b.date_of_superannuation, '%m/%d/%Y') ),
    c.gender = case b.gender WHEN 'Male' THEN 'M' WHEN 'Female' THEN 'F'END;
```

## How to create view

```sql
CREATE OR REPLACE VIEW member_view AS
SELECT company_id, branch_id, id AS member_id,
       sap_id, reference_no,city_id
FROM member
```

### How ot create view using multiple join

```sql
CREATE OR REPLACE VIEW member_view AS
 SELECT a.company_id, a.branch_id, a.id AS member_id,
        a.sap_id, a.reference_no, a.city_id,
 CONCAT(f.column_name,'. ',a.name) AS member_name,
 c.name as city_name,
 b.telephone_no, d.column_name AS gender,
 e.column_name AS member_status, b.retirement_date
FROM member a
LEFT JOIN (member_detail b, client_column_property d)
ON (a.id = b.member_id AND b.gender_id = d.id)
JOIN (city c, client_column_property f, client_column_property e)
ON(a.city_id = c.id AND a.salutation_id = f.id  AND a.member_status_id = e.id )
ORDER BY c.name;
```

## Create Store Procedure

### How to create Store Procedure

```sql
DELIMITER $$
DROP PROCEDURE IF EXISTS voucher_sp $$
CREATE PROCEDURE voucher_sp(IN id int,IN branch_id int,IN voucher_type_id int,IN batch_detail_status_id int,
 IN receipt_no int,IN general_ledger_id int,IN member_id int,IN receipt_date date,
 IN cheque_no varchar(20),IN narration varchar(20),IN cheque_date date,IN cheque_amount decimal(12,2),
 IN archive_id int,IN casher_id int, IN officer_id int,
 IN created_at datetime,IN created_by_employee_id int,
 IN updated_at datetime,IN updated_by_employee_id int,
 IN deleted_at datetime,IN deleted_by_employee_id int)
BEGIN

IF(voucher_type_id IN (2,5))THEN
    INSERT INTO `voucher`
     (id, branch_id, voucher_type_id,batch_detail_status_id,
     receipt_no, general_ledger_id, member_id,
     receipt_date, cheque_no, narration,
     cheque_date, cheque_amount, archive_id,
     casher_id, officer_id,
     created_at, created_by_employee_id, updated_at, updated_by_employee_id, deleted_at, deleted_by_employee_id)
    VALUES
    (id, branch_id, voucher_type_id, batch_detail_status_id ,
    receipt_no,  general_ledger_id,  member_id, receipt_date,
    cheque_no, narration ,  cheque_date,  cheque_amount,
    archive_id, casher_id, officer_id,
    created_at, created_by_employee_id, updated_at, updated_by_employee_id, deleted_at,  deleted_by_employee_id);


ELSE
 UPDATE voucher
 SET cheque_amount = cheque_amount + cheque_amount
 WHERE id = id AND member_id = member_id;

END IF;

END$$
```

## Drop Store Procedure

### How to drop Store Procedure

```sql
Drop Procedure procedure_name;
```

## Functions

### How to create function

```sql
DELIMITER |
DROP FUNCTION IF EXISTS is_unique_f|
CREATE FUNCTION is_unique_f (I_branch_id int(10),I_id int(10),
                             s_table_name varchar(30),s_column_value varchar(50))
RETURNS boolean
BEGIN
DECLARE I_count int ;
SET s_column_value = LOWER(TRIM(s_column_value));
CASE
    WHEN s_table_name = 'general_ledger'  THEN

  SELECT IF(count(id) = 0,1,0)
  INTO I_count
  FROM general_ledger
  WHERE id NOT IN (I_id) AND branch_id = I_branch_id
  AND LOWER(TRIM(name)) = s_column_value;

    WHEN s_table_name = 'account_format'  THEN

  SELECT IF(count(id) = 0,1,0)
  INTO I_count
  FROM account_format
  WHERE id NOT IN (I_id) AND branch_id = I_branch_id
  AND LOWER(TRIM(name)) = s_column_value;

    WHEN s_table_name = 'account_group'  THEN

  SELECT IF(count(id) = 0,1,0)
  INTO I_count
  FROM account_group
  WHERE id NOT IN (I_id) AND branch_id = I_branch_id
  AND LOWER(TRIM(name)) = s_column_value;
    END CASE;
RETURN I_count;
END |
```

### How to call User Defined Function

```sql
select is_unique_f ( I_branch_id int(10),I_id int(10),s_table_name varchar(30),s_column_value varchar(50));
```

## Drop Function

```sql
DROP FUNCTION <function_name>;
```

## String Function

| Function    | Syntax                                     | description                                                                                                                 |
| ----------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| ASCII       | ASCII('2'), ASCII('dx')                    | Returns ASCII values of the given input                                                                                     |
| BIN         | BIN(33223232)                              | Returns a string representation of the binary value of N, where N is a longlong (BIGINT) number.                            |
| CHAR_LENGTH | CHAR_LENGTH(str)                           | Returns the length of the string str, measured in characters.                                                               |
| CONCAT      | CONCAT(str1,str2,...)                      | Returns the string that results from concatenating the arguments.                                                           |
| CONCAT_WS   | CONCAT_WS(separator,str1,str2,...)         | CONCAT_WS() stands for Concatenate With Separator and is a special form of CONCAT().                                        |
| ELT         | ELT(N,str1,str2,str3,...)                  | Returns str1 if N = 1, str2 if N = 2, and so on.                                                                            |
| INSERT      | INSERT(str,pos,len,newstr)                 | Returns the string str, with the substring beginning at position pos and len characters long replaced by the string newstr. |
| LCASE       | LCASE(str)                                 | LCASE() is a synonym for LOWER().                                                                                           |
| LEFT        | LEFT(str,len)                              | Returns the leftmost len characters from the string str.                                                                    |
| LENGTH      | LENGTH(str)                                | Returns the length of the string str.                                                                                       |
| LOCATE      | LOCATE(substr,str), LOCATE(substr,str,pos) | The first syntax returns the position of the first occurrence of substring substr in string str.                            |
| LOWER       | LOWER(str)                                 | Returns the string str with all characters changed to lowercase.                                                            |
| LPAD        | LPAD(str,len,padstr)                       | Returns the string str, left-padded with the string padstr to alength of len characters.                                    |
| LTRIM       | LTRIM(str)                                 | Returns the string str with leading space characters removed.                                                               |
| MID         | MID(str,pos,len)                           | MID() is a synonym for SUBSTRING(str,pos,len).                                                                              |
| REPEAT      | REPEAT(str,count)                          | Returns a string consisting of the string str repeated count times.                                                         |
| REPLACE     | REPLACE(str,from_str,to_str)               | Returns the string str with all occurrences of the string from_str replaced by the string to_str.                           |
| REVERSE     | REVERSE(str)                               | Returns the string str with the order of the characters reversed.                                                           |
| RIGHT       | RIGHT(str,len)                             | Returns the rightmost len characters from the string str.                                                                   |
| RPAD        | RPAD(str,len,padstr)                       | Returns the string str, right-padded with the string padstr to a length of len characters.                                  |
| RTRIM       | RTRIM(str)                                 | Returns the string str with trailing space characters removed.                                                              |

## Date Function

| Function | Syntax                                               | description                                                                                                                                                                                                                                      |
| -------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ADDDATE  | ADDDATE(date,INTERVAL expr unit), ADDDATE(expr,days) | When invoked with the INTERVAL form of the second argument, ADDDATE() is a synonym for DATE_ADD(). The related function SUBDATE() is a synonym for DATE_SUB(). For information on the INTERVAL unit argument, see the discussion for DATE_ADD(). |

## Backup

### TAKE THE BACKUP (use in command line)

mysqldump -u \<user name\> -p\<password\> -h \<hostname\> --add-drop-table --skip-triggers --ignore-table=\<database\>.\<view name\> \<database\> > \<sql file\>

options

- --database db1 db2
- --all-database
- --database db1 --tables table1 table2
- --database --routines --no-create-info --no-data --create-db --skpt-opt
- --add-drop-table
- --skip-triggers
- --ignore-table=

```bash
mysqldump -u root -p -R jobs_db > procedure.sql;
```

### DROP TRIGGER,VIEW TAKING THE BACKUP

```sql
mysqldump -u user_name -p --skip-triggers --ignore-table=DB.view_name database_name > D:\database_name.sql;
```

### RESTORE THE BACKUP(use in command line)

```sql
mysql -u user_name   -p  database_name < D:\database_name .sql;(path\database_name.sql);
```

### ONLY TAKE FEW TABLE BACKUP

```sql
mysqldump -u user_name -p database_name  table_name1 table_name2 table_name3 > D:\database_name.sql;
```

### ONLY TAKE FEW TABLE BACKUP OF STORE PROCEDURE,FUNCTION,TRIGGER

```sql
mysqldump -u root --routines --no-create-info --no-data --no-create-db --skip-opt database_name > file_name.sql
```

## User

### Find user exists or not

```sql
select user from mysql.user;
```

### Reset Root Password

```sql
UPDATE mysql.user SET Password=PASSWORD('password') WHERE User='root';
FLUSH PRIVILEGES;
```

### Create User

```sql
CREATE USER `<user_name>`@`<host>` IDENTIFIED BY '<password>';
create user `pash`@`%` identified by 'tss';
```

### GIVE ALL PRIVILEGES TO USER

```sql
-- use % for wildcard host
GRANT ALL PRIVILEGES ON <database_name>.* TO '<user_name>'@'<host>';
GRANT ALL PRIVILEGES ON <database_name>.* TO '<user_name>'@'<host>' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON *.* TO `pash`@`%`;
```

### TAKING ALL PRIVILEGES FROM USER

```sql
REVOKE ALL PRIVILEGES ON database_name.* FROM `<user_name>`@`<host>`;
```

## SHOW COMMAND

### SHOW DATABASES

```SQL
SHOW DATABASES;
```

### SHOW COLUMNS IN TABLE

```sql
show columns from general_ledger;

SELECT `COLUMN_NAME`
FROM `INFORMATION_SCHEMA`.`COLUMNS`
WHERE `TABLE_SCHEMA`='xplorf6i_chs'
    AND `TABLE_NAME`='general_ledger';

SELECT concat(`COLUMN_NAME` , ' AS ', UPPER(`TABLE_NAME`),'_', UPPER(`COLUMN_NAME`), ',')
FROM `INFORMATION_SCHEMA`.`COLUMNS`
WHERE `TABLE_SCHEMA`='xplorf6i_chs'
    AND `TABLE_NAME`='general_ledger';
```

## IMPORT EXPORT

### IMPORT

```sql
 LOAD DATA INFILE 'D:/members.txt' INTO TABLE test.members;
```

### EXPORT

```sql
SELECT * INTO OUTFILE 'D:/data.txt' FIELDS TERMINATED BY ',' FROM test.members;
```

### How to import csv file into Excel

1. after that automatically create txt file then
1. open excel sheet --> open option --> select txt file --> next --> choice delimiter 'comma' --> finish.
1. give the field name.

## How to kill mysql running process

```sql
mysql>show processlist;
mysql>kill "<number from first col>";
```

## Check Log

```bash
show binary log
show master status
mysqlbinlog logfile > backup.log'
mysqlbinlog --stop-datetime"2017-06-21 22:15:33" logfile | mysql -u<user name> -p
```

## Find & Replace

```bash
sed -i 's/`tssnetin_webroot`@`%`/`root`@`localhost`/g' airport_production.sql
sed -i 's/`tssnetin`@`localhost`/`root`@`localhost`/g' airport_production.sql
```

## Service

Install Service

```bash
mysqld —install MySQL —defaults-file="C:\Programs\MySQL\MySQL Server 5.0\my.ini"
```

Start and Stop Service

```bash
net start MySQL
net stop MySQL
```

To deinstall the service, use the option —remove:
01 Step

```bash
mysqld —remove MySQL
```

02 Step

```bash
sc delete "Mysql"
```

03 Step
Remove from registry HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services
ref https://docs.microsoft.com/en-gb/sysinternals/downloads/autoruns

## links to MySQL

<https://stackoverflow.com/questions/9738712/connect-to-remote-mysql-server-with-ssl-from-php> <http://php.net/manual/en/ref.pdo-mysql.php> <https://www.codeigniter.com/user_guide/database/configuration.html>
