angular.module('events').controller('eventEditorDirectiveController', ['events', function(events) {
    var ctrl = this;
    init();

    function init() {
        if(ctrl.event !== undefined) {
            return;
        }

        ctrl.event = events.create();
    }
}]);