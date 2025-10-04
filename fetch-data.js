// Step 1: Initialize the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from the API
        const response = await fetch(apiUrl);

        // Handle bad responses
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name; // display only names
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Handle errors
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 8: Run fetchUserData when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
