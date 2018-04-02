
	// Калькулятор прыбыли на главной
	var btcAmountValue, hourlyProfit, dailyProfit, monthlyProfit;

	function calculateProfit() {
		$('#btc-calculate-profit').keyup(function() {
			btcAmountValue = $(this).val();

			hourlyProfit = (btcAmountValue * 0.00417).toFixed(8);
			dailyProfit = (btcAmountValue * 0.1).toFixed(8);
			monthlyProfit = (btcAmountValue * 3).toFixed(8);

			$('#hourly-profit').html( hourlyProfit + " BTC");
			$('#daily-profit').html( dailyProfit + " BTC");
			$('#monthly-profit').html( monthlyProfit + " BTC");
		}).keyup();
	}

// -------------------------------------------------------------------------------------

$(document).ready(function () {

	//Основное меню сайта
	$('.js-mobile-menu-trigger').click(function() {
		$(this).toggleClass('active');
		$('.site-header__nav').toggleClass('is-shown');
	});

	$('.site-header__nav').click(function(e) {
		if (e.target == this) {
			$(this).removeClass('is-shown');
			$('.js-mobile-menu-trigger').removeClass('active');
		}
	});

	// Калькулятор прыбыли на главной
	calculateProfit ();

	// Мобильное меню личного кабинета
	$('.cabinet-menu__dropdown').click( function() {
		$(this).toggleClass('active');
		$(this).parent().find('.cabinet-menu').slideToggle();
	});

	// Кастомный селект
	$('.custom-select').selectric({
		arrowButtonMarkup: '<span class="select-arrow"></span>',
		disableOnMobile: false,
		nativeOnMobile: false
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

	// Валидация форм
	$('#edit-account').validate();
	$('#make-deposit').validate();
	$('#feedback').validate();
	$('#registration').validate();
	$('#login').validate();

	if($('#make-deposit-spend-bitcoin').prop("checked") == false) {
		$('#make-deposit .btn-spend').addClass('btn-deactive');
	} else if($('#make-deposit-spend-bitcoin').prop("checked") == true) {
		$('#make-deposit .btn-spend').removeClass('btn-deactive');
	}

	$('#make-deposit-spend-bitcoin + span').click(function() {
		if($('#make-deposit-spend-bitcoin').prop("checked") == true) {
			$('#make-deposit .btn-spend').addClass('btn-deactive');
		} else if($('#make-deposit-spend-bitcoin').prop("checked") == false) {
			$('#make-deposit .btn-spend').removeClass('btn-deactive');
		}
	});


	if($('#check-registration-terms').prop("checked") == false) {
		$('#registration .btn-register.btn').addClass('btn-deactive');
	} else if($('#check-registration-terms').prop("checked") == true) {
		$('#registration .btn-register.btn').removeClass('btn-deactive');
	}

	$('#check-registration-terms + span').click(function() {
		if($('#check-registration-terms').prop("checked") == true) {
			$('#registration .btn-register.btn').addClass('btn-deactive');
		} else if($('#check-registration-terms').prop("checked") == false) {
			$('#registration .btn-register.btn').removeClass('btn-deactive');
		}
	});

	// Копируем реферальную ссылку в буфер обмена
	var clipboardActionsHead = document.querySelectorAll('.referral-link > span[data-clipboard-target="#referral-link-head"]');
	var clipboardHead = new Clipboard(clipboardActionsHead);
	clipboardHead.on('success', function(e) {
		e.clearSelection();
		$(clipboardActionsHead).tooltip('show');
	});

	var clipboardActions = document.querySelectorAll('.referral-link > span[data-clipboard-target="#referral-link"]');
	var clipboard = new Clipboard(clipboardActions);
	clipboard.on('success', function(e) {
		e.clearSelection();
		$(clipboardActions).tooltip('show');
	});

	$(document).click(function(e) {
		var referralLinkClipboardHead = $('.referral-link > span[data-clipboard-target="#referral-link-head"]');
		if (!referralLinkClipboardHead.is(e.target) && referralLinkClipboardHead.has(e.target).length === 0) {
			referralLinkClipboardHead.tooltip('hide');
		}
	});

	$(document).click(function(e) {
		var referralLinkClipboard = $('.referral-link > span[data-clipboard-target="#referral-link"]');
		if (!referralLinkClipboard.is(e.target) && referralLinkClipboard.has(e.target).length === 0) {
			referralLinkClipboard.tooltip('hide');
		}
	});

});


// -------------------------------------------------------------------------------------


$(window).scroll(function () {


});

// -------------------------------------------------------------------------------------

$(window).load(function () {


});

// -------------------------------------------------------------------------------------

$(window).resize(function () {

	// Кастомный селект
	$('.custom-select').selectric({
		arrowButtonMarkup: '<span class="select-arrow"></span>',
		disableOnMobile: false,
		nativeOnMobile: false
	});

	$('.referral-link > span').tooltip('hide');

});

// -------------------------------------------------------------------------------------

var map,
	contactMap;

function initMap() {

	if($('#map').length) {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 40.71075616, lng: -74.0049095},
			zoom: 17,
			mapTypeId: 'roadmap',
			disableDefaultUI: true
		});
	}

	if($('#contact-map').length) {
		contactMap = new google.maps.Map(document.getElementById('contact-map'), {
			center: {lat: 51.7530578, lng: -1.2880412},
			zoom: 17,
			mapTypeId: 'roadmap',
			disableDefaultUI: true
		});
		var marker = new google.maps.Marker({
			position: {lat: 51.7530578, lng: -1.2880412},
			map: contactMap
		});
	}
}

