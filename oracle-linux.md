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


# cerbot

```shell
$ cd /usr/lib/systemd/system

$ less certbot-renew.service

$ sudo systemctl enable --now certbot-renew.timer
# Created symlink /etc/systemd/system/timers.target.wants/certbot-renew.timer → /usr/lib/systemd/system/certbot-renew.timer
$ sudo systemctl status certbot-renew.timer
$ systemctl list-timers | grep certbot
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

# java

```shell
$ /usr/libexec/java_home -V
```

# postgresql

# pgadmin
