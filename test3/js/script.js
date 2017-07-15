var ctrl = false;
var alt = false;
var _t = false;
var currentSymbols = [];
var nav = document.getElementsByTagName('nav')[0];
var tagSecret = document.getElementsByClassName('secret')[0];


function _ctrlKeyDown(event) {

    if (event.key == 'Alt') {
        alt = true;
    }
    if (event.key == 'Control') {
        ctrl = true;
    }
    if (event.code == 'KeyT') {
        _t = true;
    }

    if (ctrl && alt && _t) {
        nav.classList.toggle('visible');
    }
    console.log('alt', alt, 'ctrl', ctrl, '_t', t);
}

function _ctrlKeyUp(event) {
    if (event.key == 'Alt') {
        alt = false;
    }
    if (event.key == 'Ctrl') {
        ctrl = false;
    }
    if (event.code == 'KeyT') {
        _t = false;
    }
}

function checkSecret(event) {
    var secret = "YTNJKJUBZ";
    currentSymbols.push(event.code.replace('Key', ''));
    var currentWord = currentSymbols.join('');
    if (currentSymbols.length == 9) {
        if (currentWord == secret) {
            tagSecret.classList.add('visible');
        }
        else {
            currentSymbols = [];
        }
    }

}

document.addEventListener('keydown', _ctrlKeyDown);
document.addEventListener('keyup', _ctrlKeyUp);
document.addEventListener('keyup', checkSecret);

/**
 * Created by Alla on 7/6/2017.
 */
