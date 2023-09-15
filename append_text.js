document.addEventListener("DOMContentLoaded", function () {
    // Fetch the text file using the Fetch API
    fetch("lorem.txt")
        .then(response => response.text())
        .then(data => {
            // Create a new paragraph element
            const paragraph = document.createElement("p");
            
            // Set the content from the text file
            paragraph.textContent = data;
            
            // Add CSS class to apply styles
            paragraph.classList.add("sample_text"); // You can define this class in your CSS

            // Append the paragraph to the content container
            const contentContainer = document.getElementById("main_content");
            contentContainer.appendChild(paragraph);
        })
        .catch(error => {
            console.error("Error fetching the text file:", error);
        });
});