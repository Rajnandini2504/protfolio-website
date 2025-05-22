// Highlight active navigation link
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.navlist a').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Smooth scrolling to section (only if you have corresponding section IDs)
document.querySelectorAll('.navlist a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Button click actions (add buttons first in HTML if needed)
const buttons = document.querySelectorAll('.btn-container button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked: ${button.textContent}`);
    });
});

