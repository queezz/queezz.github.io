// Function to fetch and populate data
async function fetchData() {
    try {
        const response = await fetch('data/projects.json'); // Replace with the path to your JSON file
        const data = await response.json();

        const gridContainer = document.getElementById('gridContainer');

        // Create link cards based on the data
        data.forEach(item => {
            const card = document.createElement('a');
            card.className = 'grid-item';
            card.href = `project.html?id=${item.id}`;
            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.summary}</p>
            `;
            gridContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to populate the grid
fetchData();
