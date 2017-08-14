/*@
@
@    NPC = Mr. Oh
@    Map =  MAP
@    NPC MapId = MAPID
@    Function = All in one Shop
@
*/


var status = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
	cm.sendSimple ("General Store:#e#d" +
                 "#k\r\n#L80##rMagician Equips" +
                 "#k\r\n#L81##rThief Equips" +
                 "#k\r\n#L82##rWarrior Equips" +
                 "#k\r\n#L83##rArcher Equips" +
                 "#k\r\n#L84##rPirate Equips" +
				 "#k\r\n#L500##bFree Potions" + 
	//"#k\r\n#L501##gExchange NPC");
                 "#k\r\n#L85##rCommon Equips" +
                 "#k\r\n#L87##rCash Items");
//                 "#k\r\n#L88##rBuy NX Cash" +
//                 "#k\r\n#L86##rETC");
	  } else if (selection == 80) {//Magic
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L0##rMagican Shoes" +
			"#k\r\n#L1##rMagican Overalls" +
			"#k\r\n#L2##rMagican Gloves" +
			"#k\r\n#L3##rMagican Hats" +
			"#k\r\n#L4##rMagican Shields" +
			"#k\r\n#L5##rMagican and Common Wands" +
			"#k\r\n#L122##rMagican Medals" +
			"#k\r\n#L123##rMagican Face" +
			"#k\r\n#L124##rMagican Cape" +
			"#k\r\n#L125##rMagican Top" +
			"#k\r\n#L126##rMagican Bottom" +
			"#k\r\n#L127##rMagican IDK" +
			"#k\r\n#L6##rMagican and Common Staffs");
	  } else if (selection == 81) {//Theif
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L7##bThief Shoes" +
			"#k\r\n#L8##bThief Bottoms" +
			"#k\r\n#L9##bThief Tops" +
			"#k\r\n#L10##bThief Overalls" +
			"#l\r\n#L11##bThief Gloves" +
			"#l\r\n#L12##bThief Hats" +
			"#l\r\n#L13##bThief Shields" +
			"#l\r\n#L14##bThief and Common Daggers" +
			"#k\r\n#L15##bThief and Common Claws" +
			"#l\r\n#L128##bThief Cape" +
			"#l\r\n#L129##bThief IDK" +
			"#l\r\n#L130##bThief Cane" +
			"#k\r\n#L16##bThief Throwing Stars");
	  } else if (selection == 82) {//Warrior
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L17##dWarrior Shoes" +
			"#k\r\n#L18##dWarrior Bottom" +
			"#k\r\n#L19##dWarrior Top" +
			"#k\r\n#L20##dWarrior Overalls" +
			"#k\r\n#L21##dWarrior Gloves" +
			"#k\r\n#L22##dWarrior Hats" +
			"#k\r\n#L23##dWarrior Shields" +
			"#k\r\n#L24##dWarrior and Common One-Handed Axes" +
			"#k\r\n#L25##dWarrior and Common Two-Handed Axes" +
			"#k\r\n#L26##dWarrior and Common One-Handed BWs" +
			"#k\r\n#L27##dWarrior and Common Two-Handed BWs" +
			"#k\r\n#L28##dWarrior and Common One-Handed Swords" +
			"#k\r\n#L29##dWarrior and Common Two-Handed Swords" +
			"#k\r\n#L30##dWarrior and Common Spears" +
			"#k\r\n#L131##dWarrior Cape" +
			"#k\r\n#L132##dWarrior IDK" +
			"#k\r\n#L133##dWarrior Medal" +
			"#k\r\n#L31##dWarrior and Common Pole Arms");
	  } else if (selection == 83) {//Archer
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L32##gArcher Shoes" +
			"#k\r\n#L33##gArcher Overalls" +
			"#k\r\n#L34##gArcher Gloves" +
			"#k\r\n#L35##gArcher Hats" +
			"#k\r\n#L36##gArcher and Common Bows" +
			"#k\r\n#L37##gArcher and Common Crossbows" +
			"#k\r\n#L134##gArcher Dual Bow Guns" +
			"#k\r\n#L135##gArcher IDK" +
			"#k\r\n#L136##gArcher Bottom" +
			"#k\r\n#L137##gArcher Top" +
			"#k\r\n#L138##gArcher Cape" +
			"#k\r\n#L139##gArcher Face" +
			"#k\r\n#L140##gArcher Medal");
//			"#k\r\n#L38##gArcher Arrows");
	  } else if (selection == 84) {//Pirate
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L76##bPirate Hats" +
			"#k\r\n#L71##bPirate Weapons" +
			"#k\r\n#L72##bPirate Bullets and Capsules" +
			"#k\r\n#L73##bPirate Overalls" +
			"#k\r\n#L74##bPirate Gloves" +
			"#k\r\n#L141##bPirate Cannon" +
			"#k\r\n#L142##bPirate Knuckle" +
			"#k\r\n#L143##bPirate Gun" +
			"#k\r\n#L144##bPirate IDK" +
			"#k\r\n#L145##bPirate Bottom" +
			"#k\r\n#L146##bPirate TOP" +
			"#k\r\n#L147##bPirate Cape" +
			"#k\r\n#L148##bPirate Face" +
			"#k\r\n#L149##bPirate Medal" +
			"#k\r\n#L75##bPirate Shoes");
	  } else if (selection == 85) {//Common
               cm.sendSimple ("Pick a Category #e#d" +
//			"#k\r\n#L39#Maple Weapons" +
			"\r\n#L40#Earrings" +
			"\r\n#L41#Necklaces and Face Accessories" +
			"\r\n#L121#BareHands" +
			"\r\n#L120#Cane" +
			"\r\n#L119#Cannon" +
			"\r\n#L118#Dual Bow" +
			"\r\n#L117#Pick Axe" +
//			"\r\n#L116#Shovel" +
			"\r\n#L115#Wand" +
			"\r\n#L114#Sword2H" +
			"\r\n#L113#Sword1H" +
			"\r\n#L112#Spear" +
			"\r\n#L111#Pole Arm" +
			"\r\n#L110#Dagger" +
			"\r\n#L109#CLAW " +
			"\r\n#L108#BLUNT2H" +
			"\r\n#L107#BLUNT1H" +
			"\r\n#L101#AXE2H" +
			"\r\n#L102#AXE1H " +
			"\r\n#L103#More Accessories" +
			"\r\n#L104#Common Bottoms" +
			"\r\n#L105#Common Tops" +
			"\r\n#L106#Medals Shop" +
			"\r\n#L42#Capes" +
			"\r\n#L43#Common Shoes" +
			"\r\n#L44#Common Hats" +
			"\r\n#L45#Common Gloves" +
			"\r\n#L46#Common Overalls" +
			"\r\n#L47#Common Shields");
//			"\r\n#L48#Level 0 Weapons");
	  } else if (selection == 86) {//ETC
               cm.sendSimple ("Pick a Category #e#d" +
			"\r\n#L50#Super Megaphones, Gachapon Tickets, Rocks, and Morphs" +
			"\r\n#L51#Buffs and Potions" +
			"\r\n#L52#Boss Pieces" +
			"\r\n#L57#Chairs" +
			"\r\n#L53#Mounts");
	  } else if (selection == 87) {//Cash
               cm.sendSimple ("Pick a Category #e#d" +
//			"\r\n#L55#All Pets" +
//			"\r\n#L56#All Pet Equips, Pet Food, Scrolls, Books" +
			"\r\n#L59#Cash Capes<v197KMS>" +
//			"\r\n#L60#Cash Gloves" +
//			"\r\n#L61#Cash Shields" +
//			"\r\n#L62#Rings" +
			"\r\n#L150#Hats" +
//			"\r\n#L151#Weapons Bugged Dont Click on" +
//			"\r\n#L63#Fun Equips" +
			"\r\n#L152#Overalls<v197KMS>" +
//			"\r\n#L64#Emotion" +
			"\r\n#L65#Cash Earrings" +
			"\r\n#L66#Eye Accessories" +
			"\r\n#L67#Face Accessories");
//			"\r\n#L68#Effects");
//			"\r\n#L69#Cash Throwing Stars" +
//			"\r\n#L70#Messengers");
	  } else if (selection == 0) {
		cm.openShop (10205);
		cm.dispose();
	  } else if (selection == 1) {
		cm.openShop (100209);
		cm.dispose();
	  } else if (selection == 2) {
		cm.openShop (100208);
		cm.dispose();
	  } else if (selection == 3) {
		cm.openShop (10201);
		cm.dispose();
	  } else if (selection == 4) {
		cm.openShop (10212);
		cm.dispose();
	  } else if (selection == 5) {
		cm.openShop (10231);
		cm.dispose();
	  } else if (selection == 6) {
		cm.openShop (10228);
		cm.dispose();
			  } else if (selection == 122) {
		cm.openShop (10200);
		cm.dispose();
			  } else if (selection == 123) {
		cm.openShop (10202);
		cm.dispose();
			  } else if (selection == 124) {
		cm.openShop (10206);
		cm.dispose();
			  } else if (selection == 125) {
		cm.openShop (10207);
		cm.dispose();
			  } else if (selection == 126) {
		cm.openShop (10210);
		cm.dispose();
			  } else if (selection == 127) {
		cm.openShop (10213);
		cm.dispose();
	  } else if (selection == 7) {
		cm.openShop (10405);
		cm.dispose();
	  } else if (selection == 8) {
		cm.openShop (10410);
		cm.dispose();
	  } else if (selection == 9) {
		cm.openShop (10407);
		cm.dispose();
	  } else if (selection == 10) {
		cm.openShop (10409);
		cm.dispose();
	  } else if (selection == 11) {
		cm.openShop (10408);
		cm.dispose();
	  } else if (selection == 12) {
		cm.openShop (10401);
		cm.dispose();
	  } else if (selection == 13) {
		cm.openShop (10412);
		cm.dispose();
	  } else if (selection == 14) {
		cm.openShop (10423);
		cm.dispose();
	  } else if (selection == 15) {
		cm.openShop (10421);
		cm.dispose();
	  } else if (selection == 16) {
		cm.openShop (10038);
		cm.dispose();
			  } else if (selection == 128) {
		cm.openShop (10406);
		cm.dispose();
			  } else if (selection == 129) {
		cm.openShop (10413);
		cm.dispose();
			  } else if (selection == 130) {
		cm.openShop (10436);
		cm.dispose();
	  } else if (selection == 17) {
		cm.openShop (10105);
		cm.dispose();
	  } else if (selection == 18) {
		cm.openShop (10110);
		cm.dispose();
	  } else if (selection == 19) {
		cm.openShop (10107);
		cm.dispose();
	  } else if (selection == 20) {
		cm.openShop (10109);
		cm.dispose();
	  } else if (selection == 21) {
		cm.openShop (10108);
		cm.dispose();
	  } else if (selection == 22) {
		cm.openShop (10101);
		cm.dispose();
	  } else if (selection == 23) {
		cm.openShop (10112);
		cm.dispose();
	  } else if (selection == 24) {
		cm.openShop (10116);
		cm.dispose();
	  } else if (selection == 25) {
		cm.openShop (10117);
		cm.dispose();
	  } else if (selection == 26) {
		cm.openShop (10118);
		cm.dispose();
	  } else if (selection == 27) {
		cm.openShop (10119);
		cm.dispose();
	  } else if (selection == 28) {
		cm.openShop (10129);
		cm.dispose();
	  } else if (selection == 29) {
		cm.openShop (10130);
		cm.dispose();
	  } else if (selection == 30) {
		cm.openShop (10127);
		cm.dispose();
	  } else if (selection == 31) {
		cm.openShop (10126);
		cm.dispose();
			  } else if (selection == 131) {
		cm.openShop (10106);
		cm.dispose();
			  } else if (selection == 132) {
		cm.openShop (10113);
		cm.dispose();
			  } else if (selection == 133) {
		cm.openShop (10100);
		cm.dispose();
	  } else if (selection == 32) {
		cm.openShop (10305);
		cm.dispose();
	  } else if (selection == 33) {
		cm.openShop (10309);
		cm.dispose();
	  } else if (selection == 34) {
		cm.openShop (10308);
		cm.dispose();
	  } else if (selection == 35) {
		cm.openShop (10301);
		cm.dispose();
	  } else if (selection == 36) {
		cm.openShop (10320);
		cm.dispose();
	  } else if (selection == 37) {
		cm.openShop (10322);
		cm.dispose();
	  } else if (selection == 38) {
		cm.openShop (10037);
		cm.dispose();
			  } else if (selection == 134) {
		cm.openShop (10334);
		cm.dispose();
			  } else if (selection == 135) {
		cm.openShop (10313);
		cm.dispose();
			  } else if (selection == 136) {
		cm.openShop (10310);
		cm.dispose();
			  } else if (selection == 137) {
		cm.openShop (10307);
		cm.dispose();
			  } else if (selection == 138) {
		cm.openShop (10306);
		cm.dispose();
			  } else if (selection == 139) {
		cm.openShop (10302);
		cm.dispose();
			  } else if (selection == 140) {
		cm.openShop (10300);
		cm.dispose();
	  } else if (selection == 39) {
		cm.openShop (10051);
		cm.dispose();
	  } else if (selection == 40) {
		cm.openShop (10004);
		cm.dispose();
	  } else if (selection == 41) {
		cm.openShop (10002);
		cm.dispose();
	  } else if (selection == 42) {
		cm.openShop (10006);
		cm.dispose();
	  } else if (selection == 43) {
		cm.openShop (10005);
		cm.dispose();
	  } else if (selection == 44) {
		cm.openShop (10001);
		cm.dispose();
	  } else if (selection == 45) {
		cm.openShop (10008);
		cm.dispose();
	  } else if (selection == 46) {
		cm.openShop (10009);
		cm.dispose();
	  } else if (selection == 47) {
		cm.openShop (10012);
		cm.dispose();
			  } else if (selection == 101) {
		cm.openShop (10017);
		cm.dispose();
			  } else if (selection == 102) {
		cm.openShop (10016);
		cm.dispose();
			  } else if (selection == 103) {
		cm.openShop (10013);
		cm.dispose();
			  } else if (selection == 104) {
		cm.openShop (10010);
		cm.dispose();
			  } else if (selection == 105) {
		cm.openShop (10007);
		cm.dispose();
			  } else if (selection == 106) {
		cm.openShop (10000);
		cm.dispose();
			  } else if (selection == 107) {
		cm.openShop (10018);
		cm.dispose();
			  } else if (selection == 108) {
		cm.openShop (10019);
		cm.dispose();
			  } else if (selection == 109) {
		cm.openShop (10021);
		cm.dispose();
			  } else if (selection == 110) {
		cm.openShop (10023);
		cm.dispose();
			  } else if (selection == 111) {
		cm.openShop (10026);
		cm.dispose();
			  } else if (selection == 112) {
		cm.openShop (10027);
		cm.dispose();
			  } else if (selection == 113) {
		cm.openShop (10029);
		cm.dispose();
			  } else if (selection == 114) {
		cm.openShop (10030);
		cm.dispose();
			  } else if (selection == 115) {
		cm.openShop (10031);
		cm.dispose();
			  } else if (selection == 116) {
		cm.openShop (10032);
		cm.dispose();
			  } else if (selection == 117) {
		cm.openShop (10033);
		cm.dispose();
			  } else if (selection == 118) {
		cm.openShop (10034);
		cm.dispose();
			  } else if (selection == 119) {
		cm.openShop (10035);
		cm.dispose();
			  } else if (selection == 120) {
		cm.openShop (10036);
		cm.dispose();
			  } else if (selection == 121) {
		cm.openShop (10039);
		cm.dispose();
	  } else if (selection == 48) {
		cm.openShop (10047);
		cm.dispose();
	  } else if (selection == 49) {
		cm.openShop (10048);
		cm.dispose();
	  } else if (selection == 50) {
		cm.openShop (10048);
		cm.dispose();
	  } else if (selection == 51) {
		cm.openShop (10049);
		cm.dispose();
	  } else if (selection == 52) {
		cm.openShop (10050);
		cm.dispose();
	  } else if (selection == 53) {
		cm.openShop (10052);
		cm.dispose();
	  } else if (selection == 54) {
		cm.openShop (10053);
		cm.dispose();
	  } else if (selection == 55) {
		cm.openShop (10054);
		cm.dispose();
	  } else if (selection == 56) {
		cm.openShop (10055);
		cm.dispose();
	  } else if (selection == 57) {
		cm.openShop (10056);
		cm.dispose();
	  } else if (selection == 58) {
		cm.openShop (10057);
		cm.dispose();
                } else if (selection == 59) {
		cm.openShop (10606);
		cm.dispose();
                } else if (selection == 60) {
		cm.openShop (10059);
		cm.dispose();
                } else if (selection == 61) {
		cm.openShop (10060);
		cm.dispose();
                } else if (selection == 62) {
		cm.openShop (10061);
		cm.dispose();
                } else if (selection == 63) {
		cm.openShop (10062);
		cm.dispose();
                } else if (selection == 64) {
		cm.openShop (10063);
		cm.dispose();
                } else if (selection == 65) {
		cm.openShop (10604);
		cm.dispose();
                } else if (selection == 66) {
		cm.openShop (10603);
		cm.dispose();
                } else if (selection == 67) {
		cm.openShop (10602);
		cm.dispose();
                } else if (selection == 68) {
		cm.openShop (10067);
		cm.dispose();
                } else if (selection == 69) {
		cm.openShop (10068);
		cm.dispose();
		        } else if (selection == 150) {
		cm.openShop (10601);
		cm.dispose();
		        } else if (selection == 151) {
		cm.openShop (10615);
		cm.dispose();
		        } else if (selection == 152) {
		cm.openShop (10609);
		cm.dispose();
                } else if (selection == 70) {
		cm.openShop (10069);
		cm.dispose();
                } else if (selection == 71) {
		cm.openShop (10515);
		cm.dispose();
                } else if (selection == 72) {
		cm.openShop (13001);
		cm.dispose();
                } else if (selection == 73) {
		cm.openShop (10509);
		cm.dispose();
                } else if (selection == 74) {
		cm.openShop (10508);
		cm.dispose();
                } else if (selection == 75) {
		cm.openShop (10505);
		cm.dispose();
                } else if (selection == 76) {
		cm.openShop (10501);
		cm.dispose();
		                } else if (selection == 141) {
		cm.openShop (10535);
		cm.dispose();
		                } else if (selection == 142) {
		cm.openShop (10525);
		cm.dispose();
		                } else if (selection == 144) {
		cm.openShop (10513);
		cm.dispose();
		                } else if (selection == 145) {
		cm.openShop (10510);
		cm.dispose();
		                } else if (selection == 146) {
		cm.openShop (10507);
		cm.dispose();
		                } else if (selection == 147) {
		cm.openShop (10506);
		cm.dispose();
		                } else if (selection == 148) {
		cm.openShop (10502);
		cm.dispose();
		                } else if (selection == 149) {
		cm.openShop (10500);
		cm.dispose();
						} else if (selection == 500) {
							cm.gainItem(2000005, 300);
							cm.gainItem(2050004, 100);
							cm.dispose();
						} else if (selection == 501) {
					//todo
							cm.dispose();
	  } else if (selection == 88) {
                cm.sendSimple ("How much would you like?#e#d" +
                 "#k\r\n#L89##r10k NX Cash for 5m Mesos" +
                 "#k\r\n#L90##r20k NX Cash for 10m Mesos" +
                 "#k\r\n#L91##r30k NX Cash for 15m Mesos" +
                 "#k\r\n#L92##r40k NX Cash for 20m Mesos" +
                 "#k\r\n#L93##r50k NX Cash for 25m Mesos");
                } else if (selection == 89) {
		if (cm.getMeso < 5000000) {
                   cm.sendOk ("Please check to see if you have enough #rMesos#k");
                   cm.dispose();
                     } else {
                   cm.gainMeso (10000000);
                   cm.modifyNX(10000,4);
                   cm.dispose();
                   }
                } else if (selection == 90) {
		if (cm.getMeso < 10000000) {
                   cm.sendOk ("Please check to see if you have enough #rMesos#k");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-10000000);
                   cm.modifyNX(20000,4);
                   cm.dispose();
                   }
                } else if (selection == 91) {
		if (cm.getMeso < 15000000) {
                   cm.sendOk ("Please check to see if you have enough #rMesos#k");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-15000000);
                   cm.modifyNX(30000,4);
                   cm.dispose();
                   }
                } else if (selection == 92) {
		if (cm.getMeso < 20000000) {
                   cm.sendOk ("Please check to see if you have enough #rMesos#k");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-20000000);
                   cm.modifyNX(40000,4);
                   cm.dispose();
                   }
                } else if (selection == 93) {
		if (cm.getMeso < 25000000) {
                   cm.sendOk ("Please check to see if you have enough #rMesos#k");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-25000000);
                   cm.modifyNX(50000,4);
                   cm.dispose();
                   }
      }
}
}