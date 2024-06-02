window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 200) { // Adjust the scroll value as needed
        nav.style.width = '310px';
        nav.style.backgroundColor = "#ae9affaa";
        nav.style.fontSize = '15px';
    } 
    else {
        nav.style.width = '450px'; // Initial width
        nav.style.backgroundColor = "var(--color-4)"; 
        nav.style.fontSize = '10px';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.scroll-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.getElementById('email');
    if (emailElement) {
        emailElement.addEventListener('click', function() {
            const email = emailElement.textContent;
            navigator.clipboard.writeText(email).then(function() {
                alert('Email copied to clipboard!');
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
            });
        });
    }
});