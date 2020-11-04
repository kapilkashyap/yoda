/**
 * A basic HTTP server made using NodeJS which is light weight, has a small footprint yet is powerful. Reminds me of Yoda! :P
 * 
 * author: kapil kashyap
 */
const config = require('./config.json');
const http = require('http');
const fs = require('fs').promises;
const url = require('url');

if (config && config.host && config.port) {
    const getContentType = (urlPath) => {
        if (urlPath.indexOf('.css') !== -1) {
            return 'text/css';
        }
        if (config.imageTypeExtensions.find(x => urlPath.indexOf(x) !== -1)) {
            return 'image';
        }
        return 'text/html';
    };

    const requestListener = (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const contentType = getContentType(parsedUrl.pathname);
        const baseUrl = __dirname + config.base;

        if (parsedUrl.pathname === '/') {
            fs.readFile(baseUrl + '/artifacts/home.html').then((contents) => {
                res.setHeader('Content-Type', contentType);
                res.writeHead(200);
                res.end(contents);
            });
        } else {
            fs.readFile(baseUrl + parsedUrl.pathname).then((contents) => {
                res.setHeader('Content-Type', contentType);
                res.writeHead(200);
                res.end(contents);
            }).catch(err => {
                const errorMsgCntrStyle = `
                    display: flex;
                    margin-top: 20px;
                    justify-content: center;
                    flex-direction: column;
                `;
                const errorMsgHeaderStyle = `
                    display: flex;    
                    background-color: #757575;
                    height: 40px;
                    font-size: x-large;
                    color: #ffffff;
                    align-items: center;
                    margin: 0 0 10px 0;
                    padding: 0 5px;
                `;
                const errorMsgStyle = `
                    padding: 0 5px;
                `;
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(500);
                res.end(`
                    <div style="${errorMsgCntrStyle}">
                        <div style="${errorMsgHeaderStyle}">The greatest teacher, failure is.</div>
                        <div style="${errorMsgStyle}">${err}</div>
                    </div>
                `);
                return;
            })
        }
    }

    const server = http.createServer(requestListener);
    server.listen(config.port, config.host, () => {
        console.log(`Server is up and running on http://${config.host}:${config.port}`);
    });
} else {
    console.log(`Server could not be started. Please make sure your configuration file is correct.`);
}
