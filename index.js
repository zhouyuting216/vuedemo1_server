const Koa = require('koa');
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const homeRouter = require('./routers/main');
const app = new Koa();
const https = require('https');

router.get('/search',async ctx=>{
    let input_text = ctx.request.query && ctx.request.query.input_text && ctx.request.query.input_text.trim()||'';
    let options=[{"id":0,"name":"0-91"},{"id":1,"name":"1-91"},{"id":2,"name":"2-34"},{"id":3,"name":"3-50"},{"id":4,"name":"4-48"},{"id":5,"name":"5-48"},{"id":6,"name":"6-48"},{"id":7,"name":"7-45"},{"id":8,"name":"8-48"},{"id":9,"name":"9-54"},{"id":10,"name":"10-45"},{"id":11,"name":"11-48"},{"id":12,"name":"12-53"},{"id":13,"name":"13-34"},{"id":14,"name":"14-44"},{"id":15,"name":"15-49"},{"id":16,"name":"16-49"},{"id":17,"name":"17-54"},{"id":18,"name":"18-93"},{"id":19,"name":"19-44"},{"id":20,"name":"20-91"},{"id":21,"name":"21-34"},{"id":22,"name":"22-50"},{"id":23,"name":"23-48"},{"id":24,"name":"24-48"},{"id":25,"name":"25-48"},{"id":26,"name":"26-45"},{"id":27,"name":"27-48"},{"id":28,"name":"28-54"},{"id":29,"name":"29-45"},{"id":30,"name":"30-48"},{"id":31,"name":"31-54"},{"id":32,"name":"32-34"},{"id":33,"name":"33-44"},{"id":34,"name":"34-49"},{"id":35,"name":"35-50"},{"id":36,"name":"36-57"},{"id":37,"name":"37-93"},{"id":38,"name":"38-44"},{"id":39,"name":"39-91"},{"id":40,"name":"40-34"},{"id":41,"name":"41-50"},{"id":42,"name":"42-48"},{"id":43,"name":"43-48"},{"id":44,"name":"44-48"},{"id":45,"name":"45-45"},{"id":46,"name":"46-48"},{"id":47,"name":"47-54"},{"id":48,"name":"48-45"},{"id":49,"name":"49-48"}];
    options = options.filter(item=>{
        return item.name.indexOf(input_text)>-1;
    });
    ctx.body={
        options,
    }
});

// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
// app.keys = ['vuedemo1'];
//
// router.use('/', homeRouter.routes());
//
app.use(router.routes());
// app.use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('服务器启动成功。');
});