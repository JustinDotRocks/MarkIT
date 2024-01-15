
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

const addDoorButton = document.querySelector('#add-door-button');
const addObstacleButton = document.querySelector('#add-obstacle-button');
const add6TableButton = document.querySelector('#add-6table-button');
const add8TableButton = document.querySelector('#add-8table-button');
const add5TableButton = document.querySelector('#add-5table-button');

const roomDoorContainer = document.querySelector('#room-door');
const roomObstacleContainer = document.querySelector('#room-obstacle');
const room6TableContainer = document.querySelector('#room-6-table');
const room8TableContainer = document.querySelector('#room-8-table');
const room5TableContainer = document.querySelector('#room-5-table');





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

// ADD DOOR

// Function to add a new door
const addNewDoor = () => {
  // Create a new door object (you can customize this structure as needed)
  const newDoor = '(door)';

  // Add the new door to the local data
  data.roomSetup.doors.push(newDoor);

  // Call a function to update the UI with the new door
  updateDoorUI(newDoor);

  // Optionally, you can save the updated data to local storage here
};

// Function to update the UI with a new door
const updateDoorUI = (door) => {
  const doorTextElement = document.createElement('span');
  doorTextElement.textContent = door;

  // Add the door to the canvas (room-door-container)
  roomDoorContainer.appendChild(doorTextElement);
};

// Attach an event listener to the "Add Door" button
addDoorButton.addEventListener('click', addNewDoor);

// ADD OBSTACLE

// Function to add a new obstacle
const addNewObstacle = () => {
  // Create a new obstacle object (you can customize this structure as needed)
  const newObstacle = '(obstacle)';

  // Add the new obstacle to the local data
  data.roomSetup.obstacles.push(newObstacle);

  // Call a function to update the UI with the new obstacle
  updateObstacleUI(newObstacle);

};

// Function to update the UI with a new obstacle
const updateObstacleUI = (obstacle) => {
  const obstacleTextElement = document.createElement('span');
  obstacleTextElement.textContent = obstacle;

  // Add the obstacle to the canvas (room-obstacle-container)
  roomObstacleContainer.appendChild(obstacleTextElement);
};

// Attach an event listener to the "Add Obstacle" button
addObstacleButton.addEventListener('click', addNewObstacle);

// ADD TABLES

// Add 6' Table
// Function to add a new Table
const addNew6Table = () => {
  // Create a new 6' table object.
  const new6Table = '(6Table)';

  // Add the new 6' Table to the local data
  data.roomSetup.tables.push(new6Table);

  // Call a function to update the UI with the new 6' table
  update6TableUI(new6Table);
};

// Function to update the UI with a new 6' table
const update6TableUI = (table) => {
  const table6TextElement = document.createElement('span');
  table6TextElement.textContent = table;

  // Add the 6' table to the canvas (room-table-container)
  room6TableContainer.appendChild(table6TextElement);
};

// Add 8' Table

// Function to add a new Table
const addNew8Table = () => {

  // Create a new 8'table object.
  const new8Table = '(8Table)';

  // Add the new 8' Table to the local data
  data.roomSetup.tables.push(new8Table);

  // Call a function to update the UI with the new 8' table
  update8TableUI(new8Table);
};

// Function to update the UI with a new 8' table
const update8TableUI = (table) => {
  const table8TextElement = document.createElement('span');
  table8TextElement.textContent = table;

    // Add the 8' table to the canvas (room-table-container)
    room8TableContainer.appendChild(table8TextElement);

};

// Add 5' Table

// Function to add a new Table
const addNew5Table = () => {

  // Create a new 5'table object.
  const new5Table = '(5Table)';

  // Add the new 5' Table to the local data
  data.roomSetup.tables.push(new5Table);

  // Call a function to update the UI with the new 5' table
  update5TableUI(new5Table);
};

// Function to update the UI with a new 5' table
const update5TableUI = (table) => {
  const table5TextElement = document.createElement('span');
  table5TextElement.textContent = table;

    // Add the 8' table to the canvas (room-table-container)
    room5TableContainer.appendChild(table5TextElement);

};

// Table Event Listeners

// Attach an event listener to the "Add Obstacle" button
add6TableButton.addEventListener('click', addNew6Table);
add8TableButton.addEventListener('click', addNew8Table);
add5TableButton.addEventListener('click', addNew5Table);

//
loadData();

