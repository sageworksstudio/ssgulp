# SSGulp is a SilverStripe framework and CMS with a custom theme designed for rapid development.

This is a standard SilverStripe installation with the exception of the custom theme. The theme takes advantage of modern build tools like Gulp, NPM and Node.

## Requirements
- PHP >= 7.1
- Node
- NPM or Yarn (Instructions below are for NPM)
- ES6 JavaScript (Because we're big boys or girls now)

## SilverStripe Setup

### 1. Clone this repo

`git clone git@github.com:sageworksstudio/ssgulp.git`

### 2. Create a database

### 3. Edit .env

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

### 4. Run composer

`composer update`

### 5. Build the db

In the project root: `vendor/bin/sake dev/build`

### 6. If you haven't already, create a virtual host or use some development environment like \*AMP.

This assumes you are:
- Using .htaccess
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

## Development Setup

From within `themes/ssgulp/src` run `npm i && gulp`.

This will install all the node_modules required for development and open a browser for you.

Only edit files in the `themes/ssgulp/src` directory. Files will be saved to `themes/ssgulp/dist/`.

By default CSS and JavaScript are saved uncompressed for development. When you want to save files compressed for production, from the `themes/ssgulp/src` directory run the command `gulp production` and Gulp will export compressed CSS and JavaScript to the dist folder.
