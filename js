/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      eval(prompt("Eval:"));
  }
})


// List of scripts to load
const programs = ["https://cdn.jsdelivr.net/npm/eruda"];

// Load each script dynamically
programs.forEach(url => {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
});
