document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('navigator-container');
    var links = container.querySelectorAll('.nav-link a');
    
    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'black';
            this.style.backgroundColor = 'white';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = 'white';
            this.style.backgroundColor = 'transparent';
        });
    });
});