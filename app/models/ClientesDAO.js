function ClientesDAO(connection){
    this._connection = connection();
}

ClientesDAO.prototype.updateCliente = function(usuario){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("dadosClientes", function(err, collection){
            collection.insert(usuario);
            
            mongoclient.close();
        });
    });
}

module.exports = function(){
    return ClientesDAO;
}