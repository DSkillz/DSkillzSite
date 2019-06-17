// Technologic intro sound /w fadeIn

var status = 'pause';

var myAudio = new Audio('technologic.mp3');  
// myAudio.play();
status = 'play';

function fadeOut(p_audio, delay){
    if(status != 'play') return false;

    var actualVolume = p_audio.volume;
    var fadeOutInterval = setInterval(function(){
        actualVolume = (parseFloat(actualVolume) - 0.1).toFixed(1);
        if(actualVolume >= 0){
            p_audio.volume = actualVolume;
        } else {
            p_audio.pause();
            status = 'pause';
            clearInterval(fadeOutInterval);
        }
    }, 100);
}

function fadeIn(p_audio, delay){  
    if(status == 'play') return false;

    var actualVolume = 0;
    p_audio.play();
    status = 'play';
    var fadeInInterval = setInterval(function(){
        actualVolume = (parseFloat(actualVolume) + 0.1).toFixed(1);
        if(actualVolume <= 1){
            p_audio.volume = actualVolume;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 100);
}

// Ripples

var interval;
$(document).on('mousemove keyup keypress', function () {
    clearTimeout(interval); //clear it as soon as any event occurs
    $('#ripples').ripples('destroy');
    settimeout(); //call it again
})

function settimeout() {
    interval = setTimeout(function () {
        try {
            $('#ripples').ripples({
                resolution: 512,
                dropRadius: 20,
                perturbance: 0.04,
                interactive: false
            });
        } catch (e) {
            $('.error').show().text(e);
        }
        $('body').ripples('play');

        // Automatic drops
        setInterval(function () {
            var $el = $('#ripples');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;

            $el.ripples('drop', x, y, dropRadius, strength);
        }, 400);

        console.log('ripples !')
    }, 40000)
}

window.addEventListener('error', function(e) {
    console.log(e);
}, true);

window.addEventListener('UIEvent', function (e) { console.log(e.which) })