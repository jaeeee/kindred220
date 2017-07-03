/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client;

/**
 *
 * @author �������̸�
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
                return "����ä��";
            case MINING:
                return "ä��";
            case EQUIP:
                return "�������";
            case ACC:
                return "��ű�����";
            case ALCHEMY:
                return "���ݼ�";
        }
        return "";
    }
}
