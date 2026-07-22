# Oracle cloud autonomous databases

# Environment variable

```shell
export ORACLE_HOME=/opt/oracle/product/23ai/dbhomeFree
export ORACLE_SID=FREE
systemctl start/stop/restart oracle-free-23ai
```

# Containers and pdbs

```shell

$ sqlcl
SQL> show con_id, con_name
SQL> SELECT SYS_CONTEXT ('USERENV', 'CON_ID'), SYS_CONTEXT ('USERENV', 'CON_NAME')
```

```sql
SELECT * FROM v$containers

SELECT * FROM gv$pdbs

ALTER PLUGGABLE DATABASE samplepdb open

alter session set container=samplepdb
```

# Databases

```sqlcl
```

```sql

```

# Data files

```sql
SELECT name FROM v$datafile WHERE con_id = 2
```

# Create databases

```sql
CREATE PLUGGABLE DATABASE samplepdb
ADMIN USER "samplepdbadmin" IDENTIFIED BY "Admin12345" 
file_name_convert=('pdbseed', 'samplepdb')
```
# current user

```sql
SELECT user;
```

# Show all objects

```sql
SELECT * FROM user_objects;


```

# delete all tables

```sql
BEGIN
   FOR cur_rec IN (SELECT object_name, object_type
                   FROM user_objects
                   WHERE object_type IN
                             ('TABLE',
                              'VIEW',
                              'MATERIALIZED VIEW',
                              'PACKAGE',
                              'PROCEDURE',
                              'FUNCTION',
                              'SEQUENCE',
                              'SYNONYM',
                              'PACKAGE BODY'
                             ))
   LOOP
      BEGIN
         IF cur_rec.object_type = 'TABLE'
         THEN
            EXECUTE IMMEDIATE 'DROP '
                              || cur_rec.object_type
                              || ' "'
                              || cur_rec.object_name
                              || '" CASCADE CONSTRAINTS';
         ELSE
            EXECUTE IMMEDIATE 'DROP '
                              || cur_rec.object_type
                              || ' "'
                              || cur_rec.object_name
                              || '"';
         END IF;
      EXCEPTION
         WHEN OTHERS
         THEN
            DBMS_OUTPUT.put_line ('FAILED: DROP '
                                  || cur_rec.object_type
                                  || ' "'
                                  || cur_rec.object_name
                                  || '"'
                                 );
      END;
   END LOOP;
   FOR cur_rec IN (SELECT * 
                   FROM all_synonyms 
                   WHERE table_owner IN (SELECT USER FROM dual))
   LOOP
      BEGIN
         EXECUTE IMMEDIATE 'DROP PUBLIC SYNONYM ' || cur_rec.synonym_name;
      END;
   END LOOP;
END;
```

# recyclebin

```sql
select TABLE_NAME,COLUMN_NAME,GENERATION_TYPE,SEQUENCE_NAME from user_tab_identity_cols;

purge recyclebin;
```
