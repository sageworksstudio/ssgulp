// Custom functions
(function() {
    "use strict";

    let mainNav     = document.getElementById('main-nav');
    let mainNavLst  = mainNav.classList;
    let mobNav      = document.getElementById('nav-toggle');
    let closeNav    = document.getElementById('close-nav');
    let date = new Date();

    function navToggle() {
        mainNav.classList.toggle('show-nav');
    }


    // Page specific actions
    const MYSITE = {
        common: { // sitewide code
            init: function() {
                mobNav.addEventListener('click', navToggle);
                closeNav.addEventListener('click', navToggle);
                // this.theYear = date.getFullYear();
            }
        },

        Home: {
            init: function() {// home page

                // Do Page specific stuff here

            }
        },

        Contact: {
            init: function() {// home page

                // Do Page specific stuff here

            }
        },

        About: {
            init: function() {// home page

                // Do Page specific stuff here

            }
        }


    };


    const UTIL = {
        exec: function(controller, action) {
            let namespace = MYSITE;
            action = (action === undefined) ? 'init' : action;
            if (controller !== '' && namespace[controller] && typeof namespace[controller][action] == 'function' ) {
                namespace[controller][action]();
            }
        },
        init: function() {
            let elm = document.getElementById('main');
            let controller = elm.getAttribute( 'data-controller' );
            let action = elm.getAttribute( 'data-action' );
            UTIL.exec( 'common' );
            UTIL.exec( controller );
            UTIL.exec( controller, action );
        }
    };

    window.onload = UTIL.init;

})();
