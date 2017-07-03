/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
    PROTECT(0x100), // 프로텍트
    LUKCYDAY(0x200), // 럭키데이
    TRADE_ON_ACCOUNT_USE(0x400), // 악세 카르마
    TRADE_ON_ACCOUNT(0x1000), // 악세 카르마
    SAFETY(0x2000), // 세이프티    
    RECOVERY(0x4000); // 리커버리
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
