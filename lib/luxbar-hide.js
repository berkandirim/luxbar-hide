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
            navClasses.remove(classes.static); 
            navClasses.add(classes.fixed);
        }
        
        previousScroll = currentScroll;
    });
})(window);