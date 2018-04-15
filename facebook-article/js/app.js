'use strict'

var windowWidth = $(window).width();
var windowHeight = $(window).height();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {
	svg4everybody();

	// Мобильное меню хедера
	$('.mobile-nav-trigger').click(function () {
		$(this).toggleClass('is-active');
		$('.main-menu').slideToggle().toggleClass('is-open');
		// $('.navbar .nav-menu__link[href*="#"]').toggleClass('nav-mobile-link');
	});

	// Закрываем меню хедера при клике вне зоны меню
	$(document).on('click', function(e) {
		if($(window).width() < 768) {
			if(!$(e.target).closest($('.main-menu')).length && !$(e.target).closest($('.mobile-nav-trigger')).length) {
				$('.mobile-nav-trigger').removeClass('is-active');
				$('.main-menu').slideUp().removeClass('is-open');
			}
		}
	});

	// Языковая панель
	var langLink = $('.lang__item a');
	var langCurrentLink = $('.lang__item.is-current a');
	var langToggler = $('.lang__action');

	function chengeFlag(langToggler, currentLangLink) {
		langToggler.find('img').remove();
		currentLangLink.find('img').clone().prependTo(langToggler);
	}

	langToggler.text(langCurrentLink.text());
	chengeFlag(langToggler, langCurrentLink);


	langToggler.on('click', function () {
			$(this).parents('.lang').toggleClass('is-open');
	});

	langLink.on('click', function () {
			$(this).parents('.lang__list').find('.lang__item').removeClass('is-current');
			$(this).parent().addClass('is-current');
			langToggler.text($(this).text());
			chengeFlag(langToggler, $(this));
	});

	$(document).on('click', function(e) {
		if(!$(e.target).closest($('.lang')).length) {
			$('.lang').removeClass('is-open');
		}
	});

	// Перемещаем языковую панель на мобильном виде в меню
	var desktopLangContainer = $('.header__lang'),
			mobileLangContainer = $('<li class="main-menu__item mobile-lang"></li>'),
			langDropdown = $('.lang');

	$('.main-menu__list').append(mobileLangContainer);

	if($(window).width() >= 768 && desktopLangContainer.find(langDropdown).length == 0) {
		langDropdown.appendTo(desktopLangContainer).removeClass('.is-open');
	}
	if($(window).width() < 768 && mobileLangContainer.find(langDropdown).length == 0) {
		langDropdown.appendTo(mobileLangContainer).removeClass('.is-open');
	}

	$(window).resize(function () {
		if($(window).width() >= 768 && desktopLangContainer.find(langDropdown).length == 0) {
			langDropdown.removeClass('is-open').appendTo(desktopLangContainer);
		}
		if($(window).width() < 768 && mobileLangContainer.find(langDropdown).length == 0) {
			langDropdown.removeClass('is-open').appendTo(mobileLangContainer);
		}
	});

	// Плавная прокрутка страницы
	var $page = $('html, body');
	$('a[href*="#article-anchor-"]').click(function() {
		$page.animate({
				scrollTop: $($.attr(this, 'href')).offset().top
		}, 600);
		return false;
	});

	// Модальное окно формы обратной связи
	$('.to-modal-feedback').magnificPopup();

	// Валидация формы в футере
	$('#footer-feedback').validate();

	// Валидация формы обратной связи
	$('#popup-feedback-form').validate();

});

// -------------------------------------------------------------------------------------

$(window).load(function () {

});

// -------------------------------------------------------------------------------------

$(window).resize(function () {

});

// -------------------------------------------------------------------------------------

$(window).scroll(function () {

});

// -------------------------------------------------------------------------------------