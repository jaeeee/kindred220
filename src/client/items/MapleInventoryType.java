/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.items;

/**
 *
 * @author Matze
 */
public enum MapleInventoryType {

    UNDEFINED(0),
    EQUIP(1),
    USE(2),
    SETUP(3),
    ETC(4),
    CASH(5),
    EQUIPPED(-1);
    final byte type;

    private MapleInventoryType(int type) {
	this.type = (byte) type;
    }

    public byte getType() {
	return type;
    }

    public short getBitfieldEncoding() {
	return (short) (2 << type);
    }

    public static MapleInventoryType getByType(byte type) {
	for (MapleInventoryType l : MapleInventoryType.values()) {
	    if (l.getType() == type) {
		return l;
	    }
	}
	return null;
    }

    public static MapleInventoryType getByWZName(String name) {
	if (name.equals("Install")) {
	    return SETUP;
	} else if (name.equals("Consume")) {
	    return USE;
	} else if (name.equals("Etc")) {
	    return ETC;
	} else if (name.equals("Cash")) {
	    return CASH;
	} else if (name.equals("Pet")) {
	    return CASH;
	}
	return UNDEFINED;
    }
}
