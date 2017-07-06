var high = false;
var low = false;

var highSounds = [
    'wav/high/first.mp3',
    'wav/high/second.mp3',
    'wav/high/third.mp3',
    'wav/high/fourth.mp3',
    'wav/high/fifth.mp3'];

var middleSounds = [
    'wav/middle/first.mp3',
    'wav/middle/second.mp3',
    'wav/middle/third.mp3',
    'wav/middle/fourth.mp3',
    'wav/middle/fifth.mp3'];

var lowSounds = [
    'wav/low/first.mp3',
    'wav/low/second.mp3',
    'wav/low/third.mp3',
    'wav/low/fourth.mp3',
    'wav/low/fifth.mp3'];

var piano = document.getElementsByClassName('set')[0];
var pianoKeys = piano.getElementsByTagName('li');

var pianoPlayers = [];

for (let i = 0; i < 5; i++) {
    let func = function () {
        var middleSound = middleSounds[i];
        var lowSound = lowSounds[i];
        var highSound = highSounds[i];
        var player = this.getElementsByTagName('audio')[0];
        if (high && !low) {
            player.src = highSound;
        }
        else if (low && !high) {
            player.src = lowSound;
        }
        else {
            player.src = middleSound;
        }

        console.log('player', player);

        player.play();
    };
    pianoPlayers.push(func);
}
for (let i = 0; i < pianoKeys.length; i++) {
    pianoKeys[i].addEventListener('click', pianoPlayers[i]);
}


function isModified(event) {
    if (event.key == 'Alt') {
        high = true;
    }
    if (event.key == 'Shift') {
        low = true;
    }
}

function isPlain() {
    if (event.key == 'Alt') {
        high = false;
    }
    if (event.key == 'Shift') {
        low = false;
    }
}

document.addEventListener('keydown', isModified);
document.addEventListener('keyup', isPlain);


/**
 * Created by Alla on 7/6/2017.
 */
