/**
 * This will setup the initial files for basic web development.
 * Included files are index.html, styles.css, and script.js.
 * RUN: Execute this file upon placing in your desired repository.
 * MODES: MAKE, CLEAN, and RESET.
 */

const fs = require("fs");
const path = require('node:path');

var mode = "default";
if (process.argv.length > 2) {
    mode = process.argv[2];
}
const currPath = process.cwd();

function writeWebFiles() {
    fs.writeFileSync("index.html",
        '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<head>\n' +
        '<meta charset = "UTF-8"\n' +
        '<meta name = "viewport" content = "width=device-width, initial-scale=1.0">\n' +
        '<meta name = "format-detection" content = "telephone=no"/>\n\n' +
        '<!-- Preloaded font for potential issues across browsers -->\n\n' +
        '<link rel = "stylesheet" href = "styles.css"/>\n' +
        '<script src = "script.js"></script>\n' +
        '<title> Placeholder </title>\n' +
        '</head>\n' +
        '</html>\n');

    fs.writeFileSync("styles.css",
        '* {\n' +
        'box-sizing: border-box;\n' +
        'margin: 0;\n' +
        'padding: 0;\n' +
        '}\n')
}

try {
    if (mode == undefined || mode == "default" || mode == "make" || mode == "m" || mode == "-d") {
        fs.writeFileSync("index.html", "");
        fs.writeFileSync("styles.css", "");
        fs.writeFileSync("script.js", "");
        writeWebFiles();
        
        console.log("[SYSTEM]: The setup has been completed.");
    } else if (mode == "clean" || mode == "-c") {
        fs.writeFileSync("index.html", "");
        fs.writeFileSync("styles.css", "");
        fs.writeFileSync("script.js", "");

        console.log("[SYSTEM]: The setup has been cleaned.");
    } else if (mode == "reset" || mode == "-r") {
        const pathOne = currPath + "/index.html";
        const pathTwo = currPath + "/styles.css";
        const pathThree = currPath + "/script.js";

        fs.unlinkSync(pathOne);
        fs.unlinkSync(pathTwo);
        fs.unlinkSync(pathThree);

        console.log("[SYSTEM]: The setup has been reset.");
    } else {
        console.log("[SYSTEM]: Please enter a valid flag attribute.");
    }
    

} catch (e) {
    console.log("[SYSTEM]: There was an issue running setup.js");
    console.log(e);
}
