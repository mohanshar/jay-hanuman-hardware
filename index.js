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
