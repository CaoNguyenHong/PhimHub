// Import các module JavaScript
import './layout.js';
import './modal.js';

// Kiểm tra trạng thái đăng nhập khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const authButtons = document.querySelector('.auth-buttons');
    const userIcon = document.querySelector('.user-icon');

    if (isLoggedIn === 'true') {
        authButtons.style.display = 'none';
        userIcon.style.display = 'block';
        userIcon.addEventListener('click', () => {
            window.location.href = 'assets/user/user.html';
        });
    }

    // Xử lý đăng nhập
    const loginModal = document.querySelector('.login-modal');
    const loginBtn = document.querySelector('.login-btn');
    const loginBtnModal = document.querySelector('.login-btn-modal');
    const closeLoginBtn = document.querySelector('.login-modal .close-btn');

    if (loginBtn && loginBtnModal && closeLoginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
            document.querySelector('.overlay').style.display = 'block';
        });

        loginBtnModal.addEventListener('click', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            if (username === 'admin1' && password === '123456789@Aa') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                document.querySelector('.auth-buttons').style.display = 'none';
                document.querySelector('.user-icon').style.display = 'block';
                loginModal.style.display = 'none';
                document.querySelector('.overlay').style.display = 'none';
                document.querySelector('.user-icon').addEventListener('click', () => {
                    window.location.href = 'assets/user/user.html';
                });
            } else {
                alert('Tài khoản hoặc mật khẩu không đúng!');
            }
        });

        closeLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
        });
    }

    // Xử lý đăng ký
    const registerModal = document.querySelector('.register-modal');
    const registerBtn = document.querySelector('.register-btn');
    const registerBtnModal = document.querySelector('.register-btn-modal');
    const closeRegisterBtn = document.querySelector('.register-modal .close-btn');

    if (registerBtn && registerBtnModal && closeRegisterBtn) {
        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'block';
            document.querySelector('.overlay').style.display = 'block';
        });

        registerBtnModal.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Mật khẩu không khớp!');
                return;
            }
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            alert(`Đăng ký thành công với tên: ${name} và tài khoản: ${username}`);
            document.querySelector('.auth-buttons').style.display = 'none';
            document.querySelector('.user-icon').style.display = 'block';
            registerModal.style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
            document.querySelector('.user-icon').addEventListener('click', () => {
                window.location.href = 'assets/user/user.html';
            });
        });

        closeRegisterBtn.addEventListener('click', () => {
            registerModal.style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
        });
    }

    // Xử lý đăng xuất
    const logoutModal = document.querySelector('.logout-modal');
    const logoutBtn = document.querySelector('.user-icon');
    const confirmLogout = document.querySelector('.confirm-logout');
    const cancelLogout = document.querySelector('.cancel-logout');

    if (logoutBtn && logoutModal) {
        logoutBtn.addEventListener('click', (e) => {
            if (localStorage.getItem('isLoggedIn') === 'true') {
                e.stopPropagation();
                logoutModal.style.display = 'block';
                document.querySelector('.overlay').style.display = 'block';
            }
        });

        confirmLogout.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            document.querySelector('.auth-buttons').style.display = 'flex';
            document.querySelector('.user-icon').style.display = 'none';
            logoutModal.style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
        });

        cancelLogout.addEventListener('click', () => {
            logoutModal.style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
        });
    }

    // Đóng modal khi click overlay
    document.querySelector('.overlay').addEventListener('click', () => {
        document.querySelectorAll('.login-modal, .register-modal, .logout-modal').forEach(modal => {
            modal.style.display = 'none';
        });
        document.querySelector('.overlay').style.display = 'none';
    });

    // Thêm sự kiện cho nút Phim lẻ (chuyển hướng)
    const singleMovieLink = document.getElementById('single-movie-link');
    if (singleMovieLink) {
        singleMovieLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'assets/movies/single_movie/single_movie_main/single_movie_main.html';
        });
    }
});