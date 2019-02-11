'use strict'

$(document).ready(function () {

	svg4everybody();

	// object-fit полифил для ie11
	objectFitImages();

	// Форма поиска в хедере
	$('.header-search__trigger').click(function() {
		$(this).addClass('active');
		$('.header-search__form').addClass('visible');
		$('.header-search__field').focus();
	});

	// Закрываем форму поиска в хедере
	$(document).click(function (e) {
		if (!$(e.target).closest('.header-search').length || $('.header-search__close').is(e.target)) {
			$('.header-search__trigger').removeClass('active');
			$('.header-search__form').removeClass('visible');
		}
	});

	// Мобильное меню хедера
	$('.mobile-nav-trigger').click(function () {
		$(this).toggleClass('active');
		$('.header-bottom__nav').toggleClass('visible');
		$('body').toggleClass('nav-menu-open');
	});

	// Закрываем мобильное меню в хедере
	$(document).click(function (e) {
		if ($('.header-bottom__nav').is(e.target) || $(e.target).closest('.nav-menu-close').length) {
			$('.mobile-nav-trigger').removeClass('active');
			$('.header-bottom__nav').removeClass('visible');
			$('body').removeClass('nav-menu-open');
		}
	});

	// Интерактивная схема системы очистки воды
	function initInteractiveMap() {
		if(!$('.scheme .scheme-block').hasClass('active')) {
			$('.scheme .scheme-block:first-child').addClass('active');
			$('.scheme .scheme__presentation-inner').text($('.scheme .scheme-block:first-child .scheme-block__description').text()).addClass('fade-in');
		}
	}

	if($('.scheme__interactive-map').length) {

		initInteractiveMap();

		$('.scheme-blocks .scheme-block__photo, .scheme-blocks .scheme-block__title').on('click mouseenter' , function(e) {
			if(!$(this).parents('.scheme-block').hasClass('active')) {
				$('.scheme .scheme-block').removeClass('active');
				$(this).parents('.scheme').find('.scheme__presentation-inner').removeClass('fade-in');
				$(this).parents('.scheme-block').addClass('active');

				var that = $(this);

				setTimeout(function() {
					that.parents('.scheme').find('.scheme__presentation-inner').text(that.parent('.scheme-block').find('.scheme-block__description').text()).addClass('fade-in');
				}, 150);
			}
		});
	}

	// Меню каталога товаров
	$(".aside-menu-trigger").click(function () {
			if($(window).width() < 992) {
				$(this).toggleClass('active');
				$(this).next('.aside-menu__list').slideToggle();
			}
	});

	// Галлерея примеров работ
	$('.photogallery-list').each(function() {
		$(this).find('.photogallery-list__link').magnificPopup({
			type: 'image',
			gallery:{
				enabled: true
			}
		});
	});

	// Слайдер списка сотрудников
	$('.personal-list').slick({
		centerMode: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// Слайдер фото в карточке товара
	$('.product-gallery__nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		focusOnSelect: true,
		infinite: false,
		draggable: true,
		asNavFor: '.product-gallery__main',
	});

	$('.product-gallery__main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed: 200,
		draggable: true,
		asNavFor: '.product-gallery__nav'
	});

	// Галлерея фото карточки товара
	$('.product-gallery__main a').magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		}
	});

	// модальное окно - Заказать обратный звонок
	$('.header-callback').magnificPopup();

	// Кастомный блок для input[type="number"]
	$('.count-field').styler();

});

$(window).on({

	load: function () {

	},

	resize: function () {

	},

	scroll: function () {

	}

});



// -------------------------------------------------------------------------------------



ymaps.ready(init);

function init() {
	if($('#contact-map').length) {
		var contactMap = new ymaps.Map("contact-map", {
					center: [55.773013, 37.694513],
					zoom: 16,
					controls: []
				});

		var contactPlacemark = new ymaps.Placemark([55.773013, 37.694513], {
					// hintContent: 'Москва!',
					// balloonContent: 'Столица России'
				}, {
					preset: 'islands#dotIcon',
					iconColor: '#377dc8'
				});

		contactMap.geoObjects.add(contactPlacemark);
	}

	// if($('#works-map').length) {
	// 	var worksMap = new ymaps.Map("works-map", {
	// 				center: [55.757390, 37.615122],
	// 				zoom: 11,
	// 				controls: []
	// 			}, {
	// 				searchControlProvider: 'yandex#search'
	// 			});
	// 	var worksCollection = new ymaps.GeoObjectCollection(null, {
	// 				preset: 'islands#dotIcon',
	// 				iconColor: '#377dc8'
	// 			});
	// 	var markers = [].slice.call(document.querySelectorAll('.map-marker'));

	// 	if(markers.length) {
	// 		markers.forEach(function (marker, index) {
	// 			var markerCoords = [parseFloat(marker.getAttribute('data-lon')), parseFloat(marker.getAttribute('data-lat'))];

	// 			worksCollection.add(new ymaps.Placemark(markerCoords, {
	// 				balloonContent: marker.innerHTML,
	// 			}));
	// 		});

	// 		worksMap.geoObjects.add(worksCollection);

	// 		worksMap.setBounds(worksCollection.getBounds());
	// 	}
	// }
}