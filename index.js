var classList = require('class-list');

module.exports = function (className, cb) {
    var groups = {};
    if (typeof className === 'string') {
        className = (function (str) {
            return function () { return str };
        })(className);
    }
    else if (typeof className === 'object') {
        className = (function (map) {
            return function (key) { return map[key] };
        })(className);
    }
    if (typeof className !== 'function') {
        throw new Error('className must be a function, string, or object');
    }
    
    return function (elem, attr) {
        var key = elem.getAttribute(attr);
        var g = groups[key];
        if (!g) g = groups[key] = { elements: [] };
        g.elements.push(elem);
        
        var cname = className(key);
        elem.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (cname && g.prev) classList(g.prev).remove(cname);
            if (cname) classList(elem).add(cname);
            g.prev = elem;
        });
    };
};
