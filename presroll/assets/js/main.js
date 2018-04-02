/* DevianScript */

'use strict';

function svgRender() {
	$('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');
	});
}

// function searchBlock() {
// 	$('.search-icon').click(function() {
// 		var sf = $('.search-field').innerWidth();
// 		var si = $('.search-icon').innerWidth();
// 		var clicks = $(this).data('clicks');
// 		if (clicks) {
// 			$('.search-container').removeClass('active').width(si);
// 		} else {
// 			$('.search-container').addClass('active').width(sf);
// 		}
// 		$(this).data("clicks", !clicks);
// 		return false;
// 	})
// }

// function sideMenu() {
// 	$('.main-menu .holder').click(function() {
// 		$(this).children('.item-holder').toggleClass('active');
// 		$(this).children('.sub-menu').stop().slideToggle();
// 		return false;
// 	});
// 	$('.contacts-holder .show-close-btn').click(function() {
// 		$(this).toggleClass('active');
// 		$('.contacts-holder').toggleClass('active');
// 		$('.contacts-entry').slideToggle();
// 		return false;
// 	});
// 	$('.heading .menu-btn').click(function() {
// 		$('.left-part').addClass('active');
// 	});
// 	$('.left-part .close-btn').click(function() {
// 		$('.left-part').removeClass('active');
// 	});
// }

// function homeBannerSlider() {
// 	$('.banner-slider').each(function() {
// 		$(this).owlCarousel({
// 			items:1,
// 			loop: true
// 		});
// 	});
// }

// function reviewsSlider() {
// 	$('.reviews-slider').each(function() {
// 		$(this).owlCarousel({
// 			loop: true,
// 			navText: ['<img class="svg" src="assets/media/images/svg/arrow-left.svg"/>','<img class="svg" src="assets/media/images/svg/arrow-right.svg"/>'],
// 			responsive: {
// 				1280:{
// 					items:3
// 				},
// 				767:{
// 					items:2
// 				},
// 				0:{
// 					items:1
// 				}
// 			}
// 		});
// 	})
// }


// Перелистывание секций контента на главной
// function fullpage() {
// 	if($('#fullpage').length > 0 && $(window).width() >= 0) {
// 		$('#fullpage').fullpage({
// 			scrollOverflow: true,
// 			paddingTop: '54px',
// 			scrollingSpeed: 500,
// 			dragAndMove: true,
// 			// fitToSection: false,
// 			scrollOverflowOptions: {
// 				probeType: 3
// 			},
// 			onLeave: function(anchorLink, index, direction) {
// 				if(index > 1){
// 					$('.callback-footer__control').removeClass('white-theme');
// 				}

// 			},
// 			afterLoad: function(anchorLink, index){
// 				if(index == 1){
// 					$('.callback-footer__control').addClass('white-theme');
// 				}
// 			}
// 		});
// 	}
// }

	// if($('#fullpage').length > 0 && $(window).width() >= 0) {

	// }


// ------------------------------------------------------------------------

$(document).ready(function() {

	// sideMenu();
	// homeBannerSlider();
	// reviewsSlider();
	svgRender();
	// searchBlock();

	// Меняем цвет фона плашки товара в каталогах
	// $('.product-preview__link').hover(function() {
	// 	$(this).parent().toggleClass('hovered');
	// });


	// Перелистывание секций контента на главной
	// fullpage();


	// Поиск по сайту в хедере
	$('.site-search__trigger').click(function() {
		$(this).toggleClass('active');
		$(this).parent().find('.site-search__control').toggleClass('open');
	});


	// Основной слайдер баннеров на главной странице карточки
	$('.banner-hero__slider').owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: false,
		dots: true,
		nav: false
	});


	// Слайдер отзывов на главной странице карточки
	$('.home-reviews__slider').owlCarousel({
		loop: true,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1,
				dots: false,
				nav: true
			},
			768: {
				items: 2,
				dots: true,
				nav: true
			},
			992: {
				items: 2,
				dots: true,
				nav: true
			},
			1200: {
				items: 3,
				dots: true,
				nav: true
			}
		}
	});


	// Слайдер фотографий товаров на странице карточки
	$('.product-slider').owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: false,
		responsive: {
			0: {
				dots: true,
				nav: false,
				URLhashListener: false
			},
			768: {
				dots: false,
				nav: false,
				URLhashListener: true
			}
		}
		// autoplayHoverPause:true,
		// startPosition: 'URLHash'
		// smartSpeed: 1,
		// fluidSpeed: 1
	});


	// Слайдер рекомендуемых товаров на странице карточки
	$('.card__recommend-slider').owlCarousel({
		dots: false,
		nav: true,
		loop: false,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1
			},
			620: {
				items: 2
			},
			920: {
				items: 3
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});


	// Кастомный селект
	$('.custom-select').selectric({
		arrowButtonMarkup: '<span class="select-arrow fa fa-angle-down"></span>',
		disableOnMobile: false,
		nativeOnMobile: false,
	});


	// Выпадающие списки меню навигации по сайту
	$('.nav__item--main-subnav.nav__item--has-subnav > .nav__submenu-trigger').click(function() {
		$(this).toggleClass('active');
		$(this).parent().next().slideToggle();
		$(this).parent().toggleClass('active-menu');
		if(!$(this).parent().hasClass('active-menu')) {
			setTimeout (function () {
				$('.nav__submenu-trigger').removeClass('active');
				$('.nav__submenu-trigger').parent().next().removeClass('open-menu').css({'display':'none'});
				$('.nav__submenu-trigger').parent().removeClass('active-menu');
			}, 500 )
		}
	});

	$('.nav__item--first-subnav.nav__item--has-subnav > .nav__submenu-trigger').click(function() {
		if($(this).hasClass('active')) {
			// return false;
			$(this).removeClass('active');
			$(this).parent().removeClass('active-menu');
			$(this).parent().next().removeClass('open-menu').slideToggle();
		} else {
			$(this).parent().parent().parent().find('.nav__submenu-trigger').removeClass('active');
			$(this).addClass('active');
			$(this).parent().parent().parent().find('.nav__item--first-subnav.nav__item--has-subnav').removeClass('active-menu');
			$(this).parent().addClass('active-menu');
			$(this).parent().parent().parent().find('.nav__list--submenu.open-menu').removeClass('open-menu').slideToggle();
			$(this).parent().next().addClass('open-menu').slideToggle();
		}
	});

	// $('.nav__submenu-trigger').click(function() {
	// 	$(this).toggleClass('active');
	// 	$(this).parent().next().slideToggle();
	// 	$(this).parent().toggleClass('open-menu');
	// 	if(!$('.nav__list--main > li > .nav__item--has-subnav').hasClass('open-menu')) {
	// 		setTimeout (function () {
	// 			$('.nav__submenu-trigger').removeClass('active');
	// 			$('.nav__submenu-trigger').parent().next().css({'display':'none'});
	// 			$('.nav__submenu-trigger').parent().removeClass('open-menu');
	// 		}, 500 )
	// 	}
	// });


	// Мобильное меню
	$('.js-mobile-menu-trigger').click(function() {
		$(this).toggleClass('active');
		$('.sidebar-nav').slideToggle();
	});


	// Активация радио кнопки через инпут на странице карточки - каталоги
	$('#catalogs-pages-personal-input').click(function() {
		$(this).parent().parent().find('input#catalogs-pages-personal-radio').trigger('click');
	});


	// Всплывающие подсказки
	$('.tooltip-trigger').tooltip({
		container: 'body'
	});


	// Выбор индивидуального размера наклейки на странице карточки печати наклеек
	$('.selectric-stickers-size .selectric-items li').click(function() {
		if($(this).hasClass('individual-variant')) {
			$('#individual-stickers-size').addClass('active');
		}
	});

	$('.js-close-stickers-size').click(function() {
		$(this).parent().removeClass('active');
	});


	// модальное окно - регистрация на сайте
	$('.to-modal-registration').magnificPopup({
		mainClass: 'modal-overlay'
	});


	// модальное окно - заказ товара на странице карточки
	$('.to-modal-product-order').magnificPopup({
		mainClass: 'modal-overlay'
	});


	// модальное окно - галлерея работ
	$('.works-gallery').magnificPopup({
		mainClass: 'modal-overlay modal-works-gallery',
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		// mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1],
			tCounter: ''
		}
		// image: {
		// 	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		// 	titleSrc: function(item) {
		// 		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		// 	}
		// }
	});


	// Блок редактирования данных товара - страница оформления заказа
	$('.ordering__edit-data').click(function() {
		$(this).css({'display':'none'});
		$('.ordering__product-options').css({'display':'none'});
		$('.ordering__model').css({'display':'none'});
		$('.ordering__price-block').css({'display':'none'});
		$('.cart__footer').css({'display':'none'});
		$('.ordering__options-editor').addClass('active');
	});

	$('.save-options-edit').click(function() {
		$(this).parent().removeClass('active');
		$('.ordering__edit-data').css({'display':'inline-block'});
		$('.ordering__product-options').css({'display':'block'});
		$('.ordering__model').css({'display':'inline-block'});
		$('.ordering__price-block').css({'display':'inline-block'});
		$('.cart__footer').css({'display':'block'});
	});


	// Блок комментария - страница оформления доставки товара
	$('.delivery__comment-control').click(function() {
		$(this).parent().find('.delivery__comment-write').toggleClass('open');
	});


	// Модальное окно - расчета стоимости доставки
	$('.to-modal-delivery-within-mkad').magnificPopup({
		mainClass: 'modal-overlay',
		callbacks: {
			open: function() {
				deliveryAddressMap.container.fitToViewport();
			}
		}
	});

	$('.to-modal-delivery-over-mkad').magnificPopup({
		mainClass: 'modal-overlay',
		callbacks: {
			open: function() {
				deliveryAddressMapOver.container.fitToViewport();
			}
		}
	});


	// Кнопка - згрузить макет на странице оформления заказа
	if($('#upload-button').length) {
		$('#upload-button').dropzone({
			url: "/pressroll/assets/upload.php",
			addRemoveLinks: true,
			// dictRemoveFile: '',
			previewsContainer: '#upload-result',
			previewTemplate: document.querySelector('#tpl').innerHTML,
			uploadprogress: function(file, progress, bytesSent) {
			$('#upload-button').addClass('upload-processing');
				$('#fileupload-progress .bar').css({
					width: progress + '%'
				});
				$('#upload-result .progress-bar__title > span').text(progress.toFixed(0));
			},
			queuecomplete: function(file) {
				$('#upload-button').addClass('upload-complete');
			},
			reset: function(e) {
				$('#upload-button').removeClass('upload-processing');
				$('#upload-button').removeClass('upload-complete');
				console.log('OK');
			}
		});
	}


	// Меню постпечатной обработки на страницах карточки товара
	$('.js-postprinting-trigger input').click(function () {
		$(this).parent().parent().next('.postprinting-options').slideToggle();
	});


	// Валидация форм
	$('#registration-form').validate();

	$('#product-order-form').validate();

});


// ------------------------------------------------------------------------


$(window).load(function() {

	// Галлерея фотографий работ на странице наши работы
	$('.works-gallery__link').imagefill();

});


// ------------------------------------------------------------------------


$(window).resize(function() {

	// Галлерея фотографий работ на странице наши работы
	$('.works-gallery__link').imagefill();


	// Кастомный селект
	$('.custom-select').selectric({
		arrowButtonMarkup: '<span class="select-arrow fa fa-angle-down"></span>',
		disableOnMobile: false,
		nativeOnMobile: false,
	});


	// Перелистывание секций контента на главной
	// fullpage();


	// Выбор индивидуального размера наклейки на странице карточки печати наклеек
	$('.selectric-stickers-size .selectric-items li').click(function() {
		if($(this).hasClass('individual-variant')) {
			$('#individual-stickers-size').addClass('active');
		}
	});

	$('.js-close-stickers-size').click(function() {
		$(this).parent().removeClass('active');
	});

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

var storeAddressMap, 
		deliveryAddressMap, 
		deliveryAddressMapOver, 
		placemarkStore, 
		placemarkDeliveryAddressOver, 
		placemarkDeliveryAddress;

function init () {

	if($('#store-address-map').length) {
		storeAddressMap = new ymaps.Map('store-address-map', {
				center: [55.69192899, 37.62436572],
				zoom: 17,
				controls: []
		}, {
				suppressMapOpenBlock: true
		});

		placemarkStore = new ymaps.Placemark([55.69192899, 37.62436572], {
				balloonContent: 'Варшавское шоссе,' + '<br> 33 строение 4'
				// hintContent: 'Варшавское шоссе,' + '<br> 33 строение 4'
		}, {
				preset: 'islands#redIcon'
		});

		storeAddressMap.geoObjects.add(placemarkStore);
	}

	if($('#delivery-address-map').length) {
		deliveryAddressMap = new ymaps.Map('delivery-address-map', {
				center: [55.75321953, 37.62346629],
				zoom: 10,
				controls: [],
		}, {
				suppressMapOpenBlock: true
		});

		placemarkDeliveryAddress = new ymaps.Placemark([55.85620954, 37.77681196], {
				// balloonContent: 'Варшавское шоссе,' + '<br> 33 строение 4'
				// hintContent: 'Варшавское шоссе,' + '<br> 33 строение 4'
		}, {
				draggable: true,
				preset: 'islands#redIcon'
		});

		// placemarkDeliveryAddress.events.add('dragend', function(e) {
		// 	// Получение ссылки на объект, который был передвинут.
		// 	var thisPlacemark = e.get('target');
		// 	// Определение координат метки
		// 	var coords = thisPlacemark.geometry.getCoordinates();
		// 	// и вывод их при щелчке на метке
		// 	thisPlacemark.properties.set('balloonContent', coords);
		// });

		deliveryAddressMap.geoObjects.add(placemarkDeliveryAddress);
	}

	if($('#delivery-address-map-over').length) {
		deliveryAddressMapOver = new ymaps.Map('delivery-address-map-over', {
				center: [55.75321953, 37.62346629],
				zoom: 10,
				controls: [],
		}, {
				suppressMapOpenBlock: true
		});

		placemarkDeliveryAddressOver = new ymaps.Placemark([55.85620954, 37.77681196], {
				// balloonContent: 'Варшавское шоссе,' + '<br> 33 строение 4'
				// hintContent: 'Варшавское шоссе,' + '<br> 33 строение 4'
		}, {
				draggable: true,
				preset: 'islands#redIcon'
		});

		deliveryAddressMapOver.geoObjects.add(placemarkDeliveryAddressOver);
	}
}
