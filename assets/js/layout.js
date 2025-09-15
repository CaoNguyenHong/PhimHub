// Carousel slider with click functionality
const carouselWrapper = document.querySelector('.carousel-wrapper');
const hero = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero-title');
const heroDesc = document.querySelector('.hero-desc');
const heroTags = document.querySelector('.hero-tags');

let isDragging = false;
let startX, scrollLeft;

carouselWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carouselWrapper.offsetLeft;
    scrollLeft = carouselWrapper.scrollLeft;
});

carouselWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
});

carouselWrapper.addEventListener('mouseup', () => {
    isDragging = false;
});

carouselWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselWrapper.offsetLeft;
    const walk = (x - startX) * 2;
    carouselWrapper.scrollLeft = scrollLeft - walk;
});

// Update hero content on carousel item click
carouselWrapper.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-desc');
        const img = item.getAttribute('data-img');
        hero.style.backgroundImage = `url('${img}')`;
        heroTitle.textContent = title;
        heroDesc.textContent = desc;
        heroTags.innerHTML = '';
        ['Hành động', 'Khoa học', 'Viễn tưởng'].forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag;
            heroTags.appendChild(span);
        });
    });
});

// Slider controls for poster-grids
document.querySelectorAll('.slider-container').forEach(container => {
    const grid = container.querySelector('.poster-grid');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const posters = grid.querySelectorAll('.poster');
    const slideWidth = posters[0].offsetWidth + 15;
    const visibleItems = 7;

    prevBtn.addEventListener('click', () => {
        grid.scrollBy({
            left: -slideWidth * visibleItems,
            behavior: 'smooth'
        });
        if (grid.scrollLeft < 0) grid.scrollLeft = 0;
    });

    nextBtn.addEventListener('click', () => {
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        grid.scrollBy({
            left: slideWidth * visibleItems,
            behavior: 'smooth'
        });
        if (grid.scrollLeft > maxScroll) grid.scrollLeft = maxScroll;
    });

    let isDraggingGrid = false;
    let startXGrid, scrollLeftGrid;

    grid.addEventListener('mousedown', (e) => {
        isDraggingGrid = true;
        startXGrid = e.pageX - grid.offsetLeft;
        scrollLeftGrid = grid.scrollLeft;
    });

    grid.addEventListener('mouseleave', () => {
        isDraggingGrid = false;
    });

    grid.addEventListener('mouseup', () => {
        isDraggingGrid = false;
    });

    grid.addEventListener('mousemove', (e) => {
        if (!isDraggingGrid) return;
        e.preventDefault();
        const x = e.pageX - grid.offsetLeft;
        const walk = (x - startXGrid) * 2;
        grid.scrollLeft = scrollLeftGrid - walk;
    });
});