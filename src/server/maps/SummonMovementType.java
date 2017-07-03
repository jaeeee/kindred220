/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.maps;

public enum SummonMovementType {
    STATIONARY(0),
    FOLLOW(1),
    WALK_STATIONARY(2), //reaper
    BIRD_FOLLOW(3), //shadow bat
    CIRCLE_FOLLOW(4),
    CIRCLE_STATIONARY(5),
    ZEROWEAPON(6), //gavi only
    FLAME_SUMMON(7),
    SHADOW_SERVANT(8); //shadow servant

    private final int val;

    private SummonMovementType(int val) {
	this.val = val;
    }

    public int getValue() {
	return val;
    }
}
