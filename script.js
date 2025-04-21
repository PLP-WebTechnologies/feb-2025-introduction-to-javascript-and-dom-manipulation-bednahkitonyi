// Change text content and styles
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const dynamicText = document.getElementById("dynamicText");
    dynamicText.textContent = "Text changed with JavaScript!";
    dynamicText.style.color = "green";
    dynamicText.classList.toggle("highlight");
  });
  
  // Add/Remove an element
  document.getElementById("toggleElementBtn").addEventListener("click", () => {
    const container = document.getElementById("extraContainer");
    const existing = document.getElementById("extraElement");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newElement = document.createElement("p");
      newElement.id = "extraElement";
      newElement.textContent = "I'm a new paragraph added with JavaScript!";
      container.appendChild(newElement);
    }
  });
  