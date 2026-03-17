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
    
    // ==========================================
    // 1. PIKACHU EASTER EGG LOGIC
    // ==========================================
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

    // ==========================================
    // 2. CHARIZARD EASTER EGG LOGIC
    // ==========================================
    const expLink = document.querySelector('a[href="#experience"]'); 
    const expSection = document.getElementById('experience'); 
    const charizardContainer = document.getElementById('charizard-container');
    const flameOverlay = document.getElementById('flamethrower-overlay');

    if (expLink && expSection && charizardContainer && flameOverlay) {
        expLink.addEventListener('click', function(e) {
            e.preventDefault(); 

            // Phase 1: Enter the Dragon (Swoops in from top right)
            charizardContainer.style.display = 'block';
            void charizardContainer.offsetWidth; // Force browser reflow
            charizardContainer.style.top = '10px'; 
            charizardContainer.style.right = '20px'; 

            // Phase 2: Flamethrower!
            setTimeout(() => {
                flameOverlay.style.display = 'block';
                void flameOverlay.offsetWidth;
                flameOverlay.style.opacity = '1';
            }, 400); // Wait for Charizard to fly in

            // Phase 3: The Sneaky Scroll
            setTimeout(() => {
                expSection.scrollIntoView({ behavior: 'instant' });
            }, 700); 

            // Phase 4: Fly away and clear smoke
            setTimeout(() => {
                flameOverlay.style.opacity = '0';
                charizardContainer.style.top = '-300px'; 
                charizardContainer.style.right = '-300px'; 
                
                // Hide completely
                setTimeout(() => {
                    flameOverlay.style.display = 'none';
                    charizardContainer.style.display = 'none';
                }, 400);
            }, 1200); 
        });
    }

}); // <-- End of DOMContentLoaded