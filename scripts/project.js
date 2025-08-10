async function loadProject() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
        return;
    }

    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        const project = projects.find(p => p.id == id);
        if (!project) {
            return;
        }

        document.title = project.title;

        const container = document.getElementById('projectContainer');
        const header = document.createElement('h1');
        header.textContent = project.title;
        container.appendChild(header);

        if (project.imageUrl) {
            const img = document.createElement('img');
            img.src = project.imageUrl;
            img.alt = project.title;
            container.appendChild(img);
        }

        const mdResponse = await fetch(project.markdownUrl);
        const mdText = await mdResponse.text();
        const html = marked.parse(mdText);
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = html;
        container.appendChild(contentDiv);
    } catch (err) {
        console.error('Error loading project:', err);
    }
}

loadProject();
