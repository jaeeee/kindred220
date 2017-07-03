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
	var chat = "#rI sell items that do not sell at the current cache Shop\r\n\r\n#n"
	chat += "#L8##b[ hat ]\r\n";
	chat += "#L9##b[ One clothes ]\r\n";
	chat += "#L11##b[ Gloves ]\r\n";
	chat += "#L10##b[ Shoes ]\r\n";
	chat += "#L3##b[ weapon ]\r\n";
	chat += "#L2##b[ ring ]\r\n";
	chat += "#L4##b[ wing ]\r\n";
	chat += "#L12##b[ Face decoration ]\r\n";
	 //chat += "#L4##r[2]#b 놀라운 장비 강화주문서 - #i2049361# 1000개\r\n";
	 //chat += "#L6##r[5]#b 스탯공격력 200만 ↑ - 보스필드\r\n\r\n";

	    cm.sendSimple(chat);



		
         } else if (status == 1) {

	if (selection >= 99999) {
		cm.dispose();
	}
        else if (selection == 1) {
                var warpmain = "#bPremium hunting#kUnlike traditional hunting grounds #rQuick Level Up#kA place where you can experience. Hunting is available in accordance with the rating #eGeneral Membership hunting#nWow#eFellow hunting#nThere is. Would you like to hear an explanation of any hunting?\r\n";
                warpmain += "\r\n#L4##bPremium hunting#r(General) Information about #b.";
                warpmain += "\r\n#L5##bPremium hunting#r(Special)#bI hear a description of the..";
                cm.sendSimple(warpmain);

             } else if (selection == 2001) {
		cm.dispose();
		cm.enterCS();
		return;
	     } else if (selection == 10002) {
		cm.warp(910001000,0);
		cm.dispose();
	     } else if (selection == 2000) {
		cm.sendOk("#i4031683##b#t4031683#Way to obtain \r\n\r\n1. Hunt and eat the golden Maple Leaf\r\n2. Jaundice purchased from the store after clicking versatile cab \r\n3. Looking back, press the premium has been activated.");
		cm.dispose();
		return;
            } else if (selection == 2) {
cm.openShop(5533);
cm.dispose();

            } else if (selection == 11) {
cm.openShop(80807);
cm.dispose();
            } else if (selection == 12) {
cm.openShop(808082);
cm.dispose();




            } else if (selection == 3) { 
cm.openShop(60007);
cm.dispose();



            } else if (selection == 4) {
cm.openShop(808080);
cm.dispose();
           } else if (selection == 8) {
cm.openShop(1234);
cm.dispose();
           } else if (selection == 9) {
cm.openShop(8087);
cm.dispose();
           } else if (selection == 10) {
cm.openShop(8844);
cm.dispose();


            } else if (selection == 5) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("If you do not have a position in Paris is not possible.");
            cm.dispose();
            return;
}           if (!cm.isLeader()) {
                cm.sendOk("Zhang party may apply for the position.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("Party members must gather power here.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(957018000).getCharactersSize() > 0) {
             cm.sendOk("Already yiyongjung other users. Please use a different channel");
             cm.dispose();
             return;
    }
		if (cm.haveItem(4310027, 2000)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("Moving");
                                cm.TimeMoveMap(957018000, 100000000, 900);
			cm.gainItem(4310027, -2000);
			cm.dispose();
		    } else {
		        cm.sendOk("There is no empty space in the equipment compartment.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("Legend coin is low.");
		    cm.dispose();

}

            } if (selection == 6) {

       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("If you do not have a position in Paris is not possible.");
            cm.dispose();
            return;
}           if (!cm.isLeader()) {
                cm.sendOk("Zhang party may apply for the position.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("Party members must gather power here.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(240050200).getCharactersSize() > 0) {
             cm.sendOk("The yiyongjung a raid boss is already another user.\r\nJusigeona with another channel, please challenging after a while.");
             cm.dispose();
             return;
    }
		if (cm.haveItem(4310027, 2000)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("Moving");
                        cm.warp(272010200,0);
                        cm.gainItem(4310027, -2000);
			cm.dispose();
		    } else {
		        cm.sendOk("There is no empty space in the equipment compartment.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("Legend coin is low.");
		    cm.dispose();

}
             } else if (selection == 3017) {
		cm.gainItem(4031683, 100);
		cm.sendOk("#i4031683# Payment completion");
		cm.dispose();
}
        } else if (status == 2) {
	    if (selection == 9999) {
		cm.dispose();
		cm.openNpc(1022003);
            }else if (selection == 4) {
                var vlig = "#b#ePremium hunting#r(General) Information about #b.\r\n\r\n#r[Hunting basic information]\r\n　#kRecommended Levels #n: Lv.13 ~ Lv.200　　#eEntry costs #n: Methodist million\r\n\r\n#r#e[Monster-related information]\r\n　#kmonster #n: Lv.37 However henchmen hip-hop cats(HP : 150,000)\r\n　#eExperience #n: 30,000xExperience Scale\r\n\r\n#r#e[Additional service information]\r\n　#Cgray##nThe difficulty that can not accommodate any additional services.\r\n";
                cm.sendSimple(vlig);

            } else if (selection == 5) {
                var hunt = "#b#ePremium hunting#r(Special)#bInformation about.\r\n\r\n#r[Hunting basic information]\r\n#k　Recommended Levels #n: Lv.50 ~ Lv.250　　　#eEntry costs #n: 0 methods\r\n#r#eEntry conditions #n: #i4031683##bA token of the love of Maya have more than 1000\r\n\r\n#r#e[Monster-related information]\r\n#k#n　monster : Lv.37 Hip-hop cats only executive(HP: 15,000,000)\r\n　Experience: 200,000xExperience Scale\r\n\r\n#r#e[Additional service information]#k　(●: possible / ◎: impossible)\r\n●Reborn place　　●Use special shops";
                cm.sendSimple(hunt);

	    }

	    cm.dispose();
		}
    	}
}


