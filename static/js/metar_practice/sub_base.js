/**
 * Bodging to fixup the navigation bar width
 */
 window.setInterval(function updateNavigationWidth() {
    var navigation_bar = document.getElementById('navigation');
    var elements = document.getElementsByClassName("navigation_element");
    var total_elements_width = 0
    for (var i = 0; i < elements.length; i++) {
        total_elements_width += elements[i].offsetWidth;
    }
    total_elements_width += 2;
    navigation_bar.style.width = total_elements_width.toString()+"px";
}, 1);


window.setInterval(function updateLoggedWidth() {
    try {
        var content_containter_width = document.getElementById('content').offsetWidth;
        var page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var logged_container = document.getElementById('logged_container');
        logged_container.style.width = Math.max(content_containter_width, page_width)+'px';
        if (content_containter_width < page_width) {
            logged_container.style.left = ((content_containter_width-page_width)/2)+'px';
        } else {
            logged_container.style.left = 0+'px';
        }
    } catch (exception) {
        //pass
    }
}, 1);
