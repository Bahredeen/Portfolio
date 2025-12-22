// --- Navigation & Mobile Menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// --- Modal Functionality (Popup for Images) ---
const modal = document.getElementById("docModal");
const modalImg = document.getElementById("modalImage");

// Function called by clicking an image or button
function openModal(imageName) {
    modal.style.display = "block";
    modalImg.src = imageName;
    
    // Disable scrolling on body when modal is open
    document.body.style.overflow = "hidden";
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
    // Re-enable scrolling
    document.body.style.overflow = "auto";
}

// Close if user clicks outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}