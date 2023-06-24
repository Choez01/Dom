const d = document,
 idiomas = ["es-US", "es-ES", "es_US", "es_ES"];

d.addEventListener("DOMContentLoaded",(e)=>{
    const $elegir = d.querySelector("#elegir"),
     $leer = d.querySelector("#leer"),
     $escuchar = d.querySelector("#escuchar");

    let posibleIndice = 0, vocesDisponibles = [];

    const voces=()=>{
        if(vocesDisponibles.length>0){
            console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
            return;
        }

        vocesDisponibles = speechSynthesis.getVoices();
        console.log({vocesDisponibles})
        posibleIndice=vocesDisponibles.findIndex(voz=>idiomas.includes(voz.lang));
        if(posibleIndice===-1)posibleIndice=0;
        vocesDisponibles.forEach((voz, indice)=>{
            const opcion = d.createElement("option");
            opcion.value = indice;
            opcion.innerHTML = voz.name;
            opcion.selected = indice === posibleIndice;
            $elegir.appendChild(opcion);
        });
    }

    if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

    if('onvoiceschanged' in speechSynthesis){
        speechSynthesis.onvoiceschanged = function(){
            voces();
        }
    }

    $escuchar.addEventListener("click",(e)=>{
        let texto = $leer.value;
        if(!texto) return alert("Escriba el texto");
        let mensaje = new SpeechSynthesisUtterance();
         mensaje.voice = vocesDisponibles[$elegir.value];
         mensaje.volume = 1;
         mensaje.rate = 1;
         mensaje.text = texto;
         mensaje.pitch = 1;

        speechSynthesis.speak(mensaje);
    })
})
