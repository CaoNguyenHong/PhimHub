// Modal Login & Register Functionality
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const overlay = document.querySelector('.overlay');
const modalContainer = document.getElementById('modal-container');

function showModal(htmlContent) {
    // Tạo phần tử DOM từ HTML string
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent.trim();
    const modal = tempDiv.firstChild;

    if (!modal) {
        console.error('Failed to create modal element');
        return;
    }

    // Xóa nội dung cũ và thêm modal mới
    modalContainer.innerHTML = '';
    modalContainer.appendChild(modal);
    modal.classList.add('active');
    overlay.classList.add('active');

    // Close modal
    const closeBtn = modal.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            overlay.classList.remove('active');
            modalContainer.innerHTML = '';
        });
    }

    // Toggle password visibility
    const togglePasswords = modal.querySelectorAll('.toggle-password');
    if (togglePasswords.length > 0) {
        togglePasswords.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const passwordInput = toggle.closest('.input-group').querySelector('input');
                if (passwordInput) {
                    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    passwordInput.setAttribute('type', type);
                    toggle.querySelector('i').classList.toggle('fa-eye-slash');
                    toggle.querySelector('i').classList.toggle('fa-eye');
                }
            });
        });
    }

    // Switch to register from login
    const registerLink = modal.querySelector('.register-link');
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            showModal(registerHtml);
        });
    }
}

const loginHtml = `
    <div class="login-modal">
        <div class="close-btn">&times;</div>
        <div class="modal-content">
            <div class="image-section">
                <img src="assets/images/poster_.jpg" alt="Movie Poster">
            </div>
            <div class="form-section">
                <h2>ĐĂNG NHẬP</h2>
                <form>
                    <div class="input-group">
                        <input type="text" placeholder="Tài khoản" required>
                        <span class="input-icon"><i class="fas fa-user"></i></span>
                    </div>
                    <div class="input-group">
                        <input type="password" placeholder="Mật khẩu" id="login-password" required>
                        <span class="toggle-password"><i class="fas fa-eye-slash"></i></span>
                    </div>
                    <div class="form-options">
                        <a href="#" class="forgot-password">Quên mật khẩu?</a>
                        <a href="#" class="register-link">Đăng ký</a>
                    </div>
                    <button type="submit" class="login-btn-modal">Đăng nhập</button>
                    <button type="button" class="google-login">
                        <i class="fab fa-google"></i> Đăng nhập với Google
                    </button>
                </form>
            </div>
        </div>
    </div>
`;

const registerHtml = `
    <div class="register-modal">
        <div class="close-btn">&times;</div>
        <div class="modal-content">
            <div class="image-section">
                <img src="assets/images/poster_.jpg" alt="Movie Poster">
            </div>
            <div class="form-section">
                <h2>ĐĂNG KÝ</h2>
                <form>
                    <div class="input-group">
                        <input type="text" placeholder="Tên người dùng" required>
                        <span class="input-icon"><i class="fas fa-user"></i></span>
                    </div>
                    <div class="input-group">
                        <input type="text" placeholder="Tài khoản" required>
                        <span class="input-icon"><i class="fas fa-envelope"></i></span>
                    </div>
                    <div class="input-group">
                        <input type="password" placeholder="Mật khẩu" id="register-password" required>
                        <span class="toggle-password"><i class="fas fa-eye-slash"></i></span>
                    </div>
                    <div class="input-group">
                        <input type="password" placeholder="Nhập lại mật khẩu" id="confirm-password" required>
                        <span class="toggle-password"><i class="fas fa-eye-slash"></i></span>
                    </div>
                    <button type="submit" class="register-btn-modal">Đăng ký</button>
                </form>
            </div>
        </div>
    </div>
`;

// Open Login Modal
loginBtn.addEventListener('click', () => {
    if (loginBtn) {
        showModal(loginHtml);
    } else {
        console.error('Login button not found');
    }
});

// Open Register Modal
registerBtn.addEventListener('click', () => {
    if (registerBtn) {
        showModal(registerHtml);
    } else {
        console.error('Register button not found');
    }
});

// Close modal when clicking overlay
overlay.addEventListener('click', () => {
    const activeModal = modalContainer.querySelector('.active');
    if (activeModal) {
        activeModal.classList.remove('active');
        overlay.classList.remove('active');
        modalContainer.innerHTML = '';
    }
});