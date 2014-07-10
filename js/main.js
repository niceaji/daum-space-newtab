var BG_IMAGE_COUNT = 2;
var TYPES = ['sisa','life','sports','enter'];
var NEWS_API = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fmedia.daum.net%2Fcommon%2Fwing.data%22%20&format=json&callback=?';

(function($){

	var random =function(min, max){
		return Math.floor(Math.random() * (max - min + 1) + min)
	};
	var selectNews=function(type){
		$('.contents').removeClass('loading');
		$('.nav li').removeClass('active');
		$('.nav li[data-type='+type+']').addClass('active');
		$('.newslist').hide();
		$('#newslist-'+ type ).fadeIn();
	};
	var printNews=function(json){

		try{
			eval(json.query.results.body.p);
		}catch(e){
			return;
		}

		TYPES.forEach(function(type){
			var list = eval('wing_primary_'+type).component.data;
			$('.contents').append(tmpl('listTemplate', {type:type,list:list}));
		});

		selectNews( TYPES[random(0,3)] );
	};

	var randomBg=function(){
		$('.bg').css('background-image','url(bg/'+random(1,BG_IMAGE_COUNT)+'.jpg)');
	}();
	var addTabEvent=function(){
		$('.nav li a').click(function(event){
			var type = $(event.currentTarget).parent().data('type');
			selectNews(type);
		});

	}();
	var loadNews = function(){
		$.getJSON(NEWS_API, $.proxy(printNews,this));
	}();







})(jQuery);