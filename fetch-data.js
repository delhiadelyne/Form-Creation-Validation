// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list to hold user names
        const userList = document.createElement('ul');

        // Loop through the users and add their names
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors gracefully
        console.error("Error fetching user data:", error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
