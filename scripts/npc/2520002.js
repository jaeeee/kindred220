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
            var chat = "#e �ȳ��ϼ��� �ñ׳ʽ����մϴ�. ȥ���ӿ� �����մ� ���Ҵ��� �����ּ��� ...#n\r\n";
            chat += "\r\n#L1#�� �˰ٽ��ϴ�.#l";                   
            cm.sendSimple(chat);
        } else if (status == 1) {
                var warpmain = "#e�� ������ ���� �������� ���� ������ ���Ҵ��� ȥ���ӿ� �����վ��.. ���Ҵ��� �����ֽǰ���?#n\r\n";
                warpmain += "";
                warpmain += "\r\n#L4##b�� �˰ٽ��ϴ�.";
                cm.sendSimple(warpmain);
        } else if (status == 2) {


            if (selection == 4) {
                var vlig = "#e ���ҴԿ��� �� ������ �� �����ּ���#v 4032272##n\r\n";
                vlig += "\r\n#L304070200#����Ʈ�� �����ϰڽ��ϴ�";
               cm.gainItem(4032272,1);
               cm.sendSimple(vlig);
            } else if (selection == 5) {
                var hunt = "��� ����ͷ� �̵��Ͻǰǰ���?#b\r\n";
 hunt += "#L100010000#(Lv.#Cgray##k10) �� #r��׽ý�  �� #k �� #r��׽ý� ���ʾ��#k\r\n"
 hunt += "#L102020000#(Lv.#Cgray##k20) �� #b�丮�¡� ��  #k �� #b�丮�� ���ʷ�#k\r\n"
 hunt += "#L410000050#(Lv.25)   �� #r�������  #k �� #b���ζ��̰��1#k\r\n"
 hunt += "#L101070010#(Lv.30)   �� #r������ȣ��  #k �� #r�ѿ������� ��#k\r\n"
 hunt += "#L101073000#(Lv.#Cgray##k35) �� #b������� �硡  #k �� #b���� �����#k\r\n"
 hunt += "#L120041600#(Lv.#Cgray##k40) �� #b����ġ ������  #k �� #b���� �ĵ�#k\r\n"
 hunt += "#L400010400#(Lv.40)   �� #r���׿� ����������  #k �� #r������ ������ ��#k\r\n"
 hunt += "#L141010200#(Lv.#Cgray##k51) �� #b������ ��������  #k �� #bȭ�� ��� ����#k\r\n"
 hunt += "#L103030100#(Lv.50)   �� #r������#k    ��    #g�߻��Ǿ��� ��#k\r\n"
 hunt += "#L141030200#(Lv.53)   �� #r������������  #k �� #r�������������� 2#k\r\n"
 hunt += "#L105010300#(Lv.60)  �� #r�����ǿ��    #k ��   #r���̱� 1#k\r\n"
 hunt += "#L102040300#(Lv.#Cgray##k62) �� #r�����߱���������#k �� #r�߱� �ߴ�����#k\r\n"
 hunt += "#L952020000#(Lv.70)   �� #r����������  #k �� #r1�ܰ� ����#k\r\n"
 hunt += "#L200010300#(Lv.#Cgray##k71) �� #r��ī�̷ε� ����  #k �� #r�ϴð��1#k\r\n"
 hunt += "#L211040001#(Lv.#Cgray##k79) �� #b���罺Ʈ��Ʈ����#k �� #b�հ��� �ֳ�����#k\r\n";
 hunt += "#L230020000#(Lv.79)   �� #r����Ʒε�#k   ��   #���ʹٴ� ������#k\r\n"
 hunt += "#L310050700#(Lv.82)   �� #r�������ꡡ  #k  ��  #r����3#k\r\n"
 hunt += "#L953000500#(Lv.85)   �� #r����#k    ��   #r6�ܰ� :�䰡2#k\r\n"
 hunt += "#L260020600#(Lv.#Cgray##k90) �� #r���·ε� ������  #k �� #r��������2#k\r\n"
 hunt += "#L261020400#(Lv.#Cgray##k95) �� #r��ī��� ������  #k �� #r������ C-2 ����#k\r\n"
 hunt += "#L300010200#(Lv.98)   �� #r���� ��#k   ��  #r�̳����� ���ʽ�2#k\r\n"
 hunt += "#L302050302#(Lv.100)   �� #r��ǳ��ġ�½�#k  �� #b�ϾḶ������ ����3#k\r\n"
 hunt += "#L240011000#(Lv.103) �� #b�̳�������������#k �� #b������ ���� ��#k\r\n"
 hunt += "#L401050200#(Lv.104)   �� #r�����Ǽ�ä1���κ� #k ��   #r�����Ǽ�ä#k\r\n"
 hunt += "#L304060200#(Lv.110)   �� #r�����ǿ���#k   �� #g������Żȯ��2#k\r\n"
 hunt += "#L220010500#(Lv.112) �� #b���긮���� ��  #k �� #b�׶�Ȧ#k\r\n"
 hunt += "#L220020600#(Lv.113) �� #b���긮���� ��  #k �� #b�峭������<����>#k\r\n"
 hunt += "#L921160300#(Lv.120)  �� #r���罺Ʈ��Ʈ#k �� #b��ο�ž2#k\r\n"
 hunt += "#L223010200#(Lv.120)  �� #r��Ÿ��ƽ �׸���ũ#k �� #b�ͽ�Ʈ�� �����̼�#k\r\n"
 hunt += "#L250020000#(Lv.126) �� #b������� ������ #k �� #b�ʱ� ������#k\r\n"
 hunt += "#L251010402#(Lv.130) �� #r�������� ����  #k �� #r������ ������ �ұ�2#k\r\n"
 hunt += "#L240040400#(Lv.134) �� #b�̳�����������#k �� #b���̹��� ����#k\r\n"
 hunt += "#L270010500#(Lv.136) �� #bŸ�ӷε� ����  #k �� #b�߾��� ��5#k\r\n"
 hunt += "#L240040510#(Lv.150) �� #r�̳����� ������ #k �� #r���� ���� ����#k\r\n"
 hunt += "#L271010000#(Lv.164) �� #b�ı��� ��׽ý�  #k �� #b�ı��� ��׽ý�#k\r\n"
 hunt += "#L270030500#(Lv.167) �� #bŸ�ӷε� ����  #k �� #b������ ��5#k\r\n"
 hunt += "#L105200607#(Lv.170)   �� #r��Ÿ�񽺼���������  #k �� #r<ī����>#k\r\n"
 hunt += "#L271030102#(Lv.170)   �� #r���ܿ��#k  ��  #r��2������#k\r\n"
 hunt += "#L271030310#(Lv.173) �� #r���� �������  #k �� #r�����1#k\r\n"
 hunt += "#L271030400#(Lv.173) �� #r���� �������  #k �� #r���� �� 4����#k\r\n"
 hunt += "#L241000213#(Lv.186)   �� #rŷ���ε塡  #k �� #d���۵Ǵ� ����� ��3#k\r\n"
 hunt += "#L241000202#(Lv.190)   �� #rŷ���ε塡  #k �� #r������� ����ǽ�4#k\r\n"
 hunt += "#L273000000#(Lv.190) �� #bȲȥ�� �丮�¡�  #k �� #bȲȥ�� �丮��#k\r\n"
 hunt += "#L273050000#(Lv.197) �� #rȲȥ�� �丮�¡�  #k �� #r���ֹε��� �ǳ�ó#k\r\n"
 hunt += "#L301040100#(Lv.???)   �� #r(�����)ũ������� ��#k �� #r��Ż���� ��2#k\r\n"
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
               //boss += "\r\n#L106021400#[NWE BOSS] ���� ŷ �̵�";                   
                boss += "\r\n#L220080001#[NWE BOSS] ��Ǯ������ �̵�";
                boss += "\r\n#L925120100#[NWE BOSS] ��ٳ� �̵�"; 
                boss += "\r\n#L931050430#[NWE BOSS] ������ �����ź �̵�";
                boss += "\r\n#L931050431#[NWE BOSS] ������ ���� �̵�"; 
               boss += "\r\n#L931050432#[NWE BOSS] ������ �������� �̵�"
               cm.sendSimple(boss);   
        
                   } else if (selection == 9) {
                var boss = "";
               //boss += "\r\n#L106021400#[NWE BOSS] ���� ŷ �̵�";                   
      boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L322090120# �ñ׳ʽ��� ���� ����"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/9300762# [���̵� :��#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
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
    
    