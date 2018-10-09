const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    let server = express();

    /***
     * 使用后端重定向会使新页面的Link失效
     * antd按需加载，在跳转时第一次css失效，现在在_app.js直接引入全部css
     */
    /* server.get('/d/:id', (req, res) => {
         let actualPage = '/detail';
         let queryParams = {
             title: req.params.id
         };
         app.render(req, res, actualPage, queryParams);
     });*/

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    });
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
});