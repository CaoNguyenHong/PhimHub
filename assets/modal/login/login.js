export function initLoginModal(modalContainer) {
    const loginModal = modalContainer.querySelector('.login-modal');
    const closeBtn = loginModal.querySelector('.close-btn');
    const registerLink = loginModal.querySelector('.register-link');

    loginModal.classList.add('active');

    closeBtn.addEventListener('click', () => {
        loginModal.classList.remove('active');
        modalContainer.innerHTML = '';
    });

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        modalContainer.innerHTML = '';
        import('../register/register.js').then(({ initRegisterModal }) => {
            initRegisterModal(modalContainer);
        });
    });

    // Toggle password visibility
    loginModal.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const passwordInput = toggle.closest('.input-group').querySelector('input');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            toggle.querySelector('i').classList.toggle('fa-eye-slash');
            toggle.querySelector('i').classList.toggle('fa-eye');
        });
    });
}