
var count;

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
		cm.sendOk("정상에 오신걸 축하 드립니다!");
		cm.dispose();
	 if (status == 1) {
		cm.gainItem(4310034,1);
		cm.dispose();
	}


	    }  if (selection == 9999) {
		    cm.dispose();

	    }  if (selection == 460) {
		if (cm.haveItem(4310027, 500)) {
		    if (cm.canHold(5062009)) {
		        cm.sendOk("레전드코인으로 신마북을 구매하였습니다.");

			cm.gainItem(4310027, -500);
			cm.gainItem(5062009, 50);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다.");
		    cm.dispose();

}


	    }  if (selection == 461) {
		if (cm.haveItem(4310027, 500)) {
		    if (cm.canHold(5062500)) {
		        cm.sendOk("레전드코인으로 큐브를 구매하였습니다.");

			cm.gainItem(4310027, -500);
			cm.gainItem(5062500, 100);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다.");
		    cm.dispose();

}

	    }  if (selection == 440) {
		if (cm.haveItem(4310027, 300)) {
		    if (cm.canHold(2290285)) {
		        cm.sendOk("레전드코인으로 신마북을 구매하였습니다.");

			cm.gainItem(4310027, -300);
			cm.gainItem(2290285, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다.");
		    cm.dispose();

}	
	    }  if (selection == 459) {
		if (cm.haveItem(4310027, 500)) {
		    if (cm.canHold(5062005)) {
		        cm.sendOk("레전드코인으로 큐브를 구매하였습니다.");

			cm.gainItem(4310027, -500);
			cm.gainItem(5062005, 100);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 500) {
		if (cm.haveItem(4310027, 100)) {
		    if (cm.canHold(5062005)) {
		        cm.sendOk("레전드코인으로 #z4310071#를 구매하였습니다.");

			cm.gainItem(4310027, -100);
			cm.gainItem(4310071, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 400) {
		if (cm.haveItem(4310027, 500)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("레전드코인으로 십자 코인을 구매하였습니다.");
			cm.gainItem(4310027, -500);
			cm.gainItem(4310029, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 1000) {
		if (cm.haveItem(4310027, 400)) {
		    if (cm.canHold(2049500)) {
			cm.gainItem(2049500,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -400);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 1001) {
		if (cm.haveItem(4310027, 500)) {
		    if (cm.canHold(2048301)) {
			cm.gainItem(2048301,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 418) {
		if (cm.haveItem(4310027, 2000)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("레전드코인으로 환생포인트를 구매하였습니다.");
			cm.getPlayer().addFame(100);
			cm.gainItem(4310027, -2000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 430) {
		if (cm.haveItem(4310027, 150)) {
		    if (cm.canHold(4031179)) {
		        cm.sendOk("레전드코인으로 환생포인트를 구매하였습니다.");
			cm.gainItem(4031179, 1);
			cm.gainItem(4310027, -150);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다.");
		    cm.dispose();

}


	    }  if (selection == 401) {
		if (cm.haveItem(4310027, 120)) {
		    if (cm.canHold(2049301)) {
			cm.gainItem(2049301,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -120);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 402) {
		if (cm.haveItem(4310027, 200)) {
		    if (cm.canHold(2049300)) {
			cm.gainItem(2049300,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -200);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 403) {
		if (cm.haveItem(4310027, 280)) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(2049100,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -280);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 404) {
		if (cm.haveItem(4310027, 360)) {
		    if (cm.canHold(2049116)) {
			cm.gainItem(2049116,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -360);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 405) {
		if (cm.haveItem(4310027, 120)) {
		    if (cm.canHold(2049401)) {
			cm.gainItem(2049401,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -120);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 406) {
		if (cm.haveItem(4310027, 280)) {
		    if (cm.canHold(2049400)) {
			cm.gainItem(2049400,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -280);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 407) {
		if (cm.haveItem(4310027, 360)) {
		    if (cm.canHold(2049700)) {
			cm.gainItem(2049700,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -360);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 408) {
		if (cm.haveItem(4310027, 500)) {
		    if (cm.canHold(2048305)) {
			cm.gainItem(2048305,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 409) {
		if (cm.haveItem(4310027, 200)) {
		    if (cm.canHold(2460003)) {
			cm.gainItem(2460003, 10);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -200);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 410) {
		if (cm.haveItem(4310027, 250)) {
		    if (cm.canHold(2470001)) {
			cm.gainItem(2470001,2);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -250);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 411) {
		if (cm.haveItem(4310027, 600)) {
		    if (cm.canHold(5064000)) {
			cm.gainItem(5064000,2);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -600);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 412) {
		if (cm.haveItem(4310027, 600)) {
		    if (cm.canHold(5064100)) {
			cm.gainItem(5064100,2);
		    cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -600);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 413) {
		if (cm.haveItem(4310027, 360)) {
		    if (cm.canHold(2048308)) {
			cm.gainItem(2048308,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -360);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 414) {
		if (cm.haveItem(4310027, 480)) {
		    if (cm.canHold(2048305)) {
			cm.gainItem(2048305,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -480);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 415) {
		if (cm.haveItem(4310027, 7000)) {
		    if (cm.canHold(1672003)) {
			cm.gainItem(1672003,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -7000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 416) {
		if (cm.haveItem(4310027, 8000)) {
		    if (cm.canHold(1672004)) {
			cm.gainItem(1672004,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -8000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 417) {
		if (cm.haveItem(4310027, 9000)) {
		    if (cm.canHold(1672005)) {
			cm.gainItem(1672005,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -9000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 420) {
		if (cm.haveItem(4310027, 8000)) {
		    if (cm.canHold(1532018)) {
			cm.gainItem(1532018,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -8000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}
}  if (selection == 421) {
		if (cm.haveItem(4310027, 9000)) {
		    if (cm.canHold(1522018)) {
			cm.gainItem(1522018,1);
		        cm.sendOk("레전드코인으로 아이템을 구매하였습니다.");
			cm.gainItem(4310027, -9000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드코인이 부족합니다");
		    cm.dispose();

}

		}
	}
}



