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