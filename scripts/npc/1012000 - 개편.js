importPackage(Packages.constants);

function start(){
	var txt = "�ȳ��ϼ��� #b#h0##k��! "+AboutDbg.serverName+"�� ���ɿ��ǽ��Դϴ�~\r\n�����Ͻ� �޴��� �������ּ���.\r\n"
	txt += "#L0##b���� ���� �޴����� ����;��.\r\n";
	txt += "#L1#�̵� ���� �޴����� ����;��.\r\n";
	txt += "#L2#������ ���� �޴����� ����;��.\r\n";
	txt += "#L3#��Ÿ �޴����� ����;��.\r\n";
	txt += "#L4##rĳ�������� �̿��ϰ� �;��.\r\n";
	cm.sendSimple(txt);
}

var status = -1;
var sel;

function action(mode,type,selection){
	mode==1?status++:(status--,cm.dispose())
	if(status==0){
		sel = selection;
		var txt = "#b"+(sel==0?"����":sel==1?"�̵�":sel==2?"������":"��Ÿ") + "#k ���� �޴��� �����ϼ̽��ϴ�.\r\n�����Ͻ� �޴��� �������ּ���.\r\n";
		if(sel == 0){
			var shop = "������ �̿��ϰ� �;��.\r\n";
			txt += "#L0##r����#b"+shop;
			txt += "#L1##r��ǳ#b"+shop;
			txt += "#L2##r��������#b "+shop;
			txt += "#L3##rŸ�Ϸ�Ʈ#b "+shop;
			txt += "#L4##r�Ŀ�#b"+shop;
			txt += "#L5##rȫ��#b"+shop;
			txt += "#L6##r���佺Ʈ ����#b "+shop;
			txt += "#L7##r��Į������#b "+shop;
			cm.sendSimple(txt);
		}else if(sel == 1){
			var warp = "�̵��ϰ� �;��.\r\n";
			txt += "#L100##r����#b�� "+warp;
			txt += "#L101##r�����#b�� "+warp;
			txt += "#L102##r���������#b�� "+warp
			txt += "#L103##r������ũ#b�� "+warp;
			txt += "#L104##r������#b�� "+warp;
			txt += "#L105##r������#b�� ����;��\r\n";
			txt += "#L106##r������#b���� "+warp;
			txt += "#L107##r�������#b�� "+warp
			txt += "#L108##r����� & �γ��ǽ�#b���� "+warp;
			cm.sendSimple(txt);
		}else if(sel == 2){
			txt += "#L200##b#r�������#b�� #r����#b�ϰ� �;��.\r\n";
			txt += "#L201##r�������#b�� �ϰ�;��..\r\n";
			txt += "#L202##r�������̵�#b�� �ϰ�;��.\r\n";
			txt += "#L203##r������ŷ#b�� ����;��.\r\n";
			txt += "#L204##r����#b�� ����ϰ� �;��.\r\n";
			txt += "#L205#�������� #r��ȭ#b�ϰ� �;��.\r\n";
			txt += "#L206##rȯ��#b�� �ϰ�;��.\r\n";
			txt += "#L207##r����#b�� �ϰ�;��.\r\n";
			txt += "#L208##r�Խ���#b�� ����;��.\r\n";
			txt += "#L210##r�巡���#b�� �����ϰ� �;��.\r\n"
			txt += "#L211##r�ʼ�����#b�� Ǯ��;��.\r\n"
			cm.sendSimple(txt);
		}else if(sel == 3){
			txt += "#L300##r����#b�� �ϰ� �;��.\r\n";
			txt += "#L301##râ��#b�� �̿��ϰ� �;��.\r\n";
			txt += "#L302##rĳ��#b�� �����ϰ� �;��.\r\n";
			txt += "#L303##r��������#b�� �����ϰ� �;��.\r\n";
			txt += "#L304##r����#b�� �ϰ� �;��.\r\n";
			txt += "#L305#�������� #r������#b �;��.\r\n";
			txt += "#L209#�������� #r����#b�ϰ� �;��.\r\n";
			txt += "#L306##r��ų������#b�� �ϰ�;��.\r\n";
			txt += "#L307##r�Ŀ�#b�ϴ� ����� �˰�;��.\r\n";
			cm.sendSimple(txt);
		}else if(sel == 4){
			cm.dispose();
			cm.enterCS();
		}
	}else if(status==1){
		switch(selection){
			case 0: cm.dispose(); cm.openNpc(9000000); break;
			case 1: cm.dispose(); cm.openNpc(1012105); break;
			case 2: cm.dispose(); cm.openNpc(1033211); break;
			case 3: cm.dispose(); cm.openNpc(2040000); break;
			case 4: cm.dispose(); cm.openNpc(1022003); break;
			case 5: cm.dispose(); cm.openNpc(9070008); break;
			case 6: cm.dispose(); cm.openNpc(1022002); break;
			case 7: cm.dispose(); cm.openNpc(2182002); break;

			case 100: cm.dispose(); cm.warp(1000000); break;
			case 101:
				var hunt = "��� ����ͷ� �̵��Ͻǰǰ���?\r\n";
				hunt += "\r\n#L0#[LV.10  ~] #b���ɹ����� ��#k";
				hunt += "\r\n#L1#[LV.20  ~]#b �񷽻��#k";
				hunt += "\r\n#L2#[LV.30  ~]#b �����Ǽ� <������ ������ ��>#k";
				hunt += "\r\n#L3#[LV.40  ~]#b 7�� 8�� A����#k";
				hunt += "\r\n#L4#[LV.40  ~]#b ������ž <17��>#k";
				hunt += "\r\n#L5#[LV.60  ~]#b �׶�Ȧ#k";
				hunt += "\r\n#L6#[LV.70  ~]#b �ð��� �ҿ뵹��#k";
				hunt += "\r\n#L7#[LV.70  ~]#b �峭������ <����>#k";
				hunt += "\r\n#L8#[LV.80  ~]#b ����ʿ� <5>#k";
				hunt += "\r\n#L9#[LV.80  ~]#b ���� �� �縷#k";
				hunt += "\r\n#L10#[LV.90  ~]#b ������ C-2 ����#k";
				hunt += "\r\n#L11#[LV.100 ~]#b ������ ������ �ұ�2#k";
				hunt += "\r\n#L12#[LV.100 ~]#b ��Ʋ�� �ð��� �� <3>#k";
				hunt += "\r\n#L13#[LV.100 ~]#b ������ �ð��� �� <3>#k";
               			hunt += "\r\n#L14#[LV.110 ~]#b ���� ��Ÿ��ν��� ����#k";
				hunt += "\r\n#L15#[LV.110 ~]#b �Ӱ� ����� ����#k";
				hunt += "\r\n#L16#[LV.120 ~]#b ���� �� �Ա�#k";
				hunt += "\r\n#L17#[LV.100 ~]#b �߶Ծ��� �ð�#k";
				hunt += "\r\n#L18#[LV.110 ~]#b ���� �Ʒ�1#k";
				hunt += "\r\n#L19#[LV.115 ~]#b ���� �Ʒ�2#k";
				hunt += "\r\n#L20#[LV.120 ~]#b ���� �Ʒ�3#k";
				hunt += "\r\n#L21#[LV.125 ~]#b ���� �Ʒ�4#k";
				hunt += "\r\n#L22#[LV.125 ~]#b ���� �Ʒ�5#k";
				hunt += "\r\n#L23#[LV.150 ~]#b ���� ���� ����#k"; 
				hunt += "\r\n#L24#[LV.160 ~]#b ������ ��1#k";
				hunt += "\r\n#L25#[LV.162 ~]#b ������ ��2#k";
				hunt += "\r\n#L26#[LV.164 ~]#b ������ ��3#k";
				hunt += "\r\n#L27#[LV.166 ~]#b ������ ��4#k";
				hunt += "\r\n#L28#[LV.168 ~]#b ������ ��5#k";
				hunt += "\r\n#L29#[LV.170 ~]#b ���� �� 1����#k";
				hunt += "\r\n#L30#[LV.170 ~]#b ���� �� 2����#k";
				hunt += "\r\n#L31#[LV.175 ~]#b ���� �� 3����#k";
				hunt += "\r\n#L32#[LV.175 ~]#b ���� �� 4����#k";
				hunt += "\r\n#L33#[LV.190 ~]#b ������ �߱����� 1#k";
				hunt += "\r\n#L34#[LV.190 ~]#b ������ �߱����� 2#k";
				hunt += "\r\n#L35#[LV.195 ~]#b ������ �߱����� 3#k";
				hunt += "\r\n#L36#[LV.195 ~]#b ������ �߱����� 4#k";
				hunt += "\r\n#L37#[LV.195 ~]#b ��ȥ�� �� �Ա�#k";
				hunt += "\r\n#L38#[LV.195 ~]#b ��ģ Ȳ��#k";
				hunt += "\r\n#L39#[LV.195 ~]#b ��ģ ����#k";
				hunt += "\r\n#L40#[LV.195 ~]#b ������� ������ #k";
				cm.sendSimple(hunt);
				break;
			case 102:
				var boss = "� ������ ������ ���ǰǰ���?\r\n";
				boss += "\r\n#L100#[�β�����] #b������ ��#k";
				boss += "\r\n#L101#[�Ǿƴ���] #b�Ǿƴ����� ����#k"; 
				boss += "\r\n#L102#[��Ǯ������] #b�ð�ž�� �ٿ�#k"; 
				boss += "\r\n#L103#[�� ����] #b������#k"; 
				boss += "\r\n#L104#[����] #b�����������ϴ¹�#k";
				boss += "\r\n#L105#[ī��] #bī���� �������� ���ϴ¹�#k";
				boss += "\r\n#L106#[ȥ����] #b������ ���� �Ա�#k";
				boss += "\r\n#L107#[ī��] #bī���� ȥ������ ����#k";
				boss += "\r\n#L108#[��ũ��] #b������ Ȳȥ#k";
				boss += "\r\n#L10#[��ī�̷�] #b��ī�̷��� ����#k";
				boss += "\r\n#L111#[����] #b������ ž#k";
				boss += "\r\n#L112#[�ñ׳ʽ�����] #b�ñ׳ʽ��� ����#k";
				boss += "\r\n#L113#[�ű׳ʽ�] #b�����ǿ���#k";
				boss += "\r\n#L114#[������] #b�����Ǽ�#k";
				boss += "\r\n#L115#[���� ]#b�ɿ��� ����#k";
				cm.sendSimple(boss);
				break;
			case 103: cm.warp(951000000); cm.dispose(); break;
			case 104: cm.warp(230030101); cm.dispose(); break;
			case 105: cm.warp(200000301); cm.dispose(); break;
			case 106: cm.warp(193000000); cm.dispose(); break;
			case 107: cm.warp(910001000); cm.dispose(); break;
			case 108: cm.dispose(); cm.openNpc(1012006); break;
		

			case 200: cm.dispose(); cm.openNpc(9000013); break;
			case 201: cm.warp(109090000); cm.dispose(); break;
			case 202: cm.dispose(); cm.openNpc(2101014); break;
			case 203: cm.dispose(); cm.openNpc(1002009); break;
			case 204: cm.dispose(); cm.openNpc(2084001); break;
			case 205: cm.dispose(); cm.openNpc(1052100); break;
			case 206: cm.dispose(); cm.openNpc(9000006); break;
			case 207: cm.dispose(); cm.openNpc(9040005); break;
			case 208: cm.dispose(); cm.openNpc(2102002); break;
			case 209: cm.dispose(); cm.openNpc(9000056); break;
			case 210: cm.dispose(); cm.openNpc(9900002); break;
			case 211: cm.dispose(); cm.openNpc(9000069); break;

			case 300: cm.dispose(); cm.openNpc(9010035); break;
			case 301: cm.dispose(); cm.openNpc(1012009); break;
			case 302: cm.dispose(); cm.openNpc(9010046); break;
			case 303: cm.dispose(); cm.openNpc(9000095); break;
			case 304: cm.dispose(); cm.openNpc(9010031); break;
			case 305: cm.dispose(); cm.openNpc(1012121); break;
			case 306: cm.dispose(); cm.openNpc(1012117); break;
			case 307: cm.sendSimple("���� ����ũ����� ������ ������ ������ ���� �Ŀ��� �ް� �ֽ��ϴ�. \r\n\r\n�Ŀ��� �Ͻø� �Ŀ�����Ʈ�� ������ �� �ֽ��ϴ�. �Ŀ�����Ʈ�δ� ������ ����, ���� �� �پ��� �ý����� �̿��Ͻ� �� �ֽ��ϴ�.\r\n\r\n���� ��� - �Ŀ��ݾ� * 1.5��\r\nex) 10000�� �Ŀ� - 15000POINT\r\n\r\n\r\n#r5���� �̻� �Ŀ��Ͻ� �в��� ��üä�� Ư���� ������ �� �ִ�\r\n[VIPĪȣ]�� ���޵˴ϴ�.\r\n[VIPĪȣ]�� �ΰ� �����ϰ� ��ø� [VVIP]�� ����˴ϴ�.\r\n#k�Ŀ����Ǵ� ����Ʈ�� #b[fake_ms@nate.com] Ȥ�� ���ӻ󿡼� \r\n[GM����ũ]�� ã���ּ���.#k#b\r\n#L9999#�Ŀ����� �ٷΰ���"); break;
			default: cm.dispose();
		}
	}else if(status==2){
		switch(selection){
			case 0: cm.warp(100020400); cm.dispose(); break;
			case 1: cm.warp(100040000); cm.dispose(); break;
			case 2: cm.warp(106020100); cm.dispose(); break;
			case 3: cm.warp(103040400); cm.dispose(); break;
			case 4: cm.warp(200080500); cm.dispose(); break;
			case 5: cm.warp(220010500); cm.dispose(); break;
			case 6: cm.warp(220050100); cm.dispose(); break;
			case 7: cm.warp(220020600); cm.dispose(); break;
			case 8: cm.warp(221040400); cm.dispose(); break;
			case 9: cm.warp(260020300); cm.dispose(); break;

			case 10: cm.warp(261020400); cm.dispose(); break;
			case 11: cm.warp(251010402); cm.dispose(); break;
			case 12: cm.warp(220060200); cm.dispose(); break;
			case 13: cm.warp(220070200); cm.dispose(); break;
			case 14: cm.warp(240020000); cm.dispose(); break;
			case 15: cm.warp(240020100); cm.dispose(); break;
			case 16: cm.warp(240030000); cm.dispose(); break;
			case 17: cm.warp(220060201); cm.dispose(); break;
			case 18: cm.warp(211060100); cm.dispose(); break;
			case 19: cm.warp(211060300); cm.dispose(); break;

			case 20: cm.warp(211060500); cm.dispose(); break;
			case 21: cm.warp(211060700); cm.dispose(); break;
			case 22: cm.warp(211060900); cm.dispose(); break;
			case 23: cm.warp(240040510); cm.dispose(); break;
			case 24: cm.warp(270030100); cm.dispose(); break;
			case 25: cm.warp(270030200); cm.dispose(); break;
			case 26: cm.warp(270030300); cm.dispose(); break;
			case 27: cm.warp(270030400); cm.dispose(); break;
			case 28: cm.warp(270030500); cm.dispose(); break;
			case 29: cm.warp(271030100); cm.dispose(); break;

			case 30: cm.warp(271030100); cm.dispose(); break;
			case 31: cm.warp(271030300); cm.dispose(); break;
			case 32: cm.warp(271030400); cm.dispose(); break;
			case 33: cm.warp(273040000); cm.dispose(); break;
			case 34: cm.warp(273040100); cm.dispose(); break;
			case 35: cm.warp(273040200); cm.dispose(); break;
			case 36: cm.warp(273040300); cm.dispose(); break;
			case 37: cm.warp(273060000); cm.dispose(); break;
			case 38: cm.warp(273060100); cm.dispose(); break;
			case 39: cm.warp(273060200); cm.dispose(); break;
			case 40: cm.warp(273060300); cm.dispose(); break;

			case 100: cm.warp(231050000); cm.dispose(); break;
			case 101: cm.warp(230040420); cm.dispose(); break;
			case 102: cm.warp(220080001); cm.dispose(); break;
			case 103: cm.warp(211070100); cm.dispose(); break;
			case 104: cm.warp(280030100); cm.dispose(); break;
			case 105: cm.warp(280030001); cm.dispose(); break;
			case 106: cm.warp(240060200); cm.dispose(); break;
			case 107: cm.warp(240060201); cm.dispose(); break;
			case 108: cm.warp(270050100); cm.dispose(); break;
			case 109: cm.warp(272020200); cm.dispose(); break;
			case 110: cm.dispose(); cm.openNpc(1402401); break;
			case 111: cm.warp(271040100); cm.dispose(); break;
			case 112: cm.warp(401060100); cm.dispose(); break;
			case 113: cm.warp(105200710); cm.dispose(); break;
			case 114: cm.warp(105200819); cm.dispose(); break;

			case 9999: cm.dispose(); cm.openNpc(1022003); break;
			default: cm.dispose();
		}
	}
}