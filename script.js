const API_URL = "https://jsonplaceholder.typicode.com/users";
const userContainer = document.getElementById("userContainer");
const errorMessage = document.getElementById("errorMessage");
const reloadBtn = document.getElementById("reloadBtn");

// Fetch users from API
async function fetchUsers() {
  userContainer.innerHTML = "Loading...";
  errorMessage.textContent = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const users = await response.json();
    displayUsers(users);

  } catch (error) {
    errorMessage.textContent = "⚠️ Error fetching data. Please try again.";
    userContainer.innerHTML = "";
  }
}

// Display users on page
function displayUsers(users) {
  userContainer.innerHTML = "";
  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userContainer.appendChild(card);
  });
}

// Reload button event
reloadBtn.addEventListener("click", fetchUsers);

// Fetch users on page load
fetchUsers();
