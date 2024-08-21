/**
 * This will setup the initial files for basic web development.
 * Included files are index.html, styles.css, and script.js.
 * RUN: Execute this file upon placing in your desired repository.
 * MODES: MAKE, CLEAN, and RESET.
 * MAKE: node setup.js
 * CLEAN: node setup.js -c
 * RESET: node setup.js -r
 */

// define js libaries
const fs = require("fs");
const path = require('node:path');

// check user-inputted flags
var mode = "make";
if (process.argv.length > 2) {
    mode = process.argv[2];
}

// setup different modes
const currPath = process.cwd();
const defaultMode = [undefined, "make", "-m"];
const cleanMode = ["clean", "-c"];
const resetMode = ["reset", "-r", "-d"];

// write to files
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

// main setup
try {
    if (defaultMode.includes(mode)) {
        fs.writeFileSync("index.html", "");
        fs.writeFileSync("styles.css", "");
        fs.writeFileSync("script.js", "");
        writeWebFiles();
        
        console.log("[SYSTEM]: The setup has been completed.");
    } else if (cleanMode.includes(mode)) {
        fs.writeFileSync("index.html", "");
        fs.writeFileSync("styles.css", "");
        fs.writeFileSync("script.js", "");

        console.log("[SYSTEM]: The setup has been cleaned.");
    } else if (resetMode.includes(mode)) {
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
    console.log("[SYSTEM]: There was an issue running the setup.");
    console.log(e);
}
