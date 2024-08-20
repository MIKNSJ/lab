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
        '<meta charset = "UTF-8"\n' +
        '<meta name = "viewport" content = "width=device-width, initial-scale=1.0">\n' +
        '<meta name = "format-detection" content = "telephone=no"/>\n\n' +
        '<!-- Preloaded font for potential issues across browsers -->');
}

try {
    if (mode == undefined || mode == "default" || mode == "make" || mode == "m" || mode == "-d") {
        fs.writeFileSync("index.html", "");
        fs.writeFileSync("styles.css", "");
        fs.writeFileSync("script.js", "");

        writeWebFiles();
    } else if (mode == "clean" || mode == "-c") {
        fs.writeFileSync("index.html", "");
        fs.writeFileSync("styles.css", "");
        fs.writeFileSync("script.js", "");
    } else if (mode == "reset" || mode == "-r") {
        const pathOne = currPath + "/index.html";
        const pathTwo = currPath + "/styles.css";
        const pathThree = currPath + "/script.js";

        fs.unlinkSync(pathOne);
        fs.unlinkSync(pathTwo);
        fs.unlinkSync(pathThree);
    } else {
        console.log("[SYSTEM]: Please enter a valid flag attribute.");
    }

} catch (e) {
    console.log("[SYSTEM]: There was an issue running setup.js");
    console.log(e);
}
