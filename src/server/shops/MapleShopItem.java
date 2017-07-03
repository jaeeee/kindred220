/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.shops;

public class MapleShopItem {

    private short buyable;
    private int itemId;
    private int price;
    private int pricequantity;
    private byte tab;
    private int quantity;
    private int period;

    public MapleShopItem(short buyable, int itemId, int price, int pricequantity, byte tab, int quantity, int period) {
	this.buyable = buyable;
	this.itemId = itemId;
	this.price = price;
        this.pricequantity = pricequantity;
        this.tab = tab;
        this.quantity = quantity;
        this.period = period;
    }
    
    public int getPriceQuantity() {
        return pricequantity;
    }
    
    public byte getTab() {
        return tab;
    }

    public int getQuantity() {
        return quantity;
    }
    
    public int getPeriod() {
        return period;
    }

    public short getBuyable() {
	return buyable;
    }

    public int getItemId() {
	return itemId;
    }

    public int getPrice() {
	return price;
    }
}
