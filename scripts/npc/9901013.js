importPackage(java.lang);

var string = "����";

function test(text){
	return text.getBytes("euc-kr");
}

function start(){
	cm.sendOk(test("����"));
}