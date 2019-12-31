#! /usr/bin/env node

const program = require('commander');
const packageData = require('../package.json');
const upx2px = require('../lib/handle');

program
    .version(packageData.version)
    .option('-t, --target [path]', 'the target file dirname')
    .option('-o, --output [path]', 'the output file dirname')
    .option('-d, --dpr [value]', 'set base device pixel ratio (default: 2)')
    .option('-w, --watch', 'watch file');

program.on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('  $ custom-help --help');
    console.log('  $ custom-help -h');
});

program.parse(process.argv);

const config = {
    output: program.output,
    target: program.target,
    dpr: program.dpr || 2,
    watch: program.watch || false
};

upx2px(config);
