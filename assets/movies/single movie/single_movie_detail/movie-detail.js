// Dữ liệu phim mẫu
const movieData = {
    title: "Đấu Trường Sinh Tử",
    englishTitle: "The Hunger Games",
    duration: "142 phút",
    year: "2012",
    ageRating: "13+",
    director: "Gary Ross",
    actors: "Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth",
    summary: "Một xã hội tương lai nơi các khu vực phải tham gia cuộc chiến sinh tử hàng năm để giải trí cho tầng lớp thống trị.",
    imdbRating: "7.2"
};

// Danh sách yêu thích (lưu trong localStorage)
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Chuyển đổi tab
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Ẩn tất cả tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        // Bỏ active trên tất cả tab button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        // Hiển thị tab được chọn
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        button.classList.add('active');
    });
});

// Thêm vào danh sách yêu thích
document.querySelector('.btn-favorite').addEventListener('click', () => {
    if (!favorites.includes(movieData.title)) {
        favorites.push(movieData.title);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Đã thêm vào danh sách yêu thích!');
    } else {
        alert('Phim đã có trong danh sách yêu thích!');
    }
});

// Tải dữ liệu mẫu (tạm thời)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.movie-info h1').innerHTML = `${movieData.title} <br> <small>${movieData.englishTitle}</small>`;
    document.querySelector('.meta').textContent = `Thời lượng: ${movieData.duration} | Năm: ${movieData.year} | Độ tuổi: ${movieData.ageRating}`;
    document.querySelector('.summary p').textContent = movieData.summary;
    document.querySelector('.crew p:nth-child(1)').textContent = `Đạo diễn: ${movieData.director}`;
    document.querySelector('.crew p:nth-child(2)').textContent = `Diễn viên: ${movieData.actors}`;
    document.querySelector('.btn-imdb').textContent = `IMDb: ${movieData.imdbRating}`;
});