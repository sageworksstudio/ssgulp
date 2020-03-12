<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
    <% base_tag %>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <% if $MetaDescription %>
        <meta name="description" content="{$MetaDescription}">
    <% end_if %>
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="_resources/themes/frisky/dist/img/icons/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="_resources/themes/frisky/dist/img/icons/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="_resources/themes/frisky/dist/img/icons/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="_resources/themes/frisky/dist/img/icons/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="_resources/themes/frisky/dist/img/icons/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="_resources/themes/frisky/dist/img/icons/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="_resources/themes/frisky/dist/img/icons/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="_resources/themes/frisky/dist/img/icons/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="_resources/themes/frisky/dist/img/icons/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="_resources/themes/frisky/dist/img/icons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="_resources/themes/frisky/dist/img/icons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="_resources/themes/frisky/dist/img/icons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="_resources/themes/frisky/dist/img/icons/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="The Frisky Biscuit"/>
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="_resources/themes/frisky/dist/img/icons/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="_resources/themes/frisky/dist/img/icons/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="_resources/themes/frisky/dist/img/icons/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="_resources/themes/frisky/dist/img/icons/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="_resources/themes/frisky/dist/img/icons/mstile-310x310.png" />


    <link rel="stylesheet" type="text/css" href="_resources/themes/frisky/dist/css/app.css">

</head>
<body>
    <% include Header %>
    $Layout
    <% include Footer %>
</body>
</html>