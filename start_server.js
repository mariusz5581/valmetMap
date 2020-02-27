const express = require("express");
const app = express();
const port = 80;
const fs = require("fs");

const folder_serving = true;

var indexFile = fs.readFileSync("./public/js/main.js", "utf8");

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`...listening on port ` + port.toString()));

main();

function main() {
    if (folder_serving) {
        app.use("/", express.static("public"));
    } else {
        app.get("/", (req, res) => {
            var ua = req.headers["user-agent"];
            console.log(ua);
            if (ua.includes("Mobile")) {
                res.send(indexFile);
            } else {
                //res.send('non mobile');
                //res.contentType("application/javascript");
                res.send(indexFile);
            }
            //console.log(req.header);
        });
        var folder = express.static("public");
        console.log(folder.toString());
    }
}