// Function to toggle the visibility of the target element
function toggleElement() {
    var targetElement = document.getElementById("targetElement");
    if (targetElement.style.display === "none") {
        targetElement.style.display = "block";
    } else {
        targetElement.style.display = "none";
    }
}

// Add click event listener to the button
document.getElementById("toggleButton").addEventListener("click", toggleElement);
