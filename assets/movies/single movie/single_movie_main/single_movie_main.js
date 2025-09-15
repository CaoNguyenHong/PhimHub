// Dữ liệu phim mẫu (30 phim)
const movies = [
    { title: "Phim 1", year: "2024", age: "13+", genre: "action", type: "single", views: 1000, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 2", year: "2023", age: "16+", genre: "romance", type: "single", views: 800, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 3", year: "2022", age: "P", genre: "animation", type: "single", views: 600, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 4", year: "2021", age: "18+", genre: "horror", type: "single", views: 500, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 5", year: "2020", age: "13+", genre: "sci-fi", type: "single", views: 700, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 6", year: "2019", age: "16+", genre: "comedy", type: "single", views: 400, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 7", year: "2018", age: "P", genre: "action", type: "single", views: 300, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 8", year: "2017", age: "13+", genre: "romance", type: "single", views: 200, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 9", year: "2024", age: "18+", genre: "animation", type: "single", views: 900, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 10", year: "2023", age: "16+", genre: "horror", type: "single", views: 850, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 11", year: "2022", age: "P", genre: "sci-fi", type: "single", views: 750, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 12", year: "2021", age: "13+", genre: "comedy", type: "single", views: 650, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 13", year: "2020", age: "18+", genre: "action", type: "single", views: 550, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 14", year: "2019", age: "16+", genre: "romance", type: "single", views: 450, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 15", year: "2018", age: "P", genre: "animation", type: "single", views: 350, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 16", year: "2017", age: "13+", genre: "horror", type: "single", views: 250, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 17", year: "2024", age: "18+", genre: "sci-fi", type: "single", views: 950, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 18", year: "2023", age: "16+", genre: "comedy", type: "single", views: 800, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 19", year: "2022", age: "P", genre: "action", type: "single", views: 700, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 20", year: "2021", age: "13+", genre: "romance", type: "single", views: 600, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 21", year: "2020", age: "18+", genre: "animation", type: "single", views: 500, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 22", year: "2019", age: "16+", genre: "horror", type: "single", views: 400, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 23", year: "2018", age: "P", genre: "sci-fi", type: "single", views: 300, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 24", year: "2017", age: "13+", genre: "comedy", type: "single", views: 200, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 25", year: "2024", age: "18+", genre: "action", type: "single", views: 900, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 26", year: "2023", age: "16+", genre: "romance", type: "single", views: 850, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 27", year: "2022", age: "P", genre: "animation", type: "single", views: 750, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 28", year: "2021", age: "13+", genre: "horror", type: "single", views: 650, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 29", year: "2020", age: "18+", genre: "sci-fi", type: "single", views: 550, poster: "../../images/user-avatar.jpg" },
    { title: "Phim 30", year: "2019", age: "16+", genre: "comedy", type: "single", views: 450, poster: "../../images/user-avatar.jpg" }
];

// Biến toàn cục
let currentPage = 1;
const moviesPerPage = 10;
let filteredMovies = [...movies];

// Hàm hiển thị danh sách phim
function displayMovies(moviesToShow) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';
    moviesToShow.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie-item';
        div.innerHTML = `<img src="${movie.poster}" alt="${movie.title}"><p>${movie.title} (${movie.year})</p>`;
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
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = `<button class="page-btn" onclick="changePage(${currentPage - 1})">&laquo;</button>`;
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
        pagination.innerHTML += `<button class="page-btn ${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    pagination.innerHTML += `<input type="number" class="page-input" min="1" max="${totalPages}" placeholder="Nhập ${totalPages}" onkeypress="if(event.key === 'Enter') changePage(this.value)">`;
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
        type: document.querySelector('.filter-btn[data-type].active')?.getAttribute('data-type') || 'all',
        age: document.querySelector('.filter-btn[data-age].active')?.getAttribute('data-age') || 'all',
        year: document.querySelector('.filter-btn[data-year].active')?.getAttribute('data-year') || 'all',
        genre: document.querySelector('.filter-btn[data-genre].active')?.getAttribute('data-genre') || 'all',
        sort: document.querySelector('.filter-btn[data-sort].active')?.getAttribute('data-sort') || 'newest'
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

// Xử lý toggle bộ lọc
document.querySelector('.filter-toggle').addEventListener('click', () => {
    const filterOptions = document.querySelector('.filter-options');
    filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
});

// Xử lý chọn bộ lọc
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', () => {
    paginateMovies();
});