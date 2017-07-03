/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.quest;

public enum MapleQuestActionType {

    UNDEFINED(-1), exp(0), item(1), nextQuest(2), money(3), QUEST(4), skill(5), pop(6), buffItemID(7), infoNumber(8), insightEXP(9), senseEXP(10), charismaEXP(11), charmEXP(12), craftEXP(13), willEXP(14);
    final byte type;

    private MapleQuestActionType(int type) {
	this.type = (byte) type;
    }

    public byte getType() {
	return type;
    }

    public static MapleQuestActionType getByType(byte type) {
	for (MapleQuestActionType l : MapleQuestActionType.values()) {
	    if (l.getType() == type) {
		return l;
	    }
	}
	return null;
    }

    public static MapleQuestActionType getByWZName(String name) {
	try {
	    return valueOf(name);
	} catch (IllegalArgumentException ex) {
	    return UNDEFINED;
	}
    }
}
