function enter(pi) {
    if (pi.getClient().getChannel() % 2 == 1) { //ī���� ����
        pi.warp(211042301,1);
    } else { //��� ����
        pi.warp(211042300,1);
    }
    return true;
}