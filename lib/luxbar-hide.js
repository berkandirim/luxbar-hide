(function(window) {
    var barName = 'luxbar';
    var classes = {
        static    : barName + '-static',
        fixed     : barName + '-fixed'
    };
    
    var previousScroll = 0;
    var navbar = document.getElementById('luxbar'),
        navClasses = navbar.classList;

    window.addEventListener('scroll', function(e){
        var currentScroll = window.scrollY;
        var isDown = currentScroll > previousScroll;

        if ( isDown && !navClasses.contains('scrolled') ){
            navClasses.remove(classes.fixed);
            navClasses.add(classes.static);
        } else if ( !isDown ){
            // scrolling up
            navClasses.remove(classes.static); // won't error if no class found
            navClasses.add(classes.fixed); // won't error if no class found
        }

        // always update position
        previousScroll = currentScroll;
    });
})(window);