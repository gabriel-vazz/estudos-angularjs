app.factory('postFactory', function($http, $sce, $q) {

    var url = 'http://localhost:3000/posts/';

    return {
        getPost: function(id) {
            var q = $q.defer();

            $http.jsonp($sce.trustAsResourceUrl(url+id))
            .then((response) => {
                q.resolve(response.data);
            }).catch((error) => {
                q.reject(error);
            });
            return q.promise;
        },
        getPostsByUser: function(id) {
            var q = $q.defer();

            $http.jsonp($sce.trustAsResourceUrl(url+`usuarios/${id}`))
            .then((response) => {
                q.resolve(response.data);
            }).catch((error) => {
                q.reject(error);
            })
            return q.promise;
        },
        insertPost: function(id, data) {
            var q = $q.defer();

            $http.jsonp($sce.trustAsResourceUrl(url+`new/?id=${id}&texto=${data}`))
            .then((response) => {
                q.resolve(response.data);
            });
            return q.promise;
        },
        deletePost: function(id) {
            var q = $q.defer();

            $http.jsonp($sce.trustAsResourceUrl(url+`delete/${id}`))
            .then((response) => {
                q.resolve(response.data);
            })
            return q.promise;
        },
        updatePost: function(id, data) {
            var q = $q.defer();

            $http.jsonp($sce.trustAsResourceUrl(url+`update/${id}/?texto=${data}`))
            .then((response) => {
                q.resolve(response.data);
            })
            return q.promise;
        }
    };
});