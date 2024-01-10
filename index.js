
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

// Select the "Create Vendor" button using the provided class
const createVendorButton = document.querySelector('.menu-top-container-add-vendor-button');

// Select the container where new vendor cards will be added
const vendorMenu = document.getElementById('vendor-menu');

// Counter to keep track of the number of vendors
let vendorCounter = 1;

// Function to create a new vendor card
const createNewVendorCard = () => {
  // Create a new container for the vendor card
  const vendorCard = document.createElement('div');
  vendorCard.classList.add('card-container'); // Add 'mb-4' to create space between cards

  vendorCard.innerHTML = `
  <div class="bg-white rounded-lg shadow-md p-4">
  <div class="flex items-center justify-between mb-4">
    <!-- Vendor Name Input -->
    <div class="mb-4">
      <label for="vendor-name" class="block text-gray-600">Vendor Name:</label>
      <input
        type="text"
        id="vendor-name"
        name="vendor-name"
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter vendor name"
      />
    </div>
    
    <!-- Vendor Details (You can add more fields as needed) -->
    <div class="mb-4">
      <label for="vendor-details" class="block text-gray-600">Vendor Details:</label>
      <textarea
        id="vendor-details"
        name="vendor-details"
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        rows="4"
        placeholder="Enter vendor details"
      ></textarea>
    </div>

    <!-- Add Products (You can add more elements or buttons as needed) -->
    <div class="mb-4">
      <div class="text-gray-600">Add Products</div>
      <!-- Add Product button or functionality -->
    </div>
    
    <!-- Vendor Card Footer (You can add additional buttons or elements here) -->
    <div class="flex justify-end">
      <!-- Add buttons or elements as needed -->
    </div>
    </div>
    </div>

  `;

  // Append the new vendor card to the vendor menu container
  vendorMenu.appendChild(vendorCard);

  vendorCounter++;
};

// Event listener for the "Create Vendor" button
createVendorButton.addEventListener('click', createNewVendorCard);
