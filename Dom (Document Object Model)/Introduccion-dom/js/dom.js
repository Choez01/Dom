/*
Introduccion al DOM

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByTagName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el)=>console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
*/




/*
Nodos elementos y selesctores
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang= "en";

*/




/*
Atributos y data-atributes

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://www.youtube.com/watch?v=6kpGQyXfzsQ&list=RD6kpGQyXfzsQ&start_radio=1");
console.log($linkDOM.hasAttribute("rel"));

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
*/



/*
//Estilos y variables css
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM));

$linkDOM.style.setProperty("text-decoration", "none");

 const $html = document.documentElement,
  $body = document.body;


let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
*/


/*
//Clases css - Javascript
const $card = document.querySelector(".card");
console.log($card.classList);

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.toggle("rotate-135");
*/



/* 
//Texto y html
const $whatlsDOM = document.getElementById("que-es");

let text = `
<p>
    El modelo de objetos del documento (<br><i>DOM-Document Object model</i></br>) es un API para documentos HTML y XML.
</p>
<p>
    Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mendiante codigo JS.
</p>
<p>
    <mark> El DOM no es parte de la especificacion de Javascript, es una API para los navegadores.</mark>
</p>    
`;

$whatlsDOM.innerHTML = text;
$whatlsDOM.textContent = text;
$whatlsDOM.innerHTML = text;
$whatlsDOM.outerHTML = text;
*/





/*
//recorriendo el DOM
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
*/




/*
//Creando elementos y fragmentos
const $figure = document.createElement("figure"),
 $img = document.createElement("img"),
 $figcaption = document.createElement("figcaption"),
 $figcaptionText = document.createTextNode("Animals"),
 $cards = document.querySelector(".cards");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

const continentes = ["Africa","America","Asia","Europa","Oceania"]
 $ul2 = document.createElement("ul")
document.write("<h3>Continentes del Mundo</h3>")
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el)=>($ul2.innerHTML += `<li>${el}</li>`));


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],

$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach((el)=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3> Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/






/*
//Templates Html
const $cards = document.querySelector(".cards");
 $template = document.getElementById("template-card").content,
 $fragment = document.createDocumentFragment(),
 cardContent = [
    {
        title:"Tecnologia",
        img:"https://placeimg.com/200/200/tech",
    },
    {
        title:"Animales",
        img:"https://placeimg.com/200/200/animals",
    },
    {
        title:"Arquitectura",
        img:"https://placeimg.com/200/200/arch",
    },
    {
        title:"Gente",
        img:"https://placeimg.com/200/200/people",
    },
    {
        title:"Naturaleza",
        img:"https://placeimg.com/200/200/nature",
    },
];

cardContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
*/





/*
//Modificando elementos (Old Style)
const $cards = document.querySelector(".cards"),
 $newCard = document.querySelector("figure");

 $newCard.innerHTML = `
 <img src="https://placeimg.com/200/200/any" alt="Any">
 <figcaption>Any</figcaption>
 `;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
$cards.insertBefore($newCard, $cards.firstElementChild);
*/




/*
//Modificando elementos (Cool Style)
insertAdjacent....
 .insertAdjacentElement(position, el)
 .insertAdjacentHTML(position, el)
 .insertAdjacentText(position, text)


 Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/



//Manejadores de eventos
function holaMundo(){
    alert("Hola mundo");
    console.log("Hola mundo");
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
 $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e){
    alert("Hola mundo manejador de evento semantico");
    console.log(e);
}

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
    alert("Hola Mundo manejador de evento Multiple");
    console.log(e)
    console.log(e.type)
    console.log(e.target)
});



//Eventos con parametros y remover eventos
const $eventoRemover = document.getElementById("evento-remover");

function saludar(nombre="Desconocid@"){
    alert(`Hola ${nombre}`);
    console.log(event);
}

//$eventoMultiple.addEventListener("click", saludar);
$eventoMultiple.addEventListener("click",()=> {
    saludar();
    saludar("Angel");
});

const removerDobleClick=(e)=>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
};
$eventoRemover.addEventListener("dblclick",removerDobleClick);




/* 
//Flujo de eventos (Burbuja y captura)
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);
function flujoEventos(e){
    console.log(
        `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
    );
}
/*
$divsEventos.forEach((div)=>{
    //Fase de burbuja
    //div.addEventListener("click",flujoEventos);
    //div.addEventListener("click",flujoEventos,false);
    //Fase de captura
    //div.addEventListener("click",flujoEventos,true);
    div.addEventListener("click",flujoEventos,{
        capture: false,
        once:true
    })
});
*/




/*
//stop propagation & prevent default
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
 $linkEvent = document.querySelector(".eventos-flujo a")
function flujoEventos(e){
    console.log(
        `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
    );
    e.stopPropagation();
}

$divsEventos.forEach((div)=>{
    //Fase de burbuja
    div.addEventListener("click",flujoEventos);
});

$linkEvent.addEventListener("click",(e)=>{
    alert("Hola estoy aprendiendo a manejar el DOM");
    
})
*/






/*
//Delegacion de eventos
function flujoEventos(e){
    console.log(
        `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
    );
}

//console.log($divsEventos);
document.addEventListener("click",(e)=>{
    console.log("Click en",e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola estoy aprendiendo a manejar el DOM");
        e.preventDefault();
    }
});
*/





/*
//BOM: propiedades y eventos
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

window.addEventListener("resize",(e)=>{
    console.clear();
    console.log("********Evento Resize********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

// window.addEventListener("scroll",(e)=>{
//     console.clear();
//     console.log("********Evento Scroll********");
//     console.log(window.scrollX);
//     console.log(window.screenY);
//     console.log(e);
// });

window.addEventListener("load",(e)=>{
    //console.clear();
    console.log("********Evento Load********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

window.addEventListener("DOMContentLoaded",(e)=>{
    //console.clear();
    console.log("********Evento DOMContentLoaded********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});
*/





//BOM:Metodos
//window.alert("alerta");
//window.confirm("confirmacion");
//window.prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
 $btnCerrar = document.getElementById("cerrar-ventana"),
 $btnImprimir = document.getElementById("imprimir-ventana");

 let ventana;

$btnAbrir.addEventListener("click",(e)=>{
    //window.open("https://www.google.com");
    ventana=window.open("https://www.google.com");
});

$btnCerrar.addEventListener("click",(e)=>{
    //window.close();
    ventana.close();
});

$btnImprimir.addEventListener("click",(e)=>{
    window.print();
})





//BOM: Objetos: URL, Historial y navegadores
console.log(location);
console.log(history);
console.log(navigator);
