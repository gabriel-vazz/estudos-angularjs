app.factory('postFactory', ['$http', '$sce', function($http, $sce) {

    var obj = {}

    obj.getPostsByUser = function(id, callback) {
        $http({
            url: $sce.trustAsResourceUrl(`http://localhost:3000/posts/usuarios/${id}`),
            method: "JSONP"
        }).then(function(response) {
            callback(response.data);
        })
    }

    obj.insertPost = function(id, texto, callback) {
        const url = `http://localhost:3000/posts/new/?id=${id}&texto=${texto}`;
        $http({
            url: $sce.trustAsResourceUrl(url),
            method: "JSONP"
        }).then(function(response) {
            callback(response.data);
        })
    }

    return obj;
}]);