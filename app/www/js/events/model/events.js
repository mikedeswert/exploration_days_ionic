angular.module('events').factory('events', ['uuid4', function(uuid4) {
    var ONE_HOUR_IN_MILLISECONDS = 60*60*1000;

    return {
        create: create
    };

    function create(event) {
        if(event == undefined) {
            return new Event();
        }
        return toEvent(event);
    }

    function Event() {
        this.id = uuid4.generate();
        this.title = '';
        this.description = '';
        this.date = new Date();
        this.startTime = getDefaultStartTime();
        this.endTime = new Date(this.startTime.getTime() + ONE_HOUR_IN_MILLISECONDS);
        this.hasCalendarEntry = false;

        this.getStartDate = function() {
            var startDate = new Date(this.date.getTime());
            startDate.setHours(this.startTime.getHours());
            startDate.setMinutes(this.startTime.getMinutes());
            startDate.setSeconds(this.startTime.getSeconds());
            startDate.setMilliseconds(this.startTime.getMilliseconds());

            return startDate;
        };

        this.getEndDate = function() {
            var endDate = new Date(this.date.getTime());
            endDate.setHours(this.endTime.getHours());
            endDate.setMinutes(this.endTime.getMinutes());
            endDate.setSeconds(this.endTime.getSeconds());
            endDate.setMilliseconds(this.endTime.getMilliseconds());

            return endDate;
        };

        this.copy = function() {
            var event = new Event();
            event.id = this.id;
            event.title = this.title;
            event.description = this.description;
            event.date = new Date(this.date.getTime());
            event.startTime = new Date(this.startTime.getTime());
            event.endTime = new Date(this.endTime.getTime());
            event.imageURI = this.imageURI;

            return event;
        }
    }

    function getDefaultStartTime() {
        var date = new Date();
        date.setSeconds(0);
        date.setMilliseconds(0);

        return date;
    }

    function toEvent(event) {
        var newEvent = new Event();

        newEvent.id = event.id;
        newEvent.title = event.title;
        newEvent.description = event.description;
        newEvent.date = new Date(event.date);
        newEvent.startTime = new Date(event.startTime);
        newEvent.endTime = new Date(event.endTime);
        newEvent.imageURI = event.imageURI;

        return newEvent;
    }
}]);