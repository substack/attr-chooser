var choose = require('../')('active', function (elem) {
    console.log('selected', elem.textContent);
});

var elems = document.querySelectorAll('*[chooser]');
for (var i = 0; i < elems.length; i++) {
    choose(elems[i], 'chooser');
}
