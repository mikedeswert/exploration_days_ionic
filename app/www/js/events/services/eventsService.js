angular.module('events').factory('eventsService', ['localStorage', function(localStorage) {
    var events;

    return {
        getEvents: getEvents,
        addEvent: addEvent,
        removeEvent: removeEvent
    };

    function getEvents() {
        if(events == undefined) {
            events = localStorage.getArray('events');
        }
        return events;
    }

    function addEvent(event) {
        events.push(event);
        localStorage.setObject('events', events);
    }

    function removeEvent(event) {
        events.splice(events.indexOf(event), 1);
        localStorage.setObject('events', events);
    }
}]);