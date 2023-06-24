const d = document;

const sorteo=()=>{
    const nombres = ["JavaScript", "PHP", "JAVA", "C", "Python", "Ruby","Go","Visual Basic","Rust","Perl"];
    const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    console.log(`El ganador es: "${aleatorio}"`);
    alert(`El ganador es: "${aleatorio}"`);
}

d.addEventListener("click",(e)=>{
    if(e.target.matches("button")){
        sorteo();
    }
})