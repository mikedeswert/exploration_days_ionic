angular.module('events').factory('eventsService', ['$localstorage', function($localstorage) {
    return {
        getEvents: getEvents,
        addEvent: addEvent
    };

    function getEvents() {
        var events = $localstorage.getObject('events');
        if(!events.list) {
            events.list = [];
        }
        return events;
    }

    function addEvent(event) {
        var events = getEvents();
        events.list.push(event);
        $localstorage.setObject('events', events);
    }
}]);