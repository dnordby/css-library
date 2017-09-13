# gridX

## Installation
`git clone git@github.com:dnordby/gridX.git`

Include minified `css/gridX.css` and add it to your assets directory. Include in your `<head>` tag:
`<link rel="stylesheet" type="text/css" href="[your-path-to-file]/gridX.css">`

## Grid
gridX is a lightweight grid system inspired by [Bootstrap](http://getbootstrap.com/) and follows similar naming conventions. gridX allows you to specify the number of columns your design will support, gutter width, and breakpoints.
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

By default, [`collapse.js`](https://getbootstrap.com/docs/3.3/javascript/#collapse) and its corrresponding styles are included in the grid.


### To Modify:
`git clone git@github.com:dnordby/gridX.git`

`git checkout -b [name_of_your_new_branch]`

`npm install -g webpack`

`npm install`

`webpack --watch --optimize-minimize`

Edit `src/scss` files. Sub directories can be added (in addition to `src/scss/global`), and sub files can be added to each subdirectory. Each new addition must be indluded as a new import in `src/scss/app.scss`. Webpack will autoprefix, process to CSS, and minimize the any included files in `src/scss/app.scss` and compile them to `css/vpv-normalizer.css`

#### To create a merge request run:
* `git push origin [name_of_your_new_branch]`

* Your recently pushed branches may be listed at the top - click "Compare & pull request" to resolve any issues and submit.

* Assign the repo owner to the merge for review and approval. The master branch is protected, you will not be able to merge your own requests.
