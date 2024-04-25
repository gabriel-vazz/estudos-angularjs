app.factory('usuarioFactory', function($http, $sce, $q) {
    
    var url = 'http://localhost:3000/usuarios/';

    return {
        getAllUsers: function() {
            var q = $q.defer();
    
            $http.jsonp($sce.trustAsResourceUrl(url))
            .then((response) => {
                q.resolve(response.data);
            })
            return q.promise;
        },
        getUserById: function(id) {
            var q = $q.defer();
    
            $http.jsonp($sce.trustAsResourceUrl(url+id))
            .then((response) => {
                q.resolve(response.data);
            }).catch((error) => {
                q.reject(error);
            }) 
            return q.promise;
        },
        insertUser: function(data) {
            var q = $q.defer();
            var { nome, email, senha } = data;
    
            $http.jsonp($sce.trustAsResourceUrl(
                url+`new/?nome=${nome}&email=${email}&senha=${senha}`
            )).then((response) => {
                q.resolve(response.data);
            }).catch((error) => {
                q.reject(error);
            })
            return q.promise;
        },
        updateUser: function(id, data) {
            var q = $q.defer();
            var { nome, email } = data;
    
            $http.jsonp($sce.trustAsResourceUrl(
                url+`${id}/editar/?nome=${nome}&email=${email}`
            )).then((response) => {
                q.resolve(response.data);
            }).catch((error) => {
                q.reject(error);
            })
            return q.promise;
        }
    }
});