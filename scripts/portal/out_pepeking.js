


/*

	ǻ�� �¶��� �ҽ� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : �񷽻��4

	��Ż ���� : �̴ϴ��� ����


*/

var map = 106021500;
var exit = 106021400;

function enter(pi) {
    if (pi.getPlayer().getMapId() == map) {
        var eim = pi.getEventInstance();
        if (eim == null) {
            pi.warp(exit);
            return true;
        }
        eim.removePlayer(pi.getPlayer());
        pi.warp(exit);
        pi.getPlayer().message(5, "�̴ϴ��� �ν��Ͻ����� �����߽��ϴ�.");
        return true;
    }
            
        
}
