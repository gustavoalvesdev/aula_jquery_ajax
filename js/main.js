function consultaCep() {

	var cep = document.getElementsByName('cep')[0];

	var showCep = document.getElementById('showCep');
	var showLogradouro = document.getElementById('showLogradouro');
	var showComplemento = document.getElementById('showComplemento');
	var showBairro = document.getElementById('showBairro');
	var showLocalidade = document.getElementById('showLocalidade');
	var showUf = document.getElementById('showUf');
	var showIbge = document.getElementById('showIbge');
	var showGia = document.getElementById('showGia');
	var showDdd = document.getElementById('showDdd');
	var showSiafi = document.getElementById('showSiafi');

	if (cep.value == '') {
		alert('Insira um CEP válido! (SOMENTE NÚMEROS)');		
	} else {
		$.ajax({
			url: 'https://viacep.com.br/ws/' + cep.value + '/json',
			type: 'GET',
			success: function (response) {
				/*showCep.innerHTML = response.cep
				showLogradouro.innerHTML = response.logradouro
				showComplemento.innerHTML = response.complemento
				showBairro.innerHTML = response.bairro
				showLocalidade.innerHTML = response.localidade
				showUf.innerHTML = response.uf
				showIbge.innerHTML = response.ibge
				showGia.innerHTML = response.gia
				showDdd.innerHTML = response.ddd
				showSiafi.innerHTML = response.siafi*/
				$('#showCep').html(response.cep);
				$('#showLogradouro').html(response.logradouro);
				$('#showComplemento').html(response.complemento);
				$('#showBairro').html(response.bairro);
				$('#showLocalidade').html(response.localidade);
				$('#showUf').html(response.uf);
				$('#showIbge').html(response.ibge);
				$('#showGia').html(response.gia);
				$('#showDdd').html(response.ddd);
				$('#showSiafi').html(response.siafi);
			}

		})
	}

	

}