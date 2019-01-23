const fs = require('fs');
const path = require('path');
const del = require('../node_modules/del');
const webBuildTool = require('@code-iai/web-build-tool');

const TEMP = path.join('test', 'temp');
const FILEPATH_ORIGINAL = path.join('layout-original-scss', 'layout_original.scss');
const RESULT_FILEPATH_ORIGINAL = path.join(TEMP, 'layout_original.css');
const FILEPATH_NEW = 'layout.scss';
const RESULT_FILEPATH_NEW = path.join(TEMP, 'layout.css');

beforeEach(async () => {
    fs.mkdirSync(TEMP);
    await webBuildTool.scss.build({sourceFilePath: FILEPATH_ORIGINAL, resultFilePath: RESULT_FILEPATH_ORIGINAL, minify:true});
    await webBuildTool.scss.build({sourceFilePath: FILEPATH_NEW, resultFilePath: RESULT_FILEPATH_NEW, minify:true});
});

afterEach(() => {
    del.sync([TEMP], {force: true});
});

test('Should build valid layout.css', () => {
    const layout_original_text = fs.readFileSync(RESULT_FILEPATH_ORIGINAL, 'utf8');
    const layout_text = fs.readFileSync(RESULT_FILEPATH_NEW, 'utf8');
    expect(layout_original_text).toEqual(layout_text);
});


