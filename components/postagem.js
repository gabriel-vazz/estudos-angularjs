app.component('postagem', {
    templateUrl: 'http://127.0.0.1:8000/components/postagem.html',
    controller: function($cookies, $scope) {
        $scope.sessao = $cookies.getObject('sessao').id;
    },
    bindings: {
        usuario: '<', 
        postagem: '<',
    }
});