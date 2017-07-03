importPackage(Packages.packet.creators);

function init() {
  registerPlayer(eim);
  scheduleNew();
}

function scheduleNew() {
  em.schedule("invitation", 10000);
}

function invitation() {
  npcs();
  //em.getChannelServer().broadcastMessage(MainPacketCreator.
 // em.getMapFactory().getMap(100000000).broadcastMessage(MainPacketCreator.serverNotice(0, "ff"));
}