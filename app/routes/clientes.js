module.exports = function(application){
	application.get('/gerenciar-clientes', function(req, res){
		application.app.controllers.clientes.clientes(application, req, res);
	});
}