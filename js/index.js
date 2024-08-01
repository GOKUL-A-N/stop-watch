let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let lapBtn = document.getElementById('lap'); 
let resetBtn = document.getElementById('reset'); 

document.getElementById('hr').innerText = "00"; 
document.getElementById('min').innerText = "00"; 
document.getElementById('sec').innerText = "00"; 
let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

startBtn.addEventListener('click', function () { 
	timer = true; 
	stopWatch(); 
}); 

stopBtn.addEventListener('click', function () { 
	timer = false; 
}); 

lapBtn.addEventListener('click', function () { 
    let laplist = document.getElementById('lapList')
    let newLap = document.createElement('li');
    newLap.textContent = + hour + ":" + minute + ":" + second;
    laplist.appendChild(newLap);
})


resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr').innerText = "00"; 
	document.getElementById('min').innerText = "00"; 
	document.getElementById('sec').innerText = "00";  
}); 

function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

		document.getElementById('hr').innerHTML = hrString; 
		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		setTimeout(stopWatch, 10); 
	} 
}
