app.component('perfilUsuario', {
    templateUrl: 'http://127.0.0.1:8000/components/perfil.html',
    controller: function($scope, authService) {
        $scope.sessao = authService.getSessionId();
    },
    bindings: {
        usuario: '<'
    }
})