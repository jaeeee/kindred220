/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package constants;

/**
 *
 * @author �������̸�
 */
public enum GMType {
    DONATOR(1),
    BJGM_ADGM(2),
    POLICE(3),
    LOWGM(4),
    GM(5),
    SUPERGM(6);
    private int level;
    private GMType (int level) {
        this.level = level;
    }
    public int getValue() {
        return level;
    }
}
