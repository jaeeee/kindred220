/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch.helpers;

/**
 *
 * @author �����̽�
 * 
 *   This file was written by �����̽� (bound8@naver.com)
 *
 *
 *
 */
public enum MapleNewCharJobType {
    ����������((byte) 0),
    ���谡((byte) 1),
    �ñ׳ʽ�((byte) 2),
    �ƶ�((byte) 3),
    ����((byte) 4),
    �޸�������((byte) 5),
    ���󽽷��̾�((byte) 6),
    ����((byte) 7),
    �����̴�((byte) 8),
    ������((byte) 9),
    ��̳ʽ�((byte) 10),
    ī����((byte) 11),
    ������������((byte) 12),
    ĳ����((byte) 13),
    ����((byte) 14),
    ����((byte) 15),
    ����((byte) 16);
    private byte jobCode = -1;
    
    private MapleNewCharJobType(byte type) {
        this.jobCode = type;
    }
    
    public byte getValue() {
        return jobCode;
    }
    
    
}
