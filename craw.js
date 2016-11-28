var Crawler = {
	request : null,
	cheerio : null,
	fs      : null,
	init : function(){
		Crawler.request = require('request');
		Crawler.cheerio = require('cheerio');
		Crawler.fs      = require('fs');
		Crawler.getData();
	},
	getData: function(){
	Crawler.request('http://www.cnpq.br/web/guest/licitacoes', function(err, res, body){
	if (err) console.log('Erro: ' + err);
	var $ = Crawler.cheerio.load(body);
	$('.formLicit tr').each(function() {
		var title = $(this).find('.titLicitacao a').text().trim();
		var title = $(this).find('.cont_licitacoes a').text().trim();
		var title = $(this).find('.data_licitacao a').text().trim();
		var title = $(this).find('.outro-doc-link a').text().trim();

		console.log(`Titulo: ` + titLicitacao);
		Crawler.fs.appendFile(`dados.txt`)
	});

}
Crawler.init();
