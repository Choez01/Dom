const d = document,
 $buscar = d.querySelectorAll(".card"),
 $input = d.querySelector("input");

d.addEventListener("keydown",(e)=>{
  function buscar() {
    $buscar.forEach(el => {
      if(el.innerText.toLowerCase() != $input.value.toLowerCase()){
        el.style.setProperty("display", "none");
      }
      if($input.value===""){
        el.style.setProperty("display", "flex");
      }
    });
  }
  if(e.key==="Enter"){
    buscar(`${$input.value}`)
  }

})