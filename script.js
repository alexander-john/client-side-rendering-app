// Simulated data fetched from an API
const fetchData = () => {
    return [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
    ];
  };
  
  // Render the data into the DOM
  const render = () => {
    const appDiv = document.getElementById("app");
    const data = fetchData();
  
    // Create HTML content
    const content = `
      <h1>Client-Side Rendering Example</h1>
      <ul>
        ${data.map(item => `<li>${item.name}</li>`).join('')}
      </ul>
    `;
  
    // Add content to the DOM
    appDiv.innerHTML = content;
  };
  
  // Call the render function to display the data
  render();
  