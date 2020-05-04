
var audio = new Audio('images/song.mp3');
var firstClick=true

window.addEventListener("click", function(event) {
    this.console.log('clicked')
    if(firstClick)
    {
        audio.play()
        firstClick=false
    }
    else
    {
        audio.pause()
        firstClick=true
    }
});