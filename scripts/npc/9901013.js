importPackage(java.lang);

var string = "¾¾ÆÈ";

function test(text){
	return text.getBytes("euc-kr");
}

function start(){
	cm.sendOk(test("º´½Å"));
}