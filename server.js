/*
 *  server.js for phototype_phaserdemo ( https://github.com/dustinpfister/prototype_phaserdemo )
 *
 *   This just provides a simple static server for the project.
 *
 */

var http = require("http"),
fs = require("fs"),
port = process.argv[2] || 8888;

http.createServer(function (req, res) {

    var filename = req.url != '/' ? '.' + req.url : 'index.html';

    fs.readFile(filename, "binary", function (err, file) {
        if (err) {

            console.log('we have an error:');
            console.log(err);

            res.writeHead(500, {
                "Content-Type" : "text/plain"
            });
            res.write(err + "\n");
            res.end();
            return;
        }

        console.log('request: ');
        console.log(req.url);

        res.writeHead(200);
        res.write(file, "binary");
        res.end();
    });

}).listen(parseInt(port, 10));

console.log('server.js for prototype_phaserdemo: ');
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
