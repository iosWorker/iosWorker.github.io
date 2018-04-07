// I am going to continue to improve this...
// I attempt to perform candle again but could not overcome the previous version.
// http://codepen.io/fixcl/pen/nKFDr


$(document).ready(function(){
	
var x = document.getElementById("media"); 

    $("#audio_btn").click(function(){
        $(this).toggleClass("rotate"); //控制音乐图标 自转或暂停
        
        //控制背景音乐 播放或暂停            
        if($(this).hasClass("rotate")){
            x.play();
        }else{
            x.pause();
        }
    })
    
    function audioAutoPlay(id){
var audio = document.getElementById(id);
audio.play();
document.addEventListener("WeixinJSBridgeReady", function () {
audio.play();
    }, false);
document.addEventListener('YixinJSBridgeReady', function() {
audio.play();
    }, false);
}
audioAutoPlay('audio_btn');//xxx是你audio标签的id

	
});
