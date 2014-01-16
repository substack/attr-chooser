# attr-chooser

select among a list of dom elements with the same attribute

# example

First write some html with a `chooser` attribute (or whatever you want) on the
items you want to select:

``` html
<html>
  <head>
    <style>
      .item {
        cursor: pointer;
        width: 200px;
        padding: 2px;
      }
      .item:hover {
        background-color: rgb(200,200,230);
      }
      .item.active {
        background-color: rgb(150,150,250);
        color: white;
      }
    </style>
  </head>
  <body>
    <div id="items">
      <div class="item" chooser="item">one</div>
      <div class="item" chooser="item">two</div>
      <div class="item" chooser="item">three</div>
      <div class="item" chooser="item">four</div>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```

Then wire up some browser code:

``` js
var choose = require('attr-chooser')('active', function (elem) {
    console.log('selected', elem.textContent);
});

var elems = document.querySelectorAll('*[chooser]');
for (var i = 0; i < elems.length; i++) {
    choose(elems[i], 'chooser');
}
```

or you can use [attractor](https://npmjs.org/package/attractor):

``` js
var choose = require('attr-chooser')('active', function (elem) {
    console.log('selected', elem.textContent);
});
var attr = require('attractor')({ 'chooser': choose });
attr.scan(document);
```

Compile your browser code with [browserify](http://browserify.org):

```
$ browserify browser.js > bundle.js
```

# install

With [npm](https://npmjs.org) do:

```
npm install attr-chooser
```

# license

MIT
