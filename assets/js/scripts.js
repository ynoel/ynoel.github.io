var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});


	var birthday = $('#birthday').html();
	var birthday_time_from_now = moment(birthday, "DD/MM/YYYY").fromNow('false');
	var years = birthday_time_from_now.split(" ")[0]

	$('#years_old').html(years + "YO");

	$('.email, .email_link').click(function(){
    	window.location.href='mailto:'+$(this).html()+'@n0el.de';
	});
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};