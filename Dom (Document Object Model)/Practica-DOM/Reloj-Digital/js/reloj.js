document.addEventListener("DOMContentLoaded",(e)=>{

let time;
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    time= setTimeout("mueveReloj()",1000);
}

const $deshabilitar = document.getElementById("iniciar"),
 $desactivar = document.getElementById("alarma"),
 $sonar = document.getElementById("audio");
 $close = document.getElementById("close");

document.addEventListener("click",(e)=>{
    //console.log("Click en",e.target);

    if(e.target.matches("#iniciar")){
        mueveReloj(e);
        $close.style="display:flex";
        $deshabilitar.disabled = true;
    }

    if(e.target.matches("#stop")){
       clearTimeout(time);
       $close.style="display:none";
       $deshabilitar.disabled = false;
    }

    if(e.target.matches("#alarma")){
        $sonar.play();
        $sonar.currentTime = 0;
        $desactivar.disabled = true;
    }

    if(e.target.matches("#detener_alarma")){
        $sonar.pause();
        $desactivar.disabled = false;
    }
});
});
