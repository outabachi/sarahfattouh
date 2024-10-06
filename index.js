document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.pr');
    const goUpButton = document.getElementById('go-up');
    const responsiveBtn = document.getElementById('responsive-btn');

    // Bouton pour remonter en haut de la page
    goUpButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    responsiveBtn.addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });


    projects.forEach(project => {
        let currentIndex = 0; // Index de l'image actuelle
        const images = project.querySelectorAll('.img img'); // Toutes les images du projet
        const prevButton = project.querySelector('.btn#prev');
        const nextButton = project.querySelector('.btn#next');
        const openButton = project.querySelector('#open');
        const closeButton = project.querySelector('#close');
        let screenWidth = window.innerWidth; // Garde la taille de l'écran

        // Fonction pour afficher l'image correspondant à l'index actuel
        function showImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });

            // Met à jour les événements "click" en fonction de la taille de l'écran
            updateImageClickEvents();
        }

        // Gestion du clic sur l'image active pour passer à l'image suivante
        function handleImageClick() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        }

        // Mise à jour des événements "click" selon la taille de l'écran
        function updateImageClickEvents() {
            screenWidth = window.innerWidth; // Mets à jour la taille de l'écran

            // Si l'écran est inférieur à 640px, ajouter l'événement click à l'image active
            if (screenWidth < 640) {
                images.forEach(img => img.removeEventListener('click', handleImageClick)); // Retirer l'événement des autres images
                const activeImage = project.querySelector('.img img.active');
                if (activeImage) {
                    activeImage.addEventListener('click', handleImageClick);
                }
            } else {
                // Si l'écran est plus large que 640px, retirer tous les événements click
                images.forEach(img => img.removeEventListener('click', handleImageClick));
            }
        }

        // Bouton précédent
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        // Bouton suivant
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });

        // Gestion du plein écran
        openButton.addEventListener('click', (e) => {
            const parentProject = e.target.closest('.pr').querySelector('.img');
            const body = document.body;
            const btn = document.querySelector('.btn');

            if (parentProject) {
                parentProject.classList.add('fullscreen');
                body.classList.add('no-scroll');
                closeButton.style.display = 'inline';
                openButton.style.display = 'none';
                btn.style.transform = 'translateY(-75%)';
            }
        });

        // Fermeture du mode plein écran
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

        // Affiche l'image initiale
        showImage(currentIndex);

        // Ajoute une fonction de gestion du redimensionnement pour retirer l'événement "click" en grand écran
        window.addEventListener('resize', updateImageClickEvents);
    });
    const myDiv = document.getElementById("responsive-btn");
    const targetDiv = document.querySelector(".trait1");
    window.onscroll = function() {
        // Obtenir la position actuelle de la targetDiv (div avec la classe 'trait1') par rapport au viewport
        const targetPosition = targetDiv.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si le haut de la div cible est au-dessus du bas de la fenêtre
        if (targetPosition <= windowHeight) {
            myDiv.classList.add("hidden"); // Masque la div
        } else {
            myDiv.classList.remove("hidden"); // Affiche la div
        }
    };
});

function ajouterBr() {
    const pointInsertion = document.getElementById('insertion-point');
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
        if (!document.getElementById('saut-de-ligne')) {
            const br = document.createElement('br');
            br.id = 'saut-de-ligne';
            pointInsertion.parentNode.insertBefore(br, pointInsertion);
        }
    } else {
        const br = document.getElementById('saut-de-ligne');
        if (br) {
            br.remove();
        }
    }
}

function ajouterBr2() {
    const pointInsertion2 = document.getElementById('insertion-point2');
    const screenWidth2 = window.innerWidth;

    if (screenWidth2 < 640) {
        if (!document.getElementById('saut-de-ligne2')) {
            const br2 = document.createElement('br');
            br2.id = 'saut-de-ligne2';
            pointInsertion2.parentNode.insertBefore(br2, pointInsertion2);
        }
    } else {
        const br2 = document.getElementById('saut-de-ligne2');
        if (br2) {
            br2.remove();
        }
    }
}
function ajouterBr3() {
    const pointInsertion3 = document.getElementById('insertion-point3');
    const screenWidth3 = window.innerWidth;

    if (screenWidth3 < 640) {
        if (!document.getElementById('saut-de-ligne3')) {
            const br3 = document.createElement('br');
            br3.id = 'saut-de-ligne3';
            pointInsertion3.parentNode.insertBefore(br3, pointInsertion3);
        }
    } else {
        const br3 = document.getElementById('saut-de-ligne2');
        if (br3) {
            br3.remove();
        }
    }
}
function ajouterBr4() {
    const pointInsertion4 = document.getElementById('insertion-point4');
    const screenWidth4 = window.innerWidth;

    if (screenWidth4 < 640) {
        if (!document.getElementById('saut-de-ligne4')) {
            const br4 = document.createElement('br');
            br4.id = 'saut-de-ligne4';
            pointInsertion4.parentNode.insertBefore(br4, pointInsertion4);
        }
    } else {
        const br4 = document.getElementById('saut-de-ligne4');
        if (br4) {
            br4.remove();
        }
    }
}

function gérerResizeEtLoad() {
    ajouterBr();
    ajouterBr2();
    ajouterBr3();
    ajouterBr4();
}

window.addEventListener('resize', gérerResizeEtLoad);
window.addEventListener('load', gérerResizeEtLoad);
