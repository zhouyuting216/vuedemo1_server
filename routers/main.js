// const KoaRouter = require('koa-router');
// const router = new KoaRouter();
const router = require('koa-router')();
/**
 * 搜索
 */
router.get('/search',async ctx=>{
    // let chooseTagIds = ctx.request.query.chooseTagIds||[];
    // let input_text = ctx.request.query.input_text.trim()||'';
    // let currentUrl = ctx.request.query.currentUrl||'';
    // let page = Number(ctx.query.page) || 1;
    // let numOfPrePage = ctx.query.numOfPrePage || 7;
    // let offset = (page - 1) * numOfPrePage;
    //
    //
    // let pages=Math.ceil(rs.count/numOfPrePage) || 1;

    ctx.body={
        questions:'hell',
    }
});

module.exports = router;