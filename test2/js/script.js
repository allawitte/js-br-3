var fullPhoto = document.getElementById('view');
var thumbs = document.getElementsByClassName('gallery-nav')[0].getElementsByTagName('a');

function showFull(event) {
    event.preventDefault();
    updateClass(this);
    fullPhoto.src = this.href;
}

function updateClass(tag) {
    for (let thumb of thumbs) {
        thumb.classList.remove('gallery-current');
    }
    tag.classList.add('gallery-current');
}

for (let thumb of thumbs) {
    thumb.addEventListener('click', showFull);
}

/**
 * Created by Alla on 7/6/2017.
 */
