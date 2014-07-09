var BG_IMAGE_COUNT = 2;
var TYPES = ['sisa','life','sports','enter'];


(function($){

	var random =function(min, max){
		return Math.floor(Math.random() * (max - min + 1) + min)
	};
	var selectNews=function(type){
		$('.nav li').removeClass('active');
		$('.nav li[data-type='+type+']').addClass('active');
		$('.newslist').hide();
		$('#newslist-'+ type ).fadeIn();
	};

	var randomBg=function(){
		$('.bg').css('background-image','url(bg/'+random(1,BG_IMAGE_COUNT)+'.jpg)');
	}();
	var printNews=function(){

		TYPES.forEach(function(type){
			var list = window['wing_primary_'+type].component.data;
			$('.contents').append(tmpl('listTemplate', {type:type,list:list}));
		});

		selectNews( TYPES[random(0,3)] );
	}();

	var addTabEvent=function(){
		$('.nav li a').click(function(event){
			var type = $(event.currentTarget).parent().data('type');
			selectNews(type);
		});

	}();


})(jQuery);