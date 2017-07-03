importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;
var sel;
var job;
var selt;
var startmap = 910027100;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {

    	var takejob = "변생을 원하시는 직업군을 골라주세요. 변생은 다시 돌이킬 수 없으니, 직업을 잘못 선택하지 않게 주의해주세요.\r\n\r\n#r※안전한 변생을 위해 장착중인 아이템을 모두 벗어주세요.\r\n";
		takejob += "\r\n#k어느 직업군으로 변생 하시겠습니까?\r\n"
		takejob += "#b#L0#모험가#l　　";	
		takejob += "#L1300#윈드브레이커#l";
		takejob += "#L1500#스트라이커#l　　　\r\n";
		takejob += "#L2000#아란　　　#l";
		takejob += "#L2001#에반#l　　　　";
		takejob += "#L2002#메르세데스#l　　\r\n";
		takejob += "#L2003#팬텀#l　　　";
		takejob += "#L2004#루미너스#l　　";
		takejob += "#L3000#레지스탕스#l　　\r\n";
		takejob += "#L5000#미하일#l　　";
		takejob += "#L6000#카이저#l　　　";
		takejob += "#L6001#엔젤릭버스터#l　\r\n";
		takejob += "#L3001#데몬#l　　　";
		takejob += "#L3002#제논#l　　　　#k\r\n";
		takejob += "#r#L2#변생이 무엇인지 알고 싶습니다.\r\n";
		takejob += "#r#L1#다시 한번 생각해 보겠습니다.\r\n";
        	cm.sendSimple(takejob);
        } else if (status == 1) {
		job = selection;
		if (cm.getPlayer().getFame()>=1000 && job != 2 && cm.getPlayer()){
		if (job == 0){
		sel = "#b[모험가]#k로";
		selt = "[모험가]로";
		} else if (job == 1300) {
		sel = "#b[윈드브레이커]#k로"
		selt = "[윈드브레이커]로"
		} else if (job == 1500) {
		sel = "#b[스트라이커]#k로"
		selt = "[스트라이커]로"
		} else if (job == 2000) {
		sel = "#b[아란]#k으로"
		selt = "[아란]으로"
		} else if (job == 2001) {
		sel = "#b[에반]#k으로"
		selt = "[에반]으로"
		} else if (job == 2002) {
		sel = "#b[메르세데스]#k로"
		selt = "[메르세데스]로"
		} else if (job == 2003) {
		sel = "#b[팬텀]#k으로"
		selt = "[팬텀]으로"
		} else if (job == 2004) {
		sel = "#b[루미너스]#k로"
		selt = "[루미너스]로"
		} else if (job == 3000) {
		sel = "#b[레지스탕스]#k로"
		selt = "[레지스탕스]로"
		} else if (job == 5000) {
		sel = "#b[미하일]#k로"
		selt = "[미하일]로"
		} else if (job == 6000) {
		sel = "#b[카이저]#k로"
		selt = "[카이저]로"
		} else if (job == 6001) {
		sel = "#b[엔젤릭버스터]#k로"
		selt = "[엔젤릭버스터]로"
		} else if (job == 3001) {
		sel = "#b[데몬]#k으로"
		selt = "[데몬]으로"
		} else if (job == 3002) {
		sel = "#b[제논]#k으로"
		selt = "[제논]으로"
		}
		if (job != 1){
		cm.sendOk("정말 "+sel+" 변생을 하시겠습니까?\r\n\r\n#r※변생은 단순 변심에 의해 되돌릴수 없으니 신중히 생각한후 이용해주세요.#k");
		} else if (job == 1) {
		cm.sendOk("신중히 생각하고 다시 말을 걸어주세요.");
		cm.dispose();
		}
		} else if (job == 2){
		cm.sendOk(" 변생은 #b새로운 직업군으로 다시 태어나는것#k을 말합니다. 변생을 하면 #b현재 가지고 있는 스탯을 가지고 처음부터 다시 시작#k할수 있게됩니다.\r\n 변생은 환생포인트 1000이 필요하며, 불가피하게 다른 직업으로 변생했을 경우 되돌릴 수 없으니 신중하게 선택해 주셔야합니다.\r\n #r만약 착용중인 아이템을 장착하고 변생을 하게 된다면 아이템이 초기화가 될수도 있습니다.#k 이 주의사항을 무시한채 변생을 할 경우에는 복구가 불가능합니다.");
		cm.dispose();
		} else {
		if (job == 1) {
		cm.sendOk("신중히 생각하고 다시 말을 걸어주세요.");
		cm.dispose();
		} else {
		cm.sendOk(" 환생포인트가 부족합니다.\r\n 변생은 #b1000#k의 환생포인트가 필요합니다.");
		cm.dispose();
		}
		}

	} else if (status == 2) {
		cm.getPlayer().skillReset();
		cm.changeJob(job);
		if(job==1300||job==1500){
		cm.warp(1000000, 0);
		cm.getPlayer().setLevel(10);
		}else{
		cm.warp(startmap, 0);
		cm.getPlayer().setLevel(1);
		}
		var gp = cm.getPlayer();
		var stat = gp.getStat();
		var total = stat.getStr() + stat.getDex() + stat.getLuk() + stat.getInt() + gp.getRemainingAp() - 16;
		stat.setStr(4);
		stat.setDex(4);
		stat.setInt(4);
		stat.setLuk(4);
		gp.setRemainingAp(total + cm.getPlayer().getFame());
		cm.getPlayer().setExp(0);
		cm.getPlayer().addFame(-1000);
		cm.unequipEverything();

		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[변생공지] : 축하드립니다! ["+ cm.getPlayer().getName()+"] 님께서 "+selt+" 변생하셨습니다!"));
		cm.sendOk(""+sel+" 변생이 완료되었습니다.");
		cm.fakeRelog();
		cm.updateChar();
		cm.dispose();
	} else {
	cm.sendOk("신중히 생각하고 다시 말을 걸어주세요.");
	cm.dispose();
	}

}
