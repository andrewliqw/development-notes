# Dotnet sdk

```shell
dotnet --list-sdks
```

$ dotnet --list-sdks<br>
8.0.416 [/usr/local/share/dotnet/sdk]<br>
9.0.308 [/usr/local/share/dotnet/sdk]<br>
10.0.100 [/usr/local/share/dotnet/sdk]<br>

```shell
./dotnet-core-uninstall list
sudo ./dotnet-core-uninstall remove 10.0.100 --sdk
```

# set dotnet version for solution/project

```shell
dotnet new globaljson --sdk-version 10.0.100
```

# install dotnet tools locally

```shell
dotnet new tool-manifest
```

The command above create file ./.config/dotnet-tools.json for the solution/project.

```shell
dotnet tool install dotnet-ef
```

The package is in ~/.nuget.

# list installed tools

```shell
dotnet tool list --local
```

# install package

```shell
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

# list package

```shell
dotnet list [.sln | .csproj] package
```
