const d = document,
 w = window,
 ls = localStorage,
 $menu = d.querySelector('#mobile-menu'),
 $menuLinks = d.querySelector('.menu'),
 $scroll = d.querySelector(".scroll"),
 btn = ".dark",
 claro = ".fa-sun",
 oscuro = ".fa-moon",
 $video = d.querySelector(".video"),
 $mapa = d.querySelector(".mapa"),
 $url = d.getElementById("url");
 $ancho = d.getElementById("ancho");
 $alto = d.getElementById("alto");
 $openBtn = d.getElementById("open"),
 $closedBtn = d.getElementById("closed");

$menu.addEventListener('click', function(){
    $menu.classList.toggle('is-active');
    $menuLinks.classList.toggle('is-active');
});

$menuLinks.addEventListener('click', function(){
    $menu.classList.toggle('is-active');
    $menuLinks.classList.remove('is-active');

});

/*********boton scroll*********/
w.addEventListener("scroll",e => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if(scrollTop > 90){
        $scroll.classList.remove("hidden");
    } else{
        $scroll.classList.add("hidden");
    }
});

d.addEventListener("click",(e) => {
    if(e.target.matches(".scroll") || (e.target.matches(".fa-arrow-up"))){
        w.scrollTo({
            behavior:"smooth",
            top:0,
        });
    }
});


/*********Modo oscuro dark/light*********/
/*
$btn.addEventListener("click",(e)=>{
   d.body.classList.toggle("darks");
   // $btn.classList.toggle("active");
})

console.log(localStorage);
console.log("hola")
*/


/*********Modo oscuro dark/light con localStorage*********/
const lightMode=()=>{
    d.body.classList.add("darks");
    ls.setItem("theme","light");
}

const darkMode=()=>{
    d.body.classList.remove("darks");
    ls.setItem("theme","darks");
}

d.addEventListener("click",(e)=>{

    if(e.target.matches(`${btn} *`)){
        if((e.target.matches(`${oscuro}`))){
            lightMode();
        }

        if((e.target.matches(`${claro}`))){
            darkMode();
        }
    }

});


d.addEventListener("DOMContentLoaded",(e)=>{
    if(ls.getItem("theme")===null)ls.setItem("theme","light");

    if(ls.getItem("theme")==="light")lightMode();

    if(ls.getItem("theme")==="darks")darkMode();
});


/********* Responsive con javascript*********/
d.addEventListener("DOMContentLoaded",(e)=>{

    const mostrar=()=>{
        if(w.innerWidth <= 768){        
            $video.innerHTML = `<a href="https://youtu.be/YykjpeuMNEk" target="_blank">Video</a>`;
            $mapa.innerHTML= `<a href="https://goo.gl/maps/cdngkHYJ8VsZ5Qtx6" target="_blank">Mapa</a>`;
        } 
    
        if(w.innerWidth >= 768){
            $video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/YykjpeuMNEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
            $mapa.innerHTML= `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63792.54809327376!2d-79.63245365839713!3d-2.1405529471054754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d47b1ac773e79%3A0xca6e788c9cf5a035!2sMilagro!5e0!3m2!1ses!2sec!4v1683252986053!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        }
    }
    w.addEventListener("resize",mostrar);
    mostrar();
});


/********* Responsive Tester*********/
d.addEventListener("DOMContentLoaded",(e)=>{
    let ventana;
    
    $openBtn.addEventListener("click",(e)=>{
        ventana=w.open(`${$url.value}`,"",`width=${ancho.value}, height=${$alto.value}`); 
    })
        
    $closedBtn.addEventListener("click",(e)=>{
        ventana.close();
    })
});




/************ ScrollSpy ************/
d.addEventListener("DOMContentLoaded",(e)=>{
    const scrollRoot = d.querySelector('[data-scroller]'),
     $section = d.querySelectorAll("section[data-section]");
    
    const options = {
        //root: scrollRoot, // El elemento root (por defecto es el viewport)
        //rootMargin: "0px", // Margen adicional alrededor del root
        threshold: 0.75 // Valor entre 0 y 1 que indica el porcentaje de intersección requerido
    }
      
    const onIntersect = (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                d.querySelector(`li a[data-section][href="#${id}"]`).classList.add("active");
                //console.log(entry)
            } else{
                d.querySelector(`li a[data-section][href="#${id}"]`).classList.remove("active");
            }
        })
    }
    
    const observer = new IntersectionObserver(onIntersect, options)
    
    $section.forEach((section) => {
      observer.observe(section)
    })

})



/********* Video inteligente *********/
d.addEventListener("DOMContentLoaded",(e)=>{
    const $videos = d.getElementById("video"),
    $section = d.querySelectorAll("section");
    
    d.addEventListener("visibilitychange",(e)=>{
        if(d.visibilityState==="visible"){
            $videos.play()
        }else{
            $videos.pause()
        }
    })
    
    const Intersection = (entries) =>{
        entries.forEach((entry)=>{
            if(entry.target===$section[2]){
                $videos.play()
            }else{
                $videos.pause()
            }
        })
    }
    
    const observar = new IntersectionObserver(Intersection, {
        threshold: [0.5 ,0.75]
    })
    
    $section.forEach((section) => {
        observar.observe(section)
    })
})