
document.addEventListener('DOMContentLoaded', () => {
    const setupModeBtn = document.getElementById('setup-mode');
    const vendorModeBtn = document.getElementById('vendor-mode');
    const setupMenu = document.getElementById('setup-menu');
    const vendorMenu = document.getElementById('vendor-menu');

    setupModeBtn.addEventListener('click', () => {
        setupMenu.classList.remove('hidden');
        vendorMenu.classList.add('hidden');
        setupModeBtn.classList.add('active');
        vendorModeBtn.classList.remove('active');
        // Additional logic for setup mode if necessary
    });

    vendorModeBtn.addEventListener('click', () => {
        vendorMenu.classList.remove('hidden');
        setupMenu.classList.add('hidden');
        vendorModeBtn.classList.add('active');
        setupModeBtn.classList.remove('active');
        // Additional logic for vendor mode if necessary
    });
});