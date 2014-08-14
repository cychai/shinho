$(function () {
	$(".btn-join").on('click', function() {
		$(".index-wrap").hide();
		$(".send-pop").show();
	});

	$(".send-cancel").on('click', function() {
		$(".send-pop").hide();
		$(".index-wrap").show();
	});

	// slide
	var i = $('.swipe-wrap div').length;
	var $li = '';
	for(var j=0; j<i; j++ ){
		$li += '<li></li>';
	}
	$('#swipe-page').append($li);
	$('#swipe-page').find('li').eq(0).addClass('on');
	var elem = document.getElementById('mySwipe');
	window.mySwipe = Swipe(elem, {
	  startSlide: 0,
	  auto: 3000,
	  continuous: true,
	  disableScroll: true,
	  stopPropagation: true,
	  callback: function(pos) {
	  	var bullets = document.getElementById('swipe-page').getElementsByTagName('li');
	  	var i = bullets.length;
        while (i--) {
          bullets[i].className = ' ';
        }
        bullets[pos].className = 'on';
	    },
	  transitionEnd: function(index, element) {}
	});
});