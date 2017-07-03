/*

천외천스토리 통합형 스크립트 (마을이동)    	} else {
제작자는 가군(qor6101)

*/

importPackage(Packages.packet.creators);
importPackage(Packages.main.world);
importPackage(java.lang);

var status = -1;
var select = 0;
var trial = 0;
var mode_ = 0;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("혹시라도 결정이 서신다면 저에게로 오세요~ 이동의 문은 열려있답니다~ 대륙간 이동에 한해서만 가능하신건 기본상식이신거 알죠? 그래야 하자팩의 위엄을..헤헤헤");
		cm.dispose();
	} else {
		if ((status == 0 || status == 1 || status == 2 || status == 4 || status == 6) && mode == 0) {
			cm.sendOk("혹시라도 결정이 서신다면 저에게로 오세요~ 이동의 문은 열려있답니다~ 대륙간 이동에 한해서만 가능하신건 기본상식이신거 알죠? 그래야 하자팩의 위엄을..헤헤헤");
			cm.dispose();
			return;
		}
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	var intro = "안녕하세요~ 저는 천외천스토리 3기 홍보대사 #r리파인#k입니다. 지금 있는 #b리파인#k은 저가 카르타의 진주를 이용해 자신을 변형 시킨 거랍니다~~ 혹시 마을이동을 하시길 원하시나요? #b\r\n";
        intro += "#L0#마을로 이동하고 싶어요#l\r\n";
        intro += "#L1#보스 사냥터로 이동하고 싶어요#l\r\n";
	cm.sendSimple(intro);
    } else if (status == 1) {
        if (selection == 0) {
	var Town = "#r마을 이동#k을 선택 하셨군요, 마을 이동은 #b대륙 에서 대륙으로 가는 과정#k에 한해서 이동이 가능하며, 이동비용은 #r50만 메소#k입니다.#b\r\n";
        Town += "#L0#플로리나비치 - 해변가 원두막으로 이동#l\r\n";
        Town += "#L1#스노우아일랜드 - 리엔으로 이동#l\r\n";
        Town += "#L2#퀸스로드 - 에레브로 이동#l\r\n";
        Town += "#L3#스카이로드 - 오르비스로 이동#l\r\n";
        Town += "#L4#엘나스산맥 - 엘나스로 이동#l\r\n";
        Town += "#L5#사자왕의 성 - 쓸쓸한 벌판으로 이동#l\r\n";
        Town += "#L6#아쿠아로드 - 아쿠아리움으로 이동#l\r\n";
        Town += "#L7#루디브리엄성 - 루디브리엄으로 이동#l\r\n";
        Town += "#L8#루더스 호수 - 지구방위본부로 이동#l\r\n";
        Town += "#L9#루더스 호수 - 아랫마을로 이동#l\r\n";
        Town += "#L10#무릉도원 - 무릉 사원으로 이동#l\r\n";
        Town += "#L11#무릉도원 - 백초마을로 이동#l\r\n";
        Town += "#L12#버닝로드 - 아리안트로 이동#l\r\n";
        Town += "#L13#선셋로드 - 마가티아로 이동#l\r\n";
        Town += "#L14#미나르숲 - 리프레로 이동#l\r\n";
        Town += "#L15#블랙윙 점령지 - 에델슈타인으로 이동#l\r\n";
        Town += "#L16#황금사원 - 황금사원으로 이동#l\r\n";
	cm.sendSimple(Town);
        } else if (selection == 1) {
	var Attack = "#r보스 사냥터 이동#k을 선택 하셨군요, 보스 사냥터 이동은 #b연계 퀘스트의 과정을 고려해서#k 이동이 가능하며, 이동비용은 #r100만 메소#k입니다.#b\r\n";
	Attack += "#L17#시계탑 깊은 곳으로 이동 - 파풀라투스#l\r\n"
	Attack += "#L18#난파선의 무덤으로 이동 - 피아누스#l\r\n"
	Attack += "#L24#알현실 앞 복도로 이동 - 반 레온#l\r\n"
	Attack += "#L19#시련의 동굴3 으로 이동 - 자쿰 & 카오스 자쿰#l\r\n"
	Attack += "#L20#생명의 동굴 입구로 이동 - 혼테일 & 카오스 혼테일#l\r\n"
	Attack += "#L21#부서진 회랑으로 이동 - 핑크빈#l\r\n"
	Attack += "#L22#명예의 전당으로 이동 - 시그너스#l\r\n"
	Attack += "#L23#시간의 균열로 이동 - 아카이럼#l\r\n"
	cm.sendSimple(Attack);
		}
	
    } else if (status == 2) {
        if (selection == 0) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(120030000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }	
        } else if (selection == 1) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(140000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }
        } else if (selection == 2) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(130000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }  
        } else if (selection == 3) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(200000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }     
        } else if (selection == 4) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(211000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }    
        } else if (selection == 5) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(211060000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }    
        } else if (selection == 6) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(230000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }   
        } else if (selection == 7) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(220000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }   
        } else if (selection == 8) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(221000000, 0);
        	    cm.gainMeso(-500000);	
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       } 
        } else if (selection == 9) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(222000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }     
        } else if (selection == 10) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(250000100, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }  
        } else if (selection == 11) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(251000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }    
        } else if (selection == 12) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(260000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }                   
        } else if (selection == 13) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(261000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }                   
        } else if (selection == 14) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(240000000, 0);
        	    cm.gainMeso(-500000);	
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       } 
        } else if (selection == 15) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(310000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       } 
        } else if (selection == 16) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(252000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
		}
        } else if (selection == 17) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(220080000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
		}
        } else if (selection == 18) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(230040400, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
		}
        } else if (selection == 19) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(211042200, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
		}
        } else if (selection == 20) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(240040700, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
		}
        } else if (selection == 21) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(270040000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
		}
        } else if (selection == 22) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(271040000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
		}
        } else if (selection == 23) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(272000000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
				}
        } else if (selection == 24) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(211070000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();	
				}
			}
		}
	}
}