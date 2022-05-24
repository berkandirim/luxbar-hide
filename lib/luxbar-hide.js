/**
 * Luxbar Hide plugin
 * @author Berkan Dirim <berkandirim@gmail.com>
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module depending on jQuery.
    define(['jquery'], factory);
  } else {
    // No AMD. Register plugin with global jQuery object.
    factory(jQuery, window);
  }
})(function (jQuery, window) {
  var barName = 'luxbar';
  var classes = {
    static: barName + '-static',
    fixed: barName + '-fixed',
  };

  var previousScroll = 0;
  var navbar = document.getElementById('luxbar'),
    navClasses = navbar.classList;

  document.addEventListener('scroll', function (e) {
    var currentScroll = window.scrollY;
    var isDown = currentScroll > previousScroll;

    if (isDown) {
      navClasses.remove(classes.fixed);
      navClasses.add(classes.static);
    } else if (!isDown) {
      navClasses.remove(classes.static);
      navClasses.add(classes.fixed);
    }

    previousScroll = currentScroll;
  });
})(jQuery, window);
