/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.maps;

public enum SavedLocationType {

    FREE_MARKET,
    MULUNG_DOJO,
    WORLDTOUR,
    FLORINA,
    MONSTERPARK,
    BATTLESQUARE,
    GUILD,
    MIRROR,
    RICHIE,
    HAPPYVILLIAGE,
    LIONCASTLE,
    WEDDING,
    PROFESSION,
    CRYSTALGARDEN,
    EREB,
    FREE_MARKET_SHOP;

    public static SavedLocationType fromString(String Str) {
	return valueOf(Str);
    }
}
