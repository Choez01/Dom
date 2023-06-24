const d = document,
 $camara = d.querySelector("button"),
 $video = d.querySelector("video");

$camara.addEventListener("click",async (e)=>{
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            width: 640,
            heigth: 480
        }
    })

    $video.srcObject=stream
})