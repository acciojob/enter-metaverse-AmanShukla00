//your JS code here. If required.
function getFormvalue() {
    // Prevent form from submitting normally
    event.preventDefault();
    
    // Get values from input fields
    let firstName = document.querySelector("input[name='fname']").value.trim();
    let lastName = document.querySelector("input[name='lname']").value.trim();
    
    // Check if fields are empty
    if (!firstName || !lastName) {
        alert("Please enter both first and last names.");
        return;
    }
    
    // Display full name
    alert(firstName + " " + lastName);
}

// Function to update the paragraph content on button click
document.addEventListener("DOMContentLoaded", function () {
    let enterButton = document.createElement("button");
    enterButton.id = "enterBtn";
    enterButton.textContent = "Enter Metaverse";
    document.body.appendChild(enterButton);
    
    let statusParagraph = document.createElement("p");
    statusParagraph.id = "status";
    statusParagraph.textContent = "Enter the Metaverse";
    document.body.appendChild(statusParagraph);
    
    enterButton.addEventListener("click", function () {
        statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
    });
});
