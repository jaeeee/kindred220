/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client;

/**
 *
 * @author 에반테이르
 */
public enum MapleProfessionType {
    NONE        (0),
    HERBALISM   (92000000),
    MINING      (92010000),
    EQUIP       (92020000),
    ACC         (92030000),
    ALCHEMY     (92040000);
    
    private int code;
    private MapleProfessionType (int code) {
        this.code = code;
    }
    public int getValue() {
        return code;
    }
    
    public static MapleProfessionType getProfessionById(int code) {
        switch (code) {
            case 92000000:
                return MapleProfessionType.HERBALISM;
            case 92010000:
                return MapleProfessionType.MINING;
            case 92020000:
                return MapleProfessionType.EQUIP;
            case 92030000:
                return MapleProfessionType.ACC;
            case 92040000:
                return MapleProfessionType.ALCHEMY;
        }
        return MapleProfessionType.NONE;
    }
    
    public static String getNameByProfession(MapleProfessionType type) {
        switch (type) {
            case HERBALISM:
                return "약초채집";
            case MINING:
                return "채광";
            case EQUIP:
                return "장비제작";
            case ACC:
                return "장신구제작";
            case ALCHEMY:
                return "연금술";
        }
        return "";
    }
}
