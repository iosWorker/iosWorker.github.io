// I am going to continue to improve this...
// I attempt to perform candle again but could not overcome the previous version.
// http://codepen.io/fixcl/pen/nKFDr

$(document).ready(function() {

	var x = document.getElementById("media");

	$("#audio_btn").click(function() {
		$(this).toggleClass("rotate"); //控制音乐图标 自转或暂停

		//控制背景音乐 播放或暂停            
		if($(this).hasClass("rotate")) {
			x.play();
		} else {
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
        audioAutoPlay('media');
	
	var initTime = 15;
	var durTime = 3.5;
	setTimeout(function() {
		$('#p1').animateCss('fadeInLeft','6000').css('visibility','inherit');
	}, initTime*1000);
	setTimeout(function() {
		$('#p2').animateCss('fadeInRight').css('visibility','inherit');
	}, (initTime+durTime)*1000);
	setTimeout(function() {
		$('#p3').animateCss('fadeInLeft').css('visibility','inherit');
	}, (initTime+durTime*2)*1000);
	setTimeout(function() {
		$('#p4').animateCss('fadeInRight').css('visibility','inherit');
	}, (initTime+durTime*3)*1000);
	setTimeout(function() {
		$('#p5').animateCss('fadeInLeft').css('visibility','inherit');
	}, (initTime+durTime*4)*1000);
	setTimeout(function() {
		$('#h1,#h2').animateCss('fadeInUp').css('visibility','inherit');
	}, (initTime+durTime*5)*1000);
	setTimeout(function() {
		$('.icon1').animateCss('rotateInDownLeft').css('visibility','inherit');
	}, (initTime+durTime*6)*1000);
	setTimeout(function() {
		$('.icon2').animateCss('rotateInUpRight').css('visibility','inherit');
	}, (initTime+durTime*7)*1000);


});