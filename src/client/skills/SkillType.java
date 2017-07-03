/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package client.skills;

/**
 *
 * @author Æ¼½ã
 *
 * since 2012. 2. 24
 */
public enum SkillType {
    UNKNOWN0 (0),
    UNKNOWN1 (1),
    UNKNOWN2 (2),
    UNKNOWN3 (3),
    UNKNOWN4 (4),
    UNKNOWN5 (5),
    UNKNOWN6 (6),
    UNKNOWN7 (7),
    UNKNOWN8 (8),
    UNKNOWN9 (9);
    private int type;
    private SkillType (int type) {
        this.type = type;
    }
    public int getValue() {
        return type;
    }
}
