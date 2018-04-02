
// Обрезаем текст
function shaveCenterText() {
	$('.collapsed-centred-text').each( function() {
		$(this).shave(69, {character : '...More'});
	});

	$('.js-shave-char').click( function() {
		$(this).css({'display' : 'none'});
		$(this).parent().find('.js-shave').css({'display' : 'inline'});
	});
}

function shaveText() {
	$('.collapsed-text').each( function() {
		$(this).css({'max-height' : 'none'});
		$(this).parent().find('.expand-text').css({'display' : 'none'});

		if($(this).outerHeight() > 69 && $(this).next('.expand-text').length === 0) {
			$(this).css({'max-height' : '69px'});
			$('<span class="expand-text">More</span>').insertAfter(this);
		} else if($(this).outerHeight() > 69 && $(this).next('.expand-text').length !== 0) {
			$(this).css({'max-height' : '69px'});
			$(this).parent().find('.expand-text').css({'display' : 'block'});
		// } else if($(this).outerHeight() < 69) {
		// 	$(this).css({'max-height' : 'none'});
		// 	$(this).parent().find('.expand-text').css({'display' : 'none'});
		}
	});

	$('.expand-text').click( function() {
		$(this).css({'display' : 'none'});
		$(this).parent().find('.collapsed-text').css({'max-height' : 'none'});
	});
}

// -------------------------------------------------------------------------------------

$(document).ready(function () {

	// Отсчет времени - crowdsale start
	$('.counter-time').countdown('2017/10/18', function(event) {
		var $this = $(this).html(event.strftime(
			'<div class="counter-time__item"><div class="counter-time__value">%D</div><div class="counter-time__title">days</div></div>' + 
			'<div class="counter-time__item"><div class="counter-time__value">%H</div><div class="counter-time__title">hours</div></div>' + 
			'<div class="counter-time__item"><div class="counter-time__value">%M</div><div class="counter-time__title">minutes</div></div>' +
			'<div class="counter-time__item"><div class="counter-time__value">%S</div><div class="counter-time__title">seconds</div></div>')
		);
	});

	// Обрезаем текст
	shaveText();

	shaveCenterText();

	//Основное меню сайта
	$('.js-mobile-menu-trigger').click(function() {
		$(this).toggleClass('active');
		$('.site-header__nav').slideToggle();
	});

	// Ответы на вопросы - страница FAQ
	$('.faq__question').click(function() {
		if(!$(this).hasClass('active')) {
			$(this).parent().parent().find('.faq__question.active').removeClass('active');
			$(this).parent().parent().find('.faq__answer.open').slideToggle().removeClass('open');
			$(this).addClass('active');
			$(this).parent().find('.faq__answer').addClass('open').slideToggle();
		} else {
			$(this).removeClass('active');
			$(this).parent().find('.faq__answer').slideToggle().removeClass('open');
		}
	});

	// табы общей информации о казино
	$('#casino-info').responsiveTabs({
		duration: 200,
		active: 0
	});

	// табы описания условий участия в бронировании
	$('#participate').responsiveTabs({
		duration: 200,
		active: 0
	});

	$('.popup-watch-video').magnificPopup({
		type: 'iframe'
	});

	// Модальное окно - форма обратной связи
	$('.feedback-popup').magnificPopup();

	// Валидация форм
	$('#subscribe').validate({
		messages: {
			email: {
				required: 'Enter your email address'
			}
		}
	});

	$('#footer-subscribe').validate({
		messages: {
			email: {
				required: 'Enter your email address'
			}
		}
	});

	$('#feedback-form').validate();

});


// -------------------------------------------------------------------------------------


$(window).scroll(function () {


});

// -------------------------------------------------------------------------------------

$(window).load(function () {

	// изменение фона на секции - milestones
	var activeMilestones = 0;

	$('.milestones__list').find('.milestones-step').each(function () {
		if($(this).hasClass('active')) {
			activeMilestones += 1;
		}
	});

	if(activeMilestones == 0) {
		$('.milestones__main-bg').css({'background-image' : 'url(./img/background/milestones-not-active-bg.png)'});
	} else if(activeMilestones == 1) {
		$('.milestones__main-bg').css({'background-image' : 'url(./img/background/milestones-one-active-bg.png)'});
	} else if(activeMilestones == 2) {
		$('.milestones__main-bg').css({'background-image' : 'url(./img/background/milestones-two-active-bg.png)'});
	} else if(activeMilestones == 3) {
		$('.milestones__main-bg').css({'background-image' : 'url(./img/background/milestones-three-active-bg.png)'});
	} else if(activeMilestones == 4) {
		$('.milestones__main-bg').css({'background-image' : 'url(./img/background/milestones-four-active-bg.png)'});
	} else if(activeMilestones == 5) {
		$('.milestones__main-bg').css({'background-image' : 'url(./img/background/milestones-five-active-bg.png)'});
		$('.milestones__closing-bg').css({'background-image' : 'url(./img/background/milestones-last-active-bg.png)'});
	}

});

// -------------------------------------------------------------------------------------

$(window).resize(function () {

	// Обрезаем текст
	shaveText();

	shaveCenterText();

});

// -------------------------------------------------------------------------------------


