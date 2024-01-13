document.addEventListener("DOMContentLoaded", () => {
	const setupModeBtn = document.getElementById("setup-mode");
	const vendorModeBtn = document.getElementById("vendor-mode");
	const setupMenu = document.getElementById("setup-menu");
	const vendorMenu = document.getElementById("vendor-menu");

	setupModeBtn.addEventListener("click", () => {
		setupMenu.classList.remove("hidden");
		vendorMenu.classList.add("hidden");
		setupModeBtn.classList.add("active");
		vendorModeBtn.classList.remove("active");
		// Additional logic for setup mode if necessary
	});

	vendorModeBtn.addEventListener("click", () => {
		vendorMenu.classList.remove("hidden");
		setupMenu.classList.add("hidden");
		vendorModeBtn.classList.add("active");
		setupModeBtn.classList.remove("active");
		// Additional logic for vendor mode if necessary
	});
});

// Select the "Create Vendor" button using the provided class
const createVendorButton = document.querySelector(
	".menu-top-container-add-vendor-button"
);

// Select the container where new vendor cards will be added
const vendorMenu = document.getElementById("vendor-menu");

let vendorCounter = 1;

// Function to create a new vendor card
const createNewVendorCard = () => {
	// Create a new container for the vendor card
	const vendorCard = document.createElement("div");
	vendorCard.classList.add("card-container");

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
createVendorButton.addEventListener("click", createNewVendorCard);


// ROOM MENU
// Function to load initial JSON data
const loadData = () => {
  fetch('data.json') // Replace 'data.json' with the correct path to the JSON file
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      updateRoomUI();
      console.log(data);
    })
    .catch(error => console.error('Error loading JSON data:', error));
};

// updateRoomUI is for initial UI setup based on loaded data.
// saveRoomDetails is for handling the save action and updating the data object.
// updateRoomDetailsUI is specifically for updating the displayed room dimensions in the UI after changes are made and saved.

// Function to update the Room Setup Menu UI
const updateRoomUI = () => {
  const roomNameElement = document.getElementById('room-name');
  const roomWidthElement = document.getElementById('room-width');
  const roomDepthElement = document.getElementById('room-depth');

  roomNameElement.value = data.roomSetup.roomName;
  roomWidthElement.value = data.roomSetup.roomDimensions.width;
  roomDepthElement.value = data.roomSetup.roomDimensions.depth;
};

// Function to save room details
const saveRoomDetails = () => {
  const updatedRoomName = document.getElementById('room-name').value;
  const updatedRoomWidth = document.getElementById('room-width').value;
  const updatedRoomDepth = document.getElementById('room-depth').value;

  data.roomSetup.roomName = updatedRoomName;
  data.roomSetup.roomDimensions.width = updatedRoomWidth;
  data.roomSetup.roomDimensions.depth = updatedRoomDepth;

  updateRoomDetailsUI(updatedRoomName, updatedRoomWidth, updatedRoomDepth);
};

// Function to update the Room Details UI
const updateRoomDetailsUI = (name, width, depth) => {
  const roomNameElement = document.getElementById('canvas-room-name');
  const roomDimensionsElement = document.getElementById('room-dimensions');

  roomNameElement.textContent = `Room Name: ${name}`;
  roomDimensionsElement.textContent = `Room Dimensions: Width - ${width} feet, Depth - ${depth} feet`;
};


// Event listener for the save button
document.getElementById('save-button').addEventListener('click', saveRoomDetails);

// Initial data load
loadData();

