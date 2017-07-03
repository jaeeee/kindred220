var status = 0;
var now = "#r(입장불)#k#b";
var maps = 0;
var mob = new Array(1, 2, 3, 4, 5);
var mobr = Math.floor(Math.random() * mob.length);
var x = 0;
var y = 0;
function action(mode, type, selection) {
        if (cm.TimeCheck(1, 35)) {
        now = "(입장가능)";
    }
    if (status == 0) {
        cm.sendSimple("#e<보스컨텐츠 : 미스틱 필드>#n\r\n요즘 각 지역에 사악한 기운으로 둘러싸인 안개와함께 강력한 보스몬스터들이 등장한다고 합니다. 우리는 그 공간을 미스틱 필드라고 부르지요. 미스틱 필드는 특정시간대에만 잠시 나타났다가 다시 사라지니 필드오픈시간을 확인해주시고 입장해주시기 바랍니다.#b\r\n#L0#미스틱 필드에 입장하고 싶습니다. " + now + "#l\r\n#L1#미스틱 보스의 전리품을 교환하고 싶습니다.#l");
        status++;
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.TimeCheck(1, 35)) {
                if (mob[mobr] == 1) { // 미스틱자쿰
                    maps = 931050800;
                    x = 3080;
                    y = 575;
                    cm.warp(maps);
	    
                    cm.spawnMob(9300563, x, y);
                    cm.spawnMob(9300566, x, y);
                    cm.spawnMob(9300567, x, y);
                    cm.spawnMob(9300568, x, y);
                    cm.spawnMob(9300569, x, y);
                    cm.spawnMob(9300570, x, y);
                    cm.spawnMob(9300571, x, y);
                    cm.spawnMob(9300572, x, y);
                    cm.spawnMob(9300573, x, y);
                } else if (mob[mobr] == 2) { // 미스틱반레온
                    maps = 931050800;
                    x = 3080;
                    y = 575;
                    cm.warp(maps);
	    
                    cm.spawnMob(9300594, x, y);
                } else if (mob[mobr] == 3) { // 미스틱 아카이럼
                    maps = 931050810;
                    x = -2100;
                    y = 29;
                    cm.warp(maps);
	    
                    cm.spawnMob(9300608, x, y);
                } else if (mob[mobr] == 4) { // 미스틱힐라
                    maps = 931050820;
                    x = 20;
                    y = 392;
                    cm.warp(maps);
	    
                    cm.spawnMob(9300600, x, y);
                }
		cm.sendOk("미스틱 보스를 잡아주세요 !!");
            } else {
                cm.sendOk("미스틱 필드는 매일 #r오후 6시부터 8시#k 사이에만 나타났다가 다시 안개속으로 사라진다고 합니다. 시간을 확인하시고 다시 찾아와주시기 바랍니다.");
                cm.dispose();
            }
        } else if (selection == 1) {
	cm.warp(980001003);
	cm.sendOk("#e< 아이템 교환 : 미스틱 필드 >#n\r\n\r\n문 교수와 대화를 통해 아이템을 교환 하시고 나오실 때는\r\n@헤네시스를 하시면 됩니다.");
                cm.dispose();
        }
        cm.dispose();
    }
}
