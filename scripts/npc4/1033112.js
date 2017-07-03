/*
	에우렐 신비한 포탈
	가군님이 제작하심
*/

	function start() {
			if (cm.getJob() == 2002) {
    			var tmp_str = "(더 이상 에우렐에 볼 일이 없다면 신비한 포탈을 통해 다른 마을로 갈 수 있다.... 어느 마을로 갈까?)";
    			tmp_str += "\r\n#L5##b엘리니아";
    			tmp_str += "\r\n#L6##b헤네시스";
    			tmp_str += "\r\n#L7##b페리온";
    			tmp_str += "\r\n#L8##b커닝시티";
    			tmp_str += "\r\n#L9##b슬리피우드";
			cm.sendSimple(tmp_str);
			} else if (cm.getJob() == 2300) {
    			var tmp_str = "(더 이상 에우렐에 볼 일이 없다면 신비한 포탈을 통해 다른 마을로 갈 수 있다.... 어느 마을로 갈까?)";
    			tmp_str += "\r\n#L10##b엘리니아";
    			tmp_str += "\r\n#L11##b헤네시스";
    			tmp_str += "\r\n#L12##b페리온";
    			tmp_str += "\r\n#L13##b커닝시티";
    			tmp_str += "\r\n#L14##b슬리피우드";
			cm.sendSimple(tmp_str);
			} else if (cm.getJob() == 2310) {
    			var tmp_str = "(더 이상 에우렐에 볼 일이 없다면 신비한 포탈을 통해 다른 마을로 갈 수 있다.... 어느 마을로 갈까?)";
    			tmp_str += "\r\n#L15##b엘리니아";
    			tmp_str += "\r\n#L16##b헤네시스";
    			tmp_str += "\r\n#L17##b페리온";
    			tmp_str += "\r\n#L18##b커닝시티";
    			tmp_str += "\r\n#L19##b슬리피우드";
			cm.sendSimple(tmp_str);
			} else if (cm.getJob() == 2311) {
    			var tmp_str = "(더 이상 에우렐에 볼 일이 없다면 신비한 포탈을 통해 다른 마을로 갈 수 있다.... 어느 마을로 갈까?)";
    			tmp_str += "\r\n#L20##b엘리니아";
    			tmp_str += "\r\n#L21##b헤네시스";
    			tmp_str += "\r\n#L22##b페리온";
    			tmp_str += "\r\n#L23##b커닝시티";
    			tmp_str += "\r\n#L24##b슬리피우드";
			cm.sendSimple(tmp_str);
			} else if (cm.getJob() == 2312) {
    			var tmp_str = "(더 이상 에우렐에 볼 일이 없다면 신비한 포탈을 통해 다른 마을로 갈 수 있다.... 어느 마을로 갈까?)";
    			tmp_str += "\r\n#L25##b엘리니아";
    			tmp_str += "\r\n#L26##b헤네시스";
    			tmp_str += "\r\n#L27##b페리온";
    			tmp_str += "\r\n#L28##b커닝시티";
    			tmp_str += "\r\n#L29##b슬리피우드";
			cm.sendSimple(tmp_str);
		} else {
    			var tmp_str = "(더 이상 에우렐에 볼 일이 없다면 신비한 포탈을 통해 다른 마을로 갈 수 있다. 다만 메소가 필요한 듯하다.... 어느 마을로 갈까?)";
    			tmp_str += "\r\n#L0##b엘리니아";
    			tmp_str += "\r\n#L1##b헤네시스";
    			tmp_str += "\r\n#L2##b페리온";
    			tmp_str += "\r\n#L3##b커닝시티";
    			tmp_str += "\r\n#L4##b슬리피우드";
			cm.sendSimple(tmp_str);
		}
	}

function action(mode, type, selection) {
	cm.dispose();
	    if (selection == 0) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(101000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }
            } else if (selection == 1) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(100000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }
            } else if (selection == 2) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(102000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }
            } else if (selection == 3) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(103000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
	       }
            } else if (selection == 4) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(105000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("이동이 가능한 메소가 부족합니다.");
            	cm.dispose();
		}
            } else if (selection == 5) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 6) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 7) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 8) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 9) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
            } else if (selection == 10) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 11) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 12) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 13) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 14) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
            } else if (selection == 15) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 16) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 17) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 18) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 19) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
            } else if (selection == 20) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 21) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 22) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 23) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 24) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
            } else if (selection == 25) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 26) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 27) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 28) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 29) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
		}
	}