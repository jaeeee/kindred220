/*
�ýý�ũ��Ʈ �Ķ�������
*/

var status = 0;
var select = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var chat = "#b��ȭ�¶���#k�� ���Ű��� ȯ���մϴ�\r\n";
            chat += "\r\n#b#L1#�̵��ϰڽ��ϴ�#k#l";                   
            cm.sendSimple(chat);
        } else if (status == 1) {
                var warpmain = "������� #b��#k�� ������ �������ֽø� �˴ϴ�\r\n";
                warpmain += "";
                warpmain += "\r\n#L5# #b����ͷ� �̵��� �ϰڽ��ϴ�.#k";
                warpmain += "\r\n#L4##fUI/UIToolTip/Item/Equip/Star/Star# #b��Ծ������ �̵��ϰڽ��ϴ�";
                warpmain += "\r\n#L6##fUI/UIToolTip/Item/Equip/Star/Star# #b���������� �̵��ϰڽ��ϴ�";
                cm.sendSimple(warpmain);
        } else if (status == 2) {


            if (selection == 4) {
                var vlig = "#fn�ü�ü##e��Ծ�� ���� �̵��ص帮�ڽ��ϴ�.#k\r\n";
                vlig += "\r\n#L931000500#��Ծ�� �̵�";
                cm.sendSimple(vlig);

            } else if (selection == 5) {
                var hunt = "#e[WARP]#n #d���Ͻô� ��#k�� �������ּ���.\r\n";
 hunt += "#fn������� ExtraBold##b#L100010000#(Lv.10) ��׽ý� - ��׽ý� ���ʾ��\r\n"
 hunt += "#L410000050#(Lv.25) ����� - ���ζ��̰��1\r\n"
 hunt += "#L101073000#(Lv.35) ������� �� - ���� �����\r\n"
 hunt += "#L120041600#(Lv.40) ����ġ - ���� �ĵ�\r\n"
 hunt += "#L400010400#(Lv.40) ���׿� �������� - ������ ������ ��\r\n"
 hunt += "#L141010200#(Lv.51) ������ ���� - ȭ�� ��� ����\r\n"
 hunt += "#L103030100#(Lv.50) ������ - �߻��Ǿ��� ��\r\n"
 hunt += "#L141030200#(Lv.53) ���������� - �������������� 2\r\n"
 hunt += "#L105010300#(Lv.60) �����ǿ�� - ���̱� 1\r\n"
 hunt += "#L200010300#(Lv.71) ��ī�̷ε� - �ϴð��1\r\n"
 hunt += "#L211040001#(Lv.79) ���罺Ʈ��Ʈ - �հ��� �ֳ�����\r\n";
 hunt += "#L260020600#(Lv.90) ���·ε� - ��������2\r\n"
 hunt += "#L261020400#(Lv.95) ��ī��� ������ - ������ C-2 ����\r\n"
 hunt += "#L220020600#(Lv.113) ���긮���� - �峭������<����>\r\n"
 hunt += "#L223010200#(Lv.120) ��Ÿ��ƽ �׸���ũ - �ͽ�Ʈ�� �����̼�\r\n"
 hunt += "#L251010402#(Lv.130) �������� - ������ ������ �ұ�2\r\n"
 hunt += "#L240040510#(Lv.150) �̳����� - ���� ���� ����\r\n"
 hunt += "#L105200607#(Lv.170) ��Ÿ�񽺼������� - ī���� ���\r\n"
 hunt += "#L271030102#(Lv.170) ���ܿ�� - ��2������\r\n"
 hunt += "#L271030310#(Lv.173) ���� ��� - �����1\r\n"
 hunt += "#L271030400#(Lv.173) ���� ��� - ���� �� 4����\r\n"
 hunt += "#L241000213#(Lv.185) ŷ���ε� - ���۵Ǵ� ����� ��3\r\n"
 hunt += "#e#r#L241020226#(Lv.186) ŷ���ε� - Ÿ���� ������ ��3#n#k\r\n"
 hunt += "#b#L241000202#(Lv.190) ŷ���ε� - ������� ����ǽ�4#k\r\n"
 hunt += "#b#L273000000#(Lv.190) Ȳȥ�� �丮�� - Ȳȥ�� �丮��#k\r\n"
 hunt += "#b#L273050000#(Lv.197) Ȳȥ�� �丮�� - ���ֹε��� �ǳ�ó#k\r\n"
 hunt += "#e#r#L273060300#(Lv.198) Ȳȥ�� �丮�� - ������� ������#n#k\r\n"
                cm.sendSimple(hunt);

            } else if (selection == 6) {
                var boss = "";
                     boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L230040410# �ٴټ� ������ �� �Ǿƴ���\r\n#l"
                      boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8510000# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"   
                    boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/2# #k\#L280030100# �ɿ��� ���� ���� ī���� ����\r\n#l"
                      boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8800000# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
               boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/3# #k\#L240060200# ���� ���ֶ� �Ҹ��� ī���� ȥ����"
                     boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8810018# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "k\r\n #fUI/UIWindow2.img/NewPyramid/Number/4# #k\#L211070100# ������������ ������ �� ����"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8840000# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/5# #k\#L262031300# �ƽ����� ������ �ٽ����� ����"
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8870000# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]l\r\n"                  
                boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/6# #k\#L272020200# �ð��� Ż������ ��ī�̷�"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8860000# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/7# #k\#L271040100# �̷��� ���� �ñ׳ʽ�"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8850011# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/8# #k\#L401060100# ������ �� �ű׳ʽ�"
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8880000# [���̵� :��#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/9# #k\#L270050100# �̷��� ������ ������ ī���� ��ũ��"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8820001# [���̵� :��#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
                cm.sendSimple(boss);

                    } else if (selection == 8) {
                var boss = "";
                   boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L105200529# �Ǵٸ� �ð��� �ı��� ī���� �ݹ�"
                   boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8910100# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                   boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/2# #k\#L105200710# �μ��� ���� �� �г� ī���� ���� ��"
                    boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8920100# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                  boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/3# #k\#L105200610# �ĸ��� ���� ī���� �ǿ���"
                 boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8900100# [���̵� : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
               boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/4# #k\#L105200810# ������ ������ ī���� ����"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8930100# [���̵� :��#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
               cm.sendSimple(boss);   

                    } else if (selection == 7) {
                var boss = "";
               //boss += "\r\n#L106021400##b���� ŷ �̵�";                   
                boss += "\r\n#L220080001##b��Ǯ������ �̵�";
                boss += "\r\n#L925120100##b��ٳ� �̵�"; 
                boss += "\r\n#L931050430##b������ �����ź �̵�";
                boss += "\r\n#L931050431##b������ ���� �̵�"; 
               boss += "\r\n#L931050432##b������ �������� �̵�"
               cm.sendSimple(boss);   
        

         
            }  
            } else if (status == 3) {
 var s = selection;
 if(s >=100000000) {
 cm.dispose();
 cm.warp(s,0);
}

            }	
	   	   
      }
}
    
    