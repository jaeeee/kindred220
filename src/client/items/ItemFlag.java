/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.items;

public enum ItemFlag {

    LOCK(0x01),
    SPIKES(0x02),
    COLD(0x04),
    UNTRADEABLE(0x08),
    KARMA_EQ(0x10),
    KARMA_USE(0x20),
    CHARM_EQUIPPED(0x20),
    ANDROID_ACTIVATED(0x40),
    CRAFT(0x80), //1000 0000 (0x80 & 0xFF)
    PROTECT(0x100), // ������Ʈ
    LUKCYDAY(0x200), // ��Ű����
    TRADE_ON_ACCOUNT_USE(0x400), // �Ǽ� ī����
    TRADE_ON_ACCOUNT(0x1000), // �Ǽ� ī����
    SAFETY(0x2000), // ������Ƽ    
    RECOVERY(0x4000); // ��Ŀ����
  ;
    private final int i;

    private ItemFlag(int i) {
	this.i = i;
    }

    public final int getValue() {
	return i;
    }

    public final boolean check(int flag) {
	return (flag & i) == i;
    }
}
