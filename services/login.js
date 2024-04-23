app.factory('loginFactory', [
    '$http', 
    '$sce',
    '$cookies',
    '$location', 
    function(
        $http, 
        $sce, 
        $cookies, 
        $location
    ) {
    
    var obj = {}

    obj.protectRoute = function() {
        if($cookies.getObject('sessao')) {
            if($location.absUrl() === 'http://127.0.0.1:8000/#!/login') {
                $location.path('/');
            }
        } else {
            $location.path('/login');
        }
    }

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