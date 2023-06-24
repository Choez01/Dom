const d = document,
 w = window;

const $red = d.getElementById("detectar-red");
    
w.addEventListener("online",(e)=>{
    setTimeout(() => {
        $red.innerHTML=`<p>Conexion Establecida</p>`
        $red.classList.add("establecida");
    }, 2000);
            
    setTimeout(() => {
        $red.innerHTML= null;
        $red.classList.remove("establecida");
    }, 3000);
});

w.addEventListener("offline",(e)=>{
    setTimeout(() => {
        $red.innerHTML=`<p>Conexion Perdida</p>`;
        $red.classList.add("perdida");
    }, 2000);
            
    setTimeout(() => {
        $red.innerHTML= null;
        $red.classList.remove("perdida");
    }, 3000);
})


        



