var img_idx = 0
var img_src = new Array("boat_austin.jpg", "downtown_austin.jpeg", "atx_mural.jpeg")

function changeImg() {
    // console.log(img_idx, img_src.length)
    if (img_idx === img_src.length - 1){
        console.log("into if statement")
        img_idx = 0
    }
    else{
        img_idx++
    }
    console.log(img_src[img_idx])
    document.getElementById("mainImage").src = img_src[img_idx]
}

myInterval = setInterval(changeImg, 3000)

function toggleMute() {

    var video=document.getElementById("myVideo")

    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
  
  }
