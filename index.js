
document.addEventListener('DOMContentLoaded', () => {
    const setupModeBtn = document.getElementById('setup-mode');
    const vendorModeBtn = document.getElementById('vendor-mode');

    setupModeBtn.addEventListener('click', () => {
        setupModeBtn.classList.add('active');
        vendorModeBtn.classList.remove('active');
        // Additional logic for setup mode
    });

    vendorModeBtn.addEventListener('click', () => {
        vendorModeBtn.classList.add('active');
        setupModeBtn.classList.remove('active');
        // Additional logic for vendor mode
    });
});