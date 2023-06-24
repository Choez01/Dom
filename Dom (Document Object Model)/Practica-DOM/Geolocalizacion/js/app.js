const d = document,
 n = navigator,
 $div = d.getElementById("geolocalizacion");
 
if(!"geolocation" in navigator){
    console.error("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
}
 
const ubicacionObtenida = ubicacion =>{
    console.log("Tengo la ubicacion: ", ubicacion);
    const coordenadas = ubicacion.coords;
    $div.classList.add("centrar");
    $div.innerHTML=`
    <ul>
        <li>Latitud: ${coordenadas.latitude}</li>
        <li>Longitud: ${coordenadas.longitude}</li>
        <li>Presicion: ${coordenadas.accuracy} metros</li>
        <br>
        <a href="https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude}" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
    </ul>
    `;
}
 
const ErrorUbicacion = err =>{
    $div.classList.add("centrar");
    $div.innerHTML=`
    "Error obteniendo ubicacion:" ${err.message}
    `;
    console.log("Error obteniendo ubicacion: ", err);
}
 
const opciones ={
    enableHeightAccuracy:true,
    timeout: 5000,
    maximunAge: 0
};

$div.classList.add("centrar");
$div.innerHTML=`
    <ul>
        <li>Latitud: "Cargando..."</li>
        <li>Longitud: "Cargando..."</li>
        <li>Presicion: "Cargando..."</li>
    </ul>
`;
 
n.geolocation.getCurrentPosition(ubicacionObtenida, ErrorUbicacion, opciones);
//d.body.insertAdjacentElement("beforeend",$div);