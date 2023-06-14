const spaceAudio = new Howl({
    src: ['static/audio/space.ogg'],
    autoplay: false,
    loop: true
});

spaceAudio.play();

let globalMute = false;
let globalVolume = 100;

$('#audio-mute').on('click', () => {
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
    if (globalVolume != $('#audio-range').val()) {
        globalVolume = $('#audio-range').val();
        Howler.volume(globalVolume / 100);
    }
}, 200);