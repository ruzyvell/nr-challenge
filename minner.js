var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://www.cnpq.br/web/guest/licitacoes', function(err, res, body){
	if (err) console.log('Erro: ' + err);
	var $ = cheerio.load(body);
	$('.formLicit tr').each(function() {
		var title = $(this).find('.titLicitacao a').text().trim();
		var title = $(this).find('.cont_licitacoes a').text().trim();
		var title = $(this).find('.data_licitacao a').text().trim();
		var title = $(this).find('.outro-doc-link a').text().trim();

		console.log(`Titulo: ` + titLicitacao);
		fs.appendFile(`dados.txt`)
	});

}
