$(document).ready(function () {

    $('#hm').on("click", function () {
        $('#prd').removeClass('active');
        $('#tool').removeClass('active');
        $('#cont').removeClass('active');
        $('#hm').addClass('active');
        $('#home').slideDown();
        $('#tools').slideUp();
        $('#prds').slideUp();
        $('#conts').slideUp();
    });

    $('#prd').on("click", function () {
        $('#prd').addClass('active');
        $('#tool').removeClass('active');
        $('#cont').removeClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#tools').slideUp();
        $('#prds').slideDown();
        $('#conts').slideUp();
    });

    $('#tool').on("click", function () {
        $('#prd').removeClass('active');
        $('#tool').addClass('active');
        $('#cont').removeClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#tools').slideDown();
        $('#prds').slideUp();
        $('#conts').slideUp();
    });

    $('#cont').on("click", function () {
        $('#prd').removeClass('active');
        $('#tool').removeClass('active');
        $('#cont').addClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#tools').slideUp();
        $('#prds').slideUp();
        $('#conts').slideDown();
    });

    $('#d1').on("click", function () {
        $('#box1').slideUp();
        $('.decrptn').slideDown();
    });

    $('#b1').on("click", function () {
        $('#box1').slideDown();
        $('.decrptn').slideUp();
    });

    $('#d2').on("click", function () {
        $('#box2').slideUp();
        $('.decrptn1').slideDown();
    });

    $('#b2').on("click", function () {
        $('#box2').slideDown();
        $('.decrptn1').slideUp();
    });

    $('#d3').on("click", function () {
        $('#box3').slideUp();
        $('.decrptn2').slideDown();
    });

    $('#b3').on("click", function () {
        $('#box3').slideDown();
        $('.decrptn2').slideUp();
    });

    $('#d4').on("click", function () {
        $('#box4').slideUp();
        $('.decrptn3').slideDown();
    });

    $('#b4').on("click", function () {
        $('#box4').slideDown();
        $('.decrptn3').slideUp();
    });

    $('#d5').on("click", function () {
        $('#box5').slideUp();
        $('.decrptn4').slideDown();
    });

    $('#b5').on("click", function () {
        $('#box5').slideDown();
        $('.decrptn4').slideUp();
    });

    $('#d6').on("click", function () {
        $('#box6').slideUp();
        $('.decrptn5').slideDown();
    });

    $('#b6').on("click", function () {
        $('#box6').slideDown();
        $('.decrptn5').slideUp();
    });

});

window.addEventListener('load', function () {

    var y = document.getElementById("myAudio1");
    var z = document.getElementById("myAudio");

    y.onended = function () {

        var w = document.getElementById("pause");

        if (y.paused) {
            w.innerHTML = 'Play Music';
        }
        else {
            w.innerHTML = 'Pause Music';
        }
    }

    z.onended = function () {

        var fa = document.querySelector('.fa-play')

        if (z.paused) {
            fa.classList.toggle('fa-pause')
        }
        else {
            fa.classList.toggle('fa-pause')
        }
    }
});

function firstAudioFunction() {

    var w = document.getElementById("pause");
    var y = document.getElementById("myAudio1");

    var fa = document.querySelector('.fa-pause')
    var z = document.getElementById("myAudio");

    if (y.paused && [w.innerHTML === 'Play Music']) {
        y.play();
        w.innerHTML = 'Pause Music';
        z.pause();
        fa.classList.toggle('fa-pause');
    }

    else {
        y.pause();
        w.innerHTML = 'Play Music';
        fa.classList.toggle('fa-pause');
        z.pause();
    }
}
