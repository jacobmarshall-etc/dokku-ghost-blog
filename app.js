var path = require('path'),
    fs = require('fs-extra'),

    ghost = require('ghost'),
    app,

    contentPath = path.join(__dirname, 'content'),
    ghostContentPath = path.join(__dirname, 'node_modules/ghost/content'),
    configFile = path.join(__dirname, 'config.js'),

    contentFiles = fs.readdirSync(contentPath);

if (contentFiles.length === 1 && contentFiles[0] === '.gitkeep') {
    console.log('Copying the default "content" folder from ghost.');

    fs.copySync(ghostContentPath, contentPath);
}

app = ghost({
    config: configFile,
    paths: {
        contentPath: contentPath
    }
});

app.then(function (server) {
    server.start();
});
