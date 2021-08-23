// Custom functions
(function() {
  "use strict"

  const mainNav = document.getElementById('main-nav')
  const mainNavLst = mainNav.classList
  const mobNav = document.getElementById('nav-toggle')
  const closeNav = document.getElementById('close-nav')
  const date = new Date()

  function navToggle () {
    mainNav.classList.toggle('show-nav')
  }

  // Page specific actions
  const MYSITE = {
    common: { // sitewide code
      init: function () {
        mobNav.addEventListener('click', navToggle)
        closeNav.addEventListener('click', navToggle)
        // this.theYear = date.getFullYear()
      }
    },

    Home: {
      init: function () { // home page
        // Do Page specific stuff here
      }
    },

    Contact: {
      init: function () { // contact page
        // Do Page specific stuff here
      }
    },

    About: {
      init: function () { // about page
        // Do Page specific stuff here
      }
    }
  }

  const UTIL = {
    exec: function(controller, action) {
      const namespace = MYSITE
      action = (action === undefined) ? 'init' : action
      if (controller !== '' && namespace[controller] && typeof namespace[controller][action] == 'function' ) {
        namespace[controller][action]()
      }
    },
    init: function() {
      const elm = document.getElementById('main')
      const controller = elm.getAttribute( 'data-controller' )
      const action = elm.getAttribute( 'data-action' )
      UTIL.exec( 'common' )
      UTIL.exec( controller )
      UTIL.exec( controller, action )
    }
  }

  window.onload = UTIL.init

})()
