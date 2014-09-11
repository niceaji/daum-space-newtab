function backgroundImage() {
    var images = [
        'http://i.imgur.com/1uZfyTQ.jpg',
        'http://i.imgur.com/4Qul9CL.jpg',
        'http://i.imgur.com/BRwVVCi.jpg',
        'http://i.imgur.com/Q46xvvS.jpg'
    ];
    return(images[Math.floor(Math.random() * images.length)]);
}

var app = angular.module('Newtab', [])
    .controller('BgCtrl', function ($scope) {
        $scope.bg = {
            backgroundImage: 'url(' + backgroundImage() + '.jpg)'
        };
    })
    .controller('MenuCtrl', function ($scope) {
        $scope.tab = function (menu) {
            chrome.tabs.create({
                url: 'chrome://' + menu
            }, function () {
            });
        };
    });

