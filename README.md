# upx2px

upx to px in css

-   2upx => 1px
-   ./dist/styles/index.css => ./dist/styles/index.px.css

## install

```bash
npm install upx2px --save-dev
```

## help

```bash
Usage: index [options]

Options:
  -V, --version        output the version number
  -t, --target [path]  the target file dirname
  -o, --output [path]  the output file dirname
  -d, --dpr [value]    set base device pixel ratio (default: 2)
  -w, --watch          watch file
  -h, --help           output usage information

Examples:
  $ custom-help --help
  $ custom-help -h
```

## cli

```bash
$ upx2px --watch --target=./test/index.css --output=./test/index.px.css
```
