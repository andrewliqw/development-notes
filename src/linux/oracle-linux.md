# List block devices

```shell
$ lsblk
```

# swap

```shell
$ swapon -s

$ sudo dd if=/dev/zero of=/.swapfileandrewli bs=1024 count=4000000
$ sudo fallocate -l 4G /.swapfileandrweli

$ mkswap -c /.swapfileandrewli

$ sudo chmod 0600 /.swapfileandrewli

$ sudo swapon /.swapfileandrewli

$ sudo swapoff /.swapfileandrewli

$ sudo rm /.swapfileandrewli
```

configuration in /etc/fstab

```
/.swapfile      none    swap    sw,comment=cloudconfig  0       0
/.swapfileandrew        none    swap    sw,comment=andrew       0       0
/.swapfileandrewli      none    swap    sw,comment=andrewli     0       0
```

# change boot volume size

```shell
$ sudo /usr/libexec/oci-growfs
```

# dnf

```shell
$ dnf upgrade

$ dnf repolist --all

$ dnf search snap

$ dnf info oracle-epel-release-el9

$ dnf repoquery -l oracle-epel-release-el9

$ sudo dnf config-manager --enable ol9_developer

$ sudo dnf install certbot python3-certbot-nginx
```

# firewall/Selinux

```shell
$ sudo firewall-cmd --add-service=https --permanent
$ sudo firewall-cmd --permanent --remove-service=http
$ sudo firewall-cmd --reload
sudo firewall-cmd --list-all
sudo firewall-cmd --list-services
sudo firewall-cmd --list-ports

getsebool httpd_can_network_connect
sudo setsebool -P httpd_can_network_connect 1

sudo cat /var/log/audit/audit.log | grep nginx | grep denied
sudo semanage port -l | grep 8008
sudo sealert -a /var/log/audit/audit.log
sudo semanage port -a -t http_port_t -p tcp 8010
```

# nginx

```shell
$ sudo dnf install nginx
$ systemctl is-enabled nginx
$ systemctl status nginx
$ sudo systemctl enable --now nginx
$ sudo nginx -t
$ sudo systemctl restart nginx
```

# cerbot

```shell
$ cd /usr/lib/systemd/system

$ less certbot-renew.service

$ sudo systemctl enable --now certbot-renew.timer
# Created symlink /etc/systemd/system/timers.target.wants/certbot-renew.timer → /usr/lib/systemd/system/certbot-renew.timer
$ sudo systemctl status certbot-renew.timer
$ systemctl list-timers | grep certbot
```
# redis

```shell

```

# oracle database 23ai free

```shell
$ dnf -y install oracle-database-preinstall-23ai

$ wget https://download.oracle.com/otn-pub/otn_software/db-free/oracle-database-free-23ai-1.0-1.el9.x86_64.rpm

$ sudo dnf config-manager --enable ol9_developer_EPEL

$ sudo dnf install rpmrebuild

$ time rpmrebuild -e -p oracle-database-free-23ai-1.0-1.el9.x86_64.rpm  # PhyMem=`expr $space / 100`

$ sudo /etc/init.d/oracle-free-23ai delete

$ sudo vi /etc/init.d/oracle-free-23ai  # MEMORY_CONSTRUCT="-initParams sga_target=500M,pga_aggregate_target=400M"

$ sudo /etc/init.d/oracle-free-23ai configure

$ sudo -s
$ export ORACLE_SID=FREE
$ export ORAENV_ASK=NO
$ . /opt/oracle/product/23ai/dbhomeFree/bin/oraenv  # /opt/oracle/product/23ai/dbhomeFree

$ export ORACLE_SID=FREE
$ export ORACLE_HOME=/opt/oracle/product/23ai/dbhomeFree
$ $ORACLE_HOME/bin/sqlplus sys as sysdba
```

# install postgresql and pgadmin

```shell
$ sudo dnf install postgresql-server postgresql-contrib

$ sudo postgresql-setup --initdb
 * Initializing database in '/var/lib/pgsql/data'
 * Initialized, logs are in /var/lib/pgsql/initdb_postgresql.log

$ sudo systemctl enable postgresql

$ sudo systemctl start postgresql

$ sudo systemctl status postgresql

$ sudo -u postgres
postgres#> alter user postgres password 'monday1234';

$ pip install pgadmin4

$ cat bin/start_pgadmin4.sh 
!/bin/bash
# 1. Define the custom config location (Must be a directory, not the file)
CONF_DIR="/home/opc/pgadmin_data_dir"

# 2. Add ONLY this directory to the FRONT of the Python search path
export PYTHONPATH="$PYTHONPATH:$CONF_DIR"

# 3. Activate your virtual environment
source /home/opc/py312venv/bin/activate

# 4. call pgadmin4
python /home/opc/py312venv/lib/python3.12/site-packages/pgadmin4/pgAdmin4.py
```

# java

```shell
$ /usr/libexec/java_home -V
```

# OCI SMTP

- Set `Approved sender` such as support@aoas.com.au
- smtp.email.ap-sydney-1.oci.oraclecloud.com:587
- CNAME for dkim
- cloudflare
  - v=spf1 include:_spf.mx.cloudflare.net ~all
  - v=DKIM
  - routing email to gmail

```shell
./swaks --server smtp.email.ap-sydney-1.oci.oraclecloud.com:587 --auth PLAIN --auth-password '5[7NJ)$+6eyO<u&yg3Iy' --auth-user 'ocid1.user.oc1..aaaaaaaasjjdb4mzyew6inq4rivaphcr4vijzy6fssmy5gepqgfmqxv2pvia@ocid1.tenancy.oc1..aaaaaaaaq257xqergo5etp322b77inerlpbvnlqilck4ywqr4tdtirqufgfa.ij.com' --from 'support@aoas.com.au' --to 'andrewliqw@outlook.com' --tls --helo aoas.com.au
```

# textbee.dev

- API key: 03b1a27a-4443-492c-b4c2-29307e38eb7d