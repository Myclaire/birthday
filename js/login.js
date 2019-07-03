$('#login-button').click(function(event) {
	var userName = document.getElementById("userName").value;
	var pwd = document.getElementById("pwd").value;
	//修改密码请改此处
	if(userName == "宝宝" && pwd == "980802") {
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		requestFullScreen();
		setTimeout(function() {
			location.href = "BirthdayCake.html";
		}, 2000);
	} else {
		alert("Wrong Password");
	}
});

function requestFullScreen(element) {
	var element = document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
		element.webkitRequestFullScreen || //Chrome等
		element.mozRequestFullScreen || //FireFox
		element.msRequestFullScreen; //IE11
	if(requestMethod) {
		requestMethod.call(element);
	} else if(typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if(wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
}

function timer() {
	var start = new Date(2018, 1, 1); // 2015.7.2
	var t = new Date() - start;
	var h = ~~(t / 1000 / 60 / 60 % 24);
	if(h < 10) {
		h = "0" + h;
	}
	var m = ~~(t / 1000 / 60 % 60);
	if(m < 10) {
		m = "0" + m;
	}

	var s = ~~(t / 1000 % 60);
	if(s < 10) {
		s = "0" + s;
	}
	document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
	document.getElementById('h').innerHTML = h;
	document.getElementById('m').innerHTML = m;
	document.getElementById('s').innerHTML = s;
}
timer();
setInterval(timer, 1000);