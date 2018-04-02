function homeTabs(){
	$('#home-products').responsiveTabs({
		startCollapsed: 'tabs',
		duration: 200,
		activate: function(e, tab) {
			$('.slider-products').slick('setPosition');
		}
	});
};

function cardTabs(){
	$('#card-products').responsiveTabs({
		startCollapsed: 'tabs',
		duration: 200,
		activate: function(e, tab) {
			$('.slider-products').slick('setPosition');
		}
	});
};

function addToCart() {
	var cartLink = $('.header-cart__link');
	var cartBadge = cartLink.find('.header-cart__badge');
	var cartCount = parseInt(cartBadge.text());
	if(!cartBadge.length) {
		console.log(cartBadge.length);
		cartLink.html('<span class="header-cart__badge">1</span>');
	} else {
		cartBadge.text(cartCount + 1);
	}
}

function addToFav(add=true) {
	var favLink = $('.header-favorite__link');
	var favBadge = favLink.find('.header-favorite__badge');
	var favCount = parseInt(favBadge.text());
	if(!favBadge.length) {
		console.log(favBadge.length);
		favLink.html('<span class="header-favorite__badge">1</span>');
	} else {
		if(add) {
			favBadge.text(favCount + 1);
		} else {
			favBadge.text(favCount - 1);
			if(favCount - 1 < 1) {
				$('.header-favorite__badge').remove();
			}
		}
		
	}
}

function catalogResize() {
	if($(window).width()%2) {
		$('.catalog__item').addClass('catalog__item--chromefix');
	} else {
		$('.catalog__item').removeClass('catalog__item--chromefix');
	}
}

// -------------------------------------------------------------------------------------


$(document).ready(function (){

	// Разворачивающийся текс описания бренда
	$('.about-brand__text-collapse').click( function() {
		if ($(this).hasClass('off')) {
			$('.about-brand__more-content').slideToggle();
			$(this).removeClass('off').addClass('on').text('Скрыть информацию');
		}
		else if ($(this).hasClass('on')) {
			$('.about-brand__more-content').slideToggle();
			$(this).removeClass('on').addClass('off').text('Подробнее о бренде');
		}
	});

	$('.about-brand__collapse-detail').click( function() {
		$('.about-brand__text-collapse').trigger('click');
	});

	catalogResize();

	// автозаполнения для полей ввода
	$("#ordering-contact-tel").mask("+7 (999) 999-99-99", {placeholder:"+7 (___) ___-__-__"});
	$(".date-mask").mask("99/99/9999", {placeholder:"дд/мм/гггг"});
	$(".phone-mask").mask("+7 (999) 999-99-99", {placeholder:"+7 (___) ___-__-__"});

	var townSearch = document.getElementById('town-search');
	new Awesomplete(townSearch, {
		list: ['Новосибирск', 'Новороссийск', 'Новокузнецк', 'Новотроицк']
	});

	// счетчик количества товаров в корзине
	$('.count-field').styler();


	// модальное окно быстрого просмотра товара
	$('.to-modal-fast-view').magnificPopup({
		callbacks: {
			open: function(){
				$('.product-gallery__slider-nav').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.product-gallery__slider',
					dots: false,
					focusOnSelect: true
				});

				$('.product-gallery__slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					fade: true,
					speed: 0,
					draggable: false,
					asNavFor: '.product-gallery__slider-nav'
				});
			}
		}
	});

	// модальное окно быстрого просмотра товара
	$('.to-modal-fast-view-single-size').magnificPopup({
		callbacks: {
			open: function(){
				$('.product-gallery__slider-nav').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.product-gallery__slider',
					dots: false,
					focusOnSelect: true
				});

				$('.product-gallery__slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					fade: true,
					speed: 0,
					draggable: false,
					asNavFor: '.product-gallery__slider-nav'
				});
			}
		}
	});


	// модальное окно купить товар в один клик
	$('.to-modal-buy-click').magnificPopup();


	// модальное окно таблицы размеров
	$('.to-modal-table-sizes').magnificPopup();


	// табы блока описания товара на странице карточки товара
	$('#card-description').responsiveTabs({
		// startCollapsed: 'tabs',
		// animation: 'fade'
		duration: 200
	});


	// слайдер фотографий в карточке товара
	$('.card-product-gallery__slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.card-product-gallery__slider',
		dots: false,
		focusOnSelect: true
	});

	$('.card-product-gallery__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		speed: 0,
		draggable: false,
		asNavFor: '.card-product-gallery__slider-nav'
	});


	// слайдер подарочных карт
	$('.sertificate-gallery__slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.sertificate-gallery__slider',
		dots: false,
		focusOnSelect: true
	});

	$('.sertificate-gallery__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		speed: 0,
		draggable: false,
		asNavFor: '.sertificate-gallery__slider-nav'
	});


	// слайдер табов на странице карточки товара
	$('.card-products__tabs').slick({
		responsive: [
			{
				breakpoint: 3000,
				settings: {
					variableWidth: true,
					draggable: false,
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					draggable: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: -1
				}
			}
		]
	});

	$('.card-products__tabs').on('swipe', function(event, slick, direction) {
		// console.log(direction);
		if(direction) {
			$('.card-products__tabs .slick-current a').trigger('click');
		}
	});

	$('.card-products__tabs .slick-next').click(function() {
			$(this).parent().find('.slick-current > a').trigger('click');
	});

	$('.card-products__tabs .slick-prev').click(function() {
			$(this).parent().find('.slick-current > a').trigger('click');
	});


	// Форма поиска города
	$('.js-trigger-town-open').click(function(){
		$('.live-town').addClass('open');
	});

	$('.js-trigger-town-close').click(function(){
		$('.live-town').removeClass('open');
	});


	// Форма поиска по сайту
	$('.js-trigger-site-search-open').click(function(){
		$('.header__site-search').css({'display' : 'block'});
		$('#site-search input').focus();
	});

	$('.js-trigger-site-search-close').click(function(){
		$('.header__site-search').css({'display' : 'none'});
		// Скрываем результаты поиска по сайту
		$('.site-search__result').css('display','none');
	});

	// Поиск по сайту - обработка запросов поиска
	$('.site-search__entry-field').keypress(function() {
		$('.site-search__result').css('display','block');
	});
	// var searchItems = ['Beach Bunny', 'Beach Riot'];
	// var parent = document.getElementsByClassName('.site-search__result-list')[0];
	// var searchIn = document.getElementsByClassName('.site-search__entry-field')[0];

	// searchIn.addEventListener('input', function(e) {
	// 	var val = e.target.value.toLowerCase();
	// 	var newArray = searchItems.filter(function (e) {
	// 		return e.toLowerCase().match(val);
	// 	});
	// 	renderItems(newArray, parent);
	// });

	// function renderItems(arr, parent) {
	// 	parent.innerHTML = '';
	// 	for (var i = 0;i<arr.length;i++) {
	// 		var el = document.createElement('li');
	// 		el.innerHTML = 'a(href="")';
	// 	}
	// };

	// Мобильное меню
	$('.js-top-nav-open').click(function(){
		$('.main-nav').addClass('mobile-visible');
		$('.overlay').addClass('mobile-visible');
	});

	$('.js-top-nav-close').click(function(){
		$('.main-nav').removeClass('mobile-visible');
		$('.overlay').removeClass('mobile-visible');
	});

	$('.overlay').click(function(){
		$('.main-nav').removeClass('mobile-visible');
		$('.live-town').removeClass('open');
		$(this).removeClass('mobile-visible');
	});


	// Мобильное меню фильтра каталога
	$('.js-catalog-filter-open').click(function(){
		$('.catalog-filter').addClass('mobile-visible');
		$('.overlay').addClass('mobile-visible');
	});

	$('.js-catalog-filter-close').click(function(){
		$('.catalog-filter').removeClass('mobile-visible');
		$('.overlay').removeClass('mobile-visible');
	});

	$('.overlay').click(function(){
		$('.catalog-filter').removeClass('mobile-visible');
		$(this).removeClass('mobile-visible');
	});


	// Фильтр мобильного меню хедера
	$('.js-main-nav-subnav-trigger').click(function(){
			$(this).toggleClass('is-open');
			$('.main-nav__categories-list').slideToggle();
	});


	// Фильтр мобильного меню фильтра каталога
	$('.js-catalog-filter-block-trigger').click(function(){
		if($(window).width() < 992) {
			$(this).toggleClass('is-active');
			$(this).parent().next('.menu-group__list').slideToggle();
			$(this).parent().next('.catalog-filter__block').slideToggle();
		};
	});


	// Сброс фильтра в каталоге
	$('.catalog-filter__reset').click(function(){
		$(this).parent().find('.catalog-filter__checkbox').removeAttr('checked');
	});


	// Фильтр мобильного меню футера
	$('.site-footer__according-heading').click(function(){
		if($(window).width() < 530) {
			$(this).toggleClass('is-active');
			$(this).next('.site-footer__menu').slideToggle();
			$(this).next('.site-footer__payment-option').slideToggle();
			$(this).next('.site-footer__subscribe').slideToggle();
		};
	});


	// основной слайдер на главной 
	$('.hero-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		fade: true,
		dots: true
	});


	// слайдер карточек товаров на главной 
	$('.slider-products').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		draggable: false,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 649,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 499,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	// слайдер фотографий пользователей инстаграма на главной
	$('.instagram-photo__list').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: false,
		centerMode: false,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					centerMode: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					infinite: true,
					centerMode: true,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 430,
				settings: {
					infinite: true,
					centerMode: true,
					slidesToShow: 1
				}
			}
		]
	});


	// табы групп товаров на главной странице
	homeTabs();
	// табы групп товаров на странице карточки товара
	cardTabs();


	// слайдер преимуществ на главной
	$('.benefits-slider').slick({
		responsive: [
			{
				breakpoint: 3000,
				settings: {
					variableWidth: true,
					draggable: false,
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					draggable: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	// Скрытий текст описания блока о магазине
	var collapsedTextHeight = 0;
	var heightCoef = 0;

	// Вычисляем всю высоту скрытого текста
	$('.about-store__description-content > *').each( function() {
		collapsedTextHeight += $(this).outerHeight(true);
	});

	heightCoef = collapsedTextHeight / 200;
	var optimalSpeed = collapsedTextHeight / heightCoef;

	$(window).resize(function() {
		$('.about-store__description-content > *').each( function() {
			collapsedTextHeight += $(this).outerHeight(true);
		});

		heightCoef = collapsedTextHeight / 200;
		optimalSpeed = collapsedTextHeight / heightCoef;
	});



	$('.about-store__description-collapse').click( function() {
		if ($(this).hasClass('off')) {
			$('.about-store__description-content').animate({
				height: collapsedTextHeight + 'px'
			}, 300, 'linear', function() {
				$(this).css('height','100%');
			});
			$(this).removeClass('off').addClass('on').text('Скрыть информацию');
		}
		else if ($(this).hasClass('on')) {
			$('.about-store__description-content').animate({
				height: '102px'
			}, 300, 'linear');
			$(this).removeClass('on').addClass('off').text('Показать информацию');
		}
	});


	// Скрытий текст в каталоге
	var collapsedCatalogTextHeight = 0;
	var catalogHeightCoef = 0;

	// Вычисляем всю высоту скрытого текста
	$('.catalog__text-content > *').each( function() {
		collapsedCatalogTextHeight += $(this).outerHeight(true);
	});

	catalogHeightCoef = collapsedCatalogTextHeight / 200;
	var catalogOptimalSpeed = collapsedCatalogTextHeight / catalogHeightCoef;

	$(window).resize(function() {
		$('.catalog__text-content > *').each( function() {
			collapsedCatalogTextHeight += $(this).outerHeight(true);
		});
		catalogHeightCoef = collapsedCatalogTextHeight / 200;
		catalogOptimalSpeed = collapsedCatalogTextHeight / catalogHeightCoef;
	});

	$('.catalog__text-collapse').click( function() {
		if ($(this).hasClass('off')) {
			$('.catalog__text-content').animate({
				height: collapsedCatalogTextHeight + 'px'
			}, 300, 'linear', function() {
				$(this).css('height','100%');
			});
			$(this).removeClass('off').addClass('on').text('Скрыть информацию');
		}
		else if ($(this).hasClass('on')) {
			if($(window).width() > 768) {
				$('.catalog__text-content').animate({
					height: '126px'
				}, 300, 'linear');
				$(this).removeClass('on').addClass('off').text('Показать информацию');
			} else {
				$('.catalog__text-content').animate({
					height: '102px'
				}, 300, 'linear');
				$(this).removeClass('on').addClass('off').text('Показать информацию');
			}
		}
	});


	// кнопка скролла вверх - пролистывание страницы вверх
	$('.js-scroll-to-top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600, "swing");
	});

	// кнопка скролла вверх - прилипание кнопки в футере
	var footerSocialScrollPos, scrollTopControlPos, footerSubscribeScrollPos;

	function refreshVar() {
		footerSocialScrollPos = $('.site-footer__social').offset().top + 20;
		scrollTopControlPos = $('.js-scroll-to-top').offset().top;
		footerSubscribeScrollPos = $('.site-footer__subscribe').offset().top + 20;
	};


	$(window).scroll(function() {

		refreshVar();

		if($(window).width() >= 530) {
			if (scrollTopControlPos >= footerSubscribeScrollPos) {
				$('.js-scroll-to-top').removeClass('state-fixed');
			}
			else {
				$('.js-scroll-to-top').addClass('state-fixed');
			};
		} else {
			if (scrollTopControlPos >= footerSocialScrollPos) {
				$('.js-scroll-to-top').removeClass('state-fixed');
			}
			else {
				$('.js-scroll-to-top').addClass('state-fixed');
			};
		};

		// if (scrollTopPos >= copyrightPos) {
		// 	$('.js-scroll-to-top').css({'transform':'none', 'transition':'none'}).removeClass('state-fixed');
		// }
		// else {
		// 	$('.js-scroll-to-top').attr({'style':''}).addClass('state-fixed');
		// };

	});


	// Кастомный селект сортировки в каталоге
	$('.catalog__sort-select, .news__sort-select, .sort-size__top, .sort-size__bottom, .sort-size__single, .sertificate__select').selectric({
		arrowButtonMarkup: '<span class="select-arrow"></span>',
		disableOnMobile: false,
		nativeOnMobile: false
	});


	// Блок смены пароля в личном кабинете
	$('.cabinet-profile__change-password').click(function() {
		if ($(this).hasClass('off')) {
			$(this).removeClass('off').addClass('on');
			$(this).next('.cabinet-profile__password-group').css({'display' : 'block'});
		} else if ($(this).hasClass('on')) {
			$(this).removeClass('on').addClass('off');
			$(this).next('.cabinet-profile__password-group').css({'display' : 'none'});
		}
	});


	// Блок выбранных товаров в личном кабинете - мои покупки
	$('.js-show-order-products-trigger').click(function(){
		if ($(this).hasClass('off')) {
			$(this).removeClass('off').addClass('on');
			$(this).parent().parent().parent().parent().find('.js-show-order-products-mobile-trigger').removeClass('off').addClass('on').text('Свернуть');
			$(this).parent().parent().parent().next('.my-order__products').css({'display' : 'block'});
		} else if ($(this).hasClass('on')) {
			$(this).removeClass('on').addClass('off');
			$(this).parent().parent().parent().parent().find('.js-show-order-products-mobile-trigger').removeClass('on').addClass('off').text('Подробнее');
			$(this).parent().parent().parent().next('.my-order__products').css({'display' : 'none'});
		}
	});

	$('.js-show-order-products-mobile-trigger').click(function(){
		if ($(this).hasClass('off')) {
			$(this).removeClass('off').addClass('on').text('Свернуть');
			$(this).parent().find('.js-show-order-products-trigger').removeClass('off').addClass('on');
			$(this).parent().children('.my-order__products').css({'display' : 'block'});
		} else if ($(this).hasClass('on')) {
			$(this).removeClass('on').addClass('off').text('Подробнее');
			$(this).parent().find('.js-show-order-products-trigger').removeClass('on').addClass('off');
			$(this).parent().children('.my-order__products').css({'display' : 'none'});
		}
	});


	// Зум фотографии на странице карточки товара
	if($(window).width() > 768) {
		$('.card-product-gallery__slider-item').zoom({
			duration: 0,
			magnify: 1
		});
	}
	

	$('.total-box__promo').click(function() {
		var boxFields = $(this).parent().find('.total-box__apply-discount');
		if(boxFields.hasClass('is-visible') && boxFields.hasClass('visible-promo')) {
			boxFields.slideToggle(0);
			boxFields.removeClass('is-visible');
			boxFields.removeClass('visible-promo');
		} else if(boxFields.hasClass('is-visible') && boxFields.hasClass('visible-loyalty')) {
			boxFields.removeClass('visible-loyalty').addClass('visible-promo');
			boxFields.find('input[name="promocode"]').css('display', 'block');
			boxFields.find('input[name="apply_discount"]').css('display', 'none');
		} else {
			boxFields.addClass('is-visible');
			boxFields.addClass('visible-promo');
			boxFields.find('input[name="promocode"]').css('display', 'block');
			boxFields.find('input[name="apply_discount"]').css('display', 'none');
			setTimeout(function() {
				boxFields.slideToggle(0);
			}, 100);
		}
	});

	$('.total-box__loyalty').click(function() {
		var boxFields = $(this).parent().find('.total-box__apply-discount');
		if(boxFields.hasClass('is-visible') && boxFields.hasClass('visible-loyalty')) {
			boxFields.slideToggle(0);
			boxFields.removeClass('is-visible');
			boxFields.removeClass('visible-loyalty');
		} else if(boxFields.hasClass('is-visible') && boxFields.hasClass('visible-promo')) {
			boxFields.removeClass('visible-promo').addClass('visible-loyalty');
			boxFields.find('input[name="promocode"]').css('display', 'none');
			boxFields.find('input[name="apply_discount"]').css('display', 'block');
		} else {
			boxFields.addClass('is-visible');
			boxFields.addClass('visible-loyalty');
			boxFields.find('input[name="apply_discount"]').css('display', 'block');
			boxFields.find('input[name="promocode"]').css('display', 'none');
			setTimeout(function() {
				boxFields.slideToggle(0);
			}, 100);
		}
	});

	$('.cabinet-adress__add-adress').click(function() {
		$(this).next('.cabinet-adress__form-group').toggleClass('is-visible');
	});

	$('.cabinet-adress__added-edit').click(function() {
		$(this).parent().parent().parent().parent().find('.cabinet-adress__form-group').addClass('is-visible');
	});

	$('.cabinet-adress__added-remove').click(function() {
		$(this).parent().parent().remove();
	});

	$('.cabinet-adress__form-group .button-form').click(function() {

		var newAddress= {
			'city': $(this).parent().find('input[name="city"]').val(),
			'index': $(this).parent().find('input[name="index"]').val(),
			'street':$(this).parent().find('input[name="street"]').val() ,
			'house':$(this).parent().find('input[name="house"]').val() ,
			'flat': $(this).parent().find('input[name="apartment"]').val()
		}

		$('.cabinet-adress__list')
			.append('<div class="cabinet-adress__added clearfix"><span>'+ newAddress.index + ', ' + newAddress.city + ', ' + newAddress.street + ',' + newAddress.house + ', ' + newAddress.flat + '</span><div class="cabinet-adress__added-actions"><button class="cabinet-adress__added-edit" type="button">Редактировать</button><a class="cabinet-adress__added-remove" href="javascript:void(0);">Удалить</a></div></div>');
	});

	$('#card-product-form').validate({
		errorPlacement: function(error, element) {
			if (element.attr("name") == "top_size") {
				$('#top-size-error').text($(error).text());
			} else if(element.attr("name") == "bottom_size") {
				$('#bottom-size-error').text($(error).text());
			}
		},
		rules: {
			top_size: {
				required: true
			},
			bottom_size: {
				required: true
			}
		},
		messages: {
			top_size: {
				required: "Пожалуйста, выберите размер"
			},
			bottom_size: {
				required: "Пожалуйста, выберите размер"
			}
		},
		submitHandler: function(form) {
			$.ajax({
				type: 'GET',
				url: './card.html',
				data: $('#card-product-form').serialize(),
				success: function () {
					$('.card__add-cart').addClass('added');
					$('.card__add-cart').text('Товар добавлен');
					addToCart();
				}
			});
		}
	});

	$('#fast-view-form').validate({
		errorPlacement: function(error, element) {
			if (element.attr("name") == "top_size") {
				$('#top-size-error').text($(error).text());
			} else if(element.attr("name") == "bottom_size") {
				$('#bottom-size-error').text($(error).text());
			}
		},
		rules: {
			top_size: {
				required: true
			},
			bottom_size: {
				required: true
			}
		},
		messages: {
			top_size: {
				required: "Пожалуйста, выберите размер"
			},
			bottom_size: {
				required: "Пожалуйста, выберите размер"
			}
		},
		submitHandler: function(form) {
			$.ajax({
				type: 'GET',
				url: './card.html',
				data: $('#fast-view-form').serialize(),
				success: function () {
					$('.fast-view__add-cart').addClass('added');
					$('.fast-view__add-cart').text('Товар добавлен');
					addToCart();
				}
			});
		}
	});

		$('#home-subscribe').validate({
			errorPlacement: function(error, element) {
				if(element.attr('name') == 'email') {
					$('#home-subscribe-error').removeClass('subscribe__status-login--successfully').addClass('subscribe__status-login--wrong').text($(error).text());
				}
			},
			success: function(element) {
				$('#home-subscribe-error').removeClass('subscribe__status-login--wrong').addClass('subscribe__status-login--successfully').text('Подписка успешно оформлена');
			},
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				email: {
					required: "Заполните поле",
					email: "Почта введена неверно"
				}
			}
		});


		$('#footer-subscribe').validate({
			errorPlacement: function(error, element) {
				if(element.attr('name') == 'email') {
					$('#footer-subscribe-error').removeClass('subscribe__status-login--successfully').addClass('subscribe__status-login--wrong').text($(error).text());
				}
			},
			success: function(element) {
				$('#footer-subscribe-error').removeClass('subscribe__status-login--wrong').addClass('subscribe__status-login--successfully').text('Подписка успешно оформлена');
			},
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				email: {
					required: "Заполните поле",
					email: "Почта введена неверно"
				}
			}
		});

	$('.fast-view__add-favorite').click(function() {
		if(!$(this).hasClass('added')) {
			$(this).addClass('added');
			addToFav();
		} else {
			$(this).removeClass('added');
			addToFav(false);
		}
	});

	$('.card__add-favorite').click(function() {
		if(!$(this).hasClass('added')) {
			$(this).addClass('added');
			addToFav();
		} else {
			$(this).removeClass('added');
			addToFav(false);
		}
	});

	var colorText = $('.card__current-color > span');
	if($('.color-panel__item label').length) {
		colorText.text($('.color-panel__radio:checked + label').text());
	}

	var current = colorText.text();

	$('.color-panel__item label').click(function() {
		colorText.text($(this).text());
		current = $(this).text();
	});

	$('.color-panel__item label').mouseover(function() {
		colorText.text($(this).text());
	});

	$('.color-panel__item label').mouseout(function() {
		colorText.text(current);
	});
	
	$('.delivery-address .radio-box').click(function() {
		if($(this).find('input#ordering-delivery-pickup:checked').length) {
			$('.delivery-methods .radio-group').addClass('disabled');
			$('.delivery-methods .radio-group input').prop('disabled', true);
		} else {
			$('.delivery-methods .radio-group').removeClass('disabled');
			$('.delivery-methods .radio-group input').prop('disabled', false);
		}
	});

	$('.field-city, .field-index, .field-address').click(function() {
		$(this).parent().parent().find('input#ordering-delivery-to-address').trigger('click');
	});


});


// ---------------------------------------------------------------------------------------


$(window).scroll(function() {

	// кнопка скролла вверх
	if($(window).scrollTop() > 250) {
		$('.js-scroll-to-top').addClass('state-fixed').removeClass('state-hidden');
	} else {
		$('.js-scroll-to-top').addClass('state-fixed state-hidden');
	};

});


// ---------------------------------------------------------------------------------------


$(window).load(function() {

	// $('.hero-slider__link').imagefill();
	$('.beachwear__item').imagefill();
	$('.about-brand__banner').imagefill();

	setTimeout(function(){
		$('.live-town').css({'overflow': 'visible', 'display': 'block'});
	}, 500);


	// скролл фильтра в каталоге
	$('.catalog-filter__scrolled-block').mCustomScrollbar({
		axis: 'y',
		advanced: { autoExpandHorizontalScroll:true },
		mouseWheel: { scrollAmount: 32 },
		scrollEasing: 'linear',
		scrollInertia: 100
	});

	// скролл выбранных товаров на страницах оформления заказа
	$('.selected-products--scrolled').mCustomScrollbar({
		axis: 'y',
		advanced: { autoExpandHorizontalScroll:true },
		scrollEasing: 'linear',
		scrollInertia: 250
	});

	// Слайдер фото на странице модалки - быстрый просмотр
	$('.product-gallery__slider').slick('setPosition');
	$('.product-gallery__slider-nav').slick('setPosition');

	// Слайдер фото на странице карточки товара
	$('.card-product-gallery__slider').slick('setPosition');
	$('.card-product-gallery__slider-nav').slick('setPosition');

});


// ---------------------------------------------------------------------------------------


$(window).resize(function() {

	catalogResize();

	if($(window).width() > 529) {
		$('.site-footer__menu').attr('style','');
		$('.site-footer__payment-option').attr('style','');
		$('.site-footer__subscribe').attr('style','');
	};

	if($(window).width() > 768) {
		$('.card-product-gallery__slider-item').zoom({
			duration: 0,
			magnify: 1
		});
	} else {
		$('.card-product-gallery__slider-item').trigger('zoom.destroy');
	}

	// Кастомный селект
	$('.catalog__sort-select, .news__sort-select, .sort-size__top, .sort-size__bottom, .sort-size__single, .sertificate__select').selectric({
		arrowButtonMarkup: '<span class="select-arrow"></span>',
		disableOnMobile: false,
		nativeOnMobile: false
	});

	// Слайдер фото на странице модалки - быстрый просмотр
	$('.product-gallery__slider').slick('setPosition');
	$('.product-gallery__slider-nav').slick('setPosition');

	// Слайдер фото на странице карточки товара
	$('.card-product-gallery__slider').slick('setPosition');
	$('.card-product-gallery__slider-nav').slick('setPosition');

});

var map;
function initMap() {
	if($('#map').length) {

	// 	var styledMapType = new google.maps.StyledMapType(
			
	// );

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.75589847985194, lng: 37.6224422827363},
			mapTypeId: 'roadmap',
			zoom: 16,
			styles: [
				{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
								{
										"color": "#e9e9e9"
								},
								{
										"lightness": 17
								}
						]
				},
				{
						"featureType": "landscape",
						"elementType": "geometry",
						"stylers": [
								{
										"color": "#f5f5f5"
								},
								{
										"lightness": 20
								}
						]
				},
				{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [
								{
										"color": "#ffffff"
								},
								{
										"lightness": 17
								}
						]
				},
				{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
								{
										"color": "#ffffff"
								},
								{
										"lightness": 29
								},
								{
										"weight": 0.2
								}
						]
				},
				{
						"featureType": "road.arterial",
						"elementType": "geometry",
						"stylers": [
								{
										"color": "#ffffff"
								},
								{
										"lightness": 18
								}
						]
				},
				{
						"featureType": "road.local",
						"elementType": "geometry",
						"stylers": [
								{
										"color": "#ffffff"
								},
								{
										"lightness": 16
								}
						]
				},
				{
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [
								{
										"color": "#f5f5f5"
								},
								{
										"lightness": 21
								}
						]
				},
				{
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
								{
										"color": "#dedede"
								},
								{
										"lightness": 21
								}
						]
				},
				{
						"elementType": "labels.text.stroke",
						"stylers": [
								{
										"visibility": "on"
								},
								{
										"color": "#ffffff"
								},
								{
										"lightness": 16
								}
						]
				},
				{
						"elementType": "labels.text.fill",
						"stylers": [
								{
										"saturation": 36
								},
								{
										"color": "#333333"
								},
								{
										"lightness": 40
								}
						]
				},
				{
						"elementType": "labels.icon",
						"stylers": [
								{
										"visibility": "off"
								}
						]
				},
				{
						"featureType": "transit",
						"elementType": "geometry",
						"stylers": [
								{
										"color": "#f2f2f2"
								},
								{
										"lightness": 19
								}
						]
				},
				{
						"featureType": "administrative",
						"elementType": "geometry.fill",
						"stylers": [
								{
										"color": "#fefefe"
								},
								{
										"lightness": 20
								}
						]
				},
				{
						"featureType": "administrative",
						"elementType": "geometry.stroke",
						"stylers": [
								{
										"color": "#fefefe"
								},
								{
										"lightness": 17
								},
								{
										"weight": 1.2
								}
						]
				}
		]
			// mapTypeControlOptions: {
			// 	mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map'];
			// }
		});

		var marker = new google.maps.Marker({
			position: { lat: 55.75531955232409, lng: 37.62161582708359 },
			map: map,
			title: 'Бутик MixBikini'
		});

		var pathToMetroCoordinates= [
			{ lat: 55.75531955232409, lng: 37.62161582708359 },
			{ lat: 55.7558638831126, lng: 37.62044043280184 },
			{ lat: 55.75694098996826, lng: 37.622234243899584 },
			{ lat: 55.7564500425371, lng: 37.62335121631622 }
		];

		var pathToMetro = new google.maps.Polyline({
			path: pathToMetroCoordinates,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});

		pathToMetro.setMap(map);
	}
}


//-----------------------------------------------------------------------------------
