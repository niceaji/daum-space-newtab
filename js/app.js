function backgroundImage() {
    var images = [
        'http://i.imgur.com/1uZfyTQ.jpg',
        'http://i.imgur.com/4Qul9CL.jpg',
        'http://i.imgur.com/BRwVVCi.jpg',
        'http://i.imgur.com/beEZ0Bf.jpg',
        'http://i.imgur.com/0L5brur.jpg',
        'http://i.imgur.com/UGo9MY1.jpg',
        'http://i.imgur.com/yEFi02r.jpg',
        'http://i.imgur.com/Q46xvvS.jpg'
    ];
    return(images[Math.floor(Math.random() * images.length)]);
}

function dateToYYYYMMDD(date) {
    function pad(num) {
        num = num + '';
        return num.length < 2 ? '0' + num : num;
    }
    return date.getFullYear() + '-' +
        pad(date.getMonth() + 1) + '-' +
        pad(date.getDate()) + ' ' ;
}

var app = angular.module('Newtab', [])
    .controller('BgCtrl', function ($scope) {
        $scope.bg = {
            backgroundImage: 'url(' + backgroundImage() + '.jpg)'
        };
    })
    .controller('MenuCtrl', function ($scope) {
        $scope.date = dateToYYYYMMDD(new Date()); 

        $scope.tab = function (menu) {
            chrome.tabs.create({
                url: 'chrome://' + menu
            }, function () {
            });
        };
    });

