
let d = document;
const objeto = d.getElementById("objeto");

d.addEventListener("DOMContentLoaded",(e)=>{

d.addEventListener("keydown",(e)=>{
    let top = parseInt(objeto.style.top) || 0;
    let left = parseInt(objeto.style.left) || 0;

    switch (e.key) {
        case 'ArrowUp':
          objeto.style.top = (top - 10) + 'px';
          break;
        case 'ArrowDown':
          objeto.style.top = (top + 10) + 'px';
          break;
        case 'ArrowLeft':
          objeto.style.left = (left - 10) + 'px';
          break;
        case 'ArrowRight':
          objeto.style.left = (left + 10) + 'px';
          break;
    }
});


/*
document.addEventListener('keydown', function(event) {
    console.log(event.key);
    
  });
*/

d.addEventListener("keydown",(e)=> {
    // Verificar si la tecla Control y la tecla "e" se presionaron al mismo tiempo
    if (e.ctrlKey && e.key === "a") {
      // Enviar una alerta
        alert("Has presionado Control + a");
    }

    if (e.ctrlKey && e.key === "c") {
        confirm("Has presionado Control + c");
    }

    if (e.ctrlKey && e.key === "p") {
        prompt("Has presionado Control + p");
    }
});
});