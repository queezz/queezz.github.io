// Function to fetch and populate data
async function fetchData() {
    try {
        const [data, sizes] = await Promise.all([
            fetch(window.PROJECTS_DATA_URL || '/assets/data/projects.json').then(r => r.json()),
            fetch(window.IMAGE_SIZES_URL || '/assets/data/image-sizes.json').then(r => r.json())
        ]);

        const root = ((window.SITE_ROOT || '') + '/').replace(/\/+$/, '/') || '/';

        const sizeAttr = src => {
            const key = src.replace(/^\//, '');
            const info = sizes[key];
            return info ? ` width="${info.width}" height="${info.height}"` : '';
        };

        const gridContainer = document.getElementById('gridContainer');

        // Create link cards based on the data
        data.forEach(({ markdownUrl, title, summary, imageUrl }) => {
            const card = document.createElement('a');
            card.className = 'grid-item';
            const href = markdownUrl
                ? (markdownUrl.startsWith('http') ? markdownUrl : `${root}${markdownUrl.replace(/^\\//, '')}`)
                : '#';
            card.href = href;
            card.innerHTML = `
                <img src="${imageUrl.startsWith('http') ? imageUrl : `${root}${imageUrl.replace(/^\\//, '')}`}" alt="${title}" loading="lazy" decoding="async"${sizeAttr(imageUrl)}>
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
