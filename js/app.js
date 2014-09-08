var BG_IMAGE_COUNT = 4,
    random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };



var app = angular.module('Newtab', [])
    .controller('BgCtrl', function ($scope) {
        $scope.bg = {
            backgroundImage: 'url(bg/' + random(1, BG_IMAGE_COUNT) + '.jpg)'
        }
    });

