//register.js
export function initRegisterModal(modalContainer) {
    const registerModal = modalContainer.querySelector('.register-modal');
    const closeBtn = registerModal.querySelector('.close-btn');

    registerModal.classList.add('active');

    closeBtn.addEventListener('click', () => {
        registerModal.classList.remove('active');
        modalContainer.innerHTML = '';
    });

    // Toggle password visibility
    registerModal.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const passwordInput = toggle.closest('.input-group').querySelector('input');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            toggle.querySelector('i').classList.toggle('fa-eye-slash');
            toggle.querySelector('i').classList.toggle('fa-eye');
        });
    });
}