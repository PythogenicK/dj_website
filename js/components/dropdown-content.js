document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown-container');

    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.dropdown-header');
        const content = dropdown.querySelector('.dropdown-content');

        if (content) {
            header.addEventListener('click', () => {
                header.classList.toggle('active');
                
                if (content.classList.contains('show')) {
                    content.style.maxHeight = null;
                    content.classList.remove('show');
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add('show');
                }
            });
        } else {
            header.style.cursor = 'default';
            header.querySelector('.dropdown-title').style.opacity = '0.5';
        }
    });
});