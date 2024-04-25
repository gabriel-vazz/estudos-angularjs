app.component('postagem', {
    templateUrl: 'http://127.0.0.1:8000/components/postagem.html',
    controller: function($scope, authService) {
        $scope.sessao = authService.getSessionId();
    },
    bindings: {
        usuario: '<', 
        postagem: '<',
        deleted: '<',
        excluir: '&'
    }
});