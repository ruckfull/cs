test("empty", function () {
    frameHtml({
        src:'/test/selector/empty/empty.html',
        ontest:function (w, f) {
            equal('rgba(0, 0, 0, 0)',  w.$('div').eq(0).css('background-color'));
            equal('rgba(0, 0, 0, 0)', w.$('div').eq(1).css('background-color'));
            equal('rgb(255, 255, 0)',  w.$('div').eq(2).css('background-color'));
            this.finish();
        }
    });
});
