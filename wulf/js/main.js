'use strict'

$(document).ready(function () {

	svg4everybody();

	// object-fit полифил для ie11
	objectFitImages();

	// Add class to .page-aside block for start animation
	setTimeout(function() {
		$('.page-aside').addClass('is-open');
	}, 1500);

	// Slider - Our process
	var processSlider = $('.process-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
		arrows: true,
		prevArrow: '<button class="slick-prev slick-arrow">Previous process<svg><use xlink:href="#icon-arrow-up"></svg></button>',
		nextArrow: '<button class="slick-next slick-arrow">Next process<svg><use xlink:href="#icon-arrow-down"></svg></button>',
		dots: true,
		appendDots: $(".process-slider-pagination"),
		customPaging: function(slick, index) {
			var pagingTitle = $(slick.$slides[index]).data("process-name");
			return "<span>0" + ++index + "</span><div class=\"slick-dots-descr\"><p>" + pagingTitle + "</p></div>"
		},
		responsive: [
			{
				breakpoint: 991,
				settings: {
					draggable: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					vertical: false,
					draggable: true
				}
			}
		]
	});

	$('.process-slider-prev').on('click', function() {
		processSlider.slick('slickPrev');
	});

	$('.process-slider-next').on('click', function() {
		processSlider.slick('slickNext');
	});

	// Scrolling page to top
	$('.scroll-up-control').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500, "swing");
	});

	// Open popup with footer contact form
	$("#to-contact-form").click(function() {
		$('.site-footer').toggleClass('popup-opened');
	});

	// Close popup with footer contact form
	$(".footer-form__close").click(function() {
		$('.site-footer').removeClass('popup-opened');
	});

	// Validation contact form
	var contactFormControls = $('#contact-form input.required, #contact-form textarea.required');

	function validateControl(el, callback) {
		var inputRules = {
					'text': /^[a-zA-Z ]+$/,
					'tel': /^[0-9]+$/,
					// 'email': /^[a-zA-Z]+$/
					'email': /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
				};
		var validateCallback = (callback != undefined) ? callback : function(){ return false };

		if(el.val().trim().length == 0) {
			mappingErrorMassege(el, 'This field must be filled', false);
			validateCallback.apply(el, [false]);
			return false;
		}

		if(el[0].tagName === "TEXTAREA") {
			if(el.val().trim().length <= 20) {
				mappingErrorMassege(el, 'This field must contain minimum 20 characters', false);
				validateCallback.apply(el, [false]);
				return false;
			} else {
				mappingErrorMassege(el, '', true);
				validateCallback.apply(el, [true]);
				return true;
			}
		}

		if(el[0].tagName === "INPUT" && el[0].type == "text") {
			if(!inputRules[el[0].type].test(el.val())) {
				mappingErrorMassege(el, 'This field must contain only latin letters', false);
				validateCallback.apply(el, [false]);
				return false;
			} else {
				mappingErrorMassege(el, '', true);;
				validateCallback.apply(el, [true]);
				return true;
			}
		}

		if(el[0].tagName === "INPUT" && el[0].type == "tel") {
			if(!inputRules[el[0].type].test(el.val())) {
				mappingErrorMassege(el, 'This field must contain only numbers', false);
				validateCallback.apply(el, [false]);
				return false;
			} else {
				mappingErrorMassege(el, '', true);
				validateCallback.apply(el, [true]);
				return true;
			}
		}

		if(el[0].tagName === "INPUT" && el[0].type == "email") {
			if(!inputRules[el[0].type].test(el.val())) {
				mappingErrorMassege(el, 'Wrong email address', false);
				validateCallback.apply(el, [false]);
				return false;
			} else {
				mappingErrorMassege(el, '', true);
				validateCallback.apply(el, [true]);
				return true;
			}
		}
	}

	function mappingErrorMassege(el, message, validateFlag) {
		var errorMessageContainer = el.parents('.form-control').find('.error-message');

		if(validateFlag) {
			el.removeClass('error');
		} else if(errorMessageContainer.length) {
			errorMessageContainer.text(message);
			el.addClass('error');
		} else {
			el.after('<span class=\'error-message\'>' + message + '</span>');
			el.addClass('error');
		}
	}

	contactFormControls.on('keyup change', function(e) {
		$(this).removeClass('hide-error-message');
		validateControl($(this));
	});

	contactFormControls.on('focus', function(e) {
		contactFormControls.not($(this)).addClass('hide-error-message');
	});

	contactFormControls.on('blur', function(e) {
		$(this).addClass('hide-error-message');
	});


	$('#contact-form').on('submit', function(e) {
		e.preventDefault();

		var formControlsLength = contactFormControls.length;
		var errorValidateControls = [];

		contactFormControls.each(function(index) {
			validateControl($(this), function(validateStatus) {
				if(!validateStatus) {
					errorValidateControls.push(index);
				}
				$(this).addClass('hide-error-message');
			});
		});

		if(errorValidateControls.length > 0) {
			contactFormControls.eq(errorValidateControls[0]).removeClass('hide-error-message');
			contactFormControls.eq(errorValidateControls[0]).focus();
		}

		if(errorValidateControls.length === 0) {
			$('.footer-form__ajax-loader').addClass('is-active');
			$('.footer-form .btn-secondary').addClass('disabled');

			$.ajax({
				type: "GET",
				url: $(this).attr('action'),
				data: $(this).serialize()
				}).done(function(data, textStatus) {
					setTimeout(function() {
						$('.footer-form__ajax-loader').removeClass('is-active');
						$('.footer-form__response').addClass('is-active');
					}, 800);
					setTimeout(function() {
						$('.footer-form__response').removeClass('is-active');
						$('.footer-form .btn-secondary').removeClass('disabled');
					}, 4000);
				}).fail(function(jqXHR, textStatus, errorThrown) {
					console.log(errorThrown);
				});

			return false;
		}
	});

});

// -------------------------------------------------------------------------------------

