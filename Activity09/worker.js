// worker.js
let colors = ["red", "orange", "yellow", "green", "blue", "indigo"];
let BGcolors = ["yellow", "black", "green", "yellow", "red", "orange"];
let i = 0;

function getNextColor() {
	let text_col = colors[i];
	let bg_col = BGcolors[i];
	i = (i + 1) % colors.length;
	return {text_col, bg_col};
}


function getCurrentTime() {
    let now = new Date();
    let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' ,timeZone: 'Asia/Bangkok' };
    let formattedTime = now.toLocaleTimeString('en-US', options) + '00 (Indochina Time)';
    
    return formattedTime;
}

function	fetchTime(){
	let time = getCurrentTime();
	let colors = getNextColor();
	let text_color = colors.text_col;
	let bg_color = colors.bg_col;
	postMessage({time, text_color, bg_color});
}

var interval;

onmessage = (event) => {
	console.log(event.data);
	if (event.data == 'start'){
		interval = setInterval(fetchTime, 1000);
		console.log(interval)
	}
	else {
		postMessage('stop');
		clearInterval(interval);
}

}

// worker.onmessage = function(event) {
// 	if (event == 'start')
// 	{	setInterval(() => {
// 			let time = getCurrentTime();
// 			let color = getNextColor();
// 			postMessage({ time, color });
// 		}, 1000);
// 		// timecontainer.textContent = event.data.time;
// 		// timecontainer.style.color = event.data.color;
// 	}
// 	else {
// 		clearInterval();
// 	}
// };


// setInterval(() => {
// 	let time = getCurrentTime();
// 	let color = getNextColor();
// 	postMessage({ time, color });
// }, 1000);

