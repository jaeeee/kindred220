


/*

	濃嬢 社什  苫税 什滴験闘 脊艦陥. (薦拙 : 爽滴鷺窟) - 舘庚殖杷獣 切疑薦拙 什滴験闘研 搭背 幻級嬢遭 什滴験闘 脊艦陥.

	馬礁 拭 税背 幻級嬢 然柔艦陥.

	殖杷獣焼戚巨 : 9000025

	殖杷獣 戚硯 : 馬昔綜

	殖杷獣亜 赤澗 己 : 伯革獣什 : 伯革獣什 栽楕情幾 (100010000)

	殖杷獣 竺誤 : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendOk("せせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせせ");
        cm.dispose();
        return;
    }
}
