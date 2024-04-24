document.addEventListener("DOMContentLoaded", function() {
    // Fetch header content
    fetch("http://localhost:8080/includes/header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching header:', error);
        });

    // Fetch footer content
    fetch("http://localhost:8080/includes/footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching footer:', error);
        });
});
