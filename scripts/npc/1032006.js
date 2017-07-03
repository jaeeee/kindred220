importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(Packages.client);
importPackage(Packages.tools);
importPackage(java.lang);

var pet = DbgPet.createPet(5000064, System.currentTimeMillis());

function start(){
	DbgPet(5000064).createPet(5000064, System.currentTimeMillis());
	cm.sendOk("d");
	cm.dispose();
}