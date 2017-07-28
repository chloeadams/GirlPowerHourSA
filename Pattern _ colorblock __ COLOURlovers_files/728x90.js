window.onload = function() {

  // Definitions
	var bg = document.getElementById("bg"),

	text1 = document.getElementById("text1"),
	text2 = document.getElementById("text2"),
	text3 = document.getElementById("text3"),
	text4 = document.getElementById("text4"),
	text5 = document.getElementById("text5"),
	gate = document.getElementById("gate"),
	roll = document.getElementById("roll"),
	shadow = document.getElementById("shadow"),

	cta = document.getElementById("cta"),
	logo = document.getElementById("logo"),

	clickarea = document.getElementById("click-area");

	var easing = Power2.easeOut,
	easend = Power4.easeIn;
  // Functions
	var posX = [0,65,131,196];
	var posY = {
		'up': -49,
		'down': 49,
		'md': 0
	}
	var defer = [0,1.25,2.5,3.75,5,14.5];
	var array = [
		[
			{'name': 'k', 'pos': 0, 'start': 'up', 'next': 'down'},
			{'name': 'n', 'pos': 1, 'start': 'down', 'next': 'up'},
			{'name': 'o', 'pos': 2, 'start': 'up', 'next': 'down'},
			{'name': 'w', 'pos': 3, 'start': 'down', 'next': 'up'}
		],
		[
			{'name': 'h', 'pos': 0, 'start': 'up',   'next': 'down'},
			{'name': 'i', 'pos': 1, 'start': 'down', 'next': 'down'},
			{'name': 'r', 'pos': 2, 'start': 'up',   'next': 'down'},
			{'name': 'e', 'pos': 3, 'start': 'down', 'next': 'up'}
		],
		[
			{'name': 'l', 'pos': 0, 'start': 'up', 'next': 'up'},
			{'name': 'e', 'pos': 1, 'start': 'up',   'next': 'down'},
			{'name': 'a', 'pos': 2, 'start': 'up', 'next': 'down'},
			{'name': 'd', 'pos': 3, 'start': 'down', 'next': 'down'}
		],
		[
			{'name': 's', 'pos': 0, 'start': 'down',   'next': 'up'},
			{'name': 'h', 'pos': 1, 'start': 'up',   'next': 'up'},
			{'name': 'r', 'pos': 2, 'start': 'up', 'next': 'down'},
			{'name': 'm', 'pos': 3, 'start': 'up', 'next': 'down'}
		],
		[
			{'name': '', 'pos': 0, 'start': 'down',   'next': 'up'},
			{'name': '', 'pos': 1, 'start': 'up',   'next': 'up'},
			{'name': '', 'pos': 2, 'start': 'up', 'next': 'down'},
			{'name': '', 'pos': 3, 'start': 'up', 'next': 'down'}
		],
		[
			{'name': 'l', 'pos': 0, 'start': 'down',   'next': ''},
			{'name': 'e', 'pos': 1, 'start': 'up',   'next': ''},
			{'name': 'a', 'pos': 2, 'start': 'up', 'next': ''},
			{'name': 'd', 'pos': 3, 'start': 'up', 'next': ''}
		]
	];
	array.forEach( function(e){
		var i = array.indexOf(e);
		e.forEach( function(ob){
			var tempo = '';
			tempo = document.createElement("div");
			tempo.className = ob['name'] + " letter";
			tempo.setAttribute("style", `left: ${posX[ob['pos']]}px; top: ${posY[ob['start']]}px;`);
			roll.appendChild(tempo);

			TweenLite.to(tempo,1,{top: '0' , delay: defer[i], ease: easing}, 0);
			if(ob['next'] != ''){
				TweenLite.to(tempo,1,{y: posY[(ob['next'])], delay: defer[i+1], ease: easing}, 0);
			}
		});
	});

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations
	TweenLite.to(gate, 0.5,{alpha:0, delay:5}, 0);
	TweenLite.to(text1,0.5,{alpha:1, delay:5}, 0);

	TweenLite.to(text2,0.5,{alpha:1, delay:7.5}, 0);
	TweenLite.to(text1,0.5,{alpha:0, delay:7});
	TweenLite.to(shadow,0.5,{alpha:0, delay:7}, 0);
	TweenLite.to(shadow,0.5,{alpha:1, delay:7.5}, 0);

	TweenLite.to(text2,0.5,{alpha:0, delay:9}, 0);
	TweenLite.to(text3,0.5,{alpha:1, delay:9.5}, 0);
	TweenLite.to(shadow,0.5,{alpha:0, delay:9}, 0);
	TweenLite.to(shadow,0.5,{alpha:1, delay:9.5}, 0);

	TweenLite.to(text3,0.5,{alpha:0, delay:11.5}, 0);
	TweenLite.to(text4,0.5,{alpha:1, delay:12}, 0);
	TweenLite.to(shadow,0.5,{alpha:0, delay:11.5}, 0);
	TweenLite.to(shadow,0.5,{alpha:1, delay:12}, 0);


	TweenLite.to(shadow,0.5,{alpha:0, delay:14}, 0);
	TweenLite.to(shadow,0.5,{alpha:1, delay:14.5}, 0);
	TweenLite.to(text4,0.5,{alpha:0, delay:14}, 0);
	TweenLite.to([roll,gate],0,{scale:0.82, x:-241, delay: 14}, 0);
	TweenLite.to([text5,gate],0.5,{opacity:1, delay:14.5, ease: easing}, 0);
	TweenLite.to(logo,0.5,{opacity:1, y: -88, delay:14.5,ease: easing}, 0);
	TweenLite.to(cta,0.5,{opacity:1, delay:14.5,ease: easing}, 0);
/**/
}//end
