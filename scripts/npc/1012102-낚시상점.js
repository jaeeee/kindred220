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

			var chat = "낚시용품 상점입니다.#b\r\n";
			chat += "허가증과 음치를 구매하신뒤, 일반공격을 하시면 낚시가 됩니다."
			chat += "\r\n#L418##i3991024##i3991004##i3991000##i3991013##i3991004#  - #i4310034##t4310034#(3개)";
			chat += "\r\n#L500##i3991002##i3991014##i3991008##i3991013#  - #i4310034##t4310034#(2개)";
			chat += "\r\n#L502##i3991005##i3991000##i3991010##i3991004#  - #i4310034##t4310034#(2개)";
			chat += "\r\n#L501##i3010376##i3010377# - #i3010375##z3010375#";
			chat += "\r\n#L410##i4310015# (20개) - #i4031383##t4031383#(1개)";
			chat += "\r\n#L411##i4310015#를  #i4001187##t4001187#로 교환(1 : 5)";
			cm.sendSimple(chat);

			// 5,0,10,4
		} else if (status == 1) {
			if (selection == 501) {
				if (cm.haveItem(3010376, 1) && cm.haveItem(3010377, 1)) {
					if (cm.canHold(3010376) && cm.canHold(3010377)) {
						cm
								.sendOk("#i3010376# 과 #i3010377#를 #i3010375#으로 교환하셨습니다.");
						cm.gainItem(3010376, -1);
						cm.gainItem(3010377, -1);
						cm.gainItem(3010375, 1);

						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("#i3010376##i3010377#중에 부족한 아이템이 있습니다.");
					cm.dispose();

				}
			}
			if (selection == 418) {
				if (cm.haveItem(3991000, 1) && cm.haveItem(3991024, 1)
						&& cm.haveItem(3991004, 2) && cm.haveItem(3991013, 1)) {
					if (cm.canHold(3991000) && cm.canHold(3991024)
							&& cm.canHold(3991004) && cm.canHold(3991013)
							&& cm.canHold(3991024)) {
						cm
								.sendOk("#i3991024##i3991004##i3991000##i3991013##i3991004# 을 #i4310034# 3개로 교환하셨습니다.");
						cm.gainItem(3991000, -1);
						cm.gainItem(3991024, -1);
						cm.gainItem(3991004, -2);
						cm.gainItem(3991013, -1);
						cm.gainItem(4310034, 3);

						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm
							.sendOk("#i3991024##i3991004##i3991000##i3991013##i3991004#중에 부족한 알파벳이 있습니다.");
					cm.dispose();

				}

			}
			if (selection == 500) {
				if (cm.haveItem(3991002, 1) && cm.haveItem(3991014, 1)
						&& cm.haveItem(3991008, 1) && cm.haveItem(3991013, 1)) {
					if (cm.canHold(3991002) && cm.canHold(3991014)
							&& cm.canHold(3991008) && cm.canHold(3991013)) {
						cm
								.sendOk("#i3991002##i3991014##i3991008##i3991013# 을 #i4310034# 2개로 교환하셨습니다.");
						cm.gainItem(4310034, 2);
						cm.gainItem(3991002, -1);
						cm.gainItem(3991014, -1);
						cm.gainItem(3991008, -1);
						cm.gainItem(3991013, -1);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm
							.sendOk("#i3991002##i3991014##i3991008##i3991013#중에 부족한 알파벳이 있습니다.");
					cm.dispose();

				}
			}
			if (selection == 502) {
				if (cm.haveItem(3991005, 1) && cm.haveItem(3991000, 1)
						&& cm.haveItem(3991010, 1) && cm.haveItem(3991004, 1)) {
					if (cm.canHold(3991005) && cm.canHold(3991000)
							&& cm.canHold(3991010) && cm.canHold(3991004)) {
						cm
								.sendOk("#i3991005##i3991000##i3991010##i3991004# 을 #i4310034# 2개로 교환하셨습니다.");
						cm.gainItem(4310034, 2);
						cm.gainItem(3991005, -1);
						cm.gainItem(3991000, -1);
						cm.gainItem(3991010, -1);
						cm.gainItem(3991004, -1);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm
							.sendOk("#i3991005##i3991000##i3991010##i3991004#중에 부족한 알파벳이 있습니다.");
					cm.dispose();

				}

			}
			if (selection == 401) {
				if (cm.haveItem(4310015, 60)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(2049301, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -60);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 402) {
				if (cm.haveItem(4310015, 100)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(2049300, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -100);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 403) {
				if (cm.haveItem(4310015, 140)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(2049100, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -140);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 404) {
				if (cm.haveItem(4310015, 180)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(2049116, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -180);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 405) {
				if (cm.haveItem(4310015, 60)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(2049401, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -60);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 406) {
				if (cm.haveItem(4310015, 140)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(2049400, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -140);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 407) {
				if (cm.haveItem(4310015, 180)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(2049700, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -180);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 408) {
				if (cm.haveItem(4310015, 200)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(4001017, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -200);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 409) {
				if (cm.haveItem(4310015, 100)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(2460003, 50);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -100);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 410) {
				if (cm.haveItem(4310015, 20)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(4031383, 1);
						cm.sendOk("투신의증표로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -20);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}

			}
			if (selection == 411) {
				cm
						.sendGetNumber(
								"#b투신의 증표#k 몇개를 #b음치#k로 교환하시겠습니까?\r\n#Cgray#배율 - 1 : 5",
								1, 1, cm.itemQuantity(4310015));
			}
			if (selection == 412) {
				if (cm.haveItem(4310015, 5)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(4001187, 25);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -5);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 413) {
				if (cm.haveItem(4310015, 10)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(4001187, 55);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -10);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 414) {
				if (cm.haveItem(4310015, 4000)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(1672002, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -4000);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 415) {
				if (cm.haveItem(4310015, 5000)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(1672003, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -5000);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 416) {
				if (cm.haveItem(4310015, 6000)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(1672004, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -6000);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 417) {
				if (cm.haveItem(4310015, 7000)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(1672005, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -7000);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 420) {
				if (cm.haveItem(4310015, 6000)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(1532018, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -6000);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
			if (selection == 421) {
				if (cm.haveItem(4310015, 6000)) {
					if (cm.canHold(4310015)) {
						cm.gainItem(1522018, 1);
						cm.sendOk("투신의증표으로 아이템을 구매하였습니다.");
						cm.gainItem(4310015, -6000);
						cm.dispose();
					} else {
						cm.sendOk("인벤토리에 빈 공간이 없습니다.");
						cm.dispose();
					}
				} else {
					cm.sendOk("투신의증표가 부족합니다");
					cm.dispose();

				}
			}
		}else if(status==2){
			cm.gainItem(4310015, -selection);
			cm.gainItem(4001187, selection*5)
			cm.sendOk("#b투신의 증표#k"+selection+"개를 #b음치#k "+selection*5+"개로 교환하셨습니다.");
			cm.dispose();
		}
	}
}
