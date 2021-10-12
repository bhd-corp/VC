let f1 = document.getElementById('form1');
f1.addEventListener('click', function(){
	f1.style.border = '10px solid purple';
	f2.style.border = 'none';
	let h = document.getElementById('h2');
	h.style.display = 'block';
	let h4 = document.getElementById('h4');
	h4.innerHTML = '523';
	let hw = document.getElementById('h42');
	hw.innerHTML = '294';
});
let f2 = document.getElementById('form2');
f2.addEventListener('click', function(){
	f2.style.border = '10px solid red';
	f1.style.border = 'none';
	let h = document.getElementById('h2');
	h.style.display = 'none';
	let h4 = document.getElementById('h42');
	h4.innerHTML = '295';
	let w = document.getElementById('h4');
	w.innerHTML = '522';
});
let button = document.getElementById('but');
button.addEventListener('click', function(){
	alert('Thank you');
});