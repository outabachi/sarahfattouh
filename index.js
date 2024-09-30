document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.pr');
    const goUpButton = document.getElementById('go-up');

    goUpButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    projects.forEach(project => {
        let currentIndex = 0;
        const images = project.querySelectorAll('.img img');
        const prevButton = project.querySelector('.btn#prev');
        const nextButton = project.querySelector('.btn#next');
        const openButton = project.querySelector('#open');
        const closeButton = project.querySelector('#close');

        function showImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });

        openButton.addEventListener('click', (e) => {
            const parentProject = e.target.closest('.pr').querySelector('.img'); 
            const body = document.body;
            const btn = document.querySelector('.btn');
            
            if (parentProject) {
                parentProject.classList.add('fullscreen');
                body.classList.add('no-scroll');
                closeButton.style.display = 'inline';
                openButton.style.display = 'none';
                btn.style.transforme = 'translateY(-75%)';
            }
        });
        closeButton.addEventListener('click', (e) => {
            const parentProject = e.target.closest('.img');
            const body = document.body; 
            if (parentProject) {
                parentProject.classList.remove('fullscreen');
                body.classList.remove('no-scroll');
                closeButton.style.display = 'none';
                openButton.style.display = 'inline';
            }
        });

        showImage(currentIndex);
    });
});