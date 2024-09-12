/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      eval(prompt("Eval:"));
  }
})


// List of scripts to load
const programs = ["https://cdn.jsdelivr.net/npm/eruda"];

/// run_scripts.js
pprograms.forEach(url => {
    const script = document.createElement('script');
    script.src = url;

    script.onload = () => {
        alert(`Script loaded successfully: ${url}`);
    };

    script.onerror = (e) => {
        alert(`Failed to load script: ${url}`, e);
    };

    document.head.appendChild(script);
});
