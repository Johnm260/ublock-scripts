/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      eval(prompt("Eval:"));
  }
})


/// run_scripts.js\
const programs = ["https://cdn.jsdelivr.net/npm/eruda"];

programs.forEach(url => {
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
