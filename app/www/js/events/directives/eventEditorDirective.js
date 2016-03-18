angular.module('events').directive('eventEditor', ['events', function(events) {
    return {
        restrict: 'E',
        scope: {
            event: '=model'
        },
        templateUrl: 'templates/events/directives/eventEditor.html',
        controller: 'eventEditorDirectiveController',
        controllerAs: 'EventEditorDirectiveCtrl',
        bindToController: true
    }
}]);