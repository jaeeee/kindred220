importPackage(Packages.java.awt);
importPackage(Packages.packet.creators);
var status = -1;

var strings = Array("#fUI/UIWindow2.img/MobGage/Mob/8800000# �븻 ����", "#fUI/UIWindow2.img/MobGage/Mob/8800000# #eī���� ����#n", "#fUI/UIWindow2.img/MobGage/Mob/8810018# �븻 ȥ����", "#fUI/UIWindow2.img/MobGage/Mob/8810018# #eī���� ȥ����#n", "#fUI/UIWindow2.img/MobGage/Mob/8870000# �븻 ����", "#fUI/UIWindow2.img/MobGage/Mob/8870000# #e�ϵ� ����#n", "#fUI/UIWindow2.img/MobGage/Mob/8900100# �븻 �ǿ���", "#fUI/UIWindow2.img/MobGage/Mob/8900100# #eī���� �ǿ���#n", "#fUI/UIWindow2.img/MobGage/Mob/8910100# �븻 �ݹ�", "#fUI/UIWindow2.img/MobGage/Mob/8910100# #eī���� �ݹ�#n", "#fUI/UIWindow2.img/MobGage/Mob/8920100# �븻 ���� ��", "#fUI/UIWindow2.img/MobGage/Mob/8920100# #eī���� ���� ��#n", "#fUI/UIWindow2.img/MobGage/Mob/8930100# �븻 ����", "#fUI/UIWindow2.img/MobGage/Mob/8930100# #eī���� ����#n", "#fUI/UIWindow2.img/MobGage/Mob/8840000# ���� �� ����", "#fUI/UIWindow2.img/MobGage/Mob/8840000# #e�븻 �� ����#n", "#fUI/UIWindow2.img/MobGage/Mob/8860000# ���� ��ī�̷�", "#fUI/UIWindow2.img/MobGage/Mob/8860000# #e�븻 ��ī�̷�#n", "#fUI/UIWindow2.img/MobGage/Mob/8880000# ���� �ű׳ʽ�", "#fUI/UIWindow2.img/MobGage/Mob/8880000# �븻 �ű׳ʽ�", "#fUI/UIWindow2.img/MobGage/Mob/8880000# #e�ϵ� �ű׳ʽ�#n", "#fUI/UIWindow2.img/MobGage/Mob/8820001# �븻 ��ũ��", "#fUI/UIWindow2.img/MobGage/Mob/8820001# #eī���� ��ũ��#n", "#fUI/UIWindow2.img/MobGage/Mob/8850011# #e�ñ׳ʽ� ����#n");
var lev = Array(100, 100, 120, 130, 120, 170, 125, 180, 125, 180, 125, 180, 125, 180, 120, 120, 140, 140, 115, 155, 175, 180, 180, 170);
var maps = Array(280030100, 280030000, 240060200, 240060201, 262030300, 262031300, 105200210, 105200610, 0, 0, 105200310, 105200710, 105200410, 105200810, 211070100, 211070200, 272020200, 272020210, 401060100, 401060200, 401060300, 270050100, 270051100, 271040100);
var bosscode = Array(0, 0, 0, 0, 8870000, 8870100, 8900100, 8900000, 8910100, 8910000, 8920100, 8920000, 8930100, 8930000, 8840007, 8840000, 8860007, 8860000, 8880010, 8880002, 8880000, 0, 0, 8850011);
var spawnpos = Array(new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(222, 196), new Point(222, 196), new Point(709, 551), new Point(709, 551), new Point(0, 0), new Point(0, 0), new Point(99, 135), new Point(99, 135), new Point(-186, 443), new Point(-186, 443), new Point(74, -181), new Point(74, -181), new Point(340, -181), new Point(340, -181), new Point(2870, -1458), new Point(2870, -1458), new Point(2870, -1458), new Point(0, 0), new Point(0, 0), new Point(-29, 115));
var deathCount = Array(0, 0, 0, 0, 0, 12, 10005, 10005, 10005, 10005, 10005, 10005, 10005, 10005, 0, 0, 15, 15, 10, 20, 40, 0, 0, 0);
var time = Array(3000, 5400, 5400, 8100, 1800, 2700, 900, 900, 900, 900, 900, 900, 900, 900, 3600, 5400, 1800, 1800, 1800, 1800, 1800, 3600, 9000, 3000);
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        var text = "#e#r � �������Ϳ� ����Ͻðڽ��ϱ�?#n#k\r\n#e";
        for (var i = 0; i < strings.length; i++) {
            text += "\r\n#L" + i + "##b[Lv." + lev[i] + "]#k��" + strings[i] + "#l";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        cm.getPlayer().setSel(selection);
        cm.sendYesNo("#fUI/UIWindowBT.img/MonsterBattle/start/1#\r\n#e#r " + strings[selection] + "#k #b��(��) ����Ͻðڽ��ϱ�?#k#n ");
    } else if (status == 2) {
            if (cm.getPlayer().getParty() != null) {
                if (cm.getPlayerCount(maps[cm.getPlayer().sel()]) == 0) {
                    cm.resetMap(maps[cm.getPlayer().sel()]);
                    cm.timeMoveMap(100000000, maps[cm.getPlayer().sel()], time[cm.getPlayer().sel()]);
                    if (bosscode[cm.getPlayer().sel()] == 8930000) {
                        cm.spawnMob(bosscode[cm.getPlayer().sel()] + 1, spawnpos[cm.getPlayer().sel()].x, spawnpos[cm.getPlayer().sel()].y);
                    }
                    cm.spawnMob(bosscode[cm.getPlayer().sel()], spawnpos[cm.getPlayer().sel()].x, spawnpos[cm.getPlayer().sel()].y);
                    if (deathCount[cm.getPlayer().sel()] > 0) {
                        if (deathCount[cm.getPlayer().sel()] > 10000) {
                            cm.getPlayer().setDeathCount(deathCount[cm.getPlayer().sel()] - 10000);
                            cm.getPlayer().send(MainPacketCreator.getDeathCount(deathCount[cm.getPlayer().sel()] - 10000));
                        } else {
                            cm.getPlayer().getParty().setDeathCount(deathCount[cm.getPlayer().sel()]);
                            cm.getPlayer().send(MainPacketCreator.getDeathCount(deathCount[cm.getPlayer().sel()]));
                        }
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("�ٸ� ������ �̹� ������ �����Դϴ�. ����� �ٽ� �������ּ���.");
                    cm.dispose();
                }
            } else {
                cm.sendOk("��Ƽ�� ������ �� ������ �ּ���.");
                cm.dispose();
            }
    }
}


