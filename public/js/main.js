document.addEventListener("DOMContentLoaded", function() {
    // Fetch header content
    fetch("/includes/header.html") // Use relative path
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching header:', error);
        });

    // Fetch footer content
    fetch("/includes/footer.html") // Use relative path
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching footer:', error);
        });
});
