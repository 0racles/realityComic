var App = (function () {
	var
	allScreens = document.querySelectorAll(".allScreens")[0],
	secondScreen = document.getElementById("secondScreen"),
	body = document.body,
	playScreen,
	popover = document.getElementById("popover"),
	popover2 = document.getElementById("popover2"),
	spiderman = document.querySelectorAll(".spiderman"),
	carousel = document.querySelectorAll(".carousel")[0],
	i = 0,
	j = 0,
	slideImage = document.querySelectorAll(".slideImage"),
	geoLocMap,
	mapWrapper = document.getElementById("mapWrapper"),
	lab = document.querySelectorAll(".lab"),
	mapOptions = {
			center : new google.maps.LatLng(8, 10),
			zoom : 4,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		},
	spiderman7 = document.getElementById("spiderMan7"),	
	showScreen = function (event) {
		//console.time("checkAttribute");
		var comicScreen = document.querySelectorAll(".comicScreen");
		if (event.target.classList.contains("comicScreen1")) {
			playScreen = event.target.play();
			event.target.classList.remove("Active");
			event.target.classList.add("boldBorder");
			body.setAttribute("background", "C:\/Users\/Guest\/Downloads\/londonCountrySide1.JPG");
			imageOpacityHigh(spiderman[0]);
			$(lab[0]).show()
			$(spiderman[0]).show("drop", 5000);
			makeWells();
			colorLabel(event.target);
			$('[data-toggle="popover"]').popover();
		} else if (event.target.classList.contains("comicScreen2")) {
			playScreen = event.target.play();
			makeWellsScreen2();
			$("body").effect("highlight", {duration:4000});	
			pimp = setInterval(function () { toggleBg()}, 3000);	
			event.target.classList.remove("Active");
			$(lab[1]).show();
			event.target.classList.add("boldBorder");
			colorLabel(event.target);
			//event.cancelable = true;
			//event.preventDefault();
		} else if (event.target.classList.contains("comicScreen3")) {
			playScreen = event.target.play();
			$(spiderman[1]).show("bounce", {times:10, distance:40}, "slow")
			imageOpacityHigh(spiderman[1]);
			event.target.classList.remove("Active");
			event.target.classList.add("boldBorder");
			$(lab[2]).show();
			body.classList.add("backGround");
			colorLabel(event.target);
			body.style.backgroundImage = "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3Df3e039N_-lUbvGbbA8uNMlmqRZfbnS2gCjAwfIHFEZISStV)";//(C:\/Users\/Guest\/Downloads\/rainingDay.JPG)
		} else if (event.target.classList.contains("comicScreen4")) {
			event.target.play();
			$(spiderman[2]).show("fade", 5000);
			imageOpacityHigh(spiderman[2]);
			event.target.classList.remove("Active");
			$(lab[3]).show();
			event.target.classList.add("boldBorder");	
			colorLabel(event.target);	
		} else if (event.target.classList.contains("comicScreen5")) {
			event.target.play();
			$(spiderman[3]).show();
			imageOpacityHigh(spiderman[3]);
			event.target.classList.remove("Active");
			$(lab[4]).show();
			event.target.classList.add("boldBorder");
			colorLabel(event.target);
		} else if (event.target.classList.contains("comicScreen6")) {
			event.target.play();
			$(spiderman[4]).show("explode", 1000, function () { $(spiderman[0]).show("pulsate", 1000); $(spiderman[5]).show("fade", 100); $(spiderman[6]).show("explode", 100); $(spiderman[7]).show(); $(spiderman[8]).show(); $(spiderman[9]).show(); $(spiderman[10]).show(); $(spiderman[11]).show(); $(spiderman[12]).show(); carousel.classList.add("slide")});
			imageOpacityHigh(spiderman[4]);
			event.target.classList.remove("Active");
			$(lab[5]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen7")) {
			event.target.play();
			$(spiderman[13]).show();
			imageOpacityHigh(spiderman[13]);
			event.target.classList.remove("Active");
			$(lab[6]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		}  else if (event.target.classList.contains("comicScreen8")) {
			event.target.play();
			$(spiderman[14]).show();
			imageOpacityHigh(spiderman[14]);
			event.target.classList.remove("Active");
			$(lab[7]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen9")) {
			event.target.play();
			$(spiderman[15]).show();
			imageOpacityHigh(spiderman[15]);
			event.target.classList.remove("Active");
			$(lab[8]).show();
			colorLabel(event.target)
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen10")) {
			event.target.play();
			$(spiderman[16]).show();
			imageOpacityHigh(spiderman[16]);
			event.target.classList.remove("Active");
			$(lab[9]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen11")) {
			event.target.play();
			$(spiderman[17]).show("fade", 5000, function() { $("#elevenScreen").hide()});
			imageOpacityHigh(spiderman[17]);
			event.target.classList.remove("Active");
			$(lab[10]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen12")) {
			event.target.play();
			$(spiderman[18]).show("fade", 5000, function () {$("#underScreen").hide()});
			event.target.classList.remove("Active");
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen13")) {
			event.target.play();
			$(spiderman[19]).show("fade", 5000, function () { $("#underScreen2").hide()});
			event.target.classList.remove("Active");
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen14")) {
			event.target.play();
			$(spiderman[20]).show("fade", 5000, function () { $("#underScreen3").hide()});
			event.target.classList.remove("Active");
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen15")) {
			event.target.play();
			$(spiderman[21]).show("fade", 5000, function () { $("#underScreen4").hide()});
			event.target.classList.remove("Active");
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen16")) {
			event.target.play();
			$(spiderman[22]).show("fade", 5000, function () { $("#underScreen5").show()});
			event.target.classList.remove("Active");
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen17")) {
			event.target.play();
			$(spiderman[23]).show();
			imageOpacityHigh(spiderman[23]);
			event.target.classList.remove("Active");
			$(lab[16]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen18")) {
			event.target.play();
			$(spiderman[24]).show();
			imageOpacityHigh(spiderman[24]);
			event.target.classList.remove("Active");
			$(lab[17]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen19")) {
			event.target.play();
			$(spiderman[25]).show();
			imageOpacityHigh(spiderman[25]);
			event.target.classList.remove("Active");
			$(lab[18]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen20")) {
			event.target.play();
			$(spiderman[26]).show();
			imageOpacityHigh(spiderman[26]);
			event.target.classList.remove("Active");
			$(lab[19]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen21")) {
			event.target.play();
			$(spiderman[27]).show();
			imageOpacityHigh(spiderman[27]);
			event.target.classList.remove("Active");
			$(lab[20]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen22")) {
			event.target.play();
			$(spiderman[28]).show();
			imageOpacityHigh(spiderman[28]);
			event.target.classList.remove("Active");
			$(lab[21]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen23")) {
			event.target.play();
			$(spiderman[29]).show();
			imageOpacityHigh(spiderman[29]);
			event.target.classList.remove("Active");
			$(lab[22]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen24")) {
			event.target.play();
			$(spiderman[30]).show();
			imageOpacityHigh(spiderman[30]);
			event.target.classList.remove("Active");
			$(lab[23]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen25")) {
			event.target.play();
			$(spiderman[31]).show();
			imageOpacityHigh(spiderman[31]);
			event.target.classList.remove("Active");
			$(lab[24]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen26")) {
			event.target.play();
			$(spiderman[32]).show();
			imageOpacityHigh(spiderman[32]);
			event.target.classList.remove("Active");
			$(lab[25]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen27")) {
			event.target.play();
			$(spiderman[33]).show();
			imageOpacityHigh(spiderman[33]);
			event.target.classList.remove("Active");
			$(lab[26]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen28")) {
			event.target.play();
			$(spiderman[34]).show();
			imageOpacityHigh(spiderman[34]);
			event.target.classList.remove("Active");
			$(lab[27]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen29")) {
			event.target.play();
			$(spiderman[35]).show();
			imageOpacityHigh(spiderman[35]);
			event.target.classList.remove("Active");
			$(lab[28]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen30")) {
			event.target.play();
			$(spiderman[36]).show();
			imageOpacityHigh(spiderman[36]);
			event.target.classList.remove("Active");
			$(lab[29]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen31")) {
			event.target.play();
			$(spiderman[37]).show();
			imageOpacityHigh(spiderman[37]);
			event.target.classList.remove("Active");
			$(lab[30]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen32")) {
			event.target.play();
			$(spiderman[38]).show();
			imageOpacityHigh(spiderman[38]);
			event.target.classList.remove("Active");
			$(lab[31]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen33")) {
			event.target.play();
			$(spiderman[39]).show();
			imageOpacityHigh(spiderman[39]);
			event.target.classList.remove("Active");
			$(lab[32]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen34")) {
			event.target.play();
			$(spiderman[40]).show();
			imageOpacityHigh(spiderman[40]);
			event.target.classList.remove("Active");
			$(lab[33]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		} else if (event.target.classList.contains("comicScreen35")) {
			event.target.play();
			$(spiderman[41]).show();
			imageOpacityHigh(spiderman[41]);
			event.target.classList.remove("Active");
			$(lab[34]).show();
			colorLabel(event.target);
			event.target.classList.add("boldBorder");
		}
		//showPopover();
		//console.timeEnd("checkAttribute");
		
	},
	stopScreens = function (event) {
		if (event.target.classList.contains("comicScreen1")) {
			event.target.pause();
			event.target.classList.add("Active")
			event.target.classList.remove("boldBorder");
			removeWell1();
			testVideo();
			imageOpacityLow(spiderman[0]);
			body.setAttribute("background", "");
			//stoptoggleBg();
			uncolorLabel(event.target)
			body.style.backgroundColor = "";
			//moveProgressBar();
		} else if (event.target.classList.contains("comicScreen2")) {
			event.target.pause()
			removeWell2();
			stoptoggleBg();
			event.target.classList.add("Active");
			event.target.classList.remove("boldBorder");
			uncolorLabel(event.target);
		} else if (event.target.classList.contains("comicScreen3")) {
			event.target.pause();
			imageOpacityLow(spiderman[1]);
			event.target.classList.add("Active");
			event.target.classList.remove("boldBorder");
			body.style.backgroundImage = "";
			uncolorLabel(event.target);
		} else if (event.target.classList.contains("comicScreen4")) {
			event.target.pause();
			imageOpacityLow(spiderman[2]);
			event.target.classList.add("Active");
			event.target.classList.remove("boldBorder");
			uncolorLabel(event.target);
		} else if (event.target.classList.contains("comicScreen5"))	{
			event.target.pause();
			imageOpacityLow(spiderman[3]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen6")) {
			event.target.pause();
			imageOpacityLow(spiderman[4]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen7")) {
			event.target.pause();
			imageOpacityLow(spiderman[13]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen8")) {
			event.target.pause();
			imageOpacityLow(spiderman[14]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen9")) {
			event.target.pause();
			imageOpacityLow(spiderman[15]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen10")) {
			event.target.pause();
			imageOpacityLow(spiderman[16]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen11")) {
			event.target.pause();
			imageOpacityLow(spiderman[17]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
			$(spiderman[17]).hide();
		} else if (event.target.classList.contains("comicScreen12")) {
			event.target.pause();
			event.target.classList.add("Active");
			$(spiderman[18]).hide();
		} else if (event.target.classList.contains("comicScreen13")) {
			event.target.pause();
			event.target.classList.add("Active");
			$(spiderman[19]).hide();
		} else if (event.target.classList.contains("comicScreen14")) {
			event.target.pause();
			event.target.classList.add("Active");
			$(spiderman[20]).hide();
		} else if (event.target.classList.contains("comicScreen15")) {
			event.target.pause();
			event.target.classList.add("Active");
			$(spiderman[21]).hide();
		} else if (event.target.classList.contains("comicScreen16")) {
			event.target.pause();
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen17")) {
			event.target.pause();
			imageOpacityLow(spiderman[23]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		}  else if (event.target.classList.contains("comicScreen18")) {
			event.target.pause();
			imageOpacityLow(spiderman[24]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		}  else if (event.target.classList.contains("comicScreen19")) {
			event.target.pause();
			imageOpacityLow(spiderman[25]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		}  else if (event.target.classList.contains("comicScreen20")) {
			event.target.pause();
			imageOpacityLow(spiderman[26]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen21")) {
			event.target.pause();
			imageOpacityLow(spiderman[27]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen22")) {
			event.target.pause();
			imageOpacityLow(spiderman[28]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen23")) {
			event.target.pause();
			imageOpacityLow(spiderman[29]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen24")) {
			event.target.pause();
			imageOpacityLow(spiderman[30]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen25")) {
			event.target.pause();
			imageOpacityLow(spiderman[31]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen26")) {
			event.target.pause();
			imageOpacityLow(spiderman[32]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen27")) {
			event.target.pause();
			imageOpacityLow(spiderman[33]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen28")) {
			event.target.pause();
			imageOpacityLow(spiderman[34]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen29")) {
			event.target.pause();
			imageOpacityLow(spiderman[34]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen30")) {
			event.target.pause();
			imageOpacityLow(spiderman[35]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen31")) {
			event.target.pause();
			imageOpacityLow(spiderman[36]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen32")) {
			event.target.pause();
			imageOpacityLow(spiderman[37]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		}  else if (event.target.classList.contains("comicScreen33")) {
			event.target.pause();
			imageOpacityLow(spiderman[38]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen34")) {
			event.target.pause();
			imageOpacityLow(spiderman[39]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} else if (event.target.classList.contains("comicScreen35")) {
			event.target.pause();
			imageOpacityLow(spiderman[40]);
			event.target.classList.add("Active");
			uncolorLabel(event.target);
			event.target.classList.remove("boldBorder");
		} 
	},
	hideImages = function () {
		for (i; i < spiderman.length; i++) {
			for (var j = 0; j < lab.length; j++) {
				$(spiderman[i]).hide();
				$(lab[i]).hide();	
			}
		}	
	},
	/*clearAll = function () {
		if (allScreens.parentNode.childNodes !== null) {
			allScreens.parentNode.hide(allScreens);
		}
	},*/
	imageOpacityLow = function (para) {
		para.style.opacity = 0.4;
	},
	imageOpacityHigh = function (para) {
		para.style.opacity = 1.0;
	},
	addEventHandlers = function () {
		allScreens.addEventListener("mouseenter", showScreen, true);
		allScreens.addEventListener("mouseout", stopScreens, true);
		allScreens.addEventListener("load", hideImages, true);
		google.maps.event.addDomListener(window, "load", initializeGM);
		//spiderman7.addEventListener("click", getUserPosition);
		//allScreens.addEventListener("play", moveProgressBar, true)
	},
	toggleBg = function () {
		body.style.backgroundColor = body.style.backgroundColor == "black" ? "red" : "black";
	},
	showPopover = function () {
		var getter = popover.getAttribute("data-content");
		if (getter.value !== null) {
			chatKemi();
		}
	},
	chatKemi = function () {
		var getName = prompt("What is your name?");

		if (isNaN(getName) && popover.hasAttribute("data-content")) {
			popover.setAttribute("data-content", "Hi " + getName );
		} else {
			alert("a number was found in your name")
		}
	},
	stoptoggleBg = function () {
		clearInterval(pimp);
	},
	testVideo = function () {
		var fourthScreen = document.getElementById("fourthScreen");
			//document.getElementById("min1").src = "C:/Users/Guest/Downloads/magisto-movie (1).mp4";
		//fourthScreen.load(); //This is a very good idea to making a "past participle" action in the comic. Listen to this idea from my recordings. 
			//if (fourthScreen.paused) {
				
			//}
			
	},
	moveProgressBar = function () {
		var progressBar = document.querySelectorAll(".progress-bar")[0],
			firstScreen = document.getElementById("firstScreen"),
			taker = parseInt(progressBar.style.width, 10),
			des = firstScreen.paused;
		//while (des) {
			//++taker;
			//!des;
		//}
		var res = taker.toString() + "%";
			//progressBar.style.width = res;
	},
	makeWells = function () {
		var
		html = "<div class='well well\-sm words wello'>It was a warm and sunny day Lagos Nigeria. The sun was out and about<\/div>";
		popover.insertAdjacentHTML("afterbegin", html);
		well = document.querySelectorAll(".wello");
	},
	makeWellsScreen2 = function () {
		var 
		html = "<div class='well well\-sm bg\-warning words2 wella'>....and suddenly dark clouds began to form<\/div>";
		popover2.insertAdjacentHTML("afterbegin", html);
		wella = document.querySelectorAll(".wella");
	},
	removeWell1 = function () {
			if (well[0].parentNode !== null) {
				well[0].parentNode.removeChild(well[0]);
			}
	},
	removeWell2 = function () {
		if (wella[0].parentNode !== null) {
			wella[0].parentNode.removeChild(wella[0]);
		}
	},
	colorLabel = function (para) {
		if (para.parentNode.id === "popover") {
			$(lab[0]).addClass("label-danger");	
	   } else if (para.parentNode.id === "popover2") {
	   	 	$(lab[1]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv3") {
	   		$(lab[2]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv4") {
	   		$(lab[3]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv5") {
	   		$(lab[4]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv6") {
	   		$(lab[5]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv7") {
	   		$(lab[6]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv8") {
	   		$(lab[7]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv9") {
	   		$(lab[8]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv10") {
	   	   	$(lab[9]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv11") {
	   		$(lab[10]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv12") {
	   		$(lab[16]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv13") {
	   		$(lab[17]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv14") {
	   		$(lab[18]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv15") {
	   		$(lab[19]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv16") {
	   		$(lab[20]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv17") {
	   		$(lab[21]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv18") {
	   		$(lab[22]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv19") {
	   		$(lab[23]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv20") {
	   		$(lab[24]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv21") {
	   		$(lab[25]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv22") {
	   		$(lab[26]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv23") {
	   		$(lab[27]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv24") {
	   		$(lab[28]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv25") {
	   		$(lab[29]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv26") {
	   		$(lab[30]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv27") {
	   		$(lab[31]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv28") {
	   		$(lab[32]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv29") {
	   		$(lab[33]).addClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv30") {
	   		$(lab[34]).addClass("label-danger");
	   }
	},
	uncolorLabel = function (para) {
		if (para.parentNode.id === "popover") {
			$(lab[0]).removeClass("label-danger");
	   } else if (para.parentNode.id === "popover2") {
	   	    $(lab[1]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv3") {
		$(lab[2]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv4") {
		$(lab[3]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv5") {
		$(lab[4]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv6") {
		$(lab[5]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv7") {
		$(lab[6]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv8") {
		$(lab[7]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv9") {
	   	 $(lab[8]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv10") {
	   	 $(lab[9]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv11") {
	   	 $(lab[10]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv12") {
	   	 $(lab[16]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv13") {
	   	 $(lab[17]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv14") {
	   	 $(lab[18]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv15") {
	   	 $(lab[19]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv16") {
	   	 $(lab[20]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv17") {
	   	 $(lab[21]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv18") {
	   	 $(lab[22]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv19") {
	   	 $(lab[23]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv20") {
	   	 $(lab[24]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv21") {
	   	 $(lab[25]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv22") {
	   	 $(lab[26]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv23") {
	   	 $(lab[27]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv24") {
	   	 $(lab[28]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv25") {
	   	 $(lab[29]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv26") {
	   	 $(lab[30]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv27") {
	   	 $(lab[31]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv28") {
	   	 $(lab[32]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv29") {
	   	 $(lab[33]).removeClass("label-danger");
	   } else if (para.parentNode.id === "parentDiv30") {
	   	 $(lab[34]).removeClass("label-danger");
	   }
	},
	initializeGM = function () {
	   geoLocMap = new google.maps.Map(mapWrapper, mapOptions);
	   var marker = new google.maps.Marker({
	   	position : new google.maps.LatLng(6.5833, 3.7500),
	   	map : geoLocMap,
	   	animation : google.maps.Animation.BOUNCE  
	   });
	},
	/*getUserPosition =function () {
	   	navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
	},*/
	positionSuccess = function(position) {
	   var userLocation = new google.maps.LatLng(51.508742,-0.120850);

	   	var marker = new google.maps.Marker({
	   		position : userLocation,
	   		map : geoLocMap
	   	});
	   	//geoLocMap.setCenter(userLocation);
	   	//geoLocMap.setZoom(14);
	   	
	},
	animateBox10 = function () {
		$("#elevenScreen").show("fold", 5000, function () {
			$("#underScreen").show("fade", 5000, function() {
				 $("#underScreen2").show("fade",5000, function () {
				 	$("#underScreen3").show("fade", 5000, function () {
				 		$("#underScreen4").show("fade", 5000, function () {
				 			$("#underScreen5").show();
				 		})
				 	})
				 })
			})
		})
	},
	flipImage = function () {
		$("#spiderMan11").show("fade", 1000, function () {
			$("#underImage").show("fade", 1000, function () {
				$("#underImage2").show("fade", 1000, function () {
					$("#underImage3").show("fade", 1000, function () {
						$("#underImage4").show("fade", 1000, function() {
							$("#underImage5").show();
						})
					})
				})
			})
		})
	},
	positionError = function () {
		alert("google cannot get your location at this time");
	};
	addEventHandlers();
}());