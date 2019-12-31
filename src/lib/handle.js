const fs = require('fs');
const nodeWatch = require('node-watch');

function fileReg({ dpr, target, output }) {
    const data = fs.readFileSync(target);
    const newData = data.toString().replace(/([0-9]*)upx/g, ($1) => {
        return Number($1) / dpr + 'px';
    });

    fs.writeFileSync(output, newData);

    console.log('update ', output);
}

module.exports = function handle(config) {
    const { watch, target } = config;

    if (watch) {
        console.log('upx2px start watch file...');
        nodeWatch(target, { recursive: true }, () => fileReg(config));
    } else {
        fileReg(config);
    }
};
