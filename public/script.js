'use-strict'

$(() => {  
    const headerArr = [... document.querySelectorAll('.item-header')],
        imageWrapper = document.getElementsByClassName('image-wrapper'),
        imgArr = [... document.querySelectorAll('.content-image__img')];
    let contentHeader = document.getElementsByClassName('content-header');
    //imgWrapper = document.getElementsByClassName('content-header'); // in main.js initialisiert
    //images & drape imageWarpper:after
    headerArr.forEach((el, i) => {
        el.addEventListener('mouseenter', () => {
            imgArr[i].classList.add('show');
            imageWrapper[0].classList.add('hover'); 
        });
        el.addEventListener('mouseleave', () => {
            imgArr[i].classList.remove('show');            
            imageWrapper[0].classList.remove('hover'); 
        });
    });   
     
});

/** jQuery helpers */

    /**
     * Hier die document ready bindings:
     */
    $(() => { // wg React document ready nötig! 
        $('.direct-links').hover(() => {
            $('body').toggleClass('direct');   
        });

        //menu toggle

        $('#mnu-button').on('click', ({currentTarget}) => { // arrow functions können doch kein "this" haben - deswegen -> function() oder mit {currentTarget}
            $(currentTarget).toggleClass('open');
            $('body').toggleClass('mnu-open');
            $('.nav-content a').toggleClass('init');
        });

        $('#onClick').click(() => {
            $('body').addClass('port-2');
        });

    });
    //END --> document ready bindings

    // Skill Progress-Bars
    let percents = ['91', '94','82', '71', '55', '67', '86', '79', '66', '28', '89', '33', '40', '73', '55'];
    const progRun = (param) => {
        let prog = $(".progress-bar");
        if(param === "start") {
            for(let i = 0; i < percents.length; i++) {
                prog.eq(i).animate({width:"" + percents[i] + "%"}, 1500, 'swing');
            }
            return true;
        } else {
            for(let x = 0; x < percents.length; x++) {
                prog.eq(x).css("width", "0%");
            }
            return false;
        }
    }
        // folgendes gilt für Ajax loaded Content; Hover Funktion muss über document delegiert werden sonbst werden neue elemente im DOM nicht erkannt
    $(document).on("mouseenter", "a.demo", function(){
        $('span.info').addClass('visible');
    }); 
    $(document).on("mouseleave", "a.demo", function(){
        $('span.info').removeClass('visible');
    }); 

/** END --> jQuery helpers */