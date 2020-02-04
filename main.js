function test (sessao) {
	console.log('.' + sessao + '-1')
	document.querySelector('.' + sessao + '-1').style.display = 'none';
	document.querySelector('.' + sessao + '-2').style.display = 'flex';

}

function test2 (sessao) {
	console.log('.' + sessao + '-1')
	document.querySelector('.' + sessao + '-2').style.display = 'none';
	document.querySelector('.' + sessao + '-1').style.display = 'flex';

}