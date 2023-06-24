const $temporizador = document.getElementById("countdown");


function fecha(a=undefined){
    let d1 = new Date().getTime(),
     objetivo = new Date(a).getTime(), 
 
     Milisegundos = 1000,
     M_minutes = (1000*60),
     M_Hours = (1000*60*60),
     M_Day = (1000*60*60*24);

    const duration = objetivo - d1,
     r_day = Math.floor(duration / M_Day),
     r_hours = Math.floor((duration % M_Day)/M_Hours),
     r_minutes = Math.floor((duration % M_Hours)/M_minutes),
     r_seconds = Math.floor((duration % M_minutes)/Milisegundos);

    if(duration>=1){
        return $temporizador.innerHTML= `<h3>${r_day} dias, ${r_hours} horas, ${r_minutes} minutos, ${r_seconds} segundos</h3>`
    }

    else if(duration<=0){
        $temporizador.innerHTML= `<h3>¡Llego al objetivo!</h3>` 
        clearInterval(temporizador03);
    } 
}

/*con el temporizador03 debes escribir una fecha superior para que comience a contar*/
let temporizador03 = setInterval(()=>{
    fecha('05/17/2023 9:00:00 PM');
},1000)

/*Con el clearInterval(temporizador03) activo y desactivo la funcion */
clearInterval(temporizador03)
