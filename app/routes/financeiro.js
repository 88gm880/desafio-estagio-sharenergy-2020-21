module.exports = function(application){
	application.get('/retorno-financeiro', function(req, res){
		application.app.controllers.financeiro.financeiro(application, req, res);
	});
}