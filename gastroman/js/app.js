// Табы групп товаров на главной странице
function homeTabs(){
	$('#home-products').responsiveTabs({
		startCollapsed: 'tabs',
		duration: 200,
		activate: function(e, tab) {
			$('.slider-products').slick('setPosition');
		}
	});
};

	// Переменные: позиция окна браузера при скролле окна, 
	// высота главного меню хедера,
	// высота верхнего блока хедера над навигацией
	var winPos, navHeight, headerTopHeight, navStickyHeight;

	function refreshVarNav() {
		// Отслеживаем позицию окна браузера
		winPos = $(window).scrollTop();
		// отслеживаем высоту меню при изменении ширины окна браузера
		navHeight = $('.main-nav').outerHeight();
		// отслеживаем высоту верхнего блока хедера над навигацией при изменении ширины окна браузера
		headerTopHeight = $('.site-header__top').outerHeight();
	};

// -------------------------------------------------------------------------------------

$(document).ready(function () {

	// Липкое меню хедера ---------------------------------------

	// отслеживаем значения высоты и позиции главного меню хедера
	refreshVarNav();

	$(window).resize(function() {

		// отслеживаем значения высоты и позиции главного меню хедера
		refreshVarNav();

		if($(window).width() >= 768 && !$('.main-nav-clone').length) {
			$('<div class="main-nav-clone"></div>').insertBefore('.main-nav').hide();
		}

		// Убиреаем липкое меню на мобильном виде
		if($(window).width() < 768) {
			$('.main-nav').removeClass('sticky');
			$('.main-nav__cart').removeClass('sticky');
			$('.site-header__cart').removeClass('sticky');
			$('.clone-nav').hide();
		} else if (winPos >= headerTopHeight && $(window).width() >= 768) {
			$('.main-nav').addClass('sticky');
			$('.main-nav__cart').addClass('sticky');
			$('.site-header__cart').addClass('sticky');
			$('.main-nav-clone').show();
		}

		if($(window).width() > 560) {
			$('.site-header__bottom-mobile').removeClass('sticky');
		}

	});

	if($(window).width() >= 768) {
		$('<div class="main-nav-clone"></div>').insertBefore('.main-nav').hide();
	}

	$(window).scroll(function () {

		// Отслеживаем позицию окна браузера при скролле
		winPos = $(window).scrollTop();

		// Делаем меню липким
		if (winPos >= headerTopHeight && $(window).width() >= 768) {
			$('.main-nav').addClass('sticky');
			$('.main-nav__cart').addClass('sticky');
			$('.site-header__cart').addClass('sticky');
			$('.main-nav-clone').show();
		} else {
			$('.main-nav').removeClass('sticky');
			$('.main-nav__cart').removeClass('sticky');
			$('.site-header__cart').removeClass('sticky');
			$('.main-nav-clone').hide();
		}

		if($(window).width() <= 560 && winPos > 97) {
			$('.site-header__bottom-mobile').addClass('sticky');
		} else {
			$('.site-header__bottom-mobile').removeClass('sticky');
		}

	});

	// Конец блока - липкое меню хедера ---------------------------


	// Поиск товаров на главной в хедере
	if($('#main-site-search').length) {
		var mainSearch = document.getElementById('main-site-search');
		new Awesomplete(mainSearch, {
			list: ['Масло кунжутное 250гр. Toasted Sesame Oil', 
			'Масло оливковое пэт 5л "Olio di sansa" Ruata', 
			// 'Масло "Золотая семечка" Ароматная подс.нераф. 1л',.
			'Масло нераф. Мамруковское 1л. 1*15шт', 
			'Масло раст. раф. с экстрактом кориандра 500мл.', 
			'Масло раст. раф. с экстрактом Петрушки 500мл.', 
			'Масло нераф. Мамруковское 1л. 1*15шт']
		});
	}


	// автозаполнения для полей ввода
	$(".phone-mask").mask("+7 (999) 999-99-99", {placeholder:"+7 (___) ___-__-__"});
	$(".date-mask").mask("99/99/9999", {placeholder:"дд/мм/гггг"});


	// убираем текст подсказку при наведении при заполненом поле
	$(".form-control-masked").hover(function() {
		if($(this).find("input").val().length > 0) {
			$(this).addClass("hint-mask");
		} else {
			$(this).removeClass("hint-mask");
		}
	});

	// модальное окно - перезвонить мне в хедере
	$('.to-modal-callback').magnificPopup({
		mainClass: 'modal-overlay'
	});

	// модальное окно - выбор города в хедере
	$('.to-modal-city-location').magnificPopup({
		mainClass: 'modal-overlay'
	});

	// модальное окно - подписки на главной
	$('.to-modal-main-subscribe').magnificPopup({
		mainClass: 'modal-overlay'
	});

	// модальное окно - быстрый заказ
	$('.to-modal-buy-click').magnificPopup({
		mainClass: 'modal-overlay'
	});

	// модальное окно - восстановлеие пароля на странице регистрации
	$('.to-modal-password-recovery').magnificPopup({
		mainClass: 'modal-overlay'
	});

	// модальное окно - оставить резюме на стр. вакансий
	$('.to-modal-vacancy-resume').magnificPopup({
		mainClass: 'modal-overlay'
	});

	// модальное окно - карта расположения магазинов
	$('.to-modal-stores-map').magnificPopup({
		mainClass: 'modal-overlay',
		callbacks: {
			open: function() {
				storesAddressMap.container.fitToViewport();
			}
		}
	});

	// модальное окно - карта расположения магазинa 1
	$('.to-modal-stores-map-first').magnificPopup({
		mainClass: 'modal-overlay',
		callbacks: {
			open: function() {
				storeAddressMapFirst.container.fitToViewport();
			}
		}
	});

	// модальное окно - карта расположения магазинa 2
	$('.to-modal-stores-map-second').magnificPopup({
		mainClass: 'modal-overlay',
		callbacks: {
			open: function() {
				storeAddressMapSecond.container.fitToViewport();
			}
		}
	});

	// модальное окно - карта расположения магазинa 3
	$('.to-modal-stores-map-third').magnificPopup({
		mainClass: 'modal-overlay',
		callbacks: {
			open: function() {
				storeAddressMapThird.container.fitToViewport();
			}
		}
	});

	// модальное окно - карта расположения магазинa 4
	$('.to-modal-stores-map-fourth').magnificPopup({
		mainClass: 'modal-overlay',
		callbacks: {
			open: function() {
				storeAddressMapFourth.container.fitToViewport();
			}
		}
	});

	// Рейтинг на странице личного кабинета - обратная связь
	$('.cabinet-feedback__raiting').rating({
		fx: 'full',
		stars: 5,
		// url: 'rating.php',
		image: 'img/stars.png'
	});


	// Слайдер карточек товаров на главной
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
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});


	// Слайдер товаров на странице карточки товара
	$('.card-products__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});


	// Слайдер рецептов на странице карточки товара
	$('.card-recipes__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// Табы групп товаров на главной странице
	homeTabs();


	// Слайдер рецептов на главной 
	$('.recipes__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true
				}
			}
		]
	});


	// Слайдер новостей на главной 
	$('.news-preview__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					arrows: true
				}
			}
		]
	});


	// Мобильное меню
	$('.js-top-nav-open').click(function(){
		$('.main-nav').addClass('open');
		$('.nav-overlay').addClass('mobile-visible');
		$('body').css({'overflow':'hidden'});
	});

	$('.js-top-nav-close').click(function(){
		$('.main-nav').removeClass('open');
		$('.nav-overlay').removeClass('mobile-visible');
		$('body').css({'overflow':'auto'});
	});

	$('.nav-overlay').click(function(){
		$('.main-nav').removeClass('open');
		$(this).removeClass('mobile-visible');
		$('body').css({'overflow':'auto'});
	});


	// Фильтр мобильного меню футера
	$('.site-footer__according-heading').click(function(){
		if($(window).width() < 768) {
			$(this).toggleClass('is-active');
			$(this).next('.site-footer__menu').slideToggle();
			$(this).next('.site-footer__payment-option').slideToggle();
			$(this).next('.site-footer__contacts').slideToggle();
		};
	});


	// Мобильный вид формы поиска по сайту
	$('.js-trigger-site-search-open').click(function(){
		$('.site-header__search').addClass('mobile-visible');
		$('.js-top-nav-open').css({'visibility': 'hidden'});
		$('.site-header__order-status').css({'visibility': 'hidden'});
		$('.site-header__contact').css({'visibility': 'hidden'});
		$('.js-trigger-site-search-open').css({'visibility': 'hidden'});
		$('.site-header__cart').css({'visibility': 'hidden'});
	});

	$('.site-search__close').click(function(){
		$('.site-header__search').removeClass('mobile-visible');
		$('.js-top-nav-open').css({'visibility': 'visible'});
		$('.site-header__order-status').css({'visibility': 'visible'});
		$('.site-header__contact').css({'visibility': 'visible'});
		$('.js-trigger-site-search-open').css({'visibility': 'visible'});
		$('.site-header__cart').css({'visibility': 'visible'});
	});


	// Основной слайдер баннеров на главной 
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		fade: true,
		speed: 500,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4500
	});


	// Cлайдер фотографий блюд на странице рецепта 
	$('.dish__img-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		fade: true,
		// speed: 300,
		dots: false,
		autoplay: false
	});


	// счетчик количества товаров
	$('.count-field').styler();


	// табы блока описания товара на странице карточки товара
	$('#card-description').responsiveTabs({
		// startCollapsed: 'tabs',
		// animation: 'fade'
		duration: 200,
		active: 0
	});


	// табы на странице регистрации и входа
	if($(window).width() < 768) {
		$(".registration-site").css("display","none");
		$(".entrance__tab-login").addClass("active");
		$(".entrance__tab-login").click(function() {
			$(".entrance__tab-registration").removeClass("active").parent().parent().find(".entrance__tab-login").addClass("active");
			$(".registration-site").css("display","none").parent().parent().find(".login-site").css("display","block");
		});
		$(".entrance__tab-registration").click(function() {
			$(".entrance__tab-login").removeClass("active").parent().parent().find(".entrance__tab-registration").addClass("active");
			$(".login-site").css("display","none").parent().parent().find(".registration-site").css("display","block");
		});
	};


	// Блок смены пароля в личном кабинете - мои данные
	$('.cabinet-profile__change-password').click(function() {
		if ($(this).hasClass('off')) {
			$(this).removeClass('off').addClass('on');
			$(this).next('.cabinet-profile__password-group').css({'display' : 'block'});
		} else if ($(this).hasClass('on')) {
			$(this).removeClass('on').addClass('off');
			$(this).next('.cabinet-profile__password-group').css({'display' : 'none'});
		}
	});


	// Блок добавления адресса на странице личного кабинета - мои адресса
	$('.cabinet-adress__add-adress').click(function() {
		$(this).next('.cabinet-adress__form-group').toggleClass('is-visible');
	});


	// // Скрытий текст описания блока о магазине - на главной

	// var collapsedTextHeight = 0;
	// var heightCoef = 0;

	// // Вычисляем всю высоту скрытого текста
	// $('.about-store__description-content > *').each( function() {
	// 	collapsedTextHeight += $(this).outerHeight(true);
	// });

	// heightCoef = collapsedTextHeight / 200;
	// var optimalSpeed = collapsedTextHeight / heightCoef;

	// $(window).resize(function() {
	// 	$('.about-store__description-content > *').each( function() {
	// 		collapsedTextHeight += $(this).outerHeight(true);
	// 	});

	// 	heightCoef = collapsedTextHeight / 200;
	// 	optimalSpeed = collapsedTextHeight / heightCoef;
	// });

	// $('.about-store__description-collapse').click( function() {
	// 	if ($(this).hasClass('off')) {
	// 		$('.about-store__description-content').animate({
	// 			height: collapsedTextHeight + 'px'
	// 		}, 300, 'linear', function() {
	// 			$(this).css('height','100%');
	// 		});
	// 		$(this).removeClass('off').addClass('on').text('Скрыть информацию');
	// 	}
	// 	else if ($(this).hasClass('on')) {
	// 		$('.about-store__description-content').animate({
	// 			height: '72px'
	// 		}, 300, 'linear');
	// 		$(this).removeClass('on').addClass('off').text('Показать информацию');
	// 	}
	// });

	$('.about-store__description-collapse').click( function() {
		if ($(this).hasClass('off')) {
			$('.about-store__description-content').css('height','100%');
			$(this).removeClass('off').addClass('on').text('Скрыть информацию');
		}
		else if ($(this).hasClass('on')) {
			$('.about-store__description-content').css('height','72px');
			$(this).removeClass('on').addClass('off').text('Показать информацию');
		}
	});


	// Скрытий текст описания рецепта на странице рецептов

	// var collapsedRecipesTextHeight = 0;
	// var heightRecipesCoef = 0;

	// // Вычисляем всю высоту скрытого текста
	// $('.recipes-page__text-content > *').each( function() {
	// 	collapsedRecipesTextHeight += $(this).outerHeight(true);
	// });

	// heightRecipesCoef = collapsedRecipesTextHeight / 200;
	// var optimalRecipesSpeed = collapsedRecipesTextHeight / heightRecipesCoef;

	// $(window).resize(function() {
	// 	$('.recipes-page__text-content > *').each( function() {
	// 		collapsedRecipesTextHeight += $(this).outerHeight(true);
	// 	});

	// 	heightRecipesCoef = collapsedRecipesTextHeight / 200;
	// 	optimalRecipesSpeed = collapsedRecipesTextHeight / heightRecipesCoef;
	// });

	// $('.recipes-page__text-collapse').click( function() {
	// 	if ($(this).hasClass('off')) {
	// 		$('.recipes-page__text-content').animate({
	// 			height: collapsedRecipesTextHeight + 'px'
	// 		}, 300, 'linear', function() {
	// 			$(this).css('height','100%');
	// 		});
	// 		$(this).removeClass('off').addClass('on').text('Скрыть полностью');
	// 	}
	// 	else if ($(this).hasClass('on')) {
	// 		$('.recipes-page__text-content').animate({
	// 			height: '72px'
	// 		}, 300, 'linear');
	// 		$(this).removeClass('on').addClass('off').text('Показать полностью');
	// 	}
	// });

	if($(window).width() >= 550) {
		$('.recipes-page__text-collapse').click( function() {
			if ($(this).hasClass('off')) {
				$('.recipes-page__text-content').css('height','100%');
				$(this).removeClass('off').addClass('on').text('Скрыть полностью');
			}
			else if ($(this).hasClass('on')) {
				$('.recipes-page__text-content').css('height','72px');
				$(this).removeClass('on').addClass('off').text('Показать полностью');
			}
		});
	} else {
		$('.recipes-page__text-collapse').click( function() {
			if ($(this).hasClass('off')) {
				$('.recipes-page__text-content').css('height','100%');
				$(this).removeClass('off').addClass('on').text('Скрыть полностью');
			}
			else if ($(this).hasClass('on')) {
				$('.recipes-page__text-content').css('height','120px');
				$(this).removeClass('on').addClass('off').text('Показать полностью');
			}
		});
	}


	// Скрытий текст описания продуктов на странице раздела каталога

	// var collapsedCatalogTextHeight = 0;
	// var heightCatalogCoef = 0;

	// // Вычисляем всю высоту скрытого текста
	// $('.catalog-part__text-content > *').each( function() {
	// 	collapsedCatalogTextHeight += $(this).outerHeight(true);
	// });

	// heightCatalogCoef = collapsedCatalogTextHeight / 200;
	// var optimalCatalogSpeed = collapsedCatalogTextHeight / heightCatalogCoef;

	// $(window).resize(function() {
	// 	$('.catalog-part__text-content > *').each( function() {
	// 		collapsedCatalogTextHeight += $(this).outerHeight(true);
	// 	});

	// 	heightCatalogCoef = collapsedCatalogTextHeight / 200;
	// 	optimalCatalogSpeed = collapsedCatalogTextHeight / heightCatalogCoef;
	// });

	// $('.catalog-part__text-collapse').click( function() {
	// 	if ($(this).hasClass('off')) {
	// 		$('.catalog-part__text-content').animate({
	// 			height: collapsedCatalogTextHeight + 'px'
	// 		}, 300, 'linear', function() {
	// 			$(this).css('height','100%');
	// 		});
	// 		$(this).removeClass('off').addClass('on').text('Скрыть');
	// 	}
	// 	else if ($(this).hasClass('on')) {
	// 		$('.catalog-part__text-content').animate({
	// 			height: '72px'
	// 		}, 300, 'linear');
	// 		$(this).removeClass('on').addClass('off').text('Раскрыть');
	// 	}
	// });

	if($(window).width() >= 550) {
		$('.catalog-part__text-collapse').click( function() {
			if ($(this).hasClass('off')) {
				$('.catalog-part__text-content').css('height','100%');
				$(this).removeClass('off').addClass('on').text('Скрыть');
			}
			else if ($(this).hasClass('on')) {
				$('.catalog-part__text-content').css('height','72px');
				$(this).removeClass('on').addClass('off').text('Раскрыть');
			}
		});
	} else {
		$('.catalog-part__text-collapse').click( function() {
			if ($(this).hasClass('off')) {
				$('.catalog-part__text-content').css('height','100%');
				$(this).removeClass('off').addClass('on').text('Скрыть');
			}
			else if ($(this).hasClass('on')) {
				$('.catalog-part__text-content').css('height','120px');
				$(this).removeClass('on').addClass('off').text('Раскрыть');
			}
		});
	}


	// Фильтр категорий на странице каталога
	$('.catalog-filter__category-dropdown').click( function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle(500);
	});


	// Мобильнй фильтр на странице каталога
	$('.catalog-filter__dropdown').click( function() {
		if ($(this).hasClass('off')) {
			$(this).removeClass('off').addClass('on').text('Скрыть фильтр');
			$(this).parent().find('.catalog-filter__main').slideToggle();
		}
		else if ($(this).hasClass('on')) {
			$(this).removeClass('on').addClass('off').text('Фильтр');
			$(this).parent().find('.catalog-filter__main').slideToggle();
		}
	});


	// Блоки вакансий на странице просмотра вакансий
	$('.vacancy__dropdown').click(function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle(400);
	});


	// Кастомный селект
	$('.news__filter, .recipes-filter__category, .recipes-filter__kitchen, .cabinet-feedback__select-appeal, .ordering__select-delivery-address, .ordering__select-delivery-time').selectric({
		arrowButtonMarkup: '<span class="select-arrow"></span>',
		disableOnMobile: false,
		nativeOnMobile: false
	});


	// Форма заполнения данных на странице заказа товара
	$('.ordering__control-delivery-city').click(function() {
		$(this).parent().parent().find('input#ordering-delivery-address').trigger('click');
	});

	// $('.ordering__select-delivery-address').focus(function() {
	// 	$(this).parent().parent().find('input#ordering-delivery-address').trigger('click');
	// });
	$('.selectric-ordering__select-delivery-address').mouseup(function() {
		$(this).parent().parent().find('input#ordering-delivery-address').trigger('click');
	});


	// Датапикер в форме заполнения данных на странице оформления заказа
	$('.ordering__delivery-date').datepicker({
		language: {
			months: ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']
		},
		minDate: new Date(),
		altField: 'dsfsf',
		dateFormat: 'd MM yyyy г.'
	});


	// Блоки выбранных товаров на страницах оформления заказа
	$('.selected-products__dropdown').click(function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle(400);
	});


	// Иконки социальных сетей - количество проголосовавших
	$('.social-likes').socialLikes({
		counters: true,
		zeroes: true
	});


	// Табы адрессов магазинов - страница: О магазине - контакты
	$(".store-contact__tabs .store-contact__tabs-control").click(function() {
		$(".store-contact__tabs .store-contact__tabs-control").removeClass("active").eq($(this).index()).addClass("active");
		$(".store-contact__tabs-item").hide().eq($(this).index()).fadeIn();
		storesAddressMap.container.fitToViewport();
	}).eq(0).addClass("active");


	// кнопка скролла вверх - пролистывание страницы вверх
	$('.scrollup').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600, "swing");
	});

	// кнопка скролла вверх - прилипание кнопки в футере
	var footerBottomBlockPos, scrollUpControlPos;

	function refreshVarScrollup() {
		footerBottomBlockPos = $('.site-footer__bottom').offset().top;
		scrollUpControlPos = $('.scrollup').offset().top + 30;
	};

	$(window).scroll(function() {

		refreshVarScrollup();

		if($(window).width() >= 768) {
			if (scrollUpControlPos >= footerBottomBlockPos) {
				$('.scrollup').removeClass('state-fixed');
			} else {
				$('.scrollup').addClass('state-fixed');
			};
		} else {
			$('.scrollup').addClass('state-fixed');
		}

	});


	// валидация форм
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
		},
		submitHandler: function(data) {
			$.magnificPopup.open({
				items: {
					src: '#main-subscribe',
					type: 'inline'
				}
			})
		}
	});

	$('#form-callback').validate();
	$('#form-buy-click').validate();
	$('#form-password-recovery').validate();
	$('#form-vacancy-resume').validate();
	$('#form-city-location').validate();
	$('#check-order-status').validate();
	$('#cabinet-feedback').validate();
	$('#dish-comment').validate();
	$('#login-site').validate();
	$('#registration-site').validate();
	$('#profile').validate();
	$('#ordering').validate();

	if($('#registration-site-privacy').prop("checked") == false) {
		$('.entrance .registration-site .button').addClass('deactive');
	} else if($('#registration-site-privacy').prop("checked") == true) {
		$('.entrance .registration-site .button').removeClass('deactive');
	}

	$('#registration-site-privacy + label').click(function() {
		if($('#registration-site-privacy').prop("checked") == true) {
			$('.entrance .registration-site .button').addClass('deactive');
		} else if($('#registration-site-privacy').prop("checked") == false) {
			$('.entrance .registration-site .button').removeClass('deactive');
		}
	});

	if($('#order-form-data-processing').prop("checked") == false) {
		$('#order-confirm button.total-box__checkout').addClass('deactive');
	} else if($('#order-form-data-processing').prop("checked") == true) {
		$('#order-confirm button.total-box__checkout').removeClass('deactive');
	}

	$('#order-form-data-processing + label').click(function() {
		if($('#order-form-data-processing').prop("checked") == true) {
			$('#order-confirm button.total-box__checkout').addClass('deactive');
		} else if($('#order-form-data-processing').prop("checked") == false) {
			$('#order-confirm button.total-box__checkout').removeClass('deactive');
		}
	});


	// // $('#header-cart-popup-link, #header-cart-popup-link-clone').hover().webuiPopover('destroy');

	// // Попап корзины в хедере
	// $('#header-cart-popup-link, #header-cart-popup-link-clone').webuiPopover({
	// 	url: '#cart-products-popup',
	// 	placement: 'auto-bottom',
	// 	arrow: true,
	// 	trigger:'hover',
	// 	style: 'header-cart',
	// 	cache: false,
	// 	delay: {
	// 		show: 75,
	// 		hide: 400
	// 	},
	// 	onShow: function() {
	// 		$('.cart-popup__products-list').mCustomScrollbar({
	// 			axis: 'y',
	// 			advanced: { autoExpandHorizontalScroll:true },
	// 			scrollEasing: 'linear',
	// 			// mouseWheel: { scrollAmount: 103 },
	// 			scrollInertia: 200
	// 		});
	// 	},
	// 	onHide: function() {
	// 		$('.cart-popup__products-list').mCustomScrollbar('destroy');
	// 	}
	// });

});


// -------------------------------------------------------------------------------------


$(window).scroll(function () {

	// кнопка скролла вверх
	if($(window).scrollTop() > 100) {
		$('.scrollup').addClass('state-fixed').removeClass('state-hidden');
	} else {
		$('.scrollup').addClass('state-fixed state-hidden');
	}


	// отслеживаем высоту прилипающего меню хедера
	if( $('.main-nav.sticky').length) {
		navStickyHeight = $('.main-nav.sticky').outerHeight();
	}

	if (winPos >= headerTopHeight) {
		$('.cart .total-box__wrap').stick_in_parent({
			offset_top: navStickyHeight
		});
	}

	// Закрываем попап корзины в хедере при скроле страницы
	// WebuiPopovers.hideAll();

});

// -------------------------------------------------------------------------------------

$(window).load(function () {

	if($(window).width() < 768) {
		$('.recipes__item').imagefill();
	}


	// скролл выбранных товаров в popower корзины
	$('.cart-popup__products-list').mCustomScrollbar({
		axis: 'y',
		advanced: { autoExpandHorizontalScroll:true },
		scrollEasing: 'linear',
		// mouseWheel: { scrollAmount: 103 },
		scrollInertia: 200
	});


	// скролл отзывов в табах на странице катрочки товара
	$('.card__reviews').mCustomScrollbar({
		axis: 'y',
		advanced: { autoExpandHorizontalScroll:true },
		scrollEasing: 'linear',
		// mouseWheel: { scrollAmount: 103 },
		scrollInertia: 200
	});


	// скролл выбранных товаров на страницах оформления заказа
	$('.selected-products--scrolled').mCustomScrollbar({
		axis: 'y',
		advanced: { autoExpandHorizontalScroll:true },
		scrollEasing: 'linear',
		// mouseWheel: { scrollAmount: 103 },
		scrollInertia: 200
	});

});

// -------------------------------------------------------------------------------------

$(window).resize(function () {

	// Удаляем мобильный вид поиска по сайту
	if($(window).width() >= 768) {
		$('.site-header__search').removeClass('mobile-visible');
		$('.js-top-nav-open').css({'visibility': 'visible'});
		$('.site-header__order-status').css({'visibility': 'visible'});
		$('.site-header__contact').css({'visibility': 'visible'});
		$('.js-trigger-site-search-open').css({'visibility': 'visible'});
		$('.site-header__cart').css({'visibility': 'visible'});
	}


	if($(window).width() < 768) {
		$('.recipes__item').imagefill();
	}


	// Делаем видимыми группы меню в футере
	if($(window).width() >= 768) {
		$('.site-footer__according-heading').removeClass('is-active');
		$('.site-footer__menu').attr('style','');
		$('.site-footer__payment-option').attr('style','');
		$('.site-footer__contacts').attr('style','');
	};


	// табы на странице регистрации и входа
	var tabsControlsActive;

	if(!$(".entrance__tab-login").hasClass("active") && !$(".entrance__tab-registration").hasClass("active")) {
		tabsControlsActive = true;
	};

	if($(window).width() < 768 && tabsControlsActive) {
		$(".registration-site").css("display","none");
		$(".login-site").css("display","block");
		$(".entrance__tab-login").addClass("active");
		$(".entrance__tab-registration").removeClass("active");
	} else if($(window).width() < 768) {
		$(".entrance__tab-login").click(function() {
			$(".entrance__tab-registration").removeClass("active").parent().parent().find(".entrance__tab-login").addClass("active");
			$(".registration-site").css("display","none").parent().parent().find(".login-site").css("display","block");
		});
		$(".entrance__tab-registration").click(function() {
			$(".entrance__tab-login").removeClass("active").parent().parent().find(".entrance__tab-registration").addClass("active");
			$(".login-site").css("display","none").parent().parent().find(".registration-site").css("display","block");
		});
	} else {
		$(".entrance__tab > span").removeClass("active");
		$(".login-site, .registration-site").css("display","block");
		$(".entrance__tab-login").click(function() {
			$(this).removeClass("active");
		});
		$(".entrance__tab-registration").click(function() {
			$(this).removeClass("active");
		});
	};


	// Кастомный селект
	$('.news__filter, .recipes-filter__category, .recipes-filter__kitchen, .cabinet-feedback__select-appeal, .ordering__select-delivery-address, .ordering__select-delivery-time').selectric({
		arrowButtonMarkup: '<span class="select-arrow"></span>',
		disableOnMobile: false,
		nativeOnMobile: false
	});


	// Скрытий текст описания рецепта на странице рецептов
	// if($(window).width() >= 550) {
	// 	$('.recipes-page__text-collapse').click( function() {
	// 		if ($(this).hasClass('off')) {
	// 			$('.recipes-page__text-content').css('height','100%');
	// 			$(this).removeClass('off').addClass('on').text('Скрыть полностью');
	// 		}
	// 		else if ($(this).hasClass('on')) {
	// 			$('.recipes-page__text-content').css('height','72px');
	// 			$(this).removeClass('on').addClass('off').text('Показать полностью');
	// 		}
	// 	});
	// } else {
	// 	$('.recipes-page__text-collapse').click( function() {
	// 		if ($(this).hasClass('off')) {
	// 			$('.recipes-page__text-content').css('height','100%');
	// 			$(this).removeClass('off').addClass('on').text('Скрыть полностью');
	// 		}
	// 		else if ($(this).hasClass('on')) {
	// 			$('.recipes-page__text-content').css('height','120px');
	// 			$(this).removeClass('on').addClass('off').text('Показать полностью');
	// 		}
	// 	});
	// }


	// Скрытий текст описания продуктов на странице раздела каталога
	// if($(window).width() >= 550) {
	// 	$('.catalog-part__text-collapse').click( function() {
	// 		if ($(this).hasClass('off')) {
	// 			$('.catalog-part__text-content').css('height','100%');
	// 			$(this).removeClass('off').addClass('on').text('Скрыть');
	// 		}
	// 		else if ($(this).hasClass('on')) {
	// 			$('.catalog-part__text-content').css('height','72px');
	// 			$(this).removeClass('on').addClass('off').text('Раскрыть');
	// 		}
	// 	});
	// } else {
	// 	$('.catalog-part__text-collapse').click( function() {
	// 		if ($(this).hasClass('off')) {
	// 			$('.catalog-part__text-content').css('height','100%');
	// 			$(this).removeClass('off').addClass('on').text('Скрыть');
	// 		}
	// 		else if ($(this).hasClass('on')) {
	// 			$('.catalog-part__text-content').css('height','120px');
	// 			$(this).removeClass('on').addClass('off').text('Раскрыть');
	// 		}
	// 	});
	// }


});

// -------------------------------------------------------------------------------------


ymaps.ready(init);

// var myMap, 
// 		myPlacemark;

// function init(){ 
// 		myMap = new ymaps.Map("stores-address-map", {
// 				center: [55.76, 37.64],
// 				zoom: 7
// 		});

// 		myPlacemark = new ymaps.Placemark([55.76, 37.64], {
// 				hintContent: 'Москва!',
// 				balloonContent: 'Столица России'
// 		});

// 		myMap.geoObjects.add(myPlacemark);
// }

var storesAddressMap, 
		storeAddressMapFirst, 
		storeAddressMapSecond,
		storeAddressMapThird,
		storeAddressMapFourth,
		placemarkStoreGlobal1, 
		placemarkStoreGlobal2, 
		placemarkStoreGlobal3, 
		placemarkStoreGlobal4, 
		placemarkStore1, 
		placemarkStore2, 
		placemarkStore3, 
		placemarkStore4;

function init () {

	if($('#stores-address-map').length) {
		storesAddressMap = new ymaps.Map('stores-address-map', {
				center: [43.58398536, 39.72813123],
				zoom: 16,
				controls: []
		}, {
				suppressMapOpenBlock: true
		});

		placemarkStoreGlobal1 = new ymaps.Placemark([43.58214248, 39.72894050], {
				balloonContent: 'ул. Фабрисиуса, д. 58,' + '<br> павильоны №29, 30'
		}, {
				iconLayout: 'default#image',
				iconImageHref: './img/ymaps-label.png',
				iconImageSize: [30, 43],
				iconImageOffset: [-14, -43]
		});

		placemarkStoreGlobal2 = new ymaps.Placemark([43.58295843, 39.72510859], {
				balloonContent: 'ул. Пастунская,' + '<br> Ярмарка "Ветродом"'
		}, {
				iconLayout: 'default#image',
				iconImageHref: './img/ymaps-label.png',
				iconImageSize: [30, 43],
				iconImageOffset: [-14, -43]
		});

		placemarkStoreGlobal3 = new ymaps.Placemark([43.58435264, 39.72772030], {
				balloonContent: 'ул. Третья точка,' + '<br> магазин свежих продуктов'
		}, {
				iconLayout: 'default#image',
				iconImageHref: './img/ymaps-label.png',
				iconImageSize: [30, 43],
				iconImageOffset: [-14, -43]
		});

		placemarkStoreGlobal4 = new ymaps.Placemark([43.58436824, 39.73224787], {
				balloonContent: 'ул. Четвёртая точка,' + '<br> магазин свежих продуктов'
		}, {
				iconLayout: 'default#image',
				iconImageHref: './img/ymaps-label.png',
				iconImageSize: [30, 43],
				iconImageOffset: [-14, -43]
		});

		storesAddressMap.geoObjects.add(placemarkStoreGlobal1).add(placemarkStoreGlobal2).add(placemarkStoreGlobal3).add(placemarkStoreGlobal4);
	}

	if($('#store-address-map-first').length) {
		storeAddressMapFirst = new ymaps.Map('store-address-map-first', {
				center: [43.58214248, 39.72894050],
				zoom: 16,
				controls: []
		}, {
				suppressMapOpenBlock: true
		});

		placemarkStore1 = new ymaps.Placemark([43.58214248, 39.72894050], {
				balloonContent: 'ул. Фабрисиуса, д. 58,' + '<br> павильоны №29, 30'
		}, {
				iconLayout: 'default#image',
				iconImageHref: './img/ymaps-label.png',
				iconImageSize: [30, 43],
				iconImageOffset: [-14, -43]
		});

		storeAddressMapFirst.geoObjects.add(placemarkStore1);
	}

	if($('#store-address-map-second').length) {
		storeAddressMapSecond = new ymaps.Map('store-address-map-second', {
				center: [43.58295843, 39.72510859],
				zoom: 16,
				controls: []
		}, {
				suppressMapOpenBlock: true
		});

		placemarkStore2 = new ymaps.Placemark([43.58295843, 39.72510859], {
				balloonContent: 'ул. Пастунская,' + '<br> Ярмарка "Ветродом"'
		}, {
				iconLayout: 'default#image',
				iconImageHref: './img/ymaps-label.png',
				iconImageSize: [30, 43],
				iconImageOffset: [-14, -43]
		});

		storeAddressMapSecond.geoObjects.add(placemarkStore2);
	}

	if($('#store-address-map-third').length) {
		storeAddressMapThird = new ymaps.Map('store-address-map-third', {
				center: [43.58435264, 39.72772030],
				zoom: 16,
				controls: []
		}, {
				suppressMapOpenBlock: true
		});

		placemarkStore3 = new ymaps.Placemark([43.58435264, 39.72772030], {
				balloonContent: 'ул. Третья точка,' + '<br> магазин свежих продуктов'
		}, {
				iconLayout: 'default#image',
				iconImageHref: './img/ymaps-label.png',
				iconImageSize: [30, 43],
				iconImageOffset: [-14, -43]
		});

		storeAddressMapThird.geoObjects.add(placemarkStore3);
	}

	if($('#store-address-map-fourth').length) {
		storeAddressMapFourth = new ymaps.Map('store-address-map-fourth', {
				center: [43.58436824, 39.73224787],
				zoom: 16,
				controls: []
		}, {
				suppressMapOpenBlock: true
		});

		placemarkStore4 = new ymaps.Placemark([43.58436824, 39.73224787], {
				balloonContent: 'ул. Четвёртая точка,' + '<br> магазин свежих продуктов'
		}, {
				iconLayout: 'default#image',
				iconImageHref: './img/ymaps-label.png',
				iconImageSize: [30, 43],
				iconImageOffset: [-14, -43]
		});

		storeAddressMapFourth.geoObjects.add(placemarkStore4);
	}
}

