const webBuildTool = require('@code-iai/web-build-tool');

webBuildTool.scss.build({sourceFilePath:'layout.scss', resultFilePath:'layout.css', minify:true});