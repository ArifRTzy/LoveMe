document.getElementById("no").addEventListener("click",function(){
    const button = this;
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;

    const newLeft = Math.floor(Math.random() * (bodyWidth - button.clientWidth));
    const newTop = Math.floor(Math.random() * (bodyHeight - button.clientHeight));

    button.style.position = 'absolute';
    button.style.left = newLeft + 'px';
    button.style.top = newTop + 'px';

})
document.getElementById("yes").addEventListener("click",function(){
    document.getElementById("drake").style.display = "block"
})