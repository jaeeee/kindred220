/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.items;

public enum MapleWeaponType {
/*
두손검 1.34
두손도끼 1.34
두손둔기 1.34
한손검 1.2
한손도끼 1.2
한손둔기 1.2
창 1.49
폴암 1.49
스태프 1
완드 1
활 1.3
석궁 1.35
아대 1.75
단검 1.3
블레이드 1.3
너클 1.7
총 1.5
듀얼 보우건 1.3
핸드캐논 1.5
케인 1.3  (괴도팬텀)
플레인 1.21 (루미너스)
소울슈터 1.22 (엔젤릭버스터)
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
