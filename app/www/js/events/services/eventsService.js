angular.module('events').factory('eventsService', ['$localstorage', function($localstorage) {
    var events;

    return {
        getEvents: getEvents,
        addEvent: addEvent,
        removeEvent: removeEvent
    };

    function getEvents() {
        if(events == undefined) {
            events = $localstorage.getArray('events');
        }
        return events;
    }

    function addEvent(event) {
        events.push(event);
        $localstorage.setObject('events', events);
    }

    function removeEvent(event) {
        events.splice(events.indexOf(event), 1);
        $localstorage.setObject('events', events);
    }
}]);