'use strict';

var Clock = Clock || {};

Clock.define = function(namespace){
	var parts = namespace.split('.'),
			parent = Clock,
			i;

	if(parts[0] == 'Clock'){
		parts = parts.slice(1);
	}		

	for(i = 0; i < parts.length; i++){
		if(typeof parent[parts[i]] == 'undefined'){
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
}

Clock.define('utils.arrowClock');

Clock.utils.arrowClock = (function(){

	var hourHand = document.querySelector('.hour-hand'),
	minHand = document.querySelector('.min-hand'),
	secondHand = document.querySelector('.second-hand');

	function setThisMoment(){
		var now = new Date();
   
		var seconds = now.getSeconds();
		var secondsDegrees = ((seconds / 60) * 360) + 90;
		secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';

		const mins = now.getMinutes();
		const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
		minHand.style.transform = 'rotate('+ minsDegrees + 'deg)';

		const hour = now.getHours();
		const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
		hourHand.style.transform = 'rotate('+ hourDegrees +'deg)';
	};

	setInterval(setThisMoment, 1000);
	setThisMoment();
})();

var arrowClock = Clock.utils.arrowClock;