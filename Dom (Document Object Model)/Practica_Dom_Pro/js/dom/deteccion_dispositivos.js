const d = document,
n = navigator,
ua = n.userAgent;

export default function userDevice(id){
    const $id = d.getElementById(id),
     isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        window: () => ua.match(/windows phone/i),
        any: function(){
            return this.android() || this.ios() || this.window();
        }
     },
     isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function (){
            return this.linux() || this.mac() || this.windows();
        }
     },
     isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function(){
            return (this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera());
        }
     };

    /* 
    console.log(ua)
    console.log(isDesktop.linux())
    console.log(isBrowser.firefox())
    */

    $id.innerHTML = `
     <ul>
      <li>User Agent: <b>${ua}</b></li>
      <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>
    `;

    /*Contenido exclusivo*/
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
    }

    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`
    }

    if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Descargar nuestro software para linux</mark></p>`
    }

    if(isDesktop.mac()){
        $id.innerHTML += `<p><mark>Descargar nuestro software para mac</mark></p>`
    }

    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Descargar nuestro software para windows</mark></p>`
    }

    /*Redirecciones*/
    if(isMobile.android()){
        window.location.href="https://www.youtube.com/watch?v=YykjpeuMNEk";
    }
}
