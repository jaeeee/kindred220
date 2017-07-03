/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.items;

public class CashItemInfo {
    private int itemId, count, price, period;
	
    public CashItemInfo(int itemId, int count, int price, int period) {
	this.itemId = itemId;
	this.count = count;
	this.price = price;
	this.period = period;
    }

    public int getId() {
	return itemId;
    }

    public int getCount() {
	return count;
    }

    public int getPeriod() {
	return period;
    }
    
    public int getPrice() {
	return price;
    }
}