async function loadProject() {
    const params = new URLSearchParams(window.location.search);
    const markdownPath = params.get('markdown');
    const title = params.get('title') || 'Project';
    const titleElement = document.getElementById('projectTitle');
    const contentElement = document.getElementById('projectContent');
    titleElement.textContent = title;
    document.title = `Project: ${title}`;
    if (markdownPath) {
        try {
            const response = await fetch(markdownPath);
            const text = await response.text();
            contentElement.innerHTML = marked.parse(text);
        } catch (error) {
            console.error('Error loading markdown:', error);
            contentElement.textContent = 'Unable to load project details.';
        }
    } else {
        contentElement.textContent = 'Project not specified.';
    }
}
loadProject();
