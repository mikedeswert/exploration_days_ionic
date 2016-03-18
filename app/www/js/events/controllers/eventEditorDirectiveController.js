angular.module('events').controller('eventEditorDirectiveController', ['events', '$cordovaCamera', '$ionicPlatform', function (events, $cordovaCamera, $ionicPlatform) {
    var ctrl = this;
    init();

    function init() {
        if (ctrl.event !== undefined) {
            return;
        }

        ctrl.event = events.create();
    }

    ctrl.takePhoto = function () {
        $ionicPlatform.ready(function () {
            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                targetWidth: 300,
                targetHeight: 300,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPEG,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                ctrl.event.imageURI = "data:image/jpeg;base64," + imageData;
            }, function (err) {

            });
        });
    };

    ctrl.choosePhoto = function () {
        $ionicPlatform.ready(function () {
            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                targetWidth: 300,
                targetHeight: 300,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPEG,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                ctrl.event.imageURI = "data:image/jpeg;base64," + imageData;
            }, function (err) {

            });
        });
    };
}]);