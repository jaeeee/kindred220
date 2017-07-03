importPackage(Packages.packet.creators);
function enter(pi) {
    pi.useItem(2210016);
    pi.getPlayer().getClient().getSession().write(MainPacketCreator.useItemMessage(2210016));
    pi.warp(200090510);
    return true;
}