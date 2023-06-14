const spaceAudio = new Howl({
    src: ['static/audio/space.ogg'],
    autoplay: false,
    loop: true
});

spaceAudio.play();

let globalMute = false;
let globalVolume = 100;

$('#audioMute').on('click', () => {
    if (globalMute) {
        Howler.volume(globalVolume / 100);
        globalMute = false;
        return;
    }
    Howler.volume(0);
    globalMute = true;
    return;
})

setInterval(() => {
    if (globalMute) { return };
    if (globalVolume != $('#audioRange').val()) {
        globalVolume = $('#audioRange').val();
        Howler.volume(globalVolume / 100);
    }
}, 200);