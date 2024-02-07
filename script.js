document.addEventListener('DOMContentLoaded', () => {
    // Function to render the content of the text file
    function renderContent(content) {
        const container = document.getElementById('content');
        container.innerHTML = `<p>${content}</p>`;
    }

    // Reading the content of the text file using Fetch API
    fetch('sample.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch the content');
            }
            return response.text();
        })
        .then(data => {
            renderContent(data); // Rendering the content on the HTML page
        })
        .catch(error => {
            console.error(error);
        });
});
