// showcase/static/js/script.js

function toggleProjectText(id) {
    const extraText = document.getElementById('extra-' + id);
    const visibleText = extraText.previousElementSibling; 
    const btn = document.getElementById('btn-' + id);

    if (extraText.style.display === "none") {
        extraText.style.display = "inline";
        visibleText.style.display = "none"; 
        btn.innerHTML = " Show Less";
    } else {
        extraText.style.display = "none";
        visibleText.style.display = "inline"; 
        btn.innerHTML = "... Read More";
    }
}

function openResume() {
    document.getElementById("resumeModal").style.display = "block";
    document.body.style.overflow = "hidden";
    window.location.hash = "resume"; 
}

function closeResume() {
    document.getElementById("resumeModal").style.display = "none";
    document.body.style.overflow = "auto";
    history.replaceState(null, null, ' '); 
}

window.onclick = function(event) {
    let modal = document.getElementById("resumeModal");
    if (event.target == modal) {
        closeResume();
    }
}

window.addEventListener("load", function() {
    if (window.location.hash === "#resume") {
        openResume();
    }
});

window.onload = function() {
    if (window.location.hash && window.location.hash !== "#resume") {
        window.scrollTo(0, 0);
        history.replaceState(null, null, ' '); 
    }
}

function openContact() {
    document.getElementById("contactModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeContact() {
    document.getElementById("contactModal").style.display = "none";
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function() {
    // 1. Find the elements
    const skillsLink = document.querySelector('a[href="#skills"]'); // Ensure your link is href="#skills"
    const targetSection = document.getElementById('skills');        // Ensure your section is id="skills"
    const pikaContainer = document.getElementById('pikachu-container');
    const flashOverlay = document.getElementById('thunderbolt-flash');

    // 2. Only run if the elements actually exist on the page
    if (skillsLink && targetSection && pikaContainer && flashOverlay) {
        
        skillsLink.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the boring instant jump

            // Phase 1: I Choose You! (Pikachu pops up)
            pikaContainer.style.display = 'block';
            setTimeout(() => {
                pikaContainer.classList.add('pika-show'); 
            }, 50);

            // Phase 2: THUNDERBOLT! (Screen flashes bright yellow)
            setTimeout(() => {
                flashOverlay.style.display = 'block';
                setTimeout(() => {
                    flashOverlay.classList.add('flash-active');
                }, 50);
            }, 600); // Wait for Pikachu to appear first

            // Phase 3: The Sneaky Scroll (Scroll while user is blinded)
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'instant' });
            }, 800); 

            // Phase 4: The Smoke Clears (Fade flash out and hide Pikachu)
            setTimeout(() => {
                flashOverlay.classList.remove('flash-active');
                pikaContainer.classList.remove('pika-show');

                // Completely hide them from the page after fading finishes
                setTimeout(() => {
                    flashOverlay.style.display = 'none';
                    pikaContainer.style.display = 'none';
                }, 300);
            }, 1200); 
        });
    }
});