//user.js
// Kiểm tra trạng thái đăng nhập
const isLoggedIn = localStorage.getItem('isLoggedIn');
const username = localStorage.getItem('username');
if (!isLoggedIn) {
    window.location.href = '/index.html';
}

// Hiển thị tên người dùng (tùy chọn)
const userProfile = document.querySelector('.user-card');
if (userProfile) {
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    if (emailInput && usernameInput) {
        emailInput.value = username ? `${username}@example.com` : 'user@example.com';
        usernameInput.value = username || 'User';
    }
}

// Xử lý thay đổi ảnh đại diện
const changeAvatarBtn = document.querySelector('.btn-change-avatar');
const avatarInput = document.querySelector('#avatar-input');
const avatar = document.querySelector('.avatar');

if (changeAvatarBtn && avatarInput && avatar) {
    changeAvatarBtn.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatar.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    });
}

// Xóa nội dung input
document.querySelectorAll('.clear-btn').forEach(clearBtn => {
    clearBtn.addEventListener('click', () => {
        const input = clearBtn.previousElementSibling;
        input.value = '';
        clearBtn.style.display = 'none';
    });
});

document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('input', () => {
        const clearBtn = input.nextElementSibling;
        if (input.value) {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';
        }
    });
});

// Xử lý đăng xuất với xác nhận
const logoutBtn = document.querySelector('.logout-btn');
const logoutModal = document.querySelector('.logout-modal');
const confirmLogout = document.querySelector('.btn-confirm');
const cancelLogout = document.querySelector('.btn-cancel');
const overlay = document.querySelector('.overlay');

if (logoutBtn && logoutModal) {
    logoutBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        logoutModal.style.display = 'block';
    });

    confirmLogout.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        window.location.href = '/index.html';
    });

    cancelLogout.addEventListener('click', () => {
        overlay.classList.remove('active');
        logoutModal.style.display = 'none';
    });
}

// Đóng modal khi click overlay
if (overlay) {
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        logoutModal.style.display = 'none';
    });
}

// Xử lý form cập nhật
const userForm = document.querySelector('.user-form');
if (userForm) {
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEmail = document.getElementById('email').value;
        const newUsername = document.getElementById('username').value;
        localStorage.setItem('username', newUsername);
        alert('Thông tin đã được cập nhật!');
    });
}

// Xử lý đổi mật khẩu (tạm thời chỉ hiển thị alert)
const changePasswordBtn = document.querySelector('.btn-password');
if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', () => {
        alert('Chức năng đổi mật khẩu đang được phát triển!');
    });
}

// Xử lý toggle sidebar
const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
const sidebar = document.querySelector('.sidebar');

if (toggleSidebarBtn && sidebar) {
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
}