importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var first = new Array("너도 존나 잘생김");
var second = new Array("ㅋ");


function start() {
	if(cm.getPlayer().getGMLevel() > 0){
		///cm.getPlayer().send(MainPacketCreator.sendHint("5월17일부터 22일까지 서버호스팅 기금 마련을 위해 후원2배 이벤트가 진행된다구?", 400, 20));
	}

	var str = "";
	cm.sendYesNo("카인은 존나 잘생김ㅋ");
}

function getRand(len){
	return Math.floor(Math.random()*len);
}

function shuffle() {
	return first[getRand(first.length)]+" "+second[getRand(second.length)];
}

function updateHope(str){
	var insert = MYSQL.getConnection().prepareStatement("INSERT INTO futurehope(cid,hope) VALUES(?,?)");
	insert.setInt(1,cm.getPlayer().getId());
	insert.setString(2,str);
	deleteHope(cm.getPlayer().getId());
	insert.executeUpdate();
}

function selectHope(){
	var sq = MYSQL.getConnection().prepareStatement("SELECT * FROM futurehope WHERE cid = ?");
	sq.setInt(1,cm.getPlayer().getId());
	var eq = sq.executeQuery();
	var string = new StringBuilder();
	if(eq.next()){
	string.append("[").append(eq.getString("hope")).append("]\r\n");
	}
	return string.toString();
}

function deleteHope(cid) {
	var dq = MYSQL.getConnection().prepareStatement("DELETE FROM futurehope where cid = ?");
	dq.setInt(1,cid);
	dq.executeUpdate();
}

var status=-1;

function action(m,t,s) {
	m==1?status++:cm.dispose();
	if(status==0){
	var text = shuffle();
	cm.getPlayer().send(MainPacketCreator.sendHint(""+text,200,20))||cm.getMeso()>1000000?cm.sendOk("#b"+text+"#k")||cm.gainMeso(-1000000)||updateHope(text)||WorldBroadcasting.broadcast(UIPacket.showInfo("["+cm.getPlayer().getName()+"]님아 "+text+" ")):cm.sendOk("1,000,000메소가 부족합니다.")||cm.dispose();
	cm.dispose();
	}else{
	cm.dispose();
	}
}