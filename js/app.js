'use strict'

var windowWidth = $(window).width();
var windowHeight = $(window).height();

// Раскрыть список меню каталога
// function expandList(elem) {
// 	var catalogCollapsedListLength = 0;
// 	$(elem + ' > li').each(function() {
// 		catalogCollapsedListLength += 1;
// 	});

// 	if(catalogCollapsedListLength > 10 && $(elem + ' > .js-expand-list-block').length === 0) {
// 		$(elem + ' > .box-menu__item:nth-child(10)').after('<li class="js-expand-list-block"><button class="js-expand-list-trigger" type="button">Показать все</button></li>');
// 		$(elem + ' > .box-menu__item:nth-child(n+12)').css({'display':'none'});
// 	} else if(catalogCollapsedListLength > 10 && $(elem + ' > .js-expand-list-block').length !== 0) {
// 		$(elem + ' > .js-expand-list-block').css({'display':'block'});
// 		$(elem + ' > .box-menu__item:nth-child(n+12)').css({'display':'none'});
// 	}

// 	$('.js-expand-list-trigger').click(function() {
// 		$(this).parent().slideUp(200);
// 		$(this).parent().nextAll().slideDown(200);
// 	});
// }

// function expandList() {
// 	var catalogCollapsedListLength = 0;
// 	$('.box-menu__list.collapsed-list > .box-menu__item').each(function() {
// 		catalogCollapsedListLength += 1;
// 	});

// 	if(catalogCollapsedListLength > 10 && $('.box-menu__list.collapsed-list > .js-expand-list-block').length === 0) {
// 		$('.box-menu__list.collapsed-list > .box-menu__item:nth-child(10)').after('<li class="js-expand-list-block"><button class="js-expand-list-trigger" type="button">Показать все</button></li>');
// 		$('.box-menu__list.collapsed-list > .box-menu__item:nth-child(n+12)').css({'display':'none'});
// 	} else if(catalogCollapsedListLength > 10 && $('.box-menu__list.collapsed-list > .js-expand-list-block').length !== 0) {
// 		$('.box-menu__list.collapsed-list > .js-expand-list-block').css({'display':'block'});
// 		$('.box-menu__list.collapsed-list > .box-menu__item:nth-child(n+12)').css({'display':'none'});
// 	}

	// $('.js-expand-list-trigger').click(function() {
	// 	$(this).parent().slideUp(250);
	// 	$(this).parent().nextAll().slideDown(250);
	// });
// };

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {
	svg4everybody();

	// Раскрывающиеся списки меню каталогов
	$('.box-menu__item.has-dropdown .box-menu__item-marker').click(function() {
		if(!$(this).hasClass('active')) {
			$(this).parent().parent().find('.box-menu__item-marker.active').removeClass('active');
			$(this).parent().parent().find('.box-menu__sublist.open').slideToggle().removeClass('open');
			$(this).addClass('active');
			$(this).parent().find('.box-menu__sublist').addClass('open').slideToggle();
		} else {
			$(this).removeClass('active');
			$(this).parent().find('.box-menu__sublist').slideToggle().removeClass('open');
		}
	});

	// Раскрыть список меню каталога
	// if($('.box-menu__list').hasClass('collapsed-list')) {
	// 	expandList('.box-menu__list');
	// }

	// Форма поиска в хедере
	$('.site-search__label').click(function() {
		if($(window).width() < 768) {
			$(this).toggleClass('active');
			$('.site-search .input').toggleClass('active').focus();
		}
	});

	// Закрываем форму поиска при клике вне формы
	$(document).click(function (e) {
		if (!$('#site-search-form').is(e.target) && $('#site-search-form').has(e.target).length === 0) {
			$('.site-search__label').removeClass('active');
			$('.site-search .input').removeClass('active');
		}
	});

	// Мобильное меню хедера
	$('.js-mobile-nav-trigger').click(function () {
		$('.site-header__nav').addClass('visible');
	});

	$('.site-header__nav').click(function (e) {
		if (e.target == this) {
			$(this).removeClass('visible');
		}
	});

	// Мобильное меню каталогов
	$('.box-menu__title').click(function() {
		if($(window).width() < 768) {
			$(this).toggleClass('active');
			$(this).parent().toggleClass('open');
			$(this).parent().find('.box-menu__list').slideToggle();
		}
	});

	// Закрываем меню каталогов при клике вне каталогов
	$(document).click(function (e) {
		if($('.box-menu').hasClass('open')) {
			if (!$('.box-menu').is(e.target) && $('.box-menu').has(e.target).length === 0) {
				$('.box-menu .box-menu__title').removeClass('active');
				$('.box-menu .box-menu__list').slideUp();
				$('.box-menu').removeClass('open');
			}
		}
	});

	// Кастомный селект
	$('.select').styler();

	// Кастомный счетчик инпут
	$('.count-field').styler();

	// Выпадающее меню регистрации пользователя в хедере
	$('.site-header__entrance-trigger').click(function () {
		if (!$(this).hasClass('active')) {
			// $('.btn-registration.status-registered').removeClass('is-active');
			// $('.registration-controls__dropdown').removeClass('is-open');
			$(this).addClass('active');
			$(this).parent().find('.site-header__entrance-dropdown').addClass('open');
		} else {
			$(this).removeClass('active');
			$(this).parent().find('.site-header__entrance-dropdown').removeClass('open');
		}
	});

	// Закрываем меню регистрации пользователя при клике вне поля меню
	$(document).click(function (e) {
		if (!$('.site-header__entrance').is(e.target) && $('.site-header__entrance').has(e.target).length === 0) {
			$('.site-header__entrance-trigger').removeClass('active');
			$('.site-header__entrance-dropdown').removeClass('open');
		}
	});

	// слайдер фото в карточке товара
	$('.product-gallery__nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product-gallery__main',
		arrows: true,
		dots: false,
		focusOnSelect: true,
		infinite: false,
		draggable: false
	});

	$('.product-gallery__main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed: 200,
		draggable: false,
		asNavFor: '.product-gallery__nav'
	});

	$('.radio-illustrated img').click(function() {
		$(this).parents('.radio-illustrated').find('label').trigger('click');
	});

	// кнопка скролла вверх - пролистывание страницы вверх
	$('.js-scroll-to-top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500, "swing");
	});

	// кнопка скролла вверх - прилипание кнопки в футере
	// var scrollTopControlPos, footerCopyrightPos;

	// function refreshVar() {
	// 	scrollTopControlPos = $('.js-scroll-to-top').offset().top;
	// 	footerCopyrightPos = $('.site-footer__copyright').offset().top;
	// };

	// $(window).scroll(function() {

	// 	refreshVar();

	// 	// if (scrollTopControlPos >= footerCopyrightPos - 70) {
	// 	if (scrollTopControlPos >= footerCopyrightPos - 105) {
	// 		$('.js-scroll-to-top').removeClass('state-fixed');
	// 	} else {
	// 		$('.js-scroll-to-top').addClass('state-fixed');
	// 	};

	// });

	// слайдер диапазона цены на странице каталога
	$("#price-slider").slider({
		min: 0,
		max: 20000,
		values: [0,20000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost").val($("#price-slider").slider("values",0));
			$("input#maxCost").val($("#price-slider").slider("values",1));
		},
		slide: function(event, ui) {
			$("input#minCost").val($("#price-slider").slider("values",0));
			$("input#maxCost").val($("#price-slider").slider("values",1));
		}
	});

	$("input#minCost").change(function() {
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost").val(value1);
		}

		$("#price-slider").slider("values",0,value1);
	});

	$("input#maxCost").change(function(){
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();

		if(value2 > 20000) {
			value2 = 20000;
			$("input#maxCost").val(20000);
		}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost").val(value2);
		}

		$("#price-slider").slider("values",1,value2);
	});

	// Валидация формы профиля пользователя
	$('#profile').validate();

	// Валидация формы обратной связи
	$('#feedback').validate();

	// Валидация формы входа на сайт
	$('#login').validate();

	// Валидация формы проверки статуса заказа
	$('#order-status').validate();

	// Валидация формы оформления заказа - адрес
	$('#ordering-address-form').validate();

	// Валидация формы оформления заказа
	$('#ordering-form').validate();

	// Валидация формы востановления пароля
	$('#recall-parol').validate();

	// Валидация формы регистрации
	$('#registration').validate();

	// Выпадающее окно таблицы размеров товара
	$('.popup-size-table').magnificPopup({
		type: 'image'
	});

	// Галлерея изображений товара в модальном окне
	$('.product-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});

});

// -------------------------------------------------------------------------------------

$(window).load(function () {

});

// -------------------------------------------------------------------------------------

$(window).resize(function () {

	// Раскрыть список меню каталога
	// if($('.box-menu__list').hasClass('collapsed-list')) {
	// 	expandList('.box-menu__list');
	// }

	// Форма поиска в хедере
	if($(window).width() >= 768) {
		$('.site-search__label').removeClass('active');
		$('.site-search .input').removeClass('active');
	}

	// Исходное состояние меню каталогов
	if($(window).width() >= 768) {
		$('.box-menu__title').removeClass('active');
		$('.box-menu').removeClass('open');
		$('.box-menu__list').css({'display':'none'});
	}

	// Закрываем меню регистрации пользователя
	if($(window).width() >= 768) {
		$('.site-header__entrance-trigger').removeClass('active');
		$('.site-header__entrance-dropdown').removeClass('open');
	}

});

// -------------------------------------------------------------------------------------

$(window).scroll(function () {

	// кнопка скролла вверх
	if($(window).scrollTop() > 150) {
		$('.js-scroll-to-top').addClass('state-fixed').removeClass('state-hidden');
	} else {
		$('.js-scroll-to-top').addClass('state-fixed state-hidden');
	};

});

// -------------------------------------------------------------------------------------
