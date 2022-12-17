(function($) {
    "use strict";

    // Test code
    var demobtn = '<button class="dl-btn">Light/Dark</button>';
    $(window).on('load', function(){
        $('body').append(demobtn);
        $('.dl-btn').on('click', function(){
            $('body').toggleClass('theme-dark');
        })
    })

    $('.select-box').on('click', function() {
        const child = $(this).children('.dropdown-menu')
        if (child.hasClass('active')) {
            child.removeClass("active");
        } else {
            $('.dropdown-menu').removeClass("active");
            child.addClass('active')
        }
    });
    $('.form-type a, .products .filter-nav a').on('click', function(e) {
        e.preventDefault();
        $('.form-type a').removeClass('active');
        $('.filter-nav a').removeClass('active');
        $(this).addClass('active');
    });
    
    

    $(window).on('load resize', function() {   
        // Window Width Selector
        let ww = $(window).width();
        // Siebar Selector
        let sel = $('.sidebar.sidebar-main');  

        if (ww < 768){
            sel.addClass('menu-sm')
            sel.removeClass('menu-lg')
            sel.removeClass('menu-md')
            tt();
        } 
        if(1199 >= ww && 768 <= ww){
            sel.addClass('menu-md')
            sel.removeClass('menu-sm')
            sel.removeClass('menu-lg')
            tt();
            if (!$('.page-container').hasClass('page-full')) {
                $('.page-container').addClass('page-full');
            }
        }
        if(ww > 1200){
            sel.addClass('menu-lg')
            sel.removeClass('menu-sm')
            sel.removeClass('menu-md')
            tt();
            if ($('.page-container').hasClass('page-full')) {
                $('.page-container').removeClass('page-full');
            }
    
        }
        
        

    })

    /* Sidebar Menu */
    $('.menu-toggler').on('click', function(e) {
        e.preventDefault();
        let ww = $(window).width();
        let sel = $('.sidebar.sidebar-main');  
        if (ww < 768){
            if($('.sidebar-main').hasClass('menu-sm')){
                sel.removeClass('menu-sm')
                sel.addClass('menu-lg')
            }else{
                sel.addClass('menu-sm')
                sel.removeClass('menu-lg')
            }
            sel.removeClass('menu-md')
        }
        
        if(1200 >= ww && 768 <= ww){
            
            if($('.sidebar-main').hasClass('menu-md')){
                sel.removeClass('menu-md')
                sel.addClass('menu-lg')
            }else{
                sel.addClass('menu-md')
                sel.removeClass('menu-lg')
            }
            sel.removeClass('menu-sm')
            tt()
        }
        
        if(ww > 1200){
            if($('.sidebar-main').hasClass('menu-lg')){
                sel.removeClass('menu-lg')
                sel.addClass('menu-md')
            }else{
                sel.addClass('menu-lg')
                sel.removeClass('menu-md')
            }
            
            sel.removeClass('menu-sm')
            tt()
        }

        $('.page-container').toggleClass('page-full');
        $(this).toggleClass('active');
    
        
    });

    $('.sub-menu.active').slideDown();
    let menuItem    = $('.accordion .nav-item > a');

    $(menuItem).on('click', function (e) {   

        // Recever remove class when user click main menu  
        if ( $(this).next().hasClass('rcr-sub')) {
            if($($(this).next()).css('display') == 'none'){
            }else {
            }
            $('.sub-menu').slideUp();
            $(this).next().slideDown();  
        }else{
            // Recever remove class when user click main menu            
            $(rcvSelector).slideUp().removeClass('active');
      
            
            if ($(this).hasClass('active')) {
                $(menuItem).removeClass('active')                    
            }else{
                $(menuItem).removeClass('active')
                $(this).addClass('active')
            }
            if (!$('.sidebar-main').hasClass('menu-md')) {
                if($($(this).next()).css('display') == 'none' && $($(this).next()).hasClass('active')){
                    $(this).next().slideDown();  
                }else 
                if($($(this).next()).hasClass('active')){
                    $('.sub-menu').slideUp();
                    $(this).next().removeClass('in');   
                    setTimeout(() => {
                        $(this).next().removeClass('active');                      
                    }, 1000);
                    
                }else if($($(this).next()).hasClass('in')){
                    $('.sub-menu').slideUp();
                    $(this).next().removeClass('in');   
                } else{
                    $('.sub-menu').slideUp();
                    $('.sub-menu').removeClass('in');   
                    $(this).next().addClass('in');   
                    $(this).next().slideDown();   
                    
                }
            }else{
                
            }

        }
        e.preventDefault()
    })

    var rcvSelector = $('.recever-sub-menu');
    $('.mbtn').on('click', function() {
        if ($(rcvSelector).hasClass('active')) {
            $(rcvSelector).slideUp();
            $(rcvSelector).removeClass('active')
        }else{
            $(rcvSelector).addClass('active')
            $(rcvSelector).slideDown();
        }
        $('.sub-menu').slideUp().removeClass('in');
    })

  
    function tt(){
        
        let ww          = $(window).width();
        let menuItem    = $('.accordion .nav-item > a');
        if ($('.sidebar-main').hasClass('menu-md')){
            $('.sub-menu').hide();
        }
        
        $(menuItem).on('mouseover', function () {
            if ($('.sidebar-main').hasClass('menu-md') && ww >= 768) {               
                $('.sub-menu').hide();
                $(this).next().show();   
                $('.sub-menu').removeClass('show');
                $(this).next().addClass('show');   
            }
        })
    
        $('.page-container, .header').on('mouseover', function () {
            if ($('.sidebar-main').hasClass('menu-md') && ww >= 768) {
                $('.menuItem').removeClass('active')
                $('.sub-menu').hide();
                $('.sub-menu').removeClass('show');     
            }       
        })
        if (!$('.sidebar-main').hasClass('menu-md')) {
            $('.sub-menu').removeClass('active, in');
        }
    }
        
       
 
    
    /*
    * Tooltip
    * */
    // $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    // function pscroll (selector) {
    //     if($(selector).length) {
    //         console.log(selector)
    //         new PerfectScrollbar(selector, {
    //             wheelSpeed: 5,
    //             wheelPropagation: true,
    //             minScrollbarLength: 100  
    //         });
    //     }
    // }

    // pscroll($('.sidebar-main'))
    // pscroll($('.customer-list .avatar-list'))
    // pscroll($('.notification .avatar-list'))
    // pscroll($('.products .card-body'))




    if($('.sidebar-main').length) {
        const ps = new PerfectScrollbar('.sidebar-main', {
            wheelSpeed: 1,
            wheelPropagation: false,
            minScrollbarLength: 100  
        });
    }

    if($('.customer-list .avatar-list').length) {
        const customer = new PerfectScrollbar('.customer-list .avatar-list', {
            wheelSpeed: 1,
            wheelPropagation: false,
            minScrollbarLength: 100  
        });
    }

    if($('.notification .avatar-list').length) {
        const notification = new PerfectScrollbar('.notification .avatar-list', {
            wheelSpeed: 1,
            wheelPropagation: false,
            minScrollbarLength: 100  
        });
    }

    if($('.tasks tbody').length) {
        const task = new PerfectScrollbar('.tasks table', {
            wheelSpeed: 1,
            wheelPropagation: false,
            minScrollbarLength: 100  
        });
    }

    // if($('.products .card-body').length) {
    //     const products = new PerfectScrollbar('.products .card-body', {
    //         wheelSpeed: 1,
    //         wheelPropagation: false,
    //         minScrollbarLength: 100  
    //     });
    // }
    
    if($('.scrollable').length) {
        const scrollable = new PerfectScrollbar('.scrollable', {
            wheelSpeed: 1,
            wheelPropagation: false,
            minScrollbarLength: 100
        });
    }
    
    // let elem = document.documentElement;
    // $('.expand-screen a').on('click', function() {
    //     document.onkeydown = function(evt) {
    //         evt = evt || window.event;
    //         if (evt.keyCode == 27) {

    //             if($('.expand-screen a').hasClass('fullscreen')) {
    //                 $('.expand-screen a').removeClass('fullscreen')
    //                 $('.expand-screen a').children('i').removeClass('fa-compress')
    //                 $('.expand-screen a').children('i').addClass('fa-expand')
    //                 console.log('Yes');
                    
    //             }else{
    //                 $('.expand-screen a').addClass('fullscreen')
    //                 $('.expand-screen a').children('i').removeClass('fa-expand')
    //                 $('.expand-screen a').children('i').addClass('fa-compress')
    //                 console.log('No');
                    
    //             }
    //             alert('Esc key pressed.');
    //         }
    //     };

    //     if($(this).hasClass('fullscreen')) {
    //         document.exitFullscreen();
    //         $(this).removeClass('fullscreen')
    //         $(this).children('i').removeClass('fa-compress')
    //         $(this).children('i').addClass('fa-expand')
    //     }else{
    //         $(this).addClass('fullscreen')
    //         $(this).children('i').removeClass('fa-expand')
    //         $(this).children('i').addClass('fa-compress')
    //         let req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
    //         req.call(elem);
    //     }
    //     })


    var expandBTN = $('.expand-screen a');

    function fsui() {
        document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || (console.log("pressed"), $(".expand-screen").removeClass("fullscreen-enable"));
        fullsecChecker()
    }

      
        $(expandBTN).on("click", function (e) {
            e.preventDefault(),
                $(".expand-screen").toggleClass("fullscreen-enable"),
                document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
                    ? document.cancelFullScreen
                        ? document.cancelFullScreen()
                        : document.mozCancelFullScreen
                        ? document.mozCancelFullScreen()
                        : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
                    : document.documentElement.requestFullscreen
                    ? document.documentElement.requestFullscreen()
                    : document.documentElement.mozRequestFullScreen
                    ? document.documentElement.mozRequestFullScreen()
                    : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        })
        document.addEventListener("fullscreenchange", fsui),
        document.addEventListener("webkitfullscreenchange", fsui),
        document.addEventListener("mozfullscreenchange", fsui);

        function fullsecChecker(){
            var expbtn =  $(".expand-screen");
            if($(expbtn).hasClass('fullscreen-enable')) {
                $(".expand-screen").find('i').removeClass("fa-expand")
                $(".expand-screen").find('i').addClass("fa-compress")
            }else{
                $(".expand-screen").find('i').removeClass("fa-compress")                    
                $(".expand-screen").find('i').addClass("fa-expand")                    
            }
        }


    // Stocks carousel

    $('.stock-updates ul').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })

    // Nice select
    if ($('.nice-select').length) {
        $('.nice-select').niceSelect();
    }

    $(window).on('load resize', function() {
        var wwidth = $(window).width();

        
        if(wwidth < 768) {
            if($('.horizontal').hasClass('h-active')) {
                $('.horizontal').removeClass('h-active')
            }

        }else{            
            $('.horizontal').addClass('h-active')
            
        }
    })
    
    if($('.boxed-layout').length) {
        if($('body').hasClass('boxed-layout')) {
            $('#main-wrapper').addClass('container')
        }
    }

    //======================
    // More Item function
    //======================
    function moreItem(selector, receiver) {
        var tele = document.getElementById(selector),
            rec = document.getElementById(receiver);
        // window.onresize = resize;
        // resize();

        $(window).on('load resize', function() {
            resize();
        })
        resize();

        function resize() {
            const rChildren = rec.children;
            let numW = 0;

            [...rChildren].forEach(item => {
                item.outHTML = '';
                tele.appendChild(item);
                $(item).find('.sub-menu').removeClass('rcr-sub')
            })

            const teleW = tele.offsetWidth,
                tChildren = tele.children;

            [...tChildren].forEach(item => {
                numW += item.offsetWidth;

                if (numW > teleW) {
                    item.outHTML = '';
                    rec.appendChild(item);
                    $(item).find('.sub-menu').addClass('rcr-sub')
                }
            });
        }
    }
    if ($('#teleporter').length > 0) {
        moreItem('teleporter', 'receiver')
    }


    // DataTable - Sorting
    if($('.sorting-datatable').length > 0) {
        let datatable = $('.sorting-datatable').DataTable({
            // "paging": false,
            // "info": false,
            // "searching": false
            dom: 't<"flex align-items-center pagination"i<"pager"p>>',
            language: {
                search: "",
                searchPlaceholder: "Search Keyword",
                lengthMenu: "<span class='d-none d-sm-inline-block'>Show poo</span><div class='form-control-select'> _MENU_ </div>",
                info: "Showing result _START_ to _END_",
                infoEmpty: "No records found",
                infoFiltered: "( Total _MAX_  )",
                paginate: { first: "First", last: "Last", next: "<i class='fas fa-arrow-right'></i>", previous: "<i class='fas fa-arrow-left'></i>" },
            },
        });
        $('#dt-search-filter').on( 'keyup', function () {
            datatable.search( this.value ).draw();
        } );


        $('#dt-entires-filter').val(datatable.page.len());
        $('#dt-entires-filter').change( function() { 
            datatable.page.len( $(this).val() ).draw();
        });
    }
    

    // mixitup
    if($('.mixFilterable').length > 0) {
        var containerEl = $('.mixFilterable tbody');
        
        mixitup(containerEl, {
            "animation": {
                // "duration": 250,
                "nudge": false,
                "reverseOut": false,
                "effects": "fade"
            }
        });
    }
    

    // Date range picker
    // $('.daterange').daterangepicker();

    if ($('.daterange').length > 0) {
        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
        $('.daterange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
        cb(start, end);
    }


    if($('#editor').length > 0) {
       ClassicEditor
        .create( document.querySelector( '#editor' ) )
        .then( editor => {
        } )
        .catch( error => {
        } ); 
    }
    if($('#replyEditor').length > 0) {
       ClassicEditor
        .create( document.querySelector( '#replyEditor' ),  {
            toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'imageUpload' ]
        })
        .then( editor => {
        } )
        .catch( error => {
        } ); 
    }

    if($('[name=tagify]').length > 0) {
        var input = document.querySelector('input[name=tagify]');
        new Tagify(input)
    }

    

    function accordionFun(e) {
        var collBTN = e + " .accordion-item h5";
        var colbody = e + " .accordion-item";
        $(collBTN).on("click", function() {
            // console.log('HI', colbody);
            $(colbody).removeClass("active");
            $(this).parent(".accordion-item").addClass("active");
        });
    }

    accordionFun("#accordion");

    const inbxList = $('.inbox-list-wrapper');
    const inbxView = $('.inbox-view-wrapper');

    $('.inbox-item-link, .back-to-inbox').on('click', function(e) {
        e.preventDefault();
        inbxList.toggleClass('hide show')
        inbxView.toggleClass('show hide')
    })

    // Mark as read
    if($('.mark-read').length > 0) {
        $('.mark-read').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('is-marked')
        })
    }

    // Inbox toggle mobile
    const toggler = $('.inbox-nav-toggler')
    const inbxNav =  $('.inbox-nav')

    toggler.on('click', function(e) {
        inbxNav.slideToggle()
    })

    
    $(window).on('load resize', function() {
        let footer = $('.footer')
        if ($(window).width() > 768) {
            let sbWidth = $('.sidebar-main').width() + +'30'

            if ( sbWidth < 300) {
                footer.css({paddingLeft: sbWidth})
            }
        } else {
            footer.css({paddingLeft: 0})
        }
        
    })

    
})(jQuery);


