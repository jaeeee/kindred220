/** 
 * 
 * @author Daniel
 * Starting NPC for Kindred.
 * @version 1.0
 * Identifier = 2008.js
 */

var ref =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 1000, 1000, 1000, 1000, 5000,  2000, 2001, 2002, 2003, 2004, 2005, 3000, 3000, 3000, 3001, 3002, 3001, 6000, 6001, 10000];
var jobs = [100, 100, 100, 200, 200, 200, 300, 300, 400, 400, 400, 500, 500, 501, 1100, 1200, 1300, 1400, 1500, 5100, 2100, 2200, 2300, 2400, 2700, 2500, 3200, 3300, 3500, 3100, 3600, 3101, 6100, 6500, 10112];
var keys= [110, 120, 130, 210, 220, 230, 310, 320, 410, 420, 430, 510, 520, 530, 1110, 1210, 1310, 1410, 1510, 5110, 2110, 2210, 2310, 2410, 2710, 2510, 3210, 3310, 3510, 3110, 3610, 3120, 6110, 6510, 10100];
var status = 0; 

function start() {
	if (cm.getJob() == 10100 || cm.getJob() == 10112 || cm.getPlayer().getLevel() > 9) {
			cm.warp(100000000);
			cm.dispose();
	} else {
	cm.sendSimple("Welcome to Kindred! Please pick a class. \r\n \r\n"
	+ "#b Explorers: #k \r\n"
	+ "#L0# Hero \r\n"
	+ "#L1# Paladin \r\n"
	+ "#L2# Dark Knight \r\n"
	+ "#L3# F/P Arch Mage \r\n"
	+ "#L4# I/L Arch Mage \r\n"
	+ "#L5# Bishop \r\n"
	+ "#L6# Bowmaster \r\n"
	+ "#L7# Marksman \r\n"
	+ "#L8# Night Lord \r\n"
	+ "#L9# Shadower \r\n"
	+ "#L10# Blade Master \r\n"
	+ "#L11# Buccaneer \r\n"
	+ "#L12# Corsair \r\n"
	+ "#L13# Cannoneer #l \r\n \r\n"
	+ "#b Cygnus: #k \r\n"
	+ "#L14# Dawn Warrior \r\n"
	+ "#L15# Blaze Wizard \r\n"
	+ "#L16# Wind Archer\r\n"
	+ "#L17# Night Walker \r\n"
	+ "#L18# Thunder Breaker \r\n"
	+ "#L19# Mihile #l \r\n \r\n"
	+ "#b Heroes: #k \r\n"
	+ "#L20# Aran \r\n"
	+ "#L21# Evan \r\n"
	+ "#L22# Mercedes \r\n"
	+ "#L23# Phantom \r\n"
	+ "#L24# Luminous \r\n"
	+ "#L25# Shade #l \r\n \r\n"
	+ "#b Resistance: #k \r\n"
	+ "#L26# Battle Mage \r\n"
	+ "#L27# Wild Hunter \r\n"
	+ "#L28# Mechanic \r\n"
	+ "#L29# Demon Slayer \r\n"
	+ "#L30# Xenon \r\n"
	+ "#L31# Demon Avenger #l \r\n \r\n" 
	+ "#b Nova: #k\r\n"
	+ "#L32# Kaiser \r\n"
	+ "#L33# Angelic Buster #l \r\n \r\n");
//	+ "#b Child of God: #k \r\n"
//	+ "#L34# Zero \r\n");
	}
}

function action(mode, type, selection) {
	if (mode < 1) {
		cm.sendOk("Talk to me when you're ready.");
		cm.dispose();
		return;
	} else {
		status++;
		if (selection == 34) {
			if (cm.getPlayer().getJob() != 10000) {
				cm.sendOk("You must select Zero on the character creation screen in order to continue.");
				cm.dispose();
				return;
			}
			   for (var i = cm.getPlayer().getLevel(); i < 100; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
		} else {
				cm.getPlayer().changeJob(ref[selection]);
			   for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
		}
		cm.getPlayer().changeJob(jobs[selection]);
        cm.getPlayer().setKeyValue("AutoJob", keys[selection]);
		if (keys[selection] == 410) { //trying to fix assassin's mark (learn all 3)
			cm.teachSkill(4100011, 1, 1);
			cm.teachSkill(4100012, 1, 1);
			cm.teachSkill(4101011, 1, 1);
		    cm.changeKeyBinding(4101011, 1, 73);
		}
		switch (cm.getPlayer().getJob()) { //getting skills
			case 2300:
			cm.teachSkill(20020109, 1, 0); //엘프의 회복
                cm.teachSkill(20021110, 1, 0); //엘프의 축복
                cm.teachSkill(20020111, 1, 0); //스타일리쉬 무브
                cm.teachSkill(20020112, 1, 0); //왕의 자격
			break;
			case 2400:
			cm.teachSkill(14000027, 1, 1); //shadow bats
				cm.teachSkill(14000028, 1, 1); //shadow bats
					cm.teachSkill(14000029, 1, 1); //shadow bats
			cm.teachSkill(14000127, 1, 1); //shadow bats
					cm.teachSkill(4100011, 1, 1);
			cm.teachSkill(4100012, 1, 1);
			cm.teachSkill(4101011, 1, 1);
			 cm.teachSkill(20031203, 1, 0); //리턴 오브 팬텀
                cm.teachSkill(20030204, 1, 0); //데들리 인스팅트
                cm.teachSkill(20031205, 1, 0); //팬텀 슈라우드
                cm.teachSkill(20030206, 1, 0); //하이 덱스터러티
                cm.teachSkill(20031207, 1, 0); //스틸 스킬
                cm.teachSkill(20031208, 1, 0); //스킬 매니지먼트
                cm.teachSkill(20031209, 1, 0); //저지먼트
			break;
			case 2700:
			     cm.teachSkill(27001201,0,20);
				  cm.teachSkill(27001100,0,20);
			break;
			case 5100:
			  cm.teachSkill(30001068, 1, 1);
			break;
			case 3101:
			       cm.teachSkill(30010185, 1, 0);
                cm.teachSkill(30010230, 1, 0);
                cm.teachSkill(30010231, 1, 0);
                cm.teachSkill(30010241, 1, 0);
                cm.teachSkill(30010242, 1, 0);
			break;
			case 2500:
			   for (var i = cm.getPlayer().getLevel(); i < 20; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
			  cm.addEquip(-11, 1482191, 15, 0, 0, 7, 0, 0); // 무기
                cm.addEquip(-10, 1353100, 0, 0, 0, 0, 0, 0); // 여우 구슬
				 cm.teachSkill(25001002, 25, 25);
                cm.teachSkill(25001003, 25, 25);
                cm.teachSkill(25001204, 20, 20);
                cm.teachSkill(25000105, 30, 30);
                cm.teachSkill(20050286, 2, 2);
                cm.teachSkill(20050285, 1, 1);
				cm.teachSkill(20051284, 1, 1); //fox trot
                cm.teachSkill(20051287, 1, 1);
			break;
			case 1100:
			     cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
			break;
			case 1200:
			   cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
			break;
			case 1300:
			      cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
			break;
			case 1400:
			    cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
			break;
			case 1500:
			    cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
			break;
			case 3300:
			          cm.teachSkill(30001061, 1, 0); //포획
                cm.teachSkill(30001062, 1, 0); //헌터의 부름
				break;
			case 3001:
			cm.teachskill(3011109, 1, 1);
			cm.teachskill(30010110, 1, 1);
			break;
			case 3100:
			  cm.teachSkill(30011109, 1, 0); //데빌 윙즈
                cm.teachSkill(30010110, 1, 0); //데몬 점프
                cm.teachSkill(30010111, 1, 0); //데쓰 커스
                cm.teachSkill(30010112, 1, 0); //데몬스 퓨리
                cm.teachSkill(30010185, 1, 0); //데모닉 블러드
				  if (cm.getPlayer().getGender() == 0) {
					     cm.resetEquip();
                cm.addEquip(-5, 1050191, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-7, 1072518, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1322123, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1099000, 0, 10, 5, 7, 0, 20); //포스실드
				  } else {
					     cm.addEquip(-5, 1051236, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-7, 1072518, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1322123, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1099000, 0, 10, 5, 7, 0, 20); //포스실드
				  }
				    cm.getPlayer().getStat().setMaxMp(1000);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.getPlayer().setSkinColor(0);
                cm.getPlayer().gainSP(4);
                cm.fakeRelog();
                cm.updateChar();
			break;
			case 3500:
  cm.teachSkill(30001068, 1, 1); //메카닉대쉬
			break;
			default:
			break;
		}
		cm.warp(910000000);
		cm.gainMeso(1000000);
		cm.gainItem(5044006, 1);
		cm.sendOk("Please check your USE inventory for your first equipment box. \r\n Welcome to Kindred. Please use the @maxskills and @help commands to get started on your journey. You will receieve care packages full of equips and levels 10, 30, 50, and 60."); 
		cm.getPlayer().dropMessage(5, "Please type @maxskills and @help to get started.");
		cm.dispose();
}
}