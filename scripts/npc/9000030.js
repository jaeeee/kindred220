
importPackage(Packages.packet.creators);
/*
    CelphisMs NPC 파일
*/


var status = 0;
var selected = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
 cm.dispose();
 return;
    }
    if (mode == 1)
 status++;
    else
 status--;
	if (status == 0) {
		if (cm.getPlayer().getMapId() != 940020000 && cm.getPlayer().getMapId() != 109090000) {
			cm.warp(940020000);
			cm.dispose();
		//} else if (cm.getPlayer().hasGmLevel(6)) {
                } else {
		cm.sendSimple("메이플 월드에 오신것을 환영합니다 무엇을 하시겠습니까?\r\n\r\n#b#L0##s100001264# PVP 전투장에 입장 하겠습니다. #s100001263##l\r\n\r\n#L1#         PVP 점수를 교환하고 싶습니다.        #l");
		}
   	} else if (status == 1) {
		selected = selection;
		if (selection == 0) {
			cm.sendYesNo("pvp는 최소 2명이 필요하며 원한다면 같이 싸우고싶은 사람끼리 파티를구성하여 연합전으로도 싸울수 있숩니다. 입장하시겟습니까?");
     		} else if (selection == 1) {
			cm.sendSimple("흠..어디보자.. 자네의 전투점수는 #r#e"+cm.getPlayer().getSpiritp()+"#n#k 점이군...\r\n어디 원하는 아이템을 골라보게나.\r\n#b#L19##l　　\r\n --------------------소비/기타류--------------------#k\r\n#L0##i4000313# 황금 단풍잎 100개 #r(25점)#k#l\r\n#L1##i4001126# 단풍잎 500개 #r(25점)#k#l\r\n#L2##i2431507# 파프니르무기 랜덤 보따리 1개 #r(35점)#k#l\r\n#L3##v2022856# 최대 HP/MP + 10000 #r(35점)#k#l\r\n#L4##i2431967# 크리티아스 데미지스킨 #r(44점)#k#l\r\n" + 
			"#L5##i2430529# 할로윈 깜짝 상자 x11 #r(40점)#k#l\r\n\r\n#b-----------------------장비류-----------------------\r\n#k#e#r<추가잠재>#k#dA+#k#r+#k#n:올텟30%/#e#rS#k#n:올텟50%/#e#rSS#k#n이상:올텟60%#l\r\n#L6##i1082147# #b#eB+#n#k 노가다 목장갑[올텟222/공마22] #r(49점)#k#l\r\n#L7##i1082148# #d#eA+#n#k 노가다 목장갑[올텟333/공마66] #r(111점)#k#l\r\n#L11##i1082146# #r#eS+#n#k 노가다 목장갑[올텟666/공마136] #r(255점)#k#l\r\n#L14##i1113070# #e#dA+#k#r+#k#n 스칼렛 링[올텟333/공마66] #r(155점)#k#l\r\n#L8##i1113055# #e#rS#k#n 마이스터링[올텟555/공마111] #r(255점)#k#l\r\n#L9##i1032200# #e#rS#k#n 마이스터 이어링[올텟555/공마111] #r(255점)#k#l\r\n#L10##i1152154# #e#rS#k#n 마이스터 숄더[올텟555/공마111]#r(255점)#k#l\r\n#L12##i1072381# #r#eSS#n#k 아란의 전투화[올텟1111/공마222] #r(555점)#k#l\r\n#L15##i1122280# #r#eSS+#n#k 영웅의 팬던트[올텟1999/공마199] #r(799점)#k#l\r\n#L13##i1003721# #r#eSSS#n#k 여왕의 티아라[올텟2222/공마444] #r(888점)#k#l");
		}
	} else if (status == 2) {
		if (selected == 0) {
			if (cm.getMap().getCharactersSize() >= 1 && cm.getParty().getMembers().size() >= 1 && cm.getPlayer().getMapId() == 940020000) {
			// if (cm.getPlayer().getMapId() != 940020000) {
				if (!cm.getMap().getCharactersSize() > 0) {
					cm.sendOk("이미 다른 분이 도전하고 있습니다. 끋날때까지 기다려주세요");
				} else {
					cm.startBatch();
					cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("aswan/stageEff/stage"));
					cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("aswan/stageEff/number/1"));
				}
			} else {
				cm.sendOk("2명 이상이 아니거나 당신이 파티를 만들지 않으셨습니다.");
			}
		} else if (selected == 1) {
			switch(selection) {
				case 0: {
					if (cm.getPlayer().getSpiritp() >= 25) {
						cm.getPlayer().addSpiritPoint(-25);
						cm.gainItem(4000313, 100);	
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
	}
         break;
				case 1: {
					if (cm.getPlayer().getSpiritp() >= 25) {
						cm.getPlayer().addSpiritPoint(-25);
						cm.gainItem(4001126, 500);
		       cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 2: {
					if (cm.getPlayer().getSpiritp() >= 35) {
						cm.gainItem(2431507, 1);
						cm.getPlayer().addSpiritPoint(-35);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 3: {
					if (cm.getPlayer().getSpiritp() >= 35) {
							var jessh = cm.getPlayer().getStat().getMaxHp() + 10000;
		          var jessm = cm.getPlayer().getStat().getMaxMp() + 10000;
		       cm.getPlayer().addSpiritPoint(-35);
		       cm.getPlayer().getStat().setMaxHp(jessh);
		       cm.getPlayer().getStat().setMaxMp(jessm);
		       cm.getPlayer().saveToDB(false, false);
		       cm.reloadChar();
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 4: {
					if (cm.getPlayer().getSpiritp() >= 44) {
						cm.getPlayer().addSpiritPoint(-44);
						cm.gainItem(2431967, 1);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 5: {
					if (cm.getPlayer().getSpiritp() >= 30) {
						cm.gainItem(2430529,11);
							cm.getPlayer().addSpiritPoint(-30);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 6: {
					if (cm.getPlayer().getSpiritp() >= 49) {
       makeSponserItem(1082147,222,22,0,0,0,0,0);
						cm.getPlayer().addSpiritPoint(-49);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 7: {
					if (cm.getPlayer().getSpiritp() >= 111) {
						makeSponserItem(1082148,333,66,0,0,0,0,0);
						cm.getPlayer().addSpiritPoint(-111);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 8: {
					if (cm.getPlayer().getSpiritp() >= 255) {
						makeSponserItem(1113055,555,111,20,3,60002,60002,60005);
						cm.getPlayer().addSpiritPoint(-255);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 9: {
					if (cm.getPlayer().getSpiritp() >= 255) {
						makeSponserItem(1032200,555,111,20,3,60002,60002,60005);
						cm.getPlayer().addSpiritPoint(-255);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 10: {
					if (cm.getPlayer().getSpiritp() >= 255) {
						makeSponserItem(1152154,555,111,20,3,60002,60002,60005);
						cm.getPlayer().addSpiritPoint(-255);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 11: {
					if (cm.getPlayer().getSpiritp() >= 255) {
						makeSponserItem(1082146,666,132,20,3,60002,60002,60005);
						cm.getPlayer().addSpiritPoint(-255);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 12: {
					if (cm.getPlayer().getSpiritp() >= 555) {
					  cm.sendOk("정상적으로 지급이 완료되었습니다.");
						makeSponserItem(1072381,1111,222,20,3,60002,60002,60002);
            cm.getPlayer().addSpiritPoint(-555);
						} else {
						cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 13: {
					if (cm.getPlayer().getSpiritp() >= 888) {
					  cm.sendOk("정상적으로 지급이 완료되었습니다.");
						makeSponserItem(1003721,2222,444,20,3,60002,60002,60002);
            cm.getPlayer().addSpiritPoint(-888);
						} else {
						cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 14: {
					if (cm.getPlayer().getSpiritp() >= 155) {
						makeSponserItem(1113070,333,66,19,1,60002,60005,0);
						cm.getPlayer().addSpiritPoint(-155);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
				case 15: {
					if (cm.getPlayer().getSpiritp() >= 799) {
						makeSponserItem(1122280,1999,199,20,3,60002,60002,60002);
						cm.getPlayer().addSpiritPoint(-799);
									cm.sendOk("정상적으로 지급이 완료되었습니다.");} else {cm.sendOk("자네는 전투점수가 부족하군.. 열심히 싸워서 전투점수를 더 모은다음 다시오게.");
					}
				}
				break;
			}
		}
		cm.dispose();
	}
 }
 
function makeSponserItem(itemid,allstat,atk,state,line,jam,gam,zam) {
	var ii = Packages.server.items.ItemInformation.getInstance();
	var item = ii.getEquipById(itemid);
	item.setStr(allstat);
	item.setDex(allstat);
	item.setInt(allstat);
	item.setLuk(allstat);
	item.setWatk(atk);
	item.setMatk(atk);
  item.setState(state);
	item.setLines(line);
	item.setPotential1(jam);
	item.setPotential2(gam);
	item.setPotential3(zam);
  item.setOwner(cm.getPlayer().getName());
	Packages.server.items.InventoryManipulator.addFromDrop(cm.getC(),item,false);
}