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
    <link rel="stylesheet" type="text/css" href="_resources/themes/reneecrawshaw/dist/css/app.css">

</head>
<body>
    <% include Header %>
<main>
    <section>
        <div class="container">
            $Content
            $Form
        </div>
    </section>
</main>
    <% include Footer %>
</body>
</html>
