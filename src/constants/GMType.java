/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package constants;

/**
 *
 * @author 에반테이르
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
