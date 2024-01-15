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
	});

	vendorModeBtn.addEventListener("click", () => {
		vendorMenu.classList.remove("hidden");
		setupMenu.classList.add("hidden");
		vendorModeBtn.classList.add("active");
		setupModeBtn.classList.remove("active");
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

    <!-- Add Products (Can add more elements or buttons as needed) -->
    <div class="mb-4">
      <div class="text-gray-600">Add Products</div>
      <!-- Add Product button or functionality -->
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

// Assuming you have a button with the class "add-door-button" for adding doors
const addDoorButton = document.querySelector('.add-door-button');
const roomDoorContainer = document.querySelector('#room-door');

// Function to load initial JSON data
const loadData = () => {
  fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      updateRoomUI();
      console.log(data);
    })
    .catch(error => console.error('Error loading JSON data:', error));
};

// updateRoomUI is for initial UI setup based on loaded data.
const updateRoomUI = () => {
  const roomNameElement = document.getElementById('room-name');
  const roomWidthElement = document.getElementById('room-width');
  const roomDepthElement = document.getElementById('room-depth');

  roomNameElement.value = data.roomSetup.roomName;
  roomWidthElement.value = data.roomSetup.roomDimensions.width;
  roomDepthElement.value = data.roomSetup.roomDimensions.depth;
};

// saveRoomDetails is for handling the save action and updating the data object.
const saveRoomDetails = () => {
  const updatedRoomName = document.getElementById('room-name').value;
  const updatedRoomWidth = document.getElementById('room-width').value;
  const updatedRoomDepth = document.getElementById('room-depth').value;

  data.roomSetup.roomName = updatedRoomName;
  data.roomSetup.roomDimensions.width = updatedRoomWidth;
  data.roomSetup.roomDimensions.depth = updatedRoomDepth;

  updateRoomDetailsUI(updatedRoomName, updatedRoomWidth, updatedRoomDepth);
};

// updateRoomDetailsUI is specifically for updating the displayed room dimensions in the UI after changes are made and saved.
const updateRoomDetailsUI = (name, width, depth) => {
  const roomNameElement = document.getElementById('canvas-room-name');
  const roomDimensionsElement = document.getElementById('room-dimensions');

  roomNameElement.textContent = `Room Name: ${name}`;
  roomDimensionsElement.textContent = `Room Dimensions: Width - ${width} feet, Depth - ${depth} feet`;
};

// Event listener for the save button
document.getElementById('save-button').addEventListener('click', saveRoomDetails);

      // Attach an event listener to the "Add Door" button
      addDoorButton.addEventListener('click', () => {
        // Create a new text element representing a door
        const doorTextElement = document.createElement('span');
        doorTextElement.textContent = '(door)';

        // Add the door text element to the canvas (room-door-container)
        roomDoorContainer.appendChild(doorTextElement);
      });

// // Add an event listener to the container where doors will be added (roomDoor)
// addDoorButton.addEventListener('click', (event) => {
//   if (event.target.classList.contains('add-door-button')) {
//     // Use data from your JSON file to create the door
//     const doorData = {
//       width: data.roomSetup.roomDimensions.width, // Use the width from your JSON
//       height: '200px', // You can set a default height or use data from your JSON
//       color: 'brown', // You can set a default color or use data from your JSON
//       // Add other properties as needed
//     };

//     // Create a new door element
//     const doorElement = document.createElement('div');
//     doorElement.style.width = doorData.width;
//     doorElement.style.height = doorData.height;
//     doorElement.style.backgroundColor = doorData.color;
//     // Set other styles and properties based on doorData

//     // Add the door element to the canvas (roomDoor)
//     roomDoor.appendChild(doorElement);
//   }
// });

// Initial data load
loadData();

