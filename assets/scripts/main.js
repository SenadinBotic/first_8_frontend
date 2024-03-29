/* eslint-disable prefer-arrow-callback */
/* eslint-disable block-scoped-var */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-empty */
/* eslint-disable no-var */
/* eslint-disable func-names */
/* eslint-disable no-undef */
$(document).ready(() => {
  // Show/hide Radio Content in Checkout
  $('.address-delivery-container input').on('click', function () {
    if ($('#address_radio_2').is(':checked')) {
      $('.other-address-container').show('slide');
      $('#step-2').addClass('more-content');
    } else {
      $('.other-address-container').hide('slide');
      $('#step-2').removeClass('more-content');
    }
  });
  // Adding Class on Scroll
  $(window).on('load', () => {
    const winOffset = document.documentElement.scrollTop || document.body.scrollTop;
    if (winOffset > 60.5) {
      $('body').addClass('nav-fixed');
    }
  });
  $(window).scroll(() => {
    const winOffset = document.documentElement.scrollTop || document.body.scrollTop;
    if (winOffset > 60) {
      $('body').addClass('nav-fixed');
    } else {
      $('body').removeClass('nav-fixed');
    }
  });

  // Open/Close Header Search
  $('.header-search-icon').on('click', function () {
    $(this).parent().addClass('search-active');
  });
  $('.inner-close-icon').on('click', () => {
    $('.header-search').removeClass('search-active');
  });

  // Open/Close Mobile Menu
  $('.nav-icon').on('click', () => {
    $('body').toggleClass('menu-open');
    $('.menu-item-side').removeClass('second-level');
    $('.sub-menu').removeClass('first-level');
    $('.header-search').removeClass('search-active');
  });

  $('.phone-container').on('click', () => {
    $('.menu-item-side').removeClass('second-level');
    $('.sub-menu').removeClass('first-level');
    $('body').removeClass('menu-open');
  });

  // Open/Close Mobile Submenu
  if ($(window).width() < 992) {
    $('.sub-menu > .mobile-arrow').on('click', function () {
      $(this).parents('.sub-menu').toggleClass('first-level').siblings()
        .removeClass('first-level');
      $('.menu-item-side').removeClass('second-level');
    });
    $('.menu-item-side .mobile-arrow').on('click', function () {
      $(this).parents('.menu-items-content-item').siblings().children()
        .removeClass('second-level');
      $(this).parents('.menu-item-side').toggleClass('second-level').siblings()
        .removeClass('second-level');
    });
    $('.menu-item-side .step-back').on('click', function () {
      $(this).parents('.menu-item-side').removeClass('second-level');
    });
    $('span.step-back').on('click', function () {
      $(this).parents('.sub-menu').removeClass('first-level');
    });
  }

  // Tablet Header Menu
  if ($(window).width() > 992 && $(window).width() < 1199) {
    $(document).on('touchstart click', () => {
      $('.sub-menu').removeClass('active-hover');
    });
    $('.sub-menu').on('touchstart click', () => {
      event.stopPropagation();
    });
    $('.sub-menu > a').on('touchstart click', function (e) {
      if (e.type === 'touchstart') {
        if (!$(this).parent().hasClass('active-hover')) {
          e.preventDefault();
        }
        $(this).parent().toggleClass('active-hover').siblings()
          .removeClass('active-hover');
        $('body').toggleClass('menu-open');
        if ($('.sub-menu').hasClass('active-hover')) {
          $(this).removeClass('active-hover');
        }
        event.stopPropagation();
      } else if (e.type === 'click') {
      }
    });
  }

  // Footer Intro Carousel
  $('.footer-intro-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });

  // Video Modal
  $('.video-modal').on('hidden.bs.modal', () => {
    $('.video-modal iframe').attr('src', $('.video-modal iframe').attr('src'));
  });

  // Testimonial Carousel
  $('.testimonial-carousel').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });

  // Products Carousel
  $('.products-carousel').slick({
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Accordion active body
  $('.card-header').click(function () {
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    } else {
      $('.card-header').parent().removeClass('active');
      $(this).parent().addClass('active');
    }
  });

  // Video Carousel
  $('.video-carousel').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });

  // Text Image Carousel
  $('.text-image-carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    lazyLoad: 'progressive',
    waitForAnimate: true,
    useTransform: true,
  }).slickAnimation();
  $('.slick-prev').click(() => {
    $('.text-image-carousel').slick('slickPrev');
  });
  $('.slick-next').click(() => {
    $('.text-image-carousel').slick('slickNext');
  });

  // Custom Select
  $('select').prettySelect();
  $('.select-title').on('click', function () {
    $(this).parents('.select-item').toggleClass('select-open').siblings()
      .removeClass('select-open');
  });

  // Products Filter
  $('.filter-icon').on('click', function () {
    $(this).parent().addClass('active-filter');
  });
  $('.filter-list li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.filter-container').removeClass('active-filter');
  });
  const $obj = $('.filter-container');
  if ($obj.length) {
    const { top } = $obj.offset();
  }
  $(window).scroll(function () {
    const position = $(this).scrollTop() + 115;
    if (position >= top) {
      $obj.addClass('filter-fixed');
    } else {
      $obj.removeClass('filter-fixed');
    }
  });
  $(window).on('load', function () {
    const position = $(this).scrollTop() + 115;
    if (position >= top) {
      $('.filter-container').addClass('filter-fixed');
    }
  });

  $(window).bind('scroll', () => {
    if ($(window).scrollTop() >= $('.gray-background .container').offset().top + $('.gray-background .container').outerHeight() - window.innerHeight + 350) {
      $('.filter-container').css('opacity', '0');
    } else {
      $('.filter-container').css('opacity', '1');
    }
  });

  // Form Steps Wizard
  const navListItems = $('div.setup-panel div a');
  const allWells = $('.step-content');
  const allNextBtn = $('.nextBtn');
  const allPrevBtn = $('.prevBtn');

  allWells.hide();
  navListItems.click(function (e) {
    e.preventDefault();
    const $target = $($(this).attr('href'));
    const $item = $(this);

    if (!$item.hasClass('disabled')) {
      navListItems.removeClass('active-step');
      $item.addClass('active-step');
      allWells.hide();
      $target.show();
      $target.find('input:eq(0)').focus();
    }
  });

  allPrevBtn.click(function () {
    const curStep = $(this).closest('.step-content');
    const curStepBtn = curStep.attr('id');
    const prevStepWizard = $(`div.setup-panel div a[href="#${curStepBtn}"]`).parent().prev().children('a');
    $(`div.setup-panel div a[href="#${curStepBtn}"]`).removeClass('active-step');
    prevStepWizard.removeAttr('disabled').trigger('click');
  });

  allNextBtn.click(function () {
    const curStep = $(this).closest('.step-content');
    const curStepBtn = curStep.attr('id');
    const nextStepWizard = $(`div.setup-panel div a[href="#${curStepBtn}"]`).parent().next().children('a');
    const curInputs = curStep.find("input[type='text'],input[type='url'], input[type='email'], input[type='password']");
    let isValid = true;
    $('.form-group').removeClass('has-error');
    for (let i = 0; i < curInputs.length; i++) {
      if (!curInputs[i].validity.valid) {
        isValid = false;
        $(curInputs[i]).closest('.form-group').addClass('has-error');
      }
    }
    if (isValid) {
      nextStepWizard.removeAttr('disabled').trigger('click');
    }
  });
  $('div.setup-panel div a.active-step').trigger('click');

  // Tabs to Accordion
  $('.tab_accord_wrapper').tab2accordion();

  // Product Feedback Scroll
  $('.product-star-container a').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + 200,
    }, 1300);
  });

  // Product Image Gallery
  $('#productGallery').lightGallery({
    thumbnail: false,
  });
  const $carousel = $('.slider-for');

  $carousel
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
          },
        },
      ],
    });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    vertical: true,
    focusOnSelect: true,
  });

  // Show More/Less
  $('.more-btn').on('click', function () {
    const txt = $(this).parent().hasClass('show-more') ? 'LÆS MERE' : 'Læs mindre';
    $(this).text(txt);
    $(this).parent().toggleClass('show-more');
  });
  $('.tab_accord_wrapper .tabs li').on('click', () => {
    $('.tab_content').removeClass('show-more');
  });

  // Product Checkout
  $('.checkout-btn').on('click', () => {
    $('.checkout-container').addClass('checkout-active');
    $('body').addClass('checklist-open');
    $('.header-search').removeClass('search-active');
  });
  $('.close-checkout').on('click', () => {
    $('.checkout-container').removeClass('checkout-active').removeClass('category-active');
    $('.category-container').removeClass('categoryItem');
    $('body').removeClass('checklist-open');
  });
  $('.additional-item').on('click', () => {
    $('.checkout-container').addClass('category-active');
  });
  $('.new-additional-item .second-btn').on('click', function () {
    const txt = $(this).parent().hasClass('active') ? 'TILFØJ' : 'TILFØJET';
    $(this).text(txt);
    $(this).parent().toggleClass('active');
    $('.checkout-container').addClass('category-active');
  });
  $('.back-button').on('click', () => {
    $('.checkout-container').removeClass('category-active');
    $('.category-container').removeClass('categoryItem');

    additionalItem();
  });
  $('.additional-item').click(function () {
    const activeCategory = $(this).attr('rel');
    $(`#${activeCategory}`).addClass('categoryItem');
  });

  additionalItem();

  // Plus/Minus Product Buttons
  $('.btn-number').click(function (e) {
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    const input = $(`input[name='${fieldName}']`);
    const currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      if (type === 'minus') {
        if (currentVal > input.attr('min')) {
          input.val(currentVal - 1).change();
        }
        if (parseInt(input.val()) === input.attr('min')) {
          $(this).attr('disabled', true);
        }
      } else if (type === 'plus') {
        if (currentVal < input.attr('max')) {
          input.val(currentVal + 1).change();
        }
        if (parseInt(input.val()) === input.attr('max')) {
          $(this).attr('disabled', true);
        }
      }
    } else {
      input.val(0);
    }
  });
  $('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
  });
  $('.input-number').change(function () {
    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    const name = $(this).attr('name');
    if (valueCurrent >= minValue) {
      $(`.btn-number[data-type='minus'][data-field='${name}']`).removeAttr('disabled');
    } else {
      $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
      $(`.btn-number[data-type='plus'][data-field='${name}']`).removeAttr('disabled');
    } else {
      $(this).val($(this).data('oldValue'));
    }
  });
  $('.input-number').keydown((e) => {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1
      // Allow: Ctrl+A
      || (e.keyCode === 65 && e.ctrlKey === true)
      // Allow: home, end, left, right
      || (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });
});

// Choose Product Additional Item
function additionalItem() {
  $('.category-container').each(function () {
    if ($(this).children().hasClass('active')) {
      $(this).addClass('choosen-category');
      const selectItem = $(this).attr('id');
      $(`.additional-item[rel^='${selectItem}']`).addClass('active');
    } else {
      $(this).removeClass('choosen-category');
      const selectItem = $(this).attr('id');
      $(`.additional-item[rel^='${selectItem}']`).removeClass('active');
    }
  });
}

// Set Map
function initMap() {
  if ($('#map').length > 0) {
    function initialize() {
      const myLatlng = new google.maps.LatLng(53.3333, -3.08333);
      const color = '#212640';
      const mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        zoomControl: false,
        disableDefaultUI: true,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      // Callout Content
      const contentString = 'Some address here..';
      // Set window width + content
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500,
      });

      // Add Marker
      const marker = new google.maps.Marker({
        position: myLatlng,
        map,
        // icon: imagePath,
        title: 'image title',
      });

      google.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map, marker);
      });

      bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-84.999999, -179.999999),
        new google.maps.LatLng(84.999999, 179.999999),
      );

      rect = new google.maps.Rectangle({
        bounds,
        fillColor: color,
        fillOpacity: 0.6,
        strokeWeight: 0,
        map,
      });

      // Resize Function
      google.maps.event.addDomListener(window, 'resize', () => {
        const center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  }
}
