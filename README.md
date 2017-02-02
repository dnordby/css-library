#VPV CSS Modernizer

##Instalation
`git clone git@github.com:dnordby/css-library.git`

Pull out minified `css/vpv-modernizer.css` and add it to your assets directory. Include in your `<head>` tag:

`<link rel="stylesheet" type="text/css" href="[your-path-to-file]/vpv-modernizer.css">`

##Grid
The grid is set up using bootstrap naming conventions.
```
<div class="container-fluid">
	<div class="row">
		<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"></div>
		<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"></div>
	</div>
</div>
```

Note that the `col-xl-*` class has been added.

Breakpoints are currently as follows:
* 325px - 767px (`col-xs-*`)
* 768px - 991px (`col-sm-*`)
* 992px - 1279px (`col-md-*`)
* 1280px - 1599px (`col-lg-*`)
* >= 1600px (`col-xl-*`)

Gutters are set to `1em` and `font-size: 24px;` for the document so that the padding on a column is `0.5em` or 12px. Two adjacent columns will have a gutter of `1em` or 24px. Note that gutters are created by padding on the entire outside of the column.

There is no margin or padding adjustments on the `container-fluid` class. There is however a margin-top and margin-bottom of 0.5em, and a padding-left and padding-right of 0.5em. This ensures the gutter on the outside of the row matches the gutter between columns.

A full-bleed effect can be achieved by adding the class `full-bleed` to a an element also containing the `row` class. This removes the extra row margin/padding, and removes padding on columns, and also adjusts width to be the full width of their column, rather than `width: calc([col-size]/12*100% - 1em)` which accounts for the gutter in a non-full-bleed scenario.

Nested columns are allowed, and an optional `no-pad` class has been written in for nested columns which simply removes the padding on the column and fits the column width relative to its parent column container.

##Font Modernizer

*Not yet built out*

###To Modify:
`git clone git@github.com:dnordby/css-library.git`

`git checkout -b [name_of_your_new_branch]`

`npm install`

`webpack --watch --optimize-minimize`

Edit `src/scss` files. Sub directories can be added (in addition to `src/scss/global`), and sub files can be added to each subdirectory. Each new addition must be indluded as a new import in `src/scss/app.scss`. Webpack will autoprefix, process to CSS, and minimize the any included files in `src/scss/app.scss` and compile them to `css/vpv-modernizer.css`

####To create a merge request run:
* `git push origin [name_of_your_new_branch]`

* Your recently pushed branches may be listed at the top - click "Compare & pull request" to resolve any issues and submit.

* Assign the repo owner to the merge for review and approval. The master branch is protected, you will not be able to merge your own requests.
