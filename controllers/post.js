app.controller('postController', [
    '$scope',
    'postFactory',
    '$routeParams',
    function(
        $scope, 
        postFactory, 
        $routeParams, 
    ) {

    $scope.getUserPosts = function() {
        postFactory.getPostsByUser($routeParams.id, function(result) {
            $scope.postagens = result;
            $scope.msg = result.msg
        });
    }
}])