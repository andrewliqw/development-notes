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

# firewall

```shell
$ sudo firewall-cmd --add-service=https --permanent
$ sudo firewall-cmd --reload
sudo firewall-cmd --list-all
sudo firewall-cmd --list-services
sudo firewall-cmd --list-ports
```


# cerbot

```shell
$ cd /usr/lib/systemd/system

$ less certbot-renew.service
```


# postgresql

# pgadmin
