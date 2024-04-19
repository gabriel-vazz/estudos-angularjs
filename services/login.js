app.factory('loginFactory', ['$http', '$sce', function($http, $sce) {
    
    var obj = {}

    obj.login = function(email, senha, callback) {
        $http({
            url: $sce.trustAsResourceUrl(
                `http://localhost:3000/login/?email=${email}&senha=${senha}`
            ),
            method: "JSONP",
        }).then(function(response) {
            callback(response.data);
        }).catch(function(error) {
            callback({ error: error.status })
        });
    }

    return obj;
}])