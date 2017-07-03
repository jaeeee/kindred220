/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.items;

public enum MapleWeaponType {
/*
�μհ� 1.34
�μյ��� 1.34
�μյб� 1.34
�Ѽհ� 1.2
�Ѽյ��� 1.2
�Ѽյб� 1.2
â 1.49
���� 1.49
������ 1
�ϵ� 1
Ȱ 1.3
���� 1.35
�ƴ� 1.75
�ܰ� 1.3
���̵� 1.3
��Ŭ 1.7
�� 1.5
��� ����� 1.3
�ڵ�ĳ�� 1.5
���� 1.3  (��������)
�÷��� 1.21 (��̳ʽ�)
�ҿｴ�� 1.22 (������������)
 * 
 */
    NOT_A_WEAPON(4f),
    BOW(1.3f),
    CLAW(1.75f),
    DAGGER(1.3f),
    CROSSBOW(1.35f),
    AXE1H(1.2f),
    SWORD1H(1.2f),
    BLUNT1H(1.2f),
    AXE2H(1.34f),
    SWORD2H(1.34f),
    BLUNT2H(1.34f),
    POLE_ARM(1.49f),
    SPEAR(1.49f),
    STAFF(1f),
    WAND(1f),
    KNUCKLE(1.7f),
    GUN(1.5f),
    KATARA(1.3f),
    JS(1.3f),
    DUALBOW(1.3f),
    HANDCANNON(1.5f),
    CAIN(1.3f),
    GATHERTOOL(1f),
    PLANE(1.21f),
    SOULSHOOTER(1.22f),
    DESPERADO(1.23f),
    SWORD(1.56f),
    TEDO(1.57f),
    ENERGYSWORD(1.5f);
    
    private final float damageMultiplier;

    private MapleWeaponType(final float maxDamageMultiplier) {
	this.damageMultiplier = maxDamageMultiplier;
    }

    public final float getMaxDamageMultiplier() {
	return damageMultiplier;
    }
}
