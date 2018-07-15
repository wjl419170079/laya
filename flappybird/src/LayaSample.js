(function()
{
    var Stage = Laya.Stage;
    var WebGL = Laya.WebGL;
    var Sprite = Laya.Sprite;
    var resPath = "../res/";
    (function()
    {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(320, 480, WebGL);

        Laya.stage.alignV = Stage.ALIGN_TOP;
        Laya.stage.alignH = Stage.ALIGN_LEFT;

        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        addBg()
    })();

    function addBg()
    {
        var bg = new Sprite();
        Laya.stage.addChild(bg);
        bg.loadImage(resPath + "bg.png");
        bg.size(320, 480);
        // bg.scale(0.5, 0.5);
        trace("bounds:" + bg.getBounds());
    }

})();

