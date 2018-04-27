module.exports = function(app){
    app.post('/username_check',function(request, response){
        if(app.app.controllers.cadastro_usuario.valida_username(app, request, response)){
            return true;
        }else{
            return false;
        }   
    })
}