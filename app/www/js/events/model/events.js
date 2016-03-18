angular.module('events').factory('events', function() {
    return {
        create: create
    };

    function create() {
        return new Event();
    }

    function Event() {
        this.date = new Date();
    }
});