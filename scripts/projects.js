// Function to fetch and populate data
async function fetchData() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();

        const gridContainer = document.getElementById('gridContainer');

        // Create link cards based on the data
        data.forEach(({ id, title, summary, imageUrl }) => {
            const card = document.createElement('a');
            card.className = 'grid-item';
            card.href = `project.html?id=${id}`;
            card.innerHTML = `
                <img src="${imageUrl}" alt="${title}">
                <h2>${title}</h2>
                <p>${summary}</p>
            `;
            gridContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to populate the grid
fetchData();
