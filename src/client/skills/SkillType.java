/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.skills;

/**
 *
 * @author Ƽ��
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
