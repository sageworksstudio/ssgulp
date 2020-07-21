<header>
    <div class="container">
        <button id="nav-toggle" class="nav-toggle">☰</button>
        <div class="brand">
            MySites
        </div>
        <nav id="main-nav">
            <button id="close-nav" class="close-nav">×</button>
            <ul>
                <% loop $Menu(1) %>
                    <li class="$LinkingMode">
                        <a class="$LinkingMode" href="$Link" title="$Title.XML">$MenuTitle.XML</a>
                    </li>
                <% end_loop %>
            </ul>
        </nav>
    </div>
</header>
