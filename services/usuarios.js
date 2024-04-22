app.factory('usuarioFactory', ['$http', '$sce', function($http, $sce) {
    
    var obj = {}

    obj.getAllUsers = function(callback) {
        $http({
            url: $sce.trustAsResourceUrl('http://localhost:3000/usuarios'),
            method: "JSONP"
        }).then(function(response) {
            callback(response.data);
        })
    }

    obj.getUserById = function(id, callback) {
        $http({
            url: $sce.trustAsResourceUrl(`http://localhost:3000/usuarios/${id}`),
            method: "JSONP"
        }).then(function(response) {
            callback(response.data);
        }).catch(function(error) {
            callback({ error: error.status });
        }) 
    }

    obj.insertUser = function(data, callback) {
        var { nome, email, senha } = data;
        var url = `http://localhost:3000/usuarios/new/?nome=${nome}&email=${email}&senha=${senha}`

        $http({
            url: $sce.trustAsResourceUrl(url),
            method: "JSONP"
        }).then(function(response) {
            callback(response.data);
        }).catch(function(error) {
            callback({ error: error.status });
        })
    }
    
    return obj;
}]);