# gridX

## Installation
`git clone git@github.com:dnordby/gridX.git`

Include minified `css/gridX.css` and add it to your assets directory. Include in your `<head>` tag:
`<link rel="stylesheet" type="text/css" href="[your-path-to-file]/gridX.css">`

## Grid
gridX is a lightweight grid system inspired by [Bootstrap](http://getbootstrap.com/) and follows similar naming conventions. gridX allows you to specify the (X) number of columns your design will support, gutter width, and breakpoints. Sample markup:
```
<div class="container-fluid">
	<div class="row">
		<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"></div>
		<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"></div>
	</div>
</div>
```

Unless otherwise modified in `_variables.scss`, defaults are currently as follows:
* Small Breakpoint: 768px
* Medium Breakpoint: 991px
* Large Breakpoint: 1199px
* Gutter Size: 24px
* 12 column layout

By default, the `.row` class has left/right padding of 12px. Any `.col-*-*` class has a margin of 12px. This combination creates a uniform gutter of 24px both vertically and horizontally. The gutter can be adjusted to accomodate your design scheme.

A full-bleed effect can be achieved by adding the class `full-bleed` to a an element also containing the `row` class. This removes the extra row margin/padding, and removes margin on columns.

Nested columns are allowed, but must be wrapped by a `.row` element to avoid unwanted spacing issues.

By default, [`collapse.js`](https://getbootstrap.com/docs/3.3/javascript/#collapse) and its corrresponding styles are included in the grid. You must also include the `app.js` file (found in the same directory as the `gridX.css` build), or manually include the source code from Bootstrap.
