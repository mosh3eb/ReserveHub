AOS.init();

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.className = 'fas fa-moon';
    } else {
        body.setAttribute('data-theme', 'dark')
        themeToggle.className = 'fas fa-sun';
    }
}

// Generate Slot Cards
function generateSlotCards() {
    const slotGrid = document.querySelector('.slot-grid');
    const slots = [
        {
            image: 'https://picsum.photos/800/600?random=2',
            title: 'Luxury Suite',
            price: '$199',
            rating: 4.8
        },
        {
            image: 'https://picsum.photos/800/600?random=3',
            title: 'Executive Room',
            price: '$149',
            rating: 4.5
        },
        {
            image: 'https://picsum.photos/800/600?random=4',
            title: 'Standard Room',
            price: '$99',
            rating: 4.3
        }
    ];

    slots.forEach(slot => {
        const card = document.createElement('div');
        card.className = 'slot-card';
        card.setAttribute('data-aos', 'fade-up');
        card.innerHTML = `
            <img src="${slot.image}" alt="${slot.title}" class="slot-image">
            <h3>${slot.title}</h3>
            <p>Starting from ${slot.price}</p>
            <p>Rating: ${slot.rating} <i class="fas fa-star" style="color: gold;"></i></p>
            <button class="search-btn">Book Now</button>
        `;
        slotGrid.appendChild(card);
    });
}

// Initialize slot cards
generateSlotCards();

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});