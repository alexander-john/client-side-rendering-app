# Client-side rendering

Client-side rendering (CSR) is when a web page's content is generated dynamically in the browser using JavaScript, typically with a framework like React or plain JavaScript. 

Here's a simple example using plain JavaScript:

### HTML
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Client-Side Rendering Example</title>
</head>
<body>
  <div id="app">
    <!-- Content will be rendered here -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### JavaScript
```javascript
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
```

### How It Works:
- The `HTML` file contains an empty `<div>` with the `id="app"` where the content will be rendered.
- The `JavaScript` file fetches data (simulated in this case) and generates HTML dynamically using the `map()` function.
- The `render()` function injects the generated HTML into the DOM.

This demonstrates a basic form of client-side rendering! The page loads first, and the content is dynamically added afterward.