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

    function ajouterBr() {
        const pointInsertion = document.getElementById('insertion-point');
        const screenWidth = window.innerWidth;

        // Vérifie si l'écran fait moins de 640 pixels
        if (screenWidth < 640) {
            // Vérifie si un <br> n'a pas déjà été ajouté
            if (!document.getElementById('saut-de-ligne')) {
                // Crée une balise <br>
                const br = document.createElement('br');
                br.id = 'saut-de-ligne'; // Ajoute un ID pour identifier le <br> ajouté
                pointInsertion.parentNode.insertBefore(br, pointInsertion);
            }
        } else {
            // Si l'écran est plus large que 640px, supprime le <br> si existant
            const br = document.getElementById('saut-de-ligne');
            if (br) {
                br.remove();
            }
        }
    }

    function ajouterBr2() {
        const pointInsertion2 = document.getElementById('insertion-point2');
        const screenWidth2 = window.innerWidth;

        // Vérifie si l'écran fait moins de 640 pixels
        if (screenWidth2 < 640) {
            // Vérifie si un <br> n'a pas déjà été ajouté
            if (!document.getElementById('saut-de-ligne2')) {
                // Crée une balise <br>
                const br2 = document.createElement('br');
                br2.id = 'saut-de-ligne2'; // Ajoute un ID pour identifier le <br> ajouté
                pointInsertion2.parentNode.insertBefore(br2, pointInsertion2);
            }
        } else {
            // Si l'écran est plus large que 640px, supprime le <br> si existant
            const br2 = document.getElementById('saut-de-ligne2');
            if (br2) {
                br2.remove();
            }
        }
    }

    function gérerResizeEtLoad() {
        ajouterBr();
        ajouterBr2();
    }
    
    // Exécute la fonction à chaque redimensionnement de l'écran
    window.addEventListener('resize', gérerResizeEtLoad);
    
    // Exécute la fonction au chargement initial de la page
    window.addEventListener('load', gérerResizeEtLoad);