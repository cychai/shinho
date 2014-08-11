$(function () {
	$(".btn-join").on('click', function() {
		$(".index-wrap").hide();
		$(".send-pop").show();
	});

	$(".send-cancel").on('click', function() {
		$(".send-pop").hide();
		$(".index-wrap").show();
	});

});