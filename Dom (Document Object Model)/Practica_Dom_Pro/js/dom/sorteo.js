const d = document;

export default function draw(btn, selector){
    const getWinner = (selector)=>{
        const $players = d.querySelectorAll(selector),
         random = Math.floor(Math.random() * $players.length),
         winner = $players[random];

         //console.log($players,random,winner);

         return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
}

/****Este codigo es para hacer un sorteo digital que se puede hacer 
 * en una red social ya sea facebook, twitter, youtube, or
*/
const getWinnerComment = (selector)=>{
    const $players = document.querySelectorAll(selector),
     random = Math.floor(Math.random() * $players.length),
     winner = $players[random];

    return `El ganador es: ${winner.textContent}`;
}

//getWinnerComment("ytd-comment-renderer #author-text span")