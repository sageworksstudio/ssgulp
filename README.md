# SilverStripe Theme

## Full instructions

### 1. Clone this repo

`git clone git@github.com:sageworksstudio/ssgulp.git`

### Edit .env

```
SS_DATABASE_CLASS="MySQLDatabase"
SS_DATABASE_NAME="<database>"
SS_DATABASE_SERVER="localhost"
SS_DATABASE_USERNAME="<user>"
SS_DATABASE_PASSWORD="<password>"
SS_DEFAULT_ADMIN_USERNAME="admin"
SS_DEFAULT_ADMIN_PASSWORD="password"
SS_ENVIRONMENT_TYPE="<dev|test|live>"
```

### Run composer

`composer update`

### Build the db

In the project root: `vendor/bin/sake dev/build`

### Create a virtual host

This assumes you are:
- Using .htacces
- Capable of setting up a virtual host. Change these setting to your needs:

[apache.conf]
```
<VirtualHost *:80>
        DocumentRoot /var/www/html/my-project
        ServerName my-project
        <Directory /var/www/html/my-project>
                Options Indexes FollowSymLinks
                AllowOverride All
                Require all granted
        </Directory>
</VirtualHost>

```
### Add SSGulpTheme

`composer install sageworksstudio/ssgulptheme`

- For the latest development:
    `git clone git@github.com:sageworksstudio/friskybiscuit2.git --branch dev`
- Production:
    `git@github.com:sageworksstudio/friskybiscuit2.git`

