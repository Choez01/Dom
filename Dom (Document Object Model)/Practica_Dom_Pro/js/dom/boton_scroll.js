const d = document,
 w = window;

export default function scrollTopButton(btn){
    const $srollBtn = d.querySelector(btn);

    w.addEventListener("scroll",(e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 60){
            $srollBtn.classList.remove("hidden");
        } else {
            $srollBtn.classList.add("hidden");
        }
    });

    d.addEventListener("click",(e) => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top:0,
            });
        }
    });
}