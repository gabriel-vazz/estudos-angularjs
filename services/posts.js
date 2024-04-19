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

    return obj;
}]);