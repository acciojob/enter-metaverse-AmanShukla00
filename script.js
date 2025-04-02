//your JS code here. If required.
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
