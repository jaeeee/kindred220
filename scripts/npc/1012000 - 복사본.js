/*
 
*/

var status = 0;
var beauty = 0;
var facenew;
var colors;
var hairnew;
var haircolor;
var gmlv;
var skin = Array(0, 1, 2, 3, 4, 9, 10, 11, 12, 13);
var mface = Array(20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20024,20025,20027,20028,20029,20030,20031,20032,20036,20037,20040,20043,20044,20045,20046,20047,20048,20049,20050,20053,20055,20056,20057,20058,20059,20060,20061,20062,20063,20064,20065,20066,20067,20068,20069);
var mhair = Array(30000,30020,30030,30040,30050,30060,30100,30110,30120,30130,30140,30150,30160,30170,30180,30190,30200,30210,30220,30230,30240,30250,30260,30270,30280,30290,30300,30310,30320,30330,30340,30350,30360,30370,30400,30410,30420,30440,30450,30460,30470,30480,30490,30510,30520,30530,30540,30560,30570,30590,30610,30620,30630,30640,30650,30660,30670,30680,30700,30710,30730,30760,30770,30790,30800,30810,30820,30830,30840,30850,30860,30870,30880,30910,30930,30940,30950,33030,33060,33070,33080,33090,33110,33120,33130,33150,33170,33180,33190,33210,33220,33250,33260,33270,33280,33310,33330,33350,33360,33370,33380,33390,33400,33410,33430,33440,33450,33460,33480,33500,33510,33520,33530,33550,33580,33590,33600,33610,33620,33630,33640,33660,33670,33680,33690,33700,33710,33720,33730,33740,33750,33760,33770,33780,33790,33800,33810,33820,33830,33930,33940,33950,33960);
var fface = Array(21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019,21020,21021,21023,21024,21026,21027,21028,21029,21030,21031,21033,21035,21036,21038,21041,21042,21043,21044,21045,21046,21047,21048,21052,21053,21054,21055,21056,21057,21058,21059,21060,21061,21062,21063,21064);
var fhair = Array(31000,31010,31020,31030,31040,31050,31060,31070,31080,31090,31100,31110,31120,31130,31140,31150,31160,31170,31180,31190,31200,31210,31220,31230,31240,31250,31260,31270,31280,31290,31300,31310,31320,31330,31340,31350,31400,31410,31420,31440,31450,31460,31470,31480,31490,31510,31520,31530,31540,31550,31560,31590,31610,31620,31630,31640,31650,31670,31680,31690,31700,31710,31720,31740,31750,31780,31790,31800,31810,31820,31840,31850,31860,31880,31890,31910,31920,31930,31940,31950,31990,34040,34070,34080,34090,34100,34110,34120,34130,34140,34150,34160,34170,34180,34190,34210,34220,34230,34240,34250,34260,34270,34310,34320,34330,34340,34360,34370,34380,34400,34410,34420,34430,34440,34450,34470,34480,34490,34510,34540,34560,34590,34600,34610,34620,34630,34640,34660,34670,34680,34690,34700,34710,34720,34730,34740,34750,34760,34770,34780,34790,34800,34810,34820,34830,34840,34850,34860,34870);
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
	    var chat = "��#e< �� �� >\r\n#n"
	    chat += "#L2001#ĳ������";
	    chat += "#L3#���ɻ���";
	    chat += "#L2006#���ܻ���";
	    chat += "#L2000#��ǳ����";
            chat += "#L2008#Ÿ�Ϸ�Ʈ";
            chat += "#L2013#�Ŀ�����";
            chat += "#L9013#��������";

	    chat += "#L2003#���긮��#l#k\r\n\r\n";

	    chat += "��#e< �� �� >#n\r\n"
	    chat += "#L2090#�����̵�";
	    chat += "#L1#�̵��ϱ�";
            chat += "#L1548#�����̵�";
	    chat += "#L1535#�����ϱ�";
	    chat += "#L700#������";
	    chat += "#L1541#���ڼ���#l#k\r\n\r\n";

	    chat += "��#e< �� Ÿ >#n\r\n"
	    chat += "#L2002#�����ϱ�";
   	    chat += "#L1591#������ŷ";
	    chat += "#L5#â����";
            chat += "#L1000#��������";
	    chat += "#L1542#��ų�н�";
	    chat += "#L4#ĳ������";
	    chat += "#L2#�����ϱ�";
	    chat += "#L3022#�ɼǸ���";
	    chat += "#L3021#�۹�����";
            chat += "#L3023#��ȭ�ϱ� ";
            chat += "#L9014#ȯ���ϱ�";
            chat += "#L3024#�����ϱ�";
	    chat += "#L3026##r�����ϱ�#k"
	if (cm.getPlayer().hasGmLevel(6)){
	    chat += "\r\n#l#k\r\n\r\n#e��<GM����>#n #r(��ڸ� ���̴� �޴�)#k\r\n";
	    chat += "#L3017#�Ŀ�����";
	    chat += "#L3018#�ʹ�����";
	    chat += "#L3019#�޼һ���";
	    chat += "#L3020#ȯ���ޱ�";
	    chat += "#L3025#�׽�Ʈ��";
	}
	    cm.sendSimple(chat);


		
        } else if (status == 1) {

	if (selection >= 99999) {
		cm.dispose();
	}
        else if (selection == 1) {
                var warpmain = "��� ������ �̵��ϽǷ���?#b\r\n";
              //  warpmain += "\r\n#L4#������ �̵��� �ϰڽ��ϴ�.";
                warpmain += "\r\n#L5#����ͷ� �̵��� �ϰڽ��ϴ�.";
                warpmain += "\r\n#L6#������ ��ġ�Ϸ� ���ڽ��ϴ�.";
                cm.sendSimple(warpmain);

             } else if (selection == 2001) {
		cm.dispose();
		cm.enterCS();
		return;
             } else if (selection == 2000) {
		cm.dispose();
		cm.openNpc(1012105);
		return;
             } else if (selection == 3026) {
		cm.dispose();
		cm.openNpc(9000056);
		return;
             } else if (selection == 3025) {
		cm.dispose();
		cm.openNpc(9900000);
		return;
             } else if (selection == 3024) {
		cm.dispose();
		cm.openNpc(9040005);
		return;
             } else if (selection == 3021) {
		cm.dispose();
		cm.openNpc(1012121);
		return;
             } else if (selection == 3023) {
		cm.dispose();
		cm.openNpc(1052100);
		return;
             } else if (selection == 3017) {
		cm.dispose();
		cm.openNpc(3000107);
		return;
             } else if (selection == 3018) {
		cm.dispose();
		cm.openNpc(1012121);
		return;
             } else if (selection == 3020) {
		cm.getPlayer().addFame(10000);
		cm.sendOk("ȯ�� ����");
		cm.dispose();
		return;
             } else if (selection == 3019) {
		cm.gainMeso(-2000000000);
		cm.dispose();
		return;
             } else if (selection == 9013) {
		cm.dispose();
		cm.openNpc(9000013);
		return;
             } else if (selection == 3022) {
		cm.dispose();
		cm.openNpc(2084000);
		return;
             } else if (selection == 9014) {
		cm.dispose();
		cm.openNpc(9000006);
		return;
             } else if (selection == 1535) {
		cm.dispose();
		cm.openNpc(22000);
		return;
             } else if (selection == 2002) {
		cm.dispose();
		cm.openNpc(9010035);
		return;
             } else if (selection == 2003) {
		cm.dispose();
		cm.openNpc(1022002);
		return;
             } else if (selection == 2013) {
		cm.dispose();
		cm.openNpc(1022003);
		return;
             } else if (selection == 2006) {
		cm.dispose();
		cm.openNpc(1033211);
		return;
             } else if (selection == 2007) {
		cm.dispose();
		cm.warp(925020000,0);
		return;
             } else if (selection == 2008) {
		cm.dispose();
		cm.openNpc(2040000);
		return;


             } else if (selection == 1591) {
		cm.dispose();
		cm.openNpc(1002009);
		return;

             } else if (selection == 1571) {
		cm.dispose();
		cm.openNpc(9000006);
		return;

             } else if (selection == 1548) {
		cm.sendOk("��� �������Դϴ�.");
		cm.dispose();
		//cm.openNpc(9071003);
		return;

             } else if (selection == 2005) {
		cm.dispose();
		cm.warp(931000500, 0);
		return;

             } else if (selection == 1542) {
		cm.dispose();
		cm.openNpc(1012117);
		return;
             } else if (selection == 1534) {
		cm.dispose();
		cm.openNpc(9000056);
		return;

             } else if (selection == 1533) {
		cm.dispose();
		cm.openNpc(22000);
		return;

             } else if (selection == 1532) {
		cm.dispose();
		cm.openNpc(1002003);
		return;

             } else if (selection == 1515) {
		cm.dispose();
		cm.openNpc(9000013);
		return;

             } else if (selection == 1541) {
		cm.dispose();
		cm.warp(193000000, 0);
		return;

             } else if (selection == 2090) {
		cm.dispose();
		cm.warp(1000000, 0);
		return;

             } else if (selection == 489) {
		cm.dispose();
		cm.openNpc(1105000);
		return;

             } else if (selection == 11) {
		cm.dispose();
		cm.openNpc(9000100);
		return;

             } else if (selection == 0) {
		cm.dispose();
		cm.openNpc(9000001);
		return;

             } else if (selection == 8) {
		cm.dispose();
		cm.openNpc(2041023);
		return;

             } else if (selection == 3000) {
		cm.dispose();
		cm.openShop(9000069);
		return;

             } else if (selection == 9) {
		cm.dispose();
		cm.openNpc(2043000);
		return;

             } else if (selection == 4000) {
		cm.dispose();
		cm.openShop(9010048);
		return;

             } else if (selection == 7) {
		cm.dispose();
		cm.openNpc(1402400);
		return;
            
             } else if (selection == 5) {
		cm.dispose();
		cm.openNpc(1012009);
		return;
            
             } else if (selection == 2) {
	        cm.dispose();
		cm.openNpc(9010031);
		return;

            } else if (selection == 3) {
		cm.dispose();
		cm.openNpc(9000000);
		return;

            } else if (selection == 1000) {
		cm.dispose();
		cm.openNpc(9000095);
		return;

            } else if (selection == 10) {
		cm.dispose();
		cm.openNpc(9090006);
		return;
		
            } else if (selection == 4) {
		cm.dispose();
                cm.openNpc(9010046);
		return;
            
            } else if (selection == 6) {
		cm.dispose();
                cm.openShop(2040049);
		return;         
   
            } else if (selection == 2000) {
		cm.dispose();
                cm.openShop(9010038);
		return;

            } else if (selection == 500) {
		cm.dispose();
                cm.openNpc(2144016);
		return;

            } else if (selection == 600) {
		cm.dispose();
                cm.openNpc(1101001);
		return;

            } else if (selection == 700) {
		cm.dispose();
                cm.openNpc(2010011);
		return;

            } else if (selection == 800) {
		cm.dispose();
                cm.openNpc(10000);
		return;

            } else if (selection == 1000) {
		cm.dispose();
                cm.openNpc(1010100);
		return;

            } else if (selection == 2000) {
		cm.dispose();
                cm.openNpc(2041023);
		return;

            } else if (selection == 700) {
            	 cm.warp(200000301);
            	 cm.dispose();


            } else if (selection == 4) {
		cm.dispose();
                cm.openNpc(1012102);
		return;


            } else if (selection == 901) {
		cm.dispose();
                cm.openNpc(2151008);
		return;

            } else if (cm.getPlayer().getMapId() != 931000610 && selection == 6666) {
                    cm.warp(1000000);
            	    cm.dispose();
		return;
	}else {
	cm.sendOk("�̰������� �ýø� �̿��Ͻ� �� �����ϴ�.");

            }
        } else if (status == 2) {
            if (selection == 4) {
                var vlig = "��� ������ �̵��Ͻðھ��?#b\r\n";
                vlig += "\r\n#L23#��׽ý� �̵�";
                vlig += "\r\n#L26#Ŀ�׽�Ƽ �̵�";
                vlig += "\r\n#L24#�����Ͼ� �̵�";
                vlig += "\r\n#L25#�丮�� �̵�";
                vlig += "\r\n#L27#������Ÿ�� �̵�"; 
                vlig += "\r\n#L21#������ �̵�";
                vlig += "\r\n#L22#���췼 �̵�";
                vlig += "\r\n#L20#���� �̵�"; 
                vlig += "\r\n#L102#������ �̵�";
                vlig += "\r\n#L101#������ �̵�"
                vlig += "\r\n#L103#���긮�� �̵�";
                vlig += "\r\n#L109#������������ �̵�";
                vlig += "\r\n#L108#�Ʒ����� �̵�";
                vlig += "\r\n#L104#������ �̵�";
                vlig += "\r\n#L106#�Ƹ���Ʈ �̵�";
                vlig += "\r\n#L105#�׶� �̵�";
                vlig += "\r\n#L107#����Ƽ�� �̵�";
                vlig += "\r\n#L110#Ȳ�ݻ�� �̵�";
                cm.sendSimple(vlig);

            } else if (selection == 5) {
                var hunt = "��� ����ͷ� �̵��Ͻǰǰ���?\r\n";
                hunt += "\r\n#L29#[LV.10  ~] ���ɹ����� ��";
                hunt += "\r\n#L111#[LV.20  ~] �񷽻��";
                hunt += "\r\n#L28#[LV.30  ~] �����Ǽ� <������ ������ ��>";
                hunt += "\r\n#L30#[LV.40  ~] 7�� 8�� A����";
                hunt += "\r\n#L113#[LV.40  ~] ������ž <17��>";
                hunt += "\r\n#L112#[LV.60  ~] �׶�Ȧ";
                hunt += "\r\n#L115#[LV.70  ~] �ð��� �ҿ뵹��";
                hunt += "\r\n#L114#[LV.70  ~] �峭������ <����>";
                hunt += "\r\n#L116#[LV.80  ~] ����ʿ� <5>";
                hunt += "\r\n#L31#[LV.80  ~] ���� �� �縷";
                hunt += "\r\n#L32#[LV.90  ~] ������ C-2 ����";
                hunt += "\r\n#L33#[LV.100 ~] ������ ������ �ұ�2";
                hunt += "\r\n#L117#[LV.100 ~] ��Ʋ�� �ð��� �� <3>";
                hunt += "\r\n#L118#[LV.100 ~] ������ �ð��� �� <3>";
               	hunt += "\r\n#L121#[LV.110 ~] ���� ��Ÿ��ν��� ����";
                hunt += "\r\n#L122#[LV.110 ~] �Ӱ� ����� ����";
                //hunt += "\r\n#L134#[LV.120 ~] �ð��Ǵ� ����� #e#gNEW!!#k#n";
                hunt += "\r\n#L119#[LV.120 ~] ���� �� �Ա�";
                hunt += "\r\n#L250#[LV.100 ~] �߶Ծ��� �ð�";
                hunt += "\r\n#L255#[LV.110 ~] ���� �Ʒ�1";
                hunt += "\r\n#L254#[LV.115 ~] ���� �Ʒ�2";
                hunt += "\r\n#L253#[LV.120 ~] ���� �Ʒ�3";
                hunt += "\r\n#L252#[LV.125 ~] ���� �Ʒ�4";
                hunt += "\r\n#L251#[LV.125 ~] ���� �Ʒ�5";
                hunt += "\r\n#L120#[LV.150 ~] ���� ���� ����"; 
                hunt += "\r\n#L125#[LV.160 ~] ������ ��1";
                hunt += "\r\n#L126#[LV.162 ~] ������ ��2";
                hunt += "\r\n#L127#[LV.164 ~] ������ ��3";
                hunt += "\r\n#L128#[LV.166 ~] ������ ��4";
                hunt += "\r\n#L129#[LV.168 ~] ������ ��5";
                hunt += "\r\n#L130#[LV.170 ~] ���� �� 1����";
                hunt += "\r\n#L131#[LV.170 ~] ���� �� 2����";
                hunt += "\r\n#L132#[LV.175 ~] ���� �� 3����";
                hunt += "\r\n#L133#[LV.175 ~] ���� �� 4����";

                hunt += "\r\n#L134#[LV.190 ~] ������ �߱����� 1";
                hunt += "\r\n#L135#[LV.190 ~] ������ �߱����� 2";
                hunt += "\r\n#L136#[LV.195 ~] ������ �߱����� 3";
                hunt += "\r\n#L137#[LV.195 ~] ������ �߱����� 4";

                hunt += "\r\n#L138#[LV.195 ~] ��ȥ�� �� �Ա�";
                hunt += "\r\n#L139#[LV.195 ~] ��ģ Ȳ��";
                hunt += "\r\n#L140#[LV.195 ~] ��ģ ����";
                hunt += "\r\n#L141#[LV.195 ~] ������� ������";
                cm.sendSimple(hunt);

            } else if (selection == 6) {
                var boss = "� ������ ������ ���ǰǰ���?\r\n";
                boss += "\r\n#L45#[�β�����]#b������ ��#k";
                boss += "\r\n#L34#[�Ǿƴ���]#b�Ǿƴ����� ����#k"; 
               // boss += "\r\n#L35#[��Ǯ������]#b�ð�ž�� �ٿ�#k  #e#gHOT!! ����#k#n"; 
                boss += "\r\n\r\n#L41##e[�� ����]#n#b������#k#r(����Ȯ���� #i 4033311#���)#k"; 
                boss += "\r\n#L36##e[����]#n#b�����������ϴ¹�#k#r(����Ȯ���� #i 4033302#���)#k";
		boss += "\r\n#L39##e[ī��]#n#bī���� �������� ���ϴ¹�#k#r(����Ȯ���� #i 4033302#���)#k";
                boss += "\r\n#L37##e[ȥ����]#n#b������ ���� �Ա�#k#r(����Ȯ���� #i 4033303#���)#k";
		boss += "\r\n#L40##e[ī��]#n#bī���� ȥ������ ����#k#r(����Ȯ���� #i 4033303#���)#k";
		boss += "\r\n#L38##e[��ũ��]#n#b������ Ȳȥ#k#r(����Ȯ���� #i 4032002#���)#k";
		boss += "\r\n#L42##e[��ī�̷�]#n#b��ī�̷��� ����#k#r(����Ȯ���� #i 4033312#���)#k";
		boss += "\r\n#L43##e[����]#n#b������ ž#k#r(����Ȯ���� #i 4033304#���)#k";262031300
		boss += "\r\n#L44##e[�ñ׳ʽ�����]#n#b�ñ׳ʽ��� ����#k#r(����Ȯ���� #i 4000659#���)#k";
		boss += "\r\n#L49##e[�ű׳ʽ�]#n#b�����ǿ���#k\r\n";
		boss += "\r\n#L55##e[������]#n#b�����Ǽ�#k#r(����Ȯ���� #i1003717#�Ǵ�#i1003721#���)#k#k\r\n";
		boss += "\r\n#L56##e[����]#n#b�ɿ��� ����#k#r(����Ȯ���� #i1003718#�Ǵ�#i1003722#���)#k #e#r[NEW]#k#n#k\r\n";
		boss += "\r\n\r\n#L46#[ī��]#b�ŵ��� Ȳȥ#k#d(�غ���)#k";
                cm.sendSimple(boss);

                } else if (selection == 100) {
			 if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayer().getMeso() >= 8000000 && cm.getPlayer().getNX() < 399999) {
				cm.sendOk ("8,000,000 �޼Ҹ� 5���� ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-8000000);
                   		cm.gainNX (50000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.30#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();
			        
			}                  	
                } else if (selection == 200) {
			if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayer().getMeso() >= 2000000 && cm.getPlayer().getNX() < 850000) {
		 		cm.sendOk ("2,000,000 �޼Ҹ� 1���� ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-2000000);
                   		cm.gainNX (10000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.30#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();

                   	}

                } else if (selection == 300) {
			if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayer().getMeso() >= 1000000 && cm.getPlayer().getNX() < 895000) {
				cm.sendOk ("1,000,000 �޼Ҹ� 5,000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-1000000);
                   		cm.gainNX (5000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.30#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();
                   	}
                } else if (selection == 400) {
			if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayer().getMeso() >= 100000 && cm.getPlayer().getNX() < 899500) {
				cm.sendOk ("100,000 �޼Ҹ� 500 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-100000);
                   		cm.gainNX (500);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.30#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();
                   	}
                } else if (selection == 500) {
			if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayer().getMeso() >= 10000 && cm.getPlayer().getNX() < 899950) {
				cm.sendOk ("10,000 �޼Ҹ� 50 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-10000);
                   		cm.gainNX (50);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.30#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();

			}
            }
			selectioned = selection;
			} else if (status == 3) {
			selection = selection & 0xFF;
            if (selectioned == 0) {
			if (selection == 0) {
		    var warrior = "���翡 ���� �˰� ������?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                        warrior += "\r\n#L0#����� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(warrior);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 100) {
                    	warrior += "\r\n#L1#�����ͷ� ������ �ϰڽ��ϴ�.";
			warrior += "\r\n#L2#�������� ������ �ϰڽ��ϴ�.";
			warrior += "\r\n#L3#���Ǿ������ ������ �ϰڽ��ϴ�.";
			cm.sendSimple(warrior);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 110) {
                    	warrior += "\r\n#L4#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(warrior);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 120) {
                    	warrior += "\r\n#L4#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(warrior);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 130) {
                    	warrior += "\r\n#L4#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(warrior);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 10 == 1) {
                    	warrior += "\r\n#L4#4�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(warrior);
					}
					else {
		   				warrior += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(warrior);
					}
		} else if (selection == 1) {
		    var bowman = "�ü��� ���� �˰� �����Ű���?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	bowman += "\r\n#L5#�ü��� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(bowman);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 300) {
                    	bowman += "\r\n#L6#���ͷ� ������ �ϰڽ��ϴ�.";
						bowman += "\r\n#L7#����� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(bowman);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 310) {
                    	bowman += "\r\n#L8#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(bowman);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 320) {
                    	bowman += "\r\n#L8#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(bowman);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 10 == 1) {
                    	bowman += "\r\n#L8#4�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(bowman);
					}
					else {
		   				bowman += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(bowman);
					}
		} else if (selection == 2) {
		    var magician = "�����簡 �ǰ� ���� �� ���Է�...#b\r\n";
                    if (cm.getPlayer().getLevel() >= 8 && cm.getJob() == 0) {
                    	magician += "\r\n#L9#������� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(magician);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 200) {
                    	magician += "\r\n#L10#���ڵ�(��,��)�� ������ �ϰڽ��ϴ�.";
						magician += "\r\n#L11#���ڵ�(����,����)�� ������ �ϰڽ��ϴ�.";
						magician += "\r\n#L12#Ŭ�������� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(magician);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 210) {
                    	magician += "\r\n#L13#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(magician);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 220) {
                    	magician += "\r\n#L13#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(magician);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 230) {
                    	magician += "\r\n#L13#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(magician);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 10 == 1) {
                    	magician += "\r\n#L13#4�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(magician);
					}
					else {
		   				magician += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(magician);
					}
		} else if (selection == 3) {
		    var thief = "����,�ڳ�! ������ �ǰ� ������?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	thief += "\r\n#L14#�������� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(thief);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 400) {
                    	thief += "\r\n#L15#��ؽ����� ������ �ϰڽ��ϴ�.";
						thief += "\r\n#L16#������ ������ �ϰڽ��ϴ�.";
						cm.sendSimple(thief);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 410) {
                    	thief += "\r\n#L17#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(thief);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 420) {
                    	thief += "\r\n#L17#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(thief);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 10 == 1) {
                    	thief += "\r\n#L17#4�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(thief);
					}
					else {
		   				thief += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(thief);
					}
		} else if (selection == 4) {
		    var pirate = "������ �ƹ��� �Ǵ°� �ƴ϶��!#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	pirate += "\r\n#L18#�������� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(pirate);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 500) {
                    	pirate += "\r\n#L19#�������ͷ� ������ �ϰڽ��ϴ�.";
						pirate += "\r\n#L20#�ǽ����ŷ� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(pirate);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 510) {
                    	pirate += "\r\n#L21#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(pirate);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 520) {
                    	pirate += "\r\n#L21#3�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(pirate);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 10 == 1) {
                    	pirate += "\r\n#L21#4�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(pirate);
					}
					else {
		   				pirate += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(pirate);
					}
		} else if (selection == 5) {
		    var canon = "ĳ���Ͱ� �ǰ� �����ž�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	canon += "\r\n#L22#ĳ����(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(canon);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 501) {
                    	canon += "\r\n#L23#ĳ����(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(canon);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 530) {
                    	canon += "\r\n#L24#ĳ����(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(canon);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() == 531) {
                    	canon += "\r\n#L24#ĳ����(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(canon);
					}
					else {
		   				canon += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(canon);
					}
		} else if (selection == 6) {
		    var dual = "������... ������ �Ҷ��������� ��������.#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	dual += "\r\n#L25#�������� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 20 && cm.getJob() == 400) {
                    	dual += "\r\n#L26#���̵��� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 430) {
                    	dual += "\r\n#L27#���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 50 && cm.getJob() == 431) {
                    	dual += "\r\n#L27#��󸶽��ͷ� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 432) {
                    	dual += "\r\n#L27#�����ŷ� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() == 433) {
                    	dual += "\r\n#L27#�����̵�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(dual);
					}
					else {
		   				dual += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(dual);
					}
		}
            } else if (selectioned == 1) {
		if (selection == 7) {
		    var aran = "����ü�� �����̶�� �༮��...#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 2000) {
                    	aran += "\r\n#L28#�ƶ�(1��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(aran);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2100) {
                    	aran += "\r\n#L29#�ƶ�(2��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(aran);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	aran += "\r\n#L30#�ƶ�(3��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(aran);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	aran += "\r\n#L30#�ƶ�(4��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(aran);
					}
					else {
		   				aran += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(aran);
					}
		} else if (selection == 8) {
		    var evan = "������ �ǰ� �����ž�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 2001) {
                    	evan += "\r\n#L31#����(1��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 20 && cm.getJob() == 2200) {
                    	evan += "\r\n#L32#����(2��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2210) {
                    	evan += "\r\n#L33#����(3��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 40 && cm.getJob() == 2211) {
                    	evan += "\r\n#L33#����(4��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 50 && cm.getJob() == 2212) {
                    	evan += "\r\n#L33#����(5��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 2213) {
                    	evan += "\r\n#L33#����(6��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 80 && cm.getJob() == 2214) {
                    	evan += "\r\n#L33#����(7��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() == 2215) {
                    	evan += "\r\n#L33#����(8��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() == 2216) {
                    	evan += "\r\n#L33#����(9��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 160 && cm.getJob() == 2217) {
                    	evan += "\r\n#L33#����(10��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(evan);
					}
					else {
		   				evan += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(evan);
					}
		} else if (selection == 9) {
		    var phantom = "������ �ǰ� �����ž�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	phantom += "\r\n#L34#����(1��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(phantom);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2400) {
                    	phantom += "\r\n#L35#����(2��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(phantom);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	phantom += "\r\n#L36#����(3��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(phantom);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	phantom += "\r\n#L36#����(4��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(phantom);
					}
					else {
		   				phantom += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(phantom);
					}
		} else if (selection == 10) {
		    var mercedes = "�޸��������� �ǰ� �����ž�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 2002) {
                    	mercedes += "\r\n#L37#�޸�������(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(mercedes);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2300) {
                    	mercedes += "\r\n#L38#�޸�������(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(mercedes);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	mercedes += "\r\n#L39#�޸�������(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(mercedes);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	mercedes += "\r\n#L39#�޸�������(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(mercedes);
					}
					else {
		   				mercedes += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(mercedes);
					}
		}
            } else if (selectioned == 2) {
		if (selection == 11) {
		    var mechanic = "����� ����ü, ��ī�п� ���� �ֽ��ϱ�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 3000) {
                    	mechanic += "\r\n#L40#��ī��(1��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(mechanic);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3500) {
                    	mechanic += "\r\n#L41#��ī��(2��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(mechanic);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	mechanic += "\r\n#L42#��ī��(3��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(mechanic);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	mechanic += "\r\n#L42#��ī��(4��)���� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(mechanic);
					}
					else {
		   				mechanic += "\r\n�� ������ �������ڳ�";
						cm.sendOk(mechanic);
					}
		} else if (selection == 12) {
		    var battle = "�ο�� ������, ��Ʋ�������� ������ �ִ� �ǰ�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 3000) {
                    	battle += "\r\n#L43#��Ʋ������(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(battle);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3200) {
                    	battle += "\r\n#L44#��Ʋ������(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(battle);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	battle += "\r\n#L45#��Ʋ������(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(battle);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	battle += "\r\n#L45#��Ʋ������(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(battle);
					}
					else {
		   				battle += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(battle);
					}
		} else if (selection == 13) {
		    var wild = "�η��� ���� �ü�, ���ϵ����Ϳ� ���� �־�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 3000) {
                    	wild += "\r\n#L46#���ϵ�����(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(wild);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3300) {
                   		wild += "\r\n#L47#���ϵ�����(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(wild);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	wild += "\r\n#L48#���ϵ�����(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(wild);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	wild += "\r\n#L48#���ϵ�����(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(wild);
					}
					else {
		   				wild += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(wild);
					}
		} else if (selection == 14) {
		    var demon = "���󽽷��̾ �ǰ� �����ž�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 3001) {
                    	demon += "\r\n#L49#���󽽷��̾�(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3100) {
                    	demon += "\r\n#L50#���󽽷��̾�(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	demon += "\r\n#L51#���󽽷��̾�(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	demon += "\r\n#L51#���󽽷��̾�(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(demon);
					}
					else {
		   				demon += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(demon);
					}
				}
			} else if (selectioned == 3) {
		if (selection == 15) {
		    var soul = "���� ���, �ҿ︶���Ϳ� ������ �ִ� �ǰ�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 1000) {
                    	soul += "\r\n#L52#�ҿ︶����(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(soul);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1100) {
                    	soul += "\r\n#L53#�ҿ︶����(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(soul);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	soul += "\r\n#L54#�ҿ︶����(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(soul);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	soul += "\r\n#L54#�ҿ︶����(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(soul);
					}
					else {
		   				soul += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(soul);
					}
		} else if (selection == 16) {
		    var walker = "����� ���, ����Ʈ��Ŀ�� ������ �ֳ�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 1000) {
                    	walker += "\r\n#L55#����Ʈ��Ŀ(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(walker);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1400) {
                    	walker += "\r\n#L56#����Ʈ��Ŀ(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(walker);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	walker += "\r\n#L57#����Ʈ��Ŀ(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(walker);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	walker += "\r\n#L57#����Ʈ��Ŀ(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(walker);
					}
					else {
		   				walker += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(walker);
					}
		} else if (selection == 17) {
		    var striker = "������ ���, ��Ʈ����Ŀ�� ������ �ִ� �ž�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 1000) {
                    	striker += "\r\n#L58#��Ʈ����Ŀ(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(striker);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1500) {
                    	striker += "\r\n#L59#��Ʈ����Ŀ(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(striker);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	striker += "\r\n#L60#��Ʈ����Ŀ(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(striker);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	striker += "\r\n#L60#��Ʈ����Ŀ(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(striker);
					}
					else {
		   				striker += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(striker);
					}
		} else if (selection == 18) {
		    var flame = "���� ���, �÷������ڵ忡 ������ ������ �ǰ���?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 1000) {
                    	flame += "\r\n#L61#�÷������ڵ�(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(flame);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1200) {
                    	flame += "\r\n#L62#�÷������ڵ�(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(flame);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	flame += "\r\n#L63#�÷������ڵ�(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(flame);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	flame += "\r\n#L63#�÷������ڵ�(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(flame);
					}
					else {
		   				flame += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(flame);
					}
		} else if (selection == 19) {
		    var wind = "�ٶ��� ���, ����극��Ŀ�� ������ �ֳ���?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 1000) {
                    	wind += "\r\n#L64#����극��Ŀ(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(wind);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1300) {
                    	wind += "\r\n#L65#����극��Ŀ(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(wind);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	wind += "\r\n#L66#����극��Ŀ(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(wind);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	wind += "\r\n#L66#����극��Ŀ(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(wind);
					}
					else {
		   				wind += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(wind);
					}
		} else if (selection == 38) {
		    var light = "���� ���, �����Ͽ� ������ �ִ� �ǰ�?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 5000) {
                    	light += "\r\n#L67#������(1��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(light);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 5100) {
                    	light += "\r\n#L68#������(2��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(light);
					}
                    else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() % 100 == 10) {
                    	light += "\r\n#L69#������(3��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(light);
					}
                    else if (cm.getPlayer().getLevel() >= 120 && cm.getJob() % 100 == 11) {
                    	light += "\r\n#L69#������(4��)�� ������ �ϰڽ��ϴ�.";
						cm.sendSimple(light);
					}
					else {
		   				light += "\r\n������ ������ �������� �ʾ�.";
						cm.sendOk(light);
					}
}

                } else if (selectioned == 4) {
		       if (selection == 20) {
		    cm.warp(140000000,0);
		    cm.dispose();
		} else if (selection == 21) {
            	    cm.warp(130000000,0);
            	    cm.dispose();
            	} else if (selection == 22) {
            	    cm.warp(101050000);
            	    cm.dispose();
            	} else if (selection == 23) {
            	    cm.warp(100000000);
            	    cm.dispose();
            	} else if (selection == 24) {
            	    cm.warp(101000000);
            	    cm.dispose();
            	} else if (selection == 25) {
            	    cm.warp(102000000);
            	    cm.dispose();
            	} else if (selection == 26) {
            	    cm.warp(103000000);
            	    cm.dispose();
            	} else if (selection == 27) {
                    cm.warp(310000000);
            	    cm.dispose();
            	} else if (selection == 100) {
                    cm.warp(931000500);
            	    cm.dispose();
            	} else if (selection == 101) {
                    cm.warp(211000000);
            	    cm.dispose();
            	} else if (selection == 102) {
                    cm.warp(200000000);
            	    cm.dispose();
            	} else if (selection == 103) {
                    cm.warp(220000000);
            	    cm.dispose();
            	} else if (selection == 104) {
                    cm.warp(240000000);
            	    cm.dispose();
            	} else if (selection == 105) {
                    cm.warp(240070000);
            	    cm.dispose();
            	} else if (selection == 106) {
                    cm.warp(260000000);
            	    cm.dispose();
            	} else if (selection == 107) {
                    cm.warp(261000000);
            	    cm.dispose();
            	} else if (selection == 108) {
                    cm.warp(222000000);
            	    cm.dispose();
            	} else if (selection == 109) {
                    cm.warp(221000000);
            	    cm.dispose();
            	} else if (selection == 110) {
                    cm.warp(252000000);
            	    cm.dispose();
		}
            } else if (selectioned == 5) {
            	if (selection == 28) {
            	    cm.warp(106020100);
            	    cm.dispose();
            	} else if (selection == 29) {
            	    cm.warp(100020400);
            	    cm.dispose();
            	} else if (selection == 30) {
            	    cm.warp(103040400);
            	    cm.dispose();
            	} else if (selection == 31) {
            	    cm.warp(260020300);
            	    cm.dispose();
            	} else if (selection == 32) {
            	    cm.warp(261020400);
            	    cm.dispose();
            	} else if (selection == 33) {
            	    cm.warp(251010402);
            	    cm.dispose();
            	} else if (selection == 111) {
            	    cm.warp(100040000);
            	    cm.dispose();
            	} else if (selection == 112) {
            	    cm.warp(220010500);
            	    cm.dispose();
            	} else if (selection == 113) {
            	    cm.warp(200080500);
            	    cm.dispose();
            	} else if (selection == 114) {
            	    cm.warp(220020600);
            	    cm.dispose();
            	} else if (selection == 115) {
            	    cm.warp(220050100);
            	    cm.dispose();
            	} else if (selection == 116) {
            	    cm.warp(221040400);
            	    cm.dispose();
            	} else if (selection == 117) {
            	    cm.warp(220060200);
            	    cm.dispose();
            	} else if (selection == 118) {
            	    cm.warp(220070200);
            	    cm.dispose();
            	} else if (selection == 119) {
            	    cm.warp(240030000);
            	    cm.dispose();
            	} else if (selection == 120) {
            	    cm.warp(240040510);
            	    cm.dispose();
            	} else if (selection == 121) {
            	    cm.warp(240020000);
            	    cm.dispose();
            	} else if (selection == 122) {
            	    cm.warp(240020100);
            	    cm.dispose();
            	} else if (selection == 250) {
            	    cm.warp(220060201);
            	    cm.dispose();
            	} else if (selection == 255) {
            	    cm.warp(211060100);
            	    cm.dispose();
            	} else if (selection == 254) {
            	    cm.warp(211060300);
            	    cm.dispose();
            	} else if (selection == 253) {
            	    cm.warp(211060500);
            	    cm.dispose();
            	} else if (selection == 252) {
            	    cm.warp(211060700);
            	    cm.dispose();
            	} else if (selection == 251) {
            	    cm.warp(211060900);
            	    cm.dispose();
            	} else if (selection == 125) {
            	    cm.warp(270030100);
            	    cm.dispose();
            	} else if (selection == 126) {
            	    cm.warp(270030200);
            	    cm.dispose();
            	} else if (selection == 127) {
            	    cm.warp(270030300);
            	    cm.dispose();
            	} else if (selection == 128) {
            	    cm.warp(270030400);
            	    cm.dispose();
            	} else if (selection == 129) {
            	    cm.warp(270030500);
            	    cm.dispose();
            	} else if (selection == 130) {
            	    cm.warp(271030100);
            	    cm.dispose();
            	} else if (selection == 131) {
            	    cm.warp(271030200);
            	    cm.dispose();
            	} else if (selection == 132) {
            	    cm.warp(271030300);
            	    cm.dispose();
            	} else if (selection == 133) {
            	    cm.warp(271030400);
            	    cm.dispose();
            	} else if (selection == 134) {
            	    cm.warp(273040000);
            	    cm.dispose();
            	} else if (selection == 135) {
            	    cm.warp(273040100);
            	    cm.dispose();
            	} else if (selection == 136) {
            	    cm.warp(273040200);
            	    cm.dispose();
            	} else if (selection == 137) {
            	    cm.warp(273040300);
            	    cm.dispose();

            	} else if (selection == 138) {
            	    cm.warp(273060000);
            	    cm.dispose();
            	} else if (selection == 139) {
            	    cm.warp(273060100);
            	    cm.dispose();
            	} else if (selection == 140) {
            	    cm.warp(273060200);
            	    cm.dispose();
            	} else if (selection == 141) {
            	    cm.warp(273060300);
            	    cm.dispose();
		}
            } else if (selectioned == 6) {
            	if (selection == 34) {
            	    cm.warp(230040420);
            	    cm.dispose();
            	} else if (selection == 35) {
            	    cm.warp(220080001);
            	    cm.dispose();
            	} else if (selection == 36) {
           	    cm.warp(280030100);
           	    cm.dispose();
            	} else if (selection == 37) {
            	    cm.warp(240060200);
            	    cm.dispose();
            	} else if (selection == 38) {
            	    cm.warp(270050100);
            	    cm.dispose();		
            	} else if (selection == 39) {
            	    cm.warp(280030001);
            	    cm.dispose();
            	} else if (selection == 40) {
            	    cm.warp(240060201);
            	    cm.dispose();
            	} else if (selection == 41) {
            	    cm.warp(211070100);
            	    cm.dispose();
            	} else if (selection == 42) {
            	    cm.warp(272020200);
            	    cm.dispose();
            	} else if (selection == 43) {
			cm.dispose();
			cm.openNpc(1402401);
			return;
            	} else if (selection == 44) {
            	    cm.warp(271040100);
            	    cm.dispose();
            	} else if (selection == 45) {
            	    cm.warp(231050000);
            	    cm.dispose();
            	} else if (selection == 46) {
		    cm.warp(1000000);
            	  //cm.warp(270051100);
            	    cm.dispose();
            	} else if (selection == 49) {
		     // cm.warp(1000000);
            	    cm.warp(401060100);
            	    cm.dispose();
            	} else if (selection == 55) {
		     // cm.warp(1000000);
            	    cm.warp(105200710);
            	    cm.dispose();
            	} else if (selection == 56) {
		     // cm.warp(1000000);
            	    cm.warp(105200819);
            	    cm.dispose();
                }

	                       }		   

         } else if (status == 4) {
	    if (selection == 0) {
		cm.resetStats(35,4,4,4);
		cm.changeJob(100); 
	    } else if (selection == 1) {
		cm.changeJob(110); 
	    } else if (selection == 2) {
		cm.changeJob(120);
	    } else if (selection == 3) {
		cm.changeJob(130);
	    } else if (selection == 4) {
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 5) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(300);
	    } else if (selection == 6) {
		cm.changeJob(310);
	    } else if (selection == 7) {
		cm.changeJob(320);
	    } else if (selection == 8) {
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 9) {
		cm.resetStats(4,4,20,4);
		cm.changeJob(200); 
	    } else if (selection == 10) {
		cm.changeJob(210);
	    } else if (selection == 11) { 
		cm.changeJob(220);
	    } else if (selection == 12) { 
		cm.changeJob(230);
	    } else if (selection == 13) { 
		cm.changeJob(cm.getJob() +1); 
	    } else if (selection == 14) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(400);
	    } else if (selection == 15) { 
		cm.changeJob(410);
	    } else if (selection == 16) { 
		cm.changeJob(420); 
	    } else if (selection == 17) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 18) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(500); 
	    } else if (selection == 19) { 
		cm.changeJob(510);
	    } else if (selection == 20) { 
		cm.changeJob(520); 
	    } else if (selection == 21) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 22) {
		cm.changeJob(501);
	    } else if (selection == 23) { 
		cm.changeJob(530);
		cm.teachSkill(110,1,0);
	    } else if (selection == 24) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 25) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(400);
	    } else if (selection == 26) { 
		cm.changeJob(430);
	    } else if (selection == 27) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 28) {
		cm.resetStats(35,4,4,4);
		cm.changeJob(2100);
	    } else if (selection == 29) {  
		cm.changeJob(2110); 
	    } else if (selection == 30) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 31) {
		cm.changeJob(2200);
	    } else if (selection == 32) { 
		cm.changeJob(2210);
	    } else if (selection == 33) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 34) {
            	if (cm.getPlayer().getGender() == 0) {
                    cm.getPlayer().setFace(20659);
                    cm.getPlayer().setHair(33703);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1050222,0,3,0,7,0,0);
                    cm.addEquip(-7,1070023,0,2,0,7,0,0);
                    cm.addEquip(-11,1362000,17,0,0,7,0,0);
                    cm.addEquip(-9,1102347,0,5,5,7,0,0);
            	} else {
                    cm.getPlayer().setFace(21656);
                    cm.getPlayer().setHair(34703);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1051272,0,3,0,7,0,0);
                    cm.addEquip(-7,1071035,0,2,0,7,0,0);
                    cm.addEquip(-11,1362000,17,0,0,7,0,0);
                    cm.addEquip(-9,1102347,0,5,5,7,0,0);
            	}
            	cm.resetStats(4,25,4,4);
            	cm.changeJob(2400);
            	cm.teachSkill(20031203,1,0);
            	cm.teachSkill(20030204,1,0);
            	cm.teachSkill(20031205,1,0);
            	cm.teachSkill(20030206,1,0);
            	cm.teachSkill(20031207,1,0);
            	cm.teachSkill(20031208,1,0);
            	cm.teachSkill(20031209,1,0);
		cm.teachSkill(20031210,1,0);
            	cm.gainItem(1362000,1);
            	cm.getPlayer().gainSP(3);
            	cm.fakeRelog();
            	cm.updateChar();
	    } else if (selection == 35) { 
		cm.changeJob(2410);
	    } else if (selection == 36) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 37) {
            	if (cm.getPlayer().getGender() == 0) {
                    cm.getPlayer().setFace(20557);
                    cm.getPlayer().setHair(33453);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1050192,0,3,0,7,0,0);
                    cm.addEquip(-7,1072519,0,2,0,7,0,0);
                    cm.addEquip(-11,1522038,17,0,0,7,0,0);
            	} else {
                    cm.getPlayer().setFace(21555);
                    cm.getPlayer().setHair(34423);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1051237,0,3,0,7,0,0);
                    cm.addEquip(-7,1072519,0,2,0,7,0,0);
                    cm.addEquip(-11,1522038,17,0,0,7,0,0);
            	}
           	cm.resetStats(4,25,4,4);
                cm.changeJob(2300);
            	cm.teachSkill(20020109,1,0);
            	cm.teachSkill(20021110,1,0);
            	cm.teachSkill(20020111,1,0);
            	cm.teachSkill(20020112,1,0);
            	cm.gainItem(3010211,1);
                cm.getPlayer().gainSP(3);
                cm.fakeRelog();
                cm.updateChar();
	    } else if (selection == 38) { 
		cm.changeJob(2310);
	    } else if (selection == 39) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 40) {
		cm.changeJob(3500);
	    } else if (selection == 41) { 
		cm.changeJob(3510);
	    } else if (selection == 42) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 43) {
		cm.changeJob(3200); 
	    } else if (selection == 44) { 
		cm.changeJob(3210); 
	    } else if (selection == 45) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 46) {
		cm.changeJob(3300);
	    } else if (selection == 47) { 
		cm.changeJob(3310);
	    } else if (selection == 48) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 49) {
            	if (cm.getPlayer().getGender() == 0) {
                    cm.getPlayer().setFace(20248);
                    cm.getPlayer().setHair(33531);
                    cm.getPlayer().setFace2(1012280);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1050191,0,3,0,7,0,0);
                    cm.addEquip(-7,1072518,0,2,0,7,0,0);
                    cm.addEquip(-11,1322123,17,0,0,7,0,0);
                    cm.addEquip(-10,1099000,0,10,5,7,0,20);
            	} else {
                    cm.getPlayer().setFace(21246);
                    cm.getPlayer().setHair(34411);
                    cm.getPlayer().setFace2(1012280);
                   cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1051236,0,3,0,7,0,0);
                    cm.addEquip(-7,1072518,0,2,0,7,0,0);
                    cm.addEquip(-11,1322123,17,0,0,7,0,0);
                    cm.addEquip(-10,1099000,0,10,5,7,0,20);
            	}
                cm.resetStats(35,4,4,4);
                cm.changeJob(3100);
            	cm.teachSkill(30011109,1,0);
            	cm.teachSkill(30010110,1,0);
            	cm.teachSkill(30010111,1,0);
            	cm.teachSkill(30010112,1,0);
            	cm.teachSkill(30010185,1,0);
                cm.getPlayer().getStat().setMaxMp(5);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.getPlayer().setSkinColor(0);
                cm.getPlayer().gainSP(3);
                cm.fakeRelog();
                cm.updateChar();
	    } else if (selection == 50) { 
		cm.changeJob(3110);
		cm.removeEquip(1099000);
        cm.addEquip(-10,1099002,0,30,15,7,150,50);
	    } else if (selection == 51) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 52) {
		cm.resetStats(35,4,4,4);
		cm.changeJob(1100);
	    } else if (selection == 53) { 
		cm.changeJob(1110); 
	    } else if (selection == 54) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 55) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(1400);
	    } else if (selection == 56) { 
		cm.changeJob(1410);
	    } else if (selection == 57) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 58) {
		cm.resetStats(35,4,4,4);
		cm.changeJob(1500);
	    } else if (selection == 59) { 
		cm.changeJob(1510);
	    } else if (selection == 60) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 61) {
		cm.resetStats(4,4,20,4);b
		cm.changeJob(1200);
	    } else if (selection == 62) { 
		cm.changeJob(1210);
	    } else if (selection == 63) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 64) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(1300); 
	    } else if (selection == 65) { 
		cm.changeJob(1310); 
	    } else if (selection == 66) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 67) {
		cm.changeJob(5100);
		cm.getPlayer().gainSP(3);
		cm.resetStats(35,4,4,4);
	    } else if (selection == 68) { 
		cm.changeJob(5110); 
	    } else if (selection == 69) { 
		cm.changeJob(cm.getJob() +1);
	    }
            cm.expandInventory(1,4);
            cm.expandInventory(2,4);
            cm.expandInventory(3,4);
            cm.expandInventory(4,4);
	    cm.dispose();
		}
    	}
}

