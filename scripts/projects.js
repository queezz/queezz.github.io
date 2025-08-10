// Function to fetch and populate data
async function fetchData() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();

        const gridContainer = document.getElementById('gridContainer');

        data.forEach(item => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.style.backgroundImage = `url(${item.imageUrl})`;
            gridItem.innerHTML = `<h2>${item.summary}</h2>`;
            gridItem.onclick = () => {
                const url = `project.html?title=${encodeURIComponent(item.title)}&markdown=${encodeURIComponent(item.markdown)}`;
                window.location.href = url;
            };
            gridContainer.appendChild(gridItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
