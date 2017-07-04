var status = 0; 

function start() { 
	if (cm.getPlayer().getMap().getId() == 925020001) {
		cm.sendOk("insert dojo rankings here");
		return;
	} else {
    cm.sendSimple(" Did you want to go somewhere? \r\n #L0##bEnter Mu Lung Dojo #k#l"
    		);
	}			
} 

function action(mode, type, selection) { 
    if (mode < 1) { 
        cm.sendOk("Ok, see you next time!"); 
        cm.dispose(); 
        return; 
    } else { 
        status++; 
    } 
    		cm.warp(925020001);
            cm.dispose(); 
    }