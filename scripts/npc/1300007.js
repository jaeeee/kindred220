/*
 made by gkskehls
 2008.06.07
 	������ �÷��ش�.
 	�� ���ݺ��� +10, +50, +100, +500 ���� �÷��ش�
 2008.06.08
 	������ �����ش�.
 	�� ���ݺ��� -100 �߰�
 	ȭ�鿡 �������� ���� ���� ���ϰ� ����ȭ.
 2008.07.08
  ������ �ѹ��� �� �÷��ְ� �� �����ִ� ����߰�
2009.11.08 fx1548 ���� 



	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.


 Regular Cab
	Warp NPC
	- Henesys edition (100000000)
*/

var status = 0;
var getStatus = 0;
importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		status++;
		if(status == 0) { //1�� �޼��� :  ���� ����
			var stat_msg = "��, ��, ��Ʈ, ���߿� �ϳ��� �����ּ���.\r\n";
			stat_msg = stat_msg + "#b#L0#10 �ø���#l        #L11#��  #l#L21#��  #l#L31#��Ʈ  #l#L41#��#l#k\r\n";
			stat_msg = stat_msg + "#b#L0#50 �ø���#l        #L12#��  #l#L22#��  #l#L32#��Ʈ  #l#L42#��#l#k\r\n";
			stat_msg = stat_msg + "#b#L0#100 �ø���#l      #L13#��  #l#L23#��  #l#L33#��Ʈ  #l#L43#��#l#k\r\n";
			stat_msg = stat_msg + "#b#L0#1000 �ø���#l    #L90#��  #l#L91#��  #l#L92#��Ʈ  #l#L93#��#l#k\r\n";
			stat_msg = stat_msg + "#b#L0#10000 �ø���#l    #L98#��  #l#L99#��  #l#L100#��Ʈ  #l#L101#��#l#k\r\n";
			stat_msg = stat_msg + "#b#L0#30000 �ø���#l    #L102#��  #l#L103#��  #l#L104#��Ʈ  #l#L105#��#l#k\r\n";
			stat_msg = stat_msg + "#r#L0#100 ������#l      #L15#��  #l#L25#��  #l#L35#��Ʈ  #l#L45#��#l#k\r\n";
                        stat_msg = stat_msg + "#r#L0#1000 ������#l    #L94#��  #l#L95#��  #l#L96#��Ʈ  #l#L97#��#l#k\r\n\r\n";
			stat_msg = stat_msg + "#b#L0#���� �ø���#l     #L14#��  #l#L24#��  #l#L34#��Ʈ  #l#L44#��#l#k\r\n";
			stat_msg = stat_msg + "#r#L0#���� ������#l     #L16#��  #l#L26#��  #l#L36#��Ʈ  #l#L46#��#l#k\r\n";
			stat_msg = stat_msg + "";
			cm.sendSimple(stat_msg);
		} else if(status == 1) { //2�� �޼���  
			var statup = new java.util.ArrayList();
			var p = cm.c.getPlayer();
			var set_Str = p.getStr();
			var set_Dex = p.getDex();
			var set_Int = p.getInt();
			var set_Luk = p.getLuk();
			var set_Ap  = p.getRemainingAp();

			if(selection == 11) { //STR+10
				if(p.getRemainingAp() >= 10) {  set_Str = p.getStr()+10;  set_Ap = p.getRemainingAp()-10;  }
			} else if(selection == 12) { //STR+50
				if(p.getRemainingAp() >= 50) {  set_Str = p.getStr()+50;  set_Ap = p.getRemainingAp()-50;  }
			} else if(selection == 13) { //STR+100
				if(p.getRemainingAp() >= 100) { set_Str = p.getStr()+100; set_Ap = p.getRemainingAp()-100; }
			} else if(selection == 90) { //STR+1000
				if(p.getRemainingAp() >= 1000) {  set_Str = p.getStr()+1000;  set_Ap = p.getRemainingAp()-1000;  }
			} else if(selection == 21) { //DEX+10
				if(p.getRemainingAp() >= 10) {  set_Dex = p.getDex()+10;  set_Ap = p.getRemainingAp()-10;  }
			} else if(selection == 22) { //DEX+50
				if(p.getRemainingAp() >= 50) {  set_Dex = p.getDex()+50;  set_Ap = p.getRemainingAp()-50;  }
			} else if(selection == 23) { //DEX+100
				if(p.getRemainingAp() >= 100) { set_Dex = p.getDex()+100; set_Ap = p.getRemainingAp()-100; }
			} else if(selection == 91) { //DEX+1000
				if(p.getRemainingAp() >= 1000) {  set_Dex = p.getDex()+1000;  set_Ap = p.getRemainingAp()-1000;  }
			} else if(selection == 31) { //INT+10
				if(p.getRemainingAp() >= 10) {  set_Int = p.getInt()+10;  set_Ap = p.getRemainingAp()-10;  }
			} else if(selection == 32) { //INT+50
				if(p.getRemainingAp() >= 50) {  set_Int = p.getInt()+50;  set_Ap = p.getRemainingAp()-50;  }
			} else if(selection == 33) { //INT+100
				if(p.getRemainingAp() >= 100) { set_Int = p.getInt()+100; set_Ap = p.getRemainingAp()-100; }
			} else if(selection == 92) { //INT+1000
				if(p.getRemainingAp() >= 1000) {  set_Int = p.getInt()+1000;  set_Ap = p.getRemainingAp()-1000;  }
			} else if(selection == 41) { //LUK+10
				if(p.getRemainingAp() >= 10) {  set_Luk = p.getLuk()+10;  set_Ap = p.getRemainingAp()-10;  }
			} else if(selection == 42) { //LUK+50
				if(p.getRemainingAp() >= 50) {  set_Luk = p.getLuk()+50;  set_Ap = p.getRemainingAp()-50;  }
			} else if(selection == 43) { //LUK+100
				if(p.getRemainingAp() >= 100) { set_Luk = p.getLuk()+100; set_Ap = p.getRemainingAp()-100; }
			} else if(selection == 93) { //LUK+1000
				if(p.getRemainingAp() >= 1000) {  set_Luk = p.getLuk()+1000;  set_Ap = p.getRemainingAp()-1000;  }
			} else if(selection == 98) { //STR+10000
				if(p.getRemainingAp() >= 10000) {  set_Str = p.getStr()+10000;  set_Ap = p.getRemainingAp()-10000;  }
			} else if(selection == 99) { //DEX+10000
				if(p.getRemainingAp() >= 10000) {  set_Dex = p.getDex()+10000;  set_Ap = p.getRemainingAp()-10000;  }
			} else if(selection == 100) { //INT+10000
				if(p.getRemainingAp() >= 10000) {  set_Int = p.getInt()+10000;  set_Ap = p.getRemainingAp()-10000;  }
			} else if(selection == 101) { //LUK+10000
				if(p.getRemainingAp() >= 10000) {  set_Luk = p.getLuk()+10000;  set_Ap = p.getRemainingAp()-10000;  }
			} else if(selection == 102) { //STR+30000
				if(p.getRemainingAp() >= 30000) {  set_Str = p.getStr()+30000;  set_Ap = p.getRemainingAp()-30000;  }
			} else if(selection == 103) { //DEX+30000
				if(p.getRemainingAp() >= 30000) {  set_Dex = p.getDex()+30000;  set_Ap = p.getRemainingAp()-30000;  }
			} else if(selection == 104) { //INT+30000
				if(p.getRemainingAp() >= 30000) {  set_Int = p.getInt()+30000;  set_Ap = p.getRemainingAp()-30000;  }
			} else if(selection == 105) { //LUK+30000
				if(p.getRemainingAp() >= 30000) {  set_Luk = p.getLuk()+30000;  set_Ap = p.getRemainingAp()-30000;  }

			} else if(selection == 14) { //STR+all
				if(p.getRemainingAp() >= 1) { set_Str = p.getStr()+p.getRemainingAp(); set_Ap = p.getRemainingAp()-p.getRemainingAp(); }
			} else if(selection == 24) { //DEX+all
				if(p.getRemainingAp() >= 1) { set_Dex = p.getDex()+p.getRemainingAp(); set_Ap = p.getRemainingAp()-p.getRemainingAp(); }
			} else if(selection == 34) { //INT+all
				if(p.getRemainingAp() >= 1) { set_Int = p.getInt()+p.getRemainingAp(); set_Ap = p.getRemainingAp()-p.getRemainingAp(); }
			} else if(selection == 44) { //LUK+all
				if(p.getRemainingAp() >= 1) { set_Luk = p.getLuk()+p.getRemainingAp(); set_Ap = p.getRemainingAp()-p.getRemainingAp(); }

			} else if(selection == 15) { //STR-100
				if(set_Str >= 104) { set_Str = set_Str-100; set_Ap = p.getRemainingAp()+100; }
			} else if(selection == 94) { //STR-1000
				if(set_Str >= 1004) { set_Str = set_Str-1000; set_Ap = p.getRemainingAp()+1000; }
			} else if(selection == 25) { //DEX-100
				if(set_Dex >= 104) { set_Dex = set_Dex-100; set_Ap = p.getRemainingAp()+100; }
			} else if(selection == 95) { //DEX-1000
				if(set_Dex >= 1004) { set_Dex = set_Dex-1000; set_Ap = p.getRemainingAp()+1000; }
			} else if(selection == 35) { //INT-100
				if(set_Int >= 104) { set_Int = set_Int-100; set_Ap = p.getRemainingAp()+100; }
			} else if(selection == 96) { //INT-1000
				if(set_Int >= 1004) { set_Int = set_Int-1000; set_Ap = p.getRemainingAp()+1000; }
			} else if(selection == 45) { //LUK-100
				if(set_Luk >= 104) { set_Luk = set_Luk-100; set_Ap = p.getRemainingAp()+100; }
			} else if(selection == 97) { //LUK-1000
				if(set_Luk >= 1004) { set_Luk = set_Luk-1000; set_Ap = p.getRemainingAp()+1000; }

			} else if(selection == 16) { //STR-all
				if(set_Str > 4) { set_Ap = p.getRemainingAp()+set_Str-4; set_Str = 4; }
			} else if(selection == 26) { //DEX-all
				if(set_Dex > 4) { set_Ap = p.getRemainingAp()+set_Dex-4; set_Dex = 4; }
			} else if(selection == 36) { //INT-all
				if(set_Int > 4) { set_Ap = p.getRemainingAp()+set_Int-4; set_Int = 4; }
			} else if(selection == 46) { //LUK-all
				if(set_Luk > 4) { set_Ap = p.getRemainingAp()+set_Luk-4; set_Luk = 4; }

			} else if(selection == 0) { //Ŭ���߸��Ұ�� ������ �ؽ�Ʈ 
				cm.sendOk("#b�߸������̽��ϴ�. ��,��,��Ʈ,�� �� �����ž��մϴ�#k ");
				cm.dispose();
			}
			
			p.setStr (set_Str);
			p.setDex (set_Dex);
			p.setInt (set_Int);
			p.setLuk (set_Luk);
			p.setRemainingAp (set_Ap);
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(set_Str)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(set_Dex)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(set_Int)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(set_Luk)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(set_Ap)));
			p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
			cm.dispose();
		} else if(status == 2) { //3�� �޼��� 
			cm.dispose();
		}
	}
}	