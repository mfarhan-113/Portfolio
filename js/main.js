(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    // Blog carousel
    $(".blog-carousel").owlCarousel({
        autoplay: false,
        dots: false,
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            '<span class="btn btn-outline-light"><i class="fa fa-angle-left"></i></span>',
            '<span class="btn btn-outline-light"><i class="fa fa-angle-right"></i></span>'
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 }
        }
    });
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    // Portfolio modal opener
    $(document).on('click', '.open-portfolio', function (e) {
        e.preventDefault();
        var $btn = $(this);
        var title = $btn.data('title') || 'Project';
        var desc = $btn.data('desc') || '';
        var link = $btn.attr('href') || $btn.data('link') || '';
        var linksStr = $btn.data('links') || '';
        var imgSrc = $btn.closest('.portfolio-wrap').find('.portfolio-img img').attr('src') || '';

        $('#portfolioModalLabel').text(title);
        if (linksStr) {
            // Parse semicolon-separated list of url|label pairs
            var items = String(linksStr).split(';').map(function (pair) {
                var parts = pair.split('|');
                return { url: (parts[0] || '').trim(), label: (parts[1] || '').trim() };
            }).filter(function (it) { return it.url; });
            var html = '<ol class="mb-0 pl-3">';
            items.forEach(function (it) {
                var safeLabel = $('<div/>').text(it.label || it.url).html();
                var safeUrl = $('<div/>').text(it.url).text();
                html += '<li class="mb-1"><a href="' + safeUrl + '" target="_blank" rel="noopener">' + safeLabel + '</a></li>';
            });
            html += '</ol>';
            $('#portfolioModalDesc').html(html);
        } else if (link) {
            // Safely set desc as single link text
            var safeText = $('<div/>').text(desc).html();
            $('#portfolioModalDesc').html('<a href="' + link + '" target="_blank" rel="noopener">' + safeText + '</a>');
        } else {
            $('#portfolioModalDesc').text(desc);
        }
        $('#portfolioModalImg').attr('src', imgSrc);
        $('#portfolioModal').modal('show');
    });

    // Close modal and smooth scroll when clicking in-modal hash links
    $(document).on('click', '#portfolioModalDesc a[href^="#"]', function (e) {
        var target = this.getAttribute('href');
        if (target && target.charAt(0) === '#') {
            e.preventDefault();
            $('#portfolioModal').modal('hide');
            var $t = $(target);
            if ($t.length) {
                $('html, body').animate({ scrollTop: $t.offset().top - 60 }, 600);
            } else {
                window.location.hash = target;
            }
        }
    });
    
})(jQuery);

