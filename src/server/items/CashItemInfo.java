/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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