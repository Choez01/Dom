let ventana;
const d = document;

export function abrir(hamburguesa,reloj,teclado,countdown,red,camara,geolocalizacion,filtro,sorteo,slider,prueba,validaciones,narrador){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(hamburguesa)){
            ventana=window.open("../../hamburguesa/hamburguesa.html");
        }

        if(e.target.matches(reloj)){
            ventana=window.open("../../Reloj-Digital/reloj_digital.html");
        }

        if(e.target.matches(teclado)){
            ventana=window.open("../../Evento_del_teclado/teclado.html");
        }

        if(e.target.matches(countdown)){
            ventana=window.open("../../Countdown/countdown.html");
        }

        if(e.target.matches(red)){
            ventana=window.open("../../Deteccion_red/red.html");
        }

        if(e.target.matches(camara)){
            ventana=window.open("../../Deteccion_camara/camara.html");
        }

        if(e.target.matches(geolocalizacion)){
            ventana=window.open("../../Geolocalizacion/geolocalizacion.html");
        }

        if(e.target.matches(filtro)){
            ventana=window.open("../../Filtro_busqueda/filtro.html");
        }

        if(e.target.matches(sorteo)){
            ventana=window.open("../../Sorteo_digital/sorteo.html");
        }

        if(e.target.matches(slider)){
            ventana=window.open("../../Carrusel/slider.html");
        }

        if(e.target.matches(prueba)){
            ventana=window.open("../../prueba/prueba.html");
        }

        if(e.target.matches(validaciones)){
            ventana=window.open("../../Validaciones_de_formulario/formulario.html");
        }

        if(e.target.matches(narrador)){
            ventana=window.open("../../Narrador/narrador.html");
        }
    });
}
