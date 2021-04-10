setInterval(() => 
	setInterval(() => document.getElementsByClassName('g47SY ')[1].textContent = (parseInt(document.getElementsByClassName('g47SY ')[1].textContent.replace('.', '')) + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."), 1)
, 100)
