/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.shops;

import client.items.IItem;

public class MapleCharacterShopItem {
    public IItem item;
    public short bundles;
    public int price;

    public MapleCharacterShopItem(IItem item, short bundles, int price) {
	this.item = item;
	this.bundles = bundles;
	this.price = price;
    }
}
