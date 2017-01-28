#VPV CSS Modernizer

###To Use:
`git clone git@github.com:dnordby/css-library.git`

Pull out minified `css/vpv-base.css` and add it to your assets path. Include in your `<head>` tag:

`<link rel="stylesheet" type="text/css" href="[your-path-to-file]/vpv-base.scss">`

###To Fork and Edit
`git clone git@github.com:dnordby/css-library.git`

`npm install`

`webpack --watch --optimize-minimize`

Edit `src/scss` files. Sub directories can be added (in addition to `src/scss/global`), and sub files can be added to each subdirectory. Each new addition must be indluded as a new import in `src/scss/app.scss`. Webpack will autoprefix, process to CSS, and minimize the any included files in `src/scss/app.scss` and compile them to `css/vpv-base.css`