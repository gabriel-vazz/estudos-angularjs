app.controller('postController', function($scope, postFactory, $routeParams, $cookies, $location) {

    var sessao = $cookies.getObject('sessao').id;

    $scope.getUserPosts = function() {
        postFactory.getPostsByUser($routeParams.id).then((data) => {
            $scope.postagens = data;
        }, () => {
            $scope.msg = 'Esse usuário ainda não possui postagens.';
        }) 
    }

    $scope.publicar = function() {
        if(!$scope.texto) {
            $scope.msg = 'Escreva sua postagem!';
        } else {
            postFactory.insertPost(sessao, $scope.texto).then(() => {
                alert('Sua postagem foi publicada com sucesso');
                $location.path('/perfil');
            });
        }
    }

    $scope.getMyPosts = function() {
        postFactory.getPostsByUser(sessao).then((data) => {
            $scope.postagens = data;
        }, () => {
            $scope.msg = 'Parece que você ainda não postou nada.';
        });
    }

    $scope.getMyPost = function() {
        postFactory.getPostsByUser(sessao).then((data) => {
            if(!data.find(post => post.id == $routeParams.id)) {
                $location.path('/404');
            }
            $scope.postagem = data[0];
        })
    }

    $scope.editarPostagem = function() {
        var post = $scope.postagem.texto;

        if(!post) {
            $scope.msg = 'Escreva sua postagem!';
        } else {
            postFactory.updatePost($routeParams.id, post)
            .then(() => {
                alert('Sua postagem foi atualizada com sucesso!');
                $location.path('/perfil');
            })
        }
    }

    $scope.excluirPostagem = function(id) {
        postFactory.deletePost(id).then(() => {
            $scope.deleted = id;
        })
    }
});