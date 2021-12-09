const xml2js = require('xml2js');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

const parser = new xml2js.Parser();
const includes = [
    'Account',
    'Common',
    'Countries',
    'Enums',
    'ProDomain',
    'Routing',
    'Sitemap',
];

function transform(resxFile, localesDir) {
    const info = filenameInfo(resxFile);
    const keyValues = {};

    fs.readFile(resxFile, {
        encoding: 'utf-8',
    }, (readErr, data) => {
        if (readErr) {
            throw readErr;
        }
        console.info('Transforming: ', resxFile);

        parser.parseString(data, (parseErr, result) => {
            if (parseErr) {
                throw parseErr;
            }
            if (result.root.data) {
                result.root.data.forEach((item) => {
                    const key = item.$.name;
                    const val = item.value && item.value.length === 1 ? item.value[0] : item.value;

                    keyValues[key] = val.replace(/{\d}/g, '{$&}') || '';
                });
            }

            const filepath = `${localesDir}/${info.language}/${info.module}.json`;
            mkdirp(path.dirname(filepath), function (err) {
                if (err) {
                    return cb(err);
                }

                fs.writeFile(filepath, JSON.stringify(keyValues, null, 2), {
                    encoding: 'utf-8',
                }, (writeErr) => {
                    if (writeErr) {
                        throw writeErr;
                    }
                    console.info('Done!');
                });
            });
        });
    });
}

function filenameInfo(filename) {
    const filenameBase = path.basename(filename, path.extname(filename));
    const arr = filenameBase.split('.');
    return {
        language: arr[1] || 'en',
        module: arr[0],
    };
}

const resourcesDir = '../../Resources';
fs.readdir(resourcesDir, (err, files) => {
    if (err) {
        throw err;
    }
    files.forEach((file) => {
        if (!includes || !includes.length || includes.some(include => file.toLowerCase().startsWith(`${include.toLowerCase()}.`))) {
            if (file.endsWith('.resx')) {
                transform(`${resourcesDir}/${file}`, './src/locales');
            }
        }
    });
});