const d = document,
 $formulario = d.getElementById("formulario");

d.addEventListener("DOMContentLoaded",(e)=>{
    
    const validarNombre = (nombre)=>{
        let expReg = /^[A-Za-zÑñaáéíóú\s]+$/g.test(nombre),
        btnNombre = d.getElementById("Btn-nombre"),
        $nombre = $formulario[0]
        if(nombre.length===0){
            $nombre.classList.remove("verde");
        }
    
        if(expReg){
            btnNombre.style.setProperty("display", "none");
            $nombre.classList.add("verde");
    
        }else{
            $nombre.classList.add("rojo");
            btnNombre.classList.add("barra-rojo");
            btnNombre.style.setProperty("display", "block");
    
            if(nombre===""){
                $nombre.classList.remove("rojo")
                btnNombre.style.setProperty("display", "none")
            }
        }
    } 
    
    const validarCorreo = (correo)=>{
        let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo),
         BtnEmail = d.getElementById("Btn-email"),
         $email = $formulario[1];
        if(correo.length===0){
            $email.classList.remove("verde");
        }
    
        if(expReg){
            BtnEmail.style.setProperty("display", "none");
            $email.classList.add("verde");
            $email.classList.remove("rojo");
    
        }else{
            $email.classList.add("rojo");
            BtnEmail.classList.add("barra-rojo");
            BtnEmail.style.setProperty("display", "block");
    
            if(correo===""){
                $email.classList.remove("rojo");
                BtnEmail.style.setProperty("display", "none");
            }
        }
    }
    
    const validarAsunto = (asunto)=>{
        let expReg = /^[A-Za-zÑñaáéíóú\s]+$/g.test(asunto),
        BtnAsunto = d.getElementById("Btn-asunto"),
        $asunto = $formulario[2];
        if(asunto.length===0){
            $asunto.classList.remove("verde");
        }
    
        if(expReg){
            BtnAsunto.style.setProperty("display", "none");
            $asunto.classList.add("verde");
            $asunto.classList.remove("rojo");
    
        }else{
            $asunto.classList.add("rojo");
            BtnAsunto.classList.add("barra-rojo");
            BtnAsunto.style.setProperty("display", "block");
    
            if(asunto===""){
                $asunto.classList.remove("rojo");
                BtnAsunto.style.setProperty("display", "none");
            }
        }
    }
    
    const validarComentario = (comentario)=>{
        let Btncomentar = d.getElementById("Btn-comentario"),
         $tarea = $formulario[3]
        if(comentario.length===0){
            $tarea.classList.remove("rojo");
            $tarea.classList.remove("verde");
        }
    
        if(comentario.length <= 200){
            $tarea.classList.add("verde");
            $tarea.classList.remove("rojo");
            Btncomentar.style.setProperty("display", "none");
    
            if(comentario===""){
                $tarea.classList.remove("verde")
            }
    
        }else{
            $tarea.classList.add("rojo");
            Btncomentar.classList.add("barra-rojo");
            Btncomentar.style.setProperty("display", "block");
            $tarea.classList.remove("verde");
        }
    }

    d.addEventListener("keyup",(e)=>{
        validarNombre($formulario[0].value);
        validarCorreo($formulario[1].value);
        validarAsunto($formulario[2].value);
        validarComentario($formulario[3].value);
    })
    
    d.addEventListener("click",(e)=>{
        validarNombre($formulario[0].value);
        validarCorreo($formulario[1].value);
        validarAsunto($formulario[2].value);
        validarComentario($formulario[3].value);

        
    })
});