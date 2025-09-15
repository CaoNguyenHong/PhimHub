//single_movie_main.js
// Dữ liệu phim mẫu (30 phim lẻ)
const movies = [
    { title: "Phim Lẻ 1", year: "2024", age: "13+", genre: "action", type: "single", views: 1000, poster: "https://placehold.co/200x300/png?text=Phim+1" },
    { title: "Phim Lẻ 2", year: "2023", age: "16+", genre: "romance", type: "single", views: 800, poster: "https://placehold.co/200x300/png?text=Phim+2" },
    { title: "Phim Lẻ 3", year: "2022", age: "P", genre: "animation", type: "single", views: 600, poster: "https://placehold.co/200x300/png?text=Phim+3" },
    { title: "Phim Lẻ 4", year: "2021", age: "18+", genre: "horror", type: "single", views: 500, poster: "https://placehold.co/200x300/png?text=Phim+4" },
    { title: "Phim Lẻ 5", year: "2020", age: "13+", genre: "sci-fi", type: "single", views: 700, poster: "https://placehold.co/200x300/png?text=Phim+5" },
    { title: "Phim Lẻ 6", year: "2019", age: "16+", genre: "comedy", type: "single", views: 400, poster: "https://placehold.co/200x300/png?text=Phim+6" },
    { title: "Phim Lẻ 7", year: "2018", age: "P", genre: "action", type: "single", views: 300, poster: "https://placehold.co/200x300/png?text=Phim+7" },
    { title: "Phim Lẻ 8", year: "2017", age: "13+", genre: "romance", type: "single", views: 200, poster: "https://placehold.co/200x300/png?text=Phim+8" },
    { title: "Phim Lẻ 9", year: "2024", age: "18+", genre: "animation", type: "single", views: 900, poster: "https://placehold.co/200x300/png?text=Phim+9" },
    { title: "Phim Lẻ 10", year: "2023", age: "16+", genre: "horror", type: "single", views: 850, poster: "https://placehold.co/200x300/png?text=Phim+10" },
    { title: "Phim Lẻ 11", year: "2022", age: "P", genre: "sci-fi", type: "single", views: 750, poster: "https://placehold.co/200x300/png?text=Phim+11" },
    { title: "Phim Lẻ 12", year: "2021", age: "13+", genre: "comedy", type: "single", views: 650, poster: "https://placehold.co/200x300/png?text=Phim+12" },
    { title: "Phim Lẻ 13", year: "2020", age: "18+", genre: "action", type: "single", views: 550, poster: "https://placehold.co/200x300/png?text=Phim+13" },
    { title: "Phim Lẻ 14", year: "2019", age: "16+", genre: "romance", type: "single", views: 450, poster: "https://placehold.co/200x300/png?text=Phim+14" },
    { title: "Phim Lẻ 15", year: "2018", age: "P", genre: "animation", type: "single", views: 350, poster: "https://placehold.co/200x300/png?text=Phim+15" },
    { title: "Phim Lẻ 16", year: "2017", age: "13+", genre: "horror", type: "single", views: 250, poster: "https://placehold.co/200x300/png?text=Phim+16" },
    { title: "Phim Lẻ 17", year: "2024", age: "18+", genre: "sci-fi", type: "single", views: 950, poster: "https://placehold.co/200x300/png?text=Phim+17" },
    { title: "Phim Lẻ 18", year: "2023", age: "16+", genre: "comedy", type: "single", views: 800, poster: "https://placehold.co/200x300/png?text=Phim+18" },
    { title: "Phim Lẻ 19", year: "2022", age: "P", genre: "action", type: "single", views: 700, poster: "https://placehold.co/200x300/png?text=Phim+19" },
    { title: "Phim Lẻ 20", year: "2021", age: "13+", genre: "romance", type: "single", views: 600, poster: "https://placehold.co/200x300/png?text=Phim+20" },
    { title: "Phim Lẻ 21", year: "2020", age: "18+", genre: "animation", type: "single", views: 500, poster: "https://placehold.co/200x300/png?text=Phim+21" },
    { title: "Phim Lẻ 22", year: "2019", age: "16+", genre: "horror", type: "single", views: 400, poster: "https://placehold.co/200x300/png?text=Phim+22" },
    { title: "Phim Lẻ 23", year: "2018", age: "P", genre: "sci-fi", type: "single", views: 300, poster: "https://placehold.co/200x300/png?text=Phim+23" },
    { title: "Phim Lẻ 24", year: "2017", age: "13+", genre: "comedy", type: "single", views: 200, poster: "https://placehold.co/200x300/png?text=Phim+24" },
    { title: "Phim Lẻ 25", year: "2024", age: "18+", genre: "action", type: "single", views: 900, poster: "https://placehold.co/200x300/png?text=Phim+25" },
    { title: "Phim Lẻ 26", year: "2023", age: "16+", genre: "romance", type: "single", views: 850, poster: "https://placehold.co/200x300/png?text=Phim+26" },
    { title: "Phim Lẻ 27", year: "2022", age: "P", genre: "animation", type: "single", views: 750, poster: "https://placehold.co/200x300/png?text=Phim+27" },
    { title: "Phim Lẻ 28", year: "2021", age: "13+", genre: "horror", type: "single", views: 650, poster: "https://placehold.co/200x300/png?text=Phim+28" },
    { title: "Phim Lẻ 29", year: "2020", age: "18+", genre: "sci-fi", type: "single", views: 550, poster: "https://placehold.co/200x300/png?text=Phim+29" },
    { title: "Phim Lẻ 30", year: "2019", age: "16+", genre: "comedy", type: "single", views: 450, poster: "https://placehold.co/200x300/png?text=Phim+30" }
];

// Biến toàn cục
let currentPage = 1;
const moviesPerPage = 6; // Để hiển thị 5 cột, nhưng điều chỉnh cho responsive
let filteredMovies = [...movies];

// Hàm hiển thị danh sách phim
function displayMovies(moviesToShow) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';
    moviesToShow.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie-item';
        div.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">
                         <p>${movie.title} (${movie.year})</p>`;
        movieGrid.appendChild(div);
    });
}

// Hàm phân trang
function paginateMovies() {
    const start = (currentPage - 1) * moviesPerPage;
    const end = start + moviesPerPage;
    const paginatedMovies = filteredMovies.slice(start, end);
    displayMovies(paginatedMovies);
    updatePagination();
}

// Cập nhật giao diện phân trang
function updatePagination() {
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn' + (currentPage === i ? ' active' : '');
        btn.textContent = i;
        btn.onclick = () => changePage(i);
        pageNumbers.appendChild(btn);
    }
    document.getElementById('pageInput').max = totalPages;
    document.getElementById('pageInput').placeholder = `Nhập ${totalPages}`;
}

// Chuyển trang
function changePage(page) {
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    paginateMovies();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Áp dụng bộ lọc
function applyFilters() {
    filteredMovies = [...movies];
    const activeFilters = {
        type: document.querySelector('.filter-btn[data-type].active')?.dataset.type || 'all',
        age: document.querySelector('.filter-btn[data-age].active')?.dataset.age || 'all',
        year: document.querySelector('.filter-btn[data-year].active')?.dataset.year || 'all',
        genre: document.querySelector('.filter-btn[data-genre].active')?.dataset.genre || 'all',
        sort: document.querySelector('.filter-btn[data-sort].active')?.dataset.sort || 'newest'
    };

    filteredMovies = filteredMovies.filter(movie => {
        return (activeFilters.type === 'all' || movie.type === activeFilters.type) &&
               (activeFilters.age === 'all' || movie.age === activeFilters.age) &&
               (activeFilters.year === 'all' || movie.year === activeFilters.year) &&
               (activeFilters.genre === 'all' || movie.genre === activeFilters.genre);
    });

    // Sắp xếp
    filteredMovies.sort((a, b) => {
        switch (activeFilters.sort) {
            case 'a-z': return a.title.localeCompare(b.title);
            case 'z-a': return b.title.localeCompare(a.title);
            case 'views': return b.views - a.views;
            case 'newest': return parseInt(b.year) - parseInt(a.year);
            default: return 0;
        }
    });

    currentPage = 1;
    paginateMovies();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Toggle filter options
    document.querySelector('.filter-toggle').addEventListener('click', () => {
        const filterOptions = document.querySelector('.filter-options');
        filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
    });

    // Active class for filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Apply filters
    document.querySelector('.filter-submit').addEventListener('click', applyFilters);

    // Pagination
    document.getElementById('prevPage').addEventListener('click', () => changePage(currentPage - 1));
    document.getElementById('pageInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') changePage(parseInt(e.target.value));
    });

    // Khởi tạo
    paginateMovies();
});