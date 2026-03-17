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
    const skillsLink = document.querySelector('a[href="#skills"]'); 
    const targetSection = document.getElementById('skills'); 
    const pikaContainer = document.getElementById('pikachu-container');
    const flashOverlay = document.getElementById('thunderbolt-flash');

    if (skillsLink && targetSection && pikaContainer && flashOverlay) {
        skillsLink.addEventListener('click', function(e) {
            e.preventDefault(); 

            // Phase 1: Show container, force browser reflow, then pop up!
            pikaContainer.style.display = 'block';
            void pikaContainer.offsetWidth; // This forces the browser to wake up and render the animation
            pikaContainer.style.bottom = '0px'; 

            // Phase 2: Thunderbolt Flash
            setTimeout(() => {
                flashOverlay.style.display = 'block';
                void flashOverlay.offsetWidth;
                flashOverlay.style.opacity = '1';
            }, 500); // Trigger flash just as Pikachu finishes popping up

            // Phase 3: The Sneaky Scroll
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'instant' });
            }, 700); 

            // Phase 4: Clean up
            setTimeout(() => {
                flashOverlay.style.opacity = '0';
                pikaContainer.style.bottom = '-200px'; 
                
                // Hide them completely after fade out
                setTimeout(() => {
                    flashOverlay.style.display = 'none';
                    pikaContainer.style.display = 'none';
                }, 400);
            }, 1100); 
        });
    }
});